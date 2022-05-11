import { Container } from "@mui/material";
import React from "react";
import FeatureCard from "./featureCard";

export default function FeatureComp() {
  var cardObj = [
    {
      image: "../../image/feature/Edit.svg",
      title: "طراحی UI/UX اختصاصی",
      text: "طرح های تایید شده از مرحله قبل به تیم اجرایی سپرده می شوند تا طبق طرح آجرهای سازنده سایت را روی هم چیده و طرح های گرافیکی را تبدیل به یک وب سایت پویا و داینامیک کنند. ",
    },
    {
      image: "../../image/feature/Category.svg",
      title: "پیاده سازی و اجرا",
      text: "طرح های تایید شده از مرحله قبل به تیم اجرایی سپرده می شوند تا طبق طرح آجرهای سازنده سایت را روی هم چیده و طرح های گرافیکی را تبدیل به یک وب سایت پویا و داینامیک کنند.",
    },
    {
      image: "../../image/feature/Scan.svg",
      title: "تست و تغییر",
      text: " طرح های تایید شده از مرحله قبل به تیم اجرایی سپرده می شوند تا طبق طرح آجرهای سازنده سایت را روی هم چیده و طرح های گرافیکی را تبدیل به یک وب سایت پویا و داینامیک کنند.",
    },
    {
      image: "../../image/feature/PaperUpload.svg",
      title: "بارگذاری و تحویل",
      text: " طرح های تایید شده از مرحله قبل به تیم اجرایی سپرده می شوند تا طبق طرح آجرهای سازنده سایت را روی هم چیده و طرح های گرافیکی را تبدیل به یک وب سایت پویا و داینامیک کنند.",
    },
    {
      image: "../../image/feature/Filter.svg",
      title: "آموزش مدیریت سایت",
      text: " طرح های تایید شده از مرحله قبل به تیم اجرایی سپرده می شوند تا طبق طرح آجرهای سازنده سایت را روی هم چیده و طرح های گرافیکی را تبدیل به یک وب سایت پویا و داینامیک کنند.",
    },
    {
      image: "../../image/feature/TicketStar.svg",
      title: "پشتیبانی سایت",
      text: "طرح های تایید شده از مرحله قبل به تیم اجرایی سپرده می شوند تا طبق طرح آجرهای سازنده سایت را روی هم چیده و طرح های گرافیکی را تبدیل به یک وب سایت پویا و داینامیک کنند. ",
    },
  ];
  console.log(cardObj[0].test);
  return (
    <div className="feature-bg">
      <Container maxWidth="xl">
        <p className="feature-title typography-medium">
          مراحل طراحی سایت اختصاصی
        </p>
        <div className="horiz-line1"></div>
        <p className="feature-text typography-body">
          ما بر روی برنامه های وب سفارشی، و راه حل هایی تمرکز می کنیم که کاملاً
          برای پاسخگویی به نیازهای منحصر به فرد شما طراحی شده اند و فقط از
          فناوری های به روز و آخرین متدها استفاده می کنند تا حتی پیچیده ترین
          مسائل فنی و در عین حال آسان را به نسبت هزینه و عملکرد بهینه حل کنند.
          هر یک از برنامه های کاربردی سفارشی برای کسب و کار امروزی شما توسعه می
          یابد و همچنین به گونه ای ساخته میشود که اطمینان حاصل شود که می تواند
          به راحتی با تجارت شما تکامل یابد.
        </p>
        <div className="featre-box-wrapper">
          <FeatureCard
            image={cardObj[0].image}
            title={cardObj[0].title}
            text={cardObj[0].text}
          />
          <FeatureCard
            image={cardObj[1].image}
            title={cardObj[1].title}
            text={cardObj[1].text}
          />
          <FeatureCard
            image={cardObj[2].image}
            title={cardObj[2].title}
            text={cardObj[2].text}
          />
          <FeatureCard
            image={cardObj[3].image}
            title={cardObj[3].title}
            text={cardObj[3].text}
          />
          <FeatureCard
            image={cardObj[4].image}
            title={cardObj[4].title}
            text={cardObj[4].text}
          />
          <FeatureCard
            image={cardObj[5].image}
            title={cardObj[5].title}
            text={cardObj[5].text}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="feature-btn">
            <p className="typography-h3">مشاوره رایگان</p>
          </button>
        </div>
      </Container>
    </div>
  );
}
