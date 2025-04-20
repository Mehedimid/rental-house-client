
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SlideContent from './SlideContent';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
  <SlideContent imageUrl="https://i.ibb.co.com/6RMt12bC/house3.jpg" />
</SwiperSlide>
       
<SwiperSlide>
  <SlideContent imageUrl="https://i.ibb.co/yX10rx6/warehouse.png" />
</SwiperSlide>
<SwiperSlide>
  <SlideContent imageUrl="https://i.ibb.co.com/xSYK2B1J/house2.jpg" />
</SwiperSlide>
<SwiperSlide>
  <SlideContent imageUrl="https://i.ibb.co.com/B2t7HCvm/house4.jpg" />
</SwiperSlide>
<SwiperSlide>
  <SlideContent imageUrl="https://i.ibb.co.com/TDbMJ1Jz/house1.jpg" />
</SwiperSlide>

      </Swiper>
    </>
  )
}

export default Banner
