"use client"
import PropertyCard from "@/components/cards/PropertyCard";
import FilterBox from "@/components/tenant/FilterBox";
import React from "react";

const PropertyListingPage = () => {
  const properties = [
    {
      imageSrc:
        "https://templates.hibootstrap.com/fela/default/assets/img/property/property-8.jpg",
      forRent: true,
      price: "৳90,000/mo",
      title: "Luxury Villa in Bashundhara",
      address: "Road 5, Block C, Bashundhara R/A, Dhaka",
      beds: 4,
      baths: 3,
      sqft: 2400,
    },
    {
      imageSrc:
        "https://templates.hibootstrap.com/fela/default/assets/img/property/property-11.jpg",
      forRent: true,
      price: "৳35,000/mo",
      title: "Modern Apartment in Dhanmondi",
      address: "House 12, Road 7A, Dhanmondi, Dhaka",
      beds: 2,
      baths: 2,
      sqft: 1100,
    },
    {
      imageSrc:
        "https://templates.hibootstrap.com/fela/default/assets/img/property/property-3.jpg",
      forRent: true,
      price: "৳50,000/mo",
      title: "Penthouse in Gulshan",
      address: "Road 90, Gulshan-2, Dhaka",
      beds: 3,
      baths: 3,
      sqft: 1800,
    },
    {
      imageSrc:
        "https://templates.hibootstrap.com/fela/default/assets/img/property/property-4.jpg",
      forRent: true,
      price: "৳25,000/mo",
      title: "Flat in Chawkbazar",
      address: "Chawkbazar, Chattogram",
      beds: 2,
      baths: 1,
      sqft: 850,
    },
    {
      imageSrc:
        "https://templates.hibootstrap.com/fela/default/assets/img/property/property-17.jpg",
      forRent: true,
      price: "৳15,000/mo",
      title: "Studio Flat in Sylhet",
      address: "Zindabazar, Sylhet",
      beds: 1,
      baths: 1,
      sqft: 500,
    },
    {
      imageSrc:
        "https://templates.hibootstrap.com/fela/default/assets/img/property/property-6.jpg",
      forRent: true,
      price: "৳60,000/mo",
      title: "Duplex House in Uttara",
      address: "Sector 7, Uttara, Dhaka",
      beds: 4,
      baths: 4,
      sqft: 2200,
    },
  ];

  const handleFilterChange = () => { 

   }

  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Properties
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
          <div className="w-1/3 lg:ml-6"><FilterBox onFilterChange={handleFilterChange} /></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingPage;
