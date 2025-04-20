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
    images: {
      img1: "https://img.freepik.com/premium-photo/building-with-balconies-that-has-word-it_991208-26685.jpg",
      img2: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-8.jpg",
      img3: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-8.jpg",
      img4: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-8.jpg",
      img5: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-8.jpg",
    },
    flatPlan:
      "https://templates.hibootstrap.com/fela/default/assets/img/property/floor-plan.png",
    title: "Luxury Villa in Bashundhara",
    address: "Road 5, Block C, Bashundhara R/A, Dhaka",
    price: "৳90,000/mo",
    sqft: 2400,
    beds: 4,
    baths: 3,
    propertyFeatures: [
      "Air Conditioned",
      "Swimming Pool",
      "Fitness Gym",
      "Security Garage",
      "Window Coverings",
      "Laundry",
      "Parking",
      "Fireplace",
      "Refrigerator",
    ],
    details: {
      landlord: "BD1001",
      type: "Villa",
      status: "For Rent",
      rooms: 6,
      garage: "available",
      yearBuilt: "01/01/19",
    },
  };

  return (
    <div className="container md:w-7/8 mx-auto px-4 py-8 text-gray-800">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{property.title}</h2>
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
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">Description</h3>
        <p className="text-gray-600 leading-relaxed">
          Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut
          libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum
          id enim. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
          aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque in ipsum id orci porta
          dapibus.
          <br />
          <br />
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec
          sollicitudin molestie malesuada. Proin eget tortor risus. Donec rutrum
          congue leo eget malesuada.
        </p>
      </div>

      {/* Property Details Grid */}
      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Property Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          <p>
            <strong>Property ID:</strong> {property.details.landlord}
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
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Property Features
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {property.propertyFeatures.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-600">
              <FaRegCheckSquare className="text-red-500 mr-2 text-base" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floor Plan */}
      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Floor Plans</h3>
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
