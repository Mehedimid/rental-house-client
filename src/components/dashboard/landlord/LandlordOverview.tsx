"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Loader from "@/components/shared/Loader";
import Image from "next/image";

interface IListing {
  _id: string;
  landlord: string;
  title: string;
  address: string;
  price: number;
  sqft: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  images: {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
  };
  propertyFeatures: string[];
  details: {
    description: string;
    rooms: number;
    garage: string;
    yearBuilt: string;
  };
  flatPlan: string;
}

const LandlordOverview = () => {
  const { data: session, status } = useSession();
  const [listings, setListings] = useState<IListing[]>([]);
  const [loading, setLoading] = useState(false);

  const LandlordId = session?.user.id;
  const token = session?.accessToken;

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/listings/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        // Filter listings by the current landlordId
        const landlordListings = response.data.data.filter((listing: IListing) => listing.landlord === LandlordId);

        // Sort listings by landlordId (though it's already filtered, it's good practice if multiple landlords are considered)
        const sortedListings = landlordListings.sort((a: IListing, b: IListing) => 
            a.landlord.localeCompare(b.landlord)
          );

        setListings(sortedListings);
        console.log(sortedListings);
      } catch (error) {
        console.error("Error fetching tenant listings:", error);
      } finally {
        setLoading(false);
      }
    };

    if (LandlordId && token) fetchListings();
  }, [LandlordId, token]);

  if (status === "loading") return <div>Loading session...</div>;
  if (status === "unauthenticated") return <div>Please log in to view your dashboard.</div>;
  if (loading) return <Loader />;

  const total = listings.length;
  const available = listings.filter((l) => l.status === "available").length;
  const rented = listings.filter((l) => l.status === "rented").length;
  const recent = [...listings].sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()).slice(0, 3);

  return (
    <div className="space-y-6 my-5">
      <h2 className="text-2xl font-semibold lg:text-3xl mb-8">Landlord Dashboard</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <h4 className="text-black">Total Listings</h4>
          <p className="text-black text-xl font-bold">{total}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h4 className="text-black">Available</h4>
          <p className="text-black text-xl font-bold">{available}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h4 className="text-black">Rented</h4>
          <p className="text-black text-xl font-bold">{rented}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Recent Listings</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recent.map((l) => (
            <li key={l._id} className="bg-white p-4 rounded shadow">
                <Image 
                src={l.images.img1} 
                alt={l.title} 
                width={100}
                height={50}
                className="w-full h-40 object-cover mb-3" 
              />
              <p className="text-black font-semibold">{l.title}</p>
              <p className="text-gray-600 text-sm mb-2">{l.address}</p>
              <p className="text-black mb-1">Status: <strong>{l.status}</strong></p>
              <p className="text-black mb-1">Price: <strong>${l.price}</strong></p>
              <p className="text-black text-sm">Listed: {new Date(l.createdAt!).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandlordOverview;
