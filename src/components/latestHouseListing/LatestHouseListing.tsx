import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import "../sliderStyles.css";
import sliderData from "./slider.json";
import SectionHeader from "../shared/SectionHeader";
import ProjectCard from "./ProjectCard";

const LatestHouseListing = () => {
  return (
    <div>
      <div className="space-y-4 text-center">
        <SectionHeader
          title="Latest House Listings"
          subtitle="OUR PROPERTIES"
        />
      </div>

      <Swiper
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1200: {
            slidesPerView: 4,
            centeredSlides: true,
            loop: true,
          },
        }}
        onSwiper={(swiper) => {
          // Stop autoplay on mouse enter
          swiper.el.addEventListener("mouseenter", () => swiper.autoplay?.stop());

          // Start autoplay on mouse leave
          swiper.el.addEventListener("mouseleave", () => swiper.autoplay?.start());
        }}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <ProjectCard slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestHouseListing;
