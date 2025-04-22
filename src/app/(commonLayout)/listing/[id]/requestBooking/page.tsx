/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import SecondaryButton from "@/components/shared/SecondaryButton";
import Image from "next/image";

const RequestBooking = () => {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: "John Doe",
      phone: "017XXXXXXXX",
      email: "johndoe@email.com",
      message: "",
      familyMembers: "2",
      children: "1",
    },
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
      router.push("/dashboard/tenant");
    }, 2500);
  };

  const property = {
    title: "Luxury Villa in Bashundhara",
    address: "Road 5, Block C, Bashundhara R/A, Dhaka",
    price: "৳90,000/mo",
    image: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-8.jpg",
  };

  return (
    <div className="md:w-7/8 mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">

      {/* Booking Form */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-primary">Request a Booking</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Static Info Display */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <div className="p-3 bg-gray-100 rounded text-gray-800">John Doe</div>
          </div>
          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <div className="p-3 bg-gray-100 rounded text-gray-800">017XXXXXXXX</div>
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="p-3 bg-gray-100 rounded text-gray-800">johndoe@email.com</div>
          </div>

          {/* Selects and Message */}
          <div>
            <label className="text-sm text-gray-600">Family Members</label>
            <select {...register("familyMembers")} className="w-full p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring focus:ring-secondary">
              <option value="1">1 Member</option>
              <option value="2">2 Members</option>
              <option value="3">3 Members</option>
              <option value="4+">4+ Members</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Children</label>
            <select {...register("children")} className="w-full p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring focus:ring-secondary">
              <option value="0">No Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3+">3+ Children</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              {...register("message")}
              className="w-full p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring focus:ring-secondary"
              rows={4}
              placeholder="Write your message..."
            />
          </div>

          <button type="submit" className="w-full">
            <SecondaryButton customClass="">Submit Booking Request</SecondaryButton>
          </button>
        </form>
      </div>

      {/* Property Preview */}
      <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
      <Image
        src={property.image}
        alt={property.title}
        layout="responsive"
        width={650}
        height={550}
        objectFit="cover"
      />        <div className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">{property.title}</h2>
          <p className="text-gray-600">{property.address}</p>
          <p className="text-lg text-primary font-bold">{property.price}</p>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default RequestBooking;
