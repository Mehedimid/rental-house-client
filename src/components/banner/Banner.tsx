// Banner.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SlideContent from "./SlideContent";

const Banner = () => {
  return (
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
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SlideContent imageUrl="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent imageUrl="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
