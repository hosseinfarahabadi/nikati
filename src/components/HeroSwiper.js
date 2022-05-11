import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../style/style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Container } from "@mui/material";

export default function HeroSwiper() {
  return (
    <div className="swiper-wrap-hero">
      <Container maxWidth="xl"></Container>
      <Swiper
        className="mySwiper"
        // navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        loop={true}
      >
        {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> */}
        <SwiperSlide>
          <div className="hero-swiper-box">
            <Container className="hero-swiper-container" maxWidth="LX">
              <img
                className="hero-swiper-img1"
                src="/image/hero/hero1.svg"
                alt="banner"
              />

              <div className="hero-swiper-box-text">
                <p className="hero-swiper-box-text-p1 typography-h1">
                  طراحی تجربه کاربری
                </p>
                <p className="hero-swiper-box-text-p2 typography-medium">
                  User Experience Design
                </p>
                <p className="hero-swiper-box-text-p3 typography-body">
                  مکانیزمی برای راحتی کاربران در حین کار کردن با سایت و نرمافزار
                  شما
                </p>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-swiper-box">
            <Container className="hero-swiper-container" maxWidth="LX">
              <img
                className="hero-swiper-img2"
                src="/image/hero/hero2.svg"
                alt="banner"
              />
              <div className="hero-swiper-box-text">
                <p className="hero-swiper-box-text-p1 typography-h1">
                  طراحی رابط کاربری
                </p>
                <p className="hero-swiper-box-text-p2 typography-medium">
                  User Interface Design
                </p>
                <p className="hero-swiper-box-text-p3 typography-body">
                  در حقیقت هر چیزی که باعث شود بتوانیم از یک محصول استفاده کنیم،
                  رابط کاربری نام دارد. با این توضیحات، رابط کاربری در طول تاریخ
                  سابقه دارد.
                </p>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-swiper-box last">
            <Container className="hero-swiper-container" maxWidth="LX">
              <img
                className="hero-swiper-img3"
                src="/image/hero/hero3.svg"
                alt="banner"
              />
              <div className="hero-swiper-box-text">
                <p className="hero-swiper-box-text-p1 typography-h1">
                  بهینه سازی سایت
                </p>
                <p className="hero-swiper-box-text-p2 typography-medium">
                  Search Engine Optimization
                </p>
                <p className="hero-swiper-box-text-p3 typography-body">
                  سئو را می توان مجموعه ای از روش ها برای تغییر استراتژیک وب
                  سایت ها دانست. این فرآیند به بیان مهمترین عوامل مرتبط صفحه و
                  افزایش اهمیت آن در صفحه نتایج جستجو، می پردازد.
                </p>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-swiper-box last">
            <Container className="hero-swiper-container" maxWidth="LX">
              <img
                className="hero-swiper-img4"
                src="/image/hero/hero4.svg"
                alt="banner"
              />
              <div className="hero-swiper-box-text">
                <p className="hero-swiper-box-text-p1 typography-h1">
                  طراحی سایت واکنشگرا
                </p>
                <p className="hero-swiper-box-text-p2 typography-medium">
                  Responsive web design
                </p>
                <p className="hero-swiper-box-text-p3 typography-body">
                  طراحی ریسپانسیو (Responsive Design) یا واکنشگرا مربوط به تغییر
                  ظاهر صفحات سایت متناسب با سایز مرورگر کاربران است. به این معنی
                  که ظاهر وب‌سایت در تمام دستگاه‌هایی که کاربر با آن از سایت
                  دیدن می‌کند (مثل موبایل، تبلت، لپتاپ و..)، مناسب و بهینه باشد.{" "}
                </p>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-swiper-box last">
            <Container className="hero-swiper-container" maxWidth="LX">
              <img
                className="hero-swiper-img5"
                src="/image/hero/hero5.svg"
                alt="banner"
              />
              <div className="hero-swiper-box-text">
                <p className="hero-swiper-box-text-p1 typography-h1">
                  تحلیل سیستم
                </p>
                <p className="hero-swiper-box-text-p2 typography-medium">
                  Systems analysis
                </p>
                <p className="hero-swiper-box-text-p3 typography-body">
                  سئو را مي‌توان مجموعه‌اي از روش‌ها براي تغيير استراتژيک وب
                  سايت‌ها دانست. اين فرآيند به بيان مهمترين عوامل مرتبط صفحه و
                  افزايش اهميت آن در صفحه نتايج جستجو، مي‌پردازد.{" "}
                </p>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-swiper-box last">
            <Container className="hero-swiper-container" maxWidth="LX">
              <img
                className="hero-swiper-img6"
                src="/image/hero/hero6.svg"
                alt="banner"
              />
              <div className="hero-swiper-box-text">
                <p className="hero-swiper-box-text-p1 typography-h1">
                  پشتیبانی و نگهداری
                </p>
                <p className="hero-swiper-box-text-p2 typography-medium">
                  Support and Maintenance
                </p>
                <p className="hero-swiper-box-text-p3 typography-body">
                  یک وبسایت هر چقدر حرفه ای طراحی شده باشد قطعا در ادامه نیازمند
                  نگهداری و توسعه هستش که نقش پشتیبان سایت اینجا میتونه به رشد
                  کسب و کار کمک کنه وبسایتی که عملا نیاز به مانیتور سرعت, امنیت
                  و سئو داره تا بتونه در نتایج جستجوی گوگل برای بقای کسب و کار
                  خود حضور داشته باشد{" "}
                </p>
              </div>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
