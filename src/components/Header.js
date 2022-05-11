import { Container } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { AppBar, Grid, Toolbar, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import useStyles from "../Style";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link as Link1 } from "react-scroll";

export default function DesktopHeader() {
  const [styles, setStyles] = useState("mb-drawer-wrapper");
  const [stylesModal, setStylesModal] = useState("drawe-modal-wrapper");
  const [dispNon, setDispNon] = useState();
  const wrapperRef = useRef(null);
  const openDrawer = () => {
    setStyles("mb-drawer-wrapper-active");
    setStylesModal("mb-modal-wrapper-active");
    setDispNon("mb-drawer-none");
  };
  const closeDrawer = () => {
    setStyles("mb-drawer-wrapper");
    setStylesModal("mb-modal-wrapper");
    setDispNon("mb-drawer-block");
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setStyles("mb-drawer-wrapper");
          setStylesModal("mb-modal-wrapper");
          setDispNon("mb-drawer-block");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div className="header-bg" id="home">
        <Container maxWidth="xl">
          <div className="header-wrapper">
            <div className="header-logo">
              <img src="./image/logo.svg" alt="logo" />
            </div>
            <div className="header-menu">
              {/* <Link1
                activeClass="prodItem-detaile-text-active"
                className="header-menu-text typography-h2 "
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-200}
              >
                ناتیکس
              </Link1> */}
              <Link1
                activeClass="prodItem-detaile-text-active"
                className="header-menu-text typography-h2 "
                to="secton-content1"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                خدمات ما
              </Link1>
              <Link1
                activeClass="prodItem-detaile-text-active"
                className="header-menu-text typography-h2 "
                to="plans"
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
              >
                پروژه های ما
              </Link1>

              <Link1
                activeClass="prodItem-detaile-text-active"
                className="header-menu-text typography-h2 "
                to="footer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-200}
              >
                تماس با ما
              </Link1>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles} ref={wrapperRef}>
        <div className="drawer-menu">
          <Link1
            activeClass="prodItem-detaile-text-active"
            className="drawer-menu-item typography-h2 "
            to="secton-content1"
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
          >
            خدمات ما
          </Link1>
          <Link1
            activeClass="prodItem-detaile-text-active"
            className="drawer-menu-item typography-h2 "
            to="plans"
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
          >
            پروژه های ما
          </Link1>
          <Link1
            activeClass="prodItem-detaile-text-active"
            className="drawer-menu-item typography-h2 "
            to="footer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            تماس با ما
          </Link1>
          {/* <Link1 className="drawer-menu-item typography-bold" to="/">
            پشتیبانی سایت
          </Link1>
          <Link1
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            className="drawer-menu-item typography-bold"
          >
            ارتباط با ما
          </Link1>
          <Link1 className="drawer-menu-item typography-bold" to="/aboutus">
            درباره ما
          </Link1> */}
        </div>
        <div className="drawer-icons-wrapper">
          {/* <i class="drawer-icons-icon fa fa-instagram" aria-hidden="true"></i>
          <i
            class="drawer-icons-icon fa fa-linkedin-square"
            aria-hidden="true"
          ></i>
          <i
            class="drawer-icons-icon fa fa-twitter-square"
            aria-hidden="true"
          ></i> */}
          <a className="drawer-icons-icon">
            <img src="./image/footer/instagram.svg" />
          </a>

          <a className="drawer-icons-icon">
            <img src="./image/footer/linkedin.svg" />
          </a>
          <a className="drawer-icons-icon">
            <img src="./image/footer/twitter.svg" />
          </a>
          <a className="drawer-icons-icon">
            <img src="./image/footer/telegram.svg" />
          </a>
        </div>
      </div>
      <div className={stylesModal}></div>

      <AppBar position="fixed" className="navBarMob" elevation={0}>
        <Toolbar disableGutters className="mp">
          <Grid container className="test">
            <Grid item xs={0.5} className="hambergerMenu">
              <MenuIcon
                onClick={openDrawer}
                className="tablet-header-hambergermenu"
              />
            </Grid>
            <Grid item xs={10} className="logoWrapMob">
              <img src="../image/mbLogo.svg" />
            </Grid>
            {/* <Grid item xs={1} className="bagIconWrap">
              <div className="bag-wrapper-mob">
                <span className="span-bag-mob">0</span>
                <ShoppingBagOutlinedIcon />
              </div>
            </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
