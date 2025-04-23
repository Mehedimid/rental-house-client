"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Loader from "@/components/shared/Loader";

export interface IUserInfo {
    _id: string;
    name: string;
    email: string;
    phone: string;
    // any other fields like imageUrl or role can go here too
  }
  
  export interface IListing {
    _id: string;
    title: string;
    address: string;
    price: number;
    sqft: number;
    status: string;
    landlord: IUserInfo; // ✅ 
  }
  

const ManageRentalListings = () => {
  const { data: session, status } = useSession();
  const [allListings, setAllListings] = useState<IListing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [listingDetails, setListingDetails] = useState<IListing | null>(null);
  const [isListingModalOpen, setIsListingModalOpen] = useState(false);

  const landlordId = session?.user?.id;
  console.log("id", landlordId)

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/listings/`);
        setAllListings(response.data.data);
      } catch (err: unknown) {
        setError("Error fetching listings");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const handleViewListingDetails = async (listingId: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/listings/${listingId}`
      );
      setListingDetails(response.data.data);
      setIsListingModalOpen(true);
    } catch (error) {
      console.error("Error fetching listing details", error);
    }
  };

  if (status === "loading") return <div>Loading session...</div>;
  if (status === "unauthenticated") return <div>Please log in to see your listings.</div>;
  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;
 console.log("data", allListings)
  const landlordListings = allListings.filter((listing) => listing.landlord?._id === landlordId);

  return (
    <div>
      <div className="overflow-x-auto shadow-theme border border-sidebar-theme my-10">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 border-gray-200 text-black text-left">Title</th>
              <th className="border p-3 border-gray-200 text-black text-left">Location</th>
              <th className="border p-3 border-gray-200 text-black text-center">Status</th>
              <th className="border p-3 border-gray-200 text-black text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {landlordListings.map((listing) => (
              <tr key={listing._id} className="border">
                <td className="border border-gray-200 p-3 text-black">{listing.title}</td>
                <td className="border border-gray-200 p-3 text-black">{listing.address}</td>
                <td className="border border-gray-200 p-3 text-black capitalize text-center">
                  {listing.status}
                </td>
                <td className="border border-gray-200 p-3 text-black text-center">
                  <Button
                    variant="outline"
                    className="rounded-full text-white"
                    onClick={() => handleViewListingDetails(listing._id!)}
                  >
                    View Listing
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Listing Modal */}
      {isListingModalOpen && listingDetails && (
        <Dialog open={isListingModalOpen} onOpenChange={setIsListingModalOpen}>
          <DialogContent className="sm:max-w-[600px] p-4">
            <DialogHeader>
              <DialogTitle className="text-center">Listing Details</DialogTitle>
            </DialogHeader>
            <div className="text-center mx-auto">
              <h3 className="font-bold text-xl mb-2">{listingDetails?.title}</h3>
              <p><strong>sqft:</strong> {listingDetails?.sqft || "N/A"}</p>
              <p><strong>Location:</strong> {listingDetails?.address || "N/A"}</p>
              <p><strong>Price:</strong> {listingDetails?.price || "N/A"}</p>
              <p><strong>Status:</strong> {listingDetails?.status || "N/A"}</p>
            </div>
            <Button onClick={() => setIsListingModalOpen(false)} className="mt-4">
              Close
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ManageRentalListings;
