/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import SecondaryButton from "@/components/shared/SecondaryButton";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import useSingleListing from "@/components/hooks/listing/useSingleListing";
import { useSession } from "next-auth/react";
import useAxiosPublic from "@/components/hooks/listing/useAxiosPublic";
import Loader from "@/components/shared/Loader";

const RequestBooking = ({ params }: any) => {
  const axiosPublic = useAxiosPublic();
  const router = useRouter();
  const { id }: any = use(params);
  const [data, isPending] = useSingleListing(id);

  const listing = data?.data;
  const { data: session, status } = useSession();
  const user = session?.user;
  console.log(user);
  const [formData, setFormData] = useState<any>({
    tenant: "",
    landlord: "",
    listing: id,
    details: {
      message: "",
      familyMembers: "",
      children: "",
    },
    paymentStatus: false,
  });

  // Set default form values once the listing and user data are available
  useEffect(() => {
    if (listing && user) {
      setFormData({
        tenant: user?._id || "68067216b461d20fc2aa0479", // assuming user?.id exists
        landlord: listing?.landlord?._id, // Ensure fallback if undefined
        listing: id,
        details: {
          message: "",
          familyMembers: "1", // Default value or you can customize
          children: "0", // Default value or you can customize
        },
        paymentStatus: false,
      });
    }
  }, [listing, user, id]);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: formData, // Use formData as defaultValues
  });

  const onSubmit = (data: any) => {
    console.log(data);

    toast.success("Booking request submitted successfully!", {
      position: "top-right",
      autoClose: 2000,
    });

    reset(); // reset form

    // Navigate after delay
    setTimeout(() => {
      // router.push("/dashboard/tenant");
    }, 2500);
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="md:w-7/8 mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      {/* Booking Form */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-primary">
          Request a Booking
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Static Info Display */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <div className="p-3 bg-gray-100 rounded text-gray-800">
              {user?.name}
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <div className="p-3 bg-gray-100 rounded text-gray-800">
              {user?.phone}
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="p-3 bg-gray-100 rounded text-gray-800">
              {user?.email}
            </div>
          </div>

          {/* Selects and Message */}
          <div>
            <label className="text-sm text-gray-600">Family Members</label>
            <select
              {...register("details.familyMembers")}
              className="w-full p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring focus:ring-secondary"
            >
              <option value="1">1 Member</option>
              <option value="2">2 Members</option>
              <option value="3">3 Members</option>
              <option value="4+">4+ Members</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Children</label>
            <select
              {...register("details.children")}
              className="w-full p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring focus:ring-secondary"
            >
              <option value="0">No Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3+">3+ Children</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              {...register("details.message")}
              className="w-full p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring focus:ring-secondary"
              rows={4}
              placeholder="Write your message..."
            />
          </div>

          <SecondaryButton type="submit" customClass="">
            Submit Booking Request
          </SecondaryButton>
        </form>
      </div>

      {/* Property Preview */}
      <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
        {listing?.images?.img1 ? (
          <Image
            src={listing.images.img1}
            alt="image"
            height={500}
            width={500}
            layout="responsive"
            objectFit="cover"
          />
        ) : null}

        <div className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            {listing?.title}
          </h2>
          <p className="text-gray-600">{listing?.address}</p>
          <p className="text-lg text-primary font-bold">{listing?.price}</p>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default RequestBooking;
