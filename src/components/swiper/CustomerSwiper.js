import React, { useRef, useState } from "react";
import CustomerCard from "./CustomerCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../style/style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";

export default function CustomerSwiper() {
  const commentObj = [
    {
      image: "../../image/swiper/comment/person.svg",
      name: "محمد حسین‌زاده",
      title: "مدیر عامل شرکت دیجی کالا",
      comment:
        "راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی",
    },
    {
      image: "../../image/swiper/comment/person1.svg",
      name: "محمد حسین‌زاده",
      title: "مدیر عامل شرکت دیجی کالا",
      comment:
        "راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی",
    },
    {
      image: "../../image/swiper/comment/person2.svg",
      name: "محمد حسین‌زاده",
      title: "مدیر عامل شرکت دیجی کالا",
      comment:
        "راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی",
    },
    {
      image: "../../image/swiper/comment/person.svg",
      name: "محمد حسین‌زاده",
      title: "مدیر عامل شرکت دیجی کالا",
      comment:
        "راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی",
    },
    {
      image: "../../image/swiper/comment/person1.svg",
      name: "محمد حسین‌زاده",
      title: "مدیر عامل شرکت دیجی کالا",
      comment:
        "راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی",
    },
    {
      image: "../../image/swiper/comment/person2.svg",
      name: "محمد حسین‌زاده",
      title: "مدیر عامل شرکت دیجی کالا",
      comment:
        "راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی",
    },
  ];
  return (
    <div className="customer-wiper-wraper">
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        grabCursor={true}
        spaceBetween={15}
        navigation={true}
        // centeredSlides={true}
        freeMode={true}
        rewind={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        // centerInsufficientSlides={true}
        // centeredSlidesBounds={true}
        modules={[Navigation, FreeMode, Pagination]}
        className="mySwiper"
        // width={1720}
      >
        <div className="blur-swiper-right"></div>
        <div className="blur-swiper-left"></div>
        <SwiperSlide>
          <CustomerCard
            image={commentObj[0].image}
            name={commentObj[0].name}
            title={commentObj[0].title}
            comment={commentObj[0].comment}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard
            image={commentObj[1].image}
            name={commentObj[1].name}
            title={commentObj[1].title}
            comment={commentObj[1].comment}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CustomerCard
            image={commentObj[2].image}
            name={commentObj[2].name}
            title={commentObj[2].title}
            comment={commentObj[2].comment}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard
            image={commentObj[3].image}
            name={commentObj[3].name}
            title={commentObj[3].title}
            comment={commentObj[3].comment}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard
            image={commentObj[4].image}
            name={commentObj[4].name}
            title={commentObj[4].title}
            comment={commentObj[4].comment}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard
            image={commentObj[5].image}
            name={commentObj[5].name}
            title={commentObj[5].title}
            comment={commentObj[5].comment}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
