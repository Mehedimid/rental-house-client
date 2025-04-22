"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const slides = [
    "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Swiper for background images only */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-screen relative">
              <Image
                src={url}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/30 flex flex-col justify-center items-center text-center px-4">
        {/* Title & Description */}
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
          Luxury House Renting
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl font-medium md:w-2/3 mb-8">
          Discover smart, secure, and affordable rental homes tailored to your needs. Whether a tenant or a landlord, we connect you with the best housing solutions in just a few clicks.
        </p>

        {/* Search Panel */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 w-full max-w-5xl flex flex-col lg:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Location"
            className="w-full lg:w-1/3 p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <select
            defaultValue=""
            className="w-full lg:w-1/3 p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="" disabled>
              Price Range
            </option>
            <option value="$500-$1000">$500 - $1000</option>
            <option value="$1000-$2000">$1000 - $2000</option>
          </select>

          <select
            defaultValue=""
            className="w-full lg:w-1/3 p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="" disabled>
              Bed & Baths
            </option>
            <option value="2-1">2 Bed / 1 Bath</option>
            <option value="3-2">3 Bed / 2 Bath</option>
          </select>

          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md hover:shadow-lg hover:from-red-700 hover:to-red-600 transition duration-300">
            Search Property
          </button>
        </div>

        {/* Avatars & Reviews */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            <Image
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="avatar1"
              width={40}
              height={40}
            />
            <Image
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="avatar2"
              width={40}
              height={40}
            />
            <Image
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="avatar3"
              width={40}
              height={40}
            />
            <Image
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/4.jpg"
              alt="avatar4"
              width={40}
              height={40}
            />
          </div>
          <span className="text-white font-medium text-lg">
            29k+ Positive Reviews
          </span>
        </div>
      </div>

      {/* Swiper Navigation Buttons */}
      <div className="swiper-button-prev z-20"></div>
      <div className="swiper-button-next z-20"></div>

      {/* Ensure buttons appear above overlay */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          z-index: 30;
        }
      `}</style>
    </div>
  );
};

export default Banner;
