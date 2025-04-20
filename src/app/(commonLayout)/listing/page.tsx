"use client";
import PropertyCard from "@/components/cards/PropertyCard";
import SectionHeader from "@/components/shared/SectionHeader";
import FilterBox from "@/components/tenant/FilterBox";
import React from "react";

const PropertyListingPage = () => {
  const properties = [
    // Apartment 1
    {
      landlord: "661e0c709a3c5d2b8c3f42e3",
      images: {
        img1: "https://img.freepik.com/premium-photo/building-with-balconies-balconies_991208-8176.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
        img2: "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
        img3: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
        img4: "https://img.freepik.com/premium-photo/empty-chairs-tables-home_1048944-26815975.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
        img5: "https://img.freepik.com/premium-photo/empty-sofa-house_1048944-4751817.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
      },
      flatPlan: "https://templates.hibootstrap.com/fela/default/assets/img/property/floor-plan.png",
      title: "Modern Apartment in Dhanmondi",
      address: "Road 12A, Dhanmondi, Dhaka",
      price: "৳45,000/mo",
      sqft: 1250,
      beds: 3,
      baths: 2,
      type: "Apartment",
      propertyFeatures: ["Air Conditioned", "Laundry", "Refrigerator"],
      details: {
        description: "এটি একটি আধুনিক এবং প্রশস্ত অ্যাপার্টমেন্ট যা পরিবারগুলোর জন্য আদর্শ, যারা ঢাকা শহরের কেন্দ্রে আরামদায়ক এবং সুবিধাজনক জীবনযাপন চায়। এখানে রয়েছে আধুনিক সুযোগ-সুবিধা এবং পুরো বাড়ি ভরে যাবে আলো ও বায়ু।",
        status: "For Rent",
        rooms: 5,
        garage: "available",
        yearBuilt: "01/01/20",
      },
    },
  
    // Apartment 2
    {
      landlord: "661e0c819a3c5d2b8c3f42e4",
      images: {
        img1: "https://img.freepik.com/premium-photo/building-with-balconies-that-has-word-it_991208-26685.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
        img2: "https://media.istockphoto.com/id/1182454305/photo/bohemian-living-room-interior-3d-render.jpg?b=1&s=612x612&w=0&k=20&c=Z4vcYtVun1TOB7e7BRbukT-i_xte4kSp6-axaxbk3Nc=",
        img3: "https://media.istockphoto.com/id/1990444472/photo/scandinavian-style-cozy-living-room-interior.jpg?b=1&s=612x612&w=0&k=20&c=SlUMBo5qEOpQ1dxD8KB1OfSvXBTAGPrJkMQ9gQaN7xk=",
        img4: "https://media.istockphoto.com/id/1312439845/photo/stylish-living-room-interior-with-beautiful-house-plants.jpg?b=1&s=612x612&w=0&k=20&c=Gtv1WEV2Dv0XmureLZ710pD4rq1Ff-Awl1Uk3X7AhlI=",
        img5: "https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.jpg?b=1&s=612x612&w=0&k=20&c=n98P8IAcD8o1tJrE_4pPe1o1j0z2DaZrSkGqH09H88I=",
      },
      flatPlan: "https://templates.hibootstrap.com/fela/default/assets/img/property/floor-plan.png",
      title: "Sunny Apartment in Gulshan",
      address: "Gulshan 2, Dhaka",
      price: "৳85,000/mo",
      sqft: 1650,
      beds: 3,
      baths: 3,
      propertyFeatures: ["Fitness Gym", "Security Garage", "Fireplace"],
      details: {
        description: "এই অ্যাপার্টমেন্টটি একটি উজ্জ্বল এবং বাতাস চলাচলের ব্যবস্থা সহ তৈরি, যা বিশাল ব্যালকনির সৌন্দর্য উপভোগ করতে দেয়। এটি আন্তর্জাতিক স্কুল এবং দূতাবাসগুলোর কাছাকাছি হওয়ার কারণে শহরের কেন্দ্র থেকে খুব সুবিধাজনক স্থানে অবস্থিত।",
        type: "Apartment",
        status: "For Rent",
        rooms: 6,
        garage: "available",
        yearBuilt: "01/01/19",
      },
    },
  
    // House 1
    {
      landlord: "661e0c819a3c5d2b8c3f42e5",
      images: {
        img1: "https://img.freepik.com/premium-photo/house-sale-suburbia_332679-26094.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
        img2: "https://img.freepik.com/free-photo/3d-rendering-white-wood-living-room-near-bedroom-upstair_105762-2197.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
        img3: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
        img4: "https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
        img5: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2053.jpg?t=st=1745115921~exp=1745119521~hmac=2f2f69f574f2d0ffcf6e87145ef97a9928f60fcfdc9c52ca1d8dbbc01f6c7ba0&w=1380",
      },
      flatPlan: "https://templates.hibootstrap.com/fela/default/assets/img/property/floor-plan.png",
      title: "Spacious Family Home in Baridhara",
      address: "Baridhara, Dhaka",
      price: "৳75,000/mo",
      sqft: 2500,
      beds: 4,
      baths: 3,
      propertyFeatures: ["Private Garden", "Modern Kitchen", "Garage"],
      details: {
        description: "এই বাড়িটি একটি সুন্দর পরিবারের জন্য আদর্শ, যেখানে আপনি প্রতিদিনের জীবনে সব কিছু উপভোগ করতে পারবেন। আধুনিক রন্ধনসম্পর্কীয় সুবিধা, বিশাল প্রাঙ্গণ এবং একটি বাড়ির সব সেরা সুবিধাগুলি রয়েছে।",
        type: "House",
        status: "For Rent",
        rooms: 7,
        garage: "available",
        yearBuilt: "01/01/15",
      },
    },
  
    // House 2
    {
      landlord: "661e0c919a3c5d2b8c3f42e6",
      images: {
        img1: "https://img.freepik.com/premium-photo/bright-red-sale-sign-front-charming-suburban-home-with-lush-greenery-sunny-day_447653-51276.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
        img2: "https://img.freepik.com/free-photo/living-room-interior_1048-9888.jpg?ga=GA1.1.1518679940.1727447932&w=740",
        img3: "https://img.freepik.com/free-photo/3d-contemporary-living-room-interior-modern-furniture_1048-9856.jpg?ga=GA1.1.1518679940.1727447932&w=740",
        img4: "https://img.freepik.com/free-photo/living-room-interior_1048-8212.jpg?ga=GA1.1.1518679940.1727447932&w=740",
        img5: "https://img.freepik.com/free-photo/living-room-interior_1048-9888.jpg?ga=GA1.1.1518679940.1727447932&w=740",
      },
      flatPlan: "https://templates.hibootstrap.com/fela/default/assets/img/property/floor-plan.png",
      title: "Modern Family House in Uttara",
      address: "Uttara, Dhaka",
      price: "৳50,000/mo",
      sqft: 2000,
      beds: 4,
      baths: 3,
      propertyFeatures: ["Garden", "Fireplace", "Smart Home"],
      details: {
        description: "এই বাড়িটি একটি অত্যাধুনিক এবং সুন্দর নকশায় নির্মিত। এখানে রয়েছে একটি সুন্দর বাগান এবং আপনার জন্য সর্বশেষ প্রযুক্তি সুবিধা যা আপনাকে বাড়ি পরিচালনায় সুবিধা দেয়।",
        type: "House",
        status: "For Rent",
        rooms: 7,
        garage: "available",
        yearBuilt: "01/01/18",
      },
    }
  ];
  
  
  
    // More properties to follow: House 2, House 3, House 4, Villa 1, Townhouse 1...
  
  
  

  const handleFilterChange = () => {};

  return (
    <div className=" min-h-screen pb-8">
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
