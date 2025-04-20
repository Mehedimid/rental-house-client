/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import SecondaryButton from "@/components/shared/SecondaryButton";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRegCheckSquare,
  FaRulerCombined,
} from "react-icons/fa";

const PropertyDetails = () => {
  const property = {
    landlord: "661e0c919a3c5d2b8c3f42e6",
    images: {
      img1: "https://img.freepik.com/premium-photo/bright-red-sale-sign-front-charming-suburban-home-with-lush-greenery-sunny-day_447653-51276.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
      img2: "https://img.freepik.com/free-photo/living-room-interior_1048-9888.jpg?ga=GA1.1.1518679940.1727447932&w=740",
      img3: "https://img.freepik.com/free-photo/3d-contemporary-living-room-interior-modern-furniture_1048-9856.jpg?ga=GA1.1.1518679940.1727447932&w=740",
      img4: "https://img.freepik.com/free-photo/living-room-interior_1048-8212.jpg?ga=GA1.1.1518679940.1727447932&w=740",
      img5: "https://img.freepik.com/free-photo/living-room-interior_1048-9888.jpg?ga=GA1.1.1518679940.1727447932&w=740",
    },
    flatPlan:
      "https://templates.hibootstrap.com/fela/default/assets/img/property/floor-plan.png",
    title: "Modern Family House in Uttara",
    address: "Uttara, Dhaka",
    price: "৳50,000/mo",
    sqft: 2000,
    beds: 4,
    baths: 3,
    propertyFeatures: ["Garden", "Fireplace", "Smart Home"],
    details: {
      description:
        "এই বাড়িটি একটি অত্যাধুনিক এবং সুন্দর নকশায় নির্মিত। এখানে রয়েছে একটি সুন্দর বাগান এবং আপনার জন্য সর্বশেষ প্রযুক্তি সুবিধা যা আপনাকে বাড়ি পরিচালনায় সুবিধা দেয়।",
      type: "House",
      status: "For Rent",
      rooms: 7,
      garage: "available",
      yearBuilt: "01/01/18",
    },
  };

  return (
    <div className="container md:w-7/8 mx-auto px-4 py-8 text-gray-800">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold">{property.title}</h2>
          {/* Address and Size */}
          <div className="flex flex-wrap gap-4 items-center text-gray-500  text-sm">
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-1" /> {property.address}
            </p>
            <p className="flex items-center">
              <FaRulerCombined className="mr-1" /> {property.sqft} Sqft
            </p>
          </div>
          <p className="text-red-600 text-xl md:text-2xl font-semibold ">
            {property.price}
          </p>
        </div>

        <div>
          <Link href="/listing/id/requestBooking">
            <SecondaryButton>Request Booking</SecondaryButton>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        {/*======== left side ======= */}
        <div className="md:w-3/4">
          <div>
            {/* Main Image */}
            <div className="relative w-full h-64 md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image
                src={property.images.img1}
                alt="property"
                fill
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded">
                For Rent
              </span>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {property.details.description}
              </p>
            </div>
          </div>

          <div></div>
        </div>

        {/* ============right side ========= */}
        <div>
          {/* Property Details Grid */}
          <div className="mb-10">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
              Property Details
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-700">
              <p>
                <strong>Property ID:</strong> {property.landlord}
              </p>
              <p>
                <strong>Property Type:</strong> {property.details.type}
              </p>
              <p>
                <strong>Property Status:</strong> {property.details.status}
              </p>
              <p>
                <strong>Property Price:</strong>
                <strong>{property.price}</strong>
              </p>
              <p>
                <strong>Rooms:</strong> {property.details.rooms}
              </p>
              <p>
                <strong>Location:</strong> {property.address}
              </p>
              <p>
                <strong>Bath:</strong> {property.baths}
              </p>
              <p>
                <strong>Garage:</strong> {property.details.garage}
              </p>
              <p>
                <strong>Year Built:</strong> {property.details.yearBuilt}
              </p>
            </div>
          </div>

          {/* Property Features */}
          <div className="mb-10">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
              Property Features
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {property.propertyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <FaRegCheckSquare className="text-red-500 mr-2 text-base" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plan */}
      <div className="mb-10">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Floor Plans</h3>
        <img
          src={property.flatPlan}
          alt="Floor Plan"
          className="rounded-lg border shadow-sm"
        />
      </div>
    </div>
  );
};

export default PropertyDetails;
