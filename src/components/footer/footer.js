import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="footer-container typography-light" id="footer">
      <Container maxWidth="xl">
        {/* /////////////////////// */}
        <div className="footer-sec-container">
          <div className="footer-sec1">
            <img className="footer-logo" src="./image/footerLogo.svg" />
            <p className="footer-sec1-text typography-body">
              میدان رسالت خیابان هنگام بالا تر از میدان الغدیر
            </p>
            <p className="footer-sec1-text typography-body">
              کوچه دوم سازمان آب (شهید شریفی) پلاک ۱۵ واحد ۲
            </p>
            <p className="footer-sec1-text typography-body">
              <span style={{ marginLeft: "10px" }}>۷۷۴۹۹۵۶۲ ۰۲۱ </span>
              <span> ۷۷۴۵۶۹۳۶ ۰۲۱ </span>
            </p>
            <div className="footer-icon-wraper">
              <a>
                <img
                  src="./image/footer/instagram.svg"
                  style={{ paddingLeft: "20px" }}
                />
              </a>

              <a>
                <img
                  src="./image/footer/linkedin.svg"
                  style={{ paddingLeft: "20px" }}
                />
              </a>
              <a>
                <img
                  src="./image/footer/twitter.svg"
                  style={{ paddingLeft: "20px" }}
                />
              </a>
              <a>
                <img
                  src="./image/footer/telegram.svg"
                  style={{ paddingLeft: "20px" }}
                />
              </a>
            </div>
          </div>
          <div className="footer-sec2">
            <Link
              activeClass="prodItem-detaile-text-active"
              className="footer-menu-text typography-h3 "
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-200}
            >
              ناتیکس
            </Link>
            <Link
              activeClass="prodItem-detaile-text-active"
              className="footer-menu-text typography-h3 "
              to="secton-content1"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
            >
              خدمات ما
            </Link>
            <Link
              activeClass="prodItem-detaile-text-active"
              className="footer-menu-text typography-h3 "
              to="plans"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
            >
              پروژه های ما
            </Link>
            <Link
              activeClass="prodItem-detaile-text-active"
              className="footer-menu-text typography-h3 "
              to="footer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-200}
            >
              تماس با ما
            </Link>
          </div>
          <div className="footer-sec3">
            <Link
              activeClass="prodItem-detaile-text-active"
              className="footer-menu-text typography-h3 "
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-200}
            >
              ناتیکس
            </Link>
            <Link
              activeClass="prodItem-detaile-text-active"
              className="footer-menu-text typography-h3 "
              to="secton-content1"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
            >
              خدمات ما
            </Link>
            <Link
              activeClass="prodItem-detaile-text-active"
              className="footer-menu-text typography-h3 "
              to="plans"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
            >
              پروژه های ما
            </Link>
            <Link
              activeClass="prodItem-detaile-text-active"
              className="footer-menu-text typography-h3 "
              to="footer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-200}
            >
              تماس با ما
            </Link>
          </div>
          <div className="footer-sec4">
            <div className="footer-map">
              <img src="./image/footer/map.svg" />
            </div>
            <div className="footer-enamad">
              <img src="./image/footer/enamad.svg" />
            </div>
          </div>
        </div>
        <div className="footer-line-horiz"></div>
      </Container>
      <div className="copy-wright">
        <p className="typography-body">
          © تمام حقوق مادی و معنوی متعلق به شرکت ناتیکس می‌باشد{" "}
        </p>
      </div>
    </div>
  );
}
