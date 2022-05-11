import { Container } from "@mui/material";
import React from "react";

export default function DetailComp() {
  return (
    <Container maxWidth="xl">
      <div className="section-wraper1" id="secton-content1">
        <div className="secton-content">
          <p className="typography-regular section-content-title">
            طراحی اپلیکیشن موبایل به صورت کاملا اختصاصی
          </p>

          <div className="section-content-box">
            <p className="typography-body section-content-text">
              در سال‌های اخیر و با رشد تکنولوژی، تلفن همراه به عنصری تاثیرگذار
              در زندگی همه تبدیل شده و با روی کار آمدن اپلیکیشن‌های مختلف
              موبایل، انجام بسیاری از کارها به راحتی قابل انجام شده است. با توجه
              به اهمیت اپلیکیشن‌های موبایل بسیاری از کسب و کارها بر آن شده‌اند
              تا بتوانند از این طریق نیز کاربران بیشتری جذب کنند. تمامی کسب و
              کارها با داشتن یک اپلیکیشن کاربردی می‌توانند ارتباط نزدیک‌تر و
              قوی‌تری با کاربران خود برقرار کنند.
            </p>
          </div>
        </div>
        <div className="section-img">
          <img src="../../image/sec1.svg" />
        </div>
      </div>
      <div className="section-wraper2">
        <div className="section-img">
          <img src="../image/sec2.svg" />
        </div>
        <div className="secton-content">
          <p className="typography-regular section-content-title">
            توسعه و طراحی سایت
          </p>

          <div className="section-content-box">
            <p className="typography-body section-content-text">
              در سال‌های اخیر و با رشد تکنولوژی، تلفن همراه به عنصری تاثیرگذار
              در زندگی همه تبدیل شده و با روی کار آمدن اپلیکیشن‌های مختلف
              موبایل، انجام بسیاری از کارها به راحتی قابل انجام شده است. با توجه
              به اهمیت اپلیکیشن‌های موبایل بسیاری از کسب و کارها بر آن شده‌اند
              تا بتوانند از این طریق نیز کاربران بیشتری جذب کنند. تمامی کسب و
              کارها با داشتن یک اپلیکیشن کاربردی می‌توانند ارتباط نزدیک‌تر و
              قوی‌تری با کاربران خود برقرار کنند.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
