"use client";
import PropertyCard from "@/components/cards/PropertyCard";
import SectionHeader from "@/components/shared/SectionHeader";
import FilterBox from "@/components/tenant/FilterBox";
import React from "react";

const PropertyListingPage = () => {
  const properties = [
    {
      images: {
        img1: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-8.jpg",
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
        bedroomsID: 101,
        yearBuilt: "01/01/19",
      },
    },
    {
      images: {
        img1: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-11.jpg",
        img2: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-11.jpg",
        img3: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-11.jpg",
        img4: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-11.jpg",
        img5: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-11.jpg",
      },
      flatPlan:
        "https://templates.hibootstrap.com/fela/default/assets/img/property/floor-plan.png",
      title: "Modern Apartment in Dhanmondi",
      address: "House 12, Road 7A, Dhanmondi, Dhaka",
      price: "৳35,000/mo",
      sqft: 1100,
      beds: 2,
      baths: 2,
      propertyFeatures: [
        "Air Conditioned",
        "Laundry",
        "Parking",
        "Refrigerator",
        "Window Coverings",
      ],
      details: {
        landlord: "BD1002",
        type: "Apartment",
        status: "For Rent",
        rooms: 4,
        garage: "available",
        bedroomsID: 102,
        yearBuilt: "14/02/20",
      },
    },
    {
      images: {
        img1: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-3.jpg",
        img2: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-3.jpg",
        img3: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-3.jpg",
        img4: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-3.jpg",
        img5: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-3.jpg",
      },
      flatPlan:
        "https://templates.hibootstrap.com/fela/default/assets/img/property/floor-plan.png",
      title: "Penthouse in Gulshan",
      address: "Road 90, Gulshan-2, Dhaka",
      price: "৳50,000/mo",
      sqft: 1800,
      beds: 3,
      baths: 3,
      propertyFeatures: [
        "Swimming Pool",
        "Air Conditioned",
        "Fitness Gym",
        "Parking",
        "Refrigerator",
      ],
      details: {
        landlord: "BD1003",
        type: "Penthouse",
        status: "For Rent",
        rooms: 5,
        garage: "available",
        bedroomsID: 103,
        yearBuilt: "10/08/21",
      },
    },
    {
      images: {
        img1: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-4.jpg",
        img2: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-4.jpg",
        img3: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-4.jpg",
        img4: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-4.jpg",
        img5: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-4.jpg",
      },
      flatPlan:
        "https://templates.hibootstrap.com/fela/default/assets/img/property/floor-plan.png",
      title: "Flat in Chawkbazar",
      address: "Chawkbazar, Chattogram",
      price: "৳25,000/mo",
      sqft: 850,
      beds: 2,
      baths: 1,
      propertyFeatures: [
        "Laundry",
        "Parking",
        "Fireplace",
        "Window Coverings",
      ],
      details: {
        landlord: "BD1004",
        type: "Flat",
        status: "For Rent",
        rooms: 3,
        garage: "available",
        bedroomsID: 104,
        yearBuilt: "22/05/18",
      },
    },
    {
      images: {
        img1: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-17.jpg",
        img2: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-17.jpg",
        img3: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-17.jpg",
        img4: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-17.jpg",
        img5: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-17.jpg",
      },
      flatPlan:
        "https://templates.hibootstrap.com/fela/default/assets/img/property/floor-plan.png",
      title: "Studio Flat in Sylhet",
      address: "Zindabazar, Sylhet",
      price: "৳15,000/mo",
      sqft: 500,
      beds: 1,
      baths: 1,
      propertyFeatures: [
        "Air Conditioned",
        "Laundry",
        "Parking",
      ],
      details: {
        landlord: "BD1005",
        type: "Studio",
        status: "For Rent",
        rooms: 1,
        garage: "available",
        bedroomsID: 105,
        yearBuilt: "12/03/17",
      },
    },
    {
      images: {
        img1: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-6.jpg",
        img2: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-6.jpg",
        img3: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-6.jpg",
        img4: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-6.jpg",
        img5: "https://templates.hibootstrap.com/fela/default/assets/img/property/property-6.jpg",
      },
      flatPlan:
        "https://templates.hibootstrap.com/fela/default/assets/img/property/floor-plan.png",
      title: "Duplex House in Uttara",
      address: "Sector 7, Uttara, Dhaka",
      price: "৳60,000/mo",
      sqft: 2200,
      beds: 4,
      baths: 4,
      propertyFeatures: [
        "Air Conditioned",
        "Security Garage",
        "Fitness Gym",
        "Laundry",
        "Fireplace",
        "Parking",
      ],
      details: {
        landlord: "BD1006",
        type: "Duplex",
        status: "For Rent",
        rooms: 6,
        garage: "available",
        bedroomsID: 106,
        yearBuilt: "20/10/22",
      },
    },
  ];
  

  const handleFilterChange = () => {};

  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto w-7/8">
      <SectionHeader subtitle="Rent Your House" title="Listing"></SectionHeader>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
              {properties.map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))}
            </div>

            {/* Pagination UI */}
            <div className="flex justify-center mt-8 space-x-2">
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Previous
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                1
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                2
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                3
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Next
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/3 lg:ml-6 mt-6 lg:mt-0">
            <FilterBox onFilterChange={handleFilterChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingPage;
