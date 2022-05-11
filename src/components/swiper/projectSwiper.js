import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../style/style.css";

// import "../swiper/styleSW.css";

// import required modules
import { Navigation, EffectCoverflow } from "swiper";
import { useMediaQuery } from "@mui/material";

export default function ProjectSwiper() {
  const matches = useMediaQuery("(max-width:500px)");
  // console.log(swiper.activeIndex)
  return (
    <div className="swiper-wrap-recom">
      <Swiper
        effect={"coverflow"}
        // onSwiper={setSwiper}
        slidesPerView={3}
        grabCursor={true}
        spaceBetween={80}
        pagination={{
          clickable: true,
        }}
        // centeredSlides={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          550: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        // width={300}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../../image/swiper/projectSwiper/project1.png" />
          <p className="mt4 white typography-body2">
            طراحی سایت فروشگاهی وزین پلاست
          </p>
          <button className="mt2 project-detail-btn">
            <p className="typography-body">لینک پروژه</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../image/swiper/projectSwiper/project2.png" />
          <p className="mt4 white typography-body2">
            طراحی سایت فروشگاهی وزین پلاست
          </p>
          <button className="mt2 project-detail-btn">
            <p className="typography-body">لینک پروژه</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../image/swiper/projectSwiper/project3.png" />
          <p className="mt4 white typography-body2">
            طراحی سایت فروشگاهی وزین پلاست
          </p>
          <button className="mt2 project-detail-btn">
            <p className="typography-body">لینک پروژه</p>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
