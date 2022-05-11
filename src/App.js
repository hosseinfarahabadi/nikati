import logo from "./logo.svg";
import "./style/style.css";
import Header from "./components/Header";
import { Container } from "@mui/material";
import HeroSwiper from "./components/HeroSwiper";
import Footer from "./components/footer/footer";
import { width } from "@mui/system";
import ProjectSwiper from "./components/swiper/projectSwiper";
import PlansComponent from "./components/PlansComponent";
import FeatureComp from "./components/features/FeatureComp";
import CustomerSwiper from "./components/swiper/CustomerSwiper";
import DetailComp from "./components/details/DetailComp";
import DetailCompTb from "./components/details/DetailCompTb";
import DetailCompMb from "./components/details/DetailCompMb";

function App() {
  return (
    <div>
      <div className="App" id="home">
        <Header />
        <div className="banner-bg">
          <HeroSwiper />
          <DetailCompTb />
          <DetailCompMb />
        </div>
      </div>
      <DetailComp />
      <div className=" project-sec" id="plans">
        <Container maxWidth="xl">
          <div className=" mt3 mb3 ">
            <p className=" white typography-medium">پروژه‌های شرکت</p>
          </div>
          <span className="horiz-line"></span>
          <ProjectSwiper />
        </Container>
      </div>
      <Container maxWidth="xl">
        <div className="plan-sec">
          <PlansComponent />
        </div>
      </Container>
      <FeatureComp />
      <Container maxWidth="xl">
        <div className="comment-title-wrap">
          <p className="comment-title typography-medium">نظرات مشتریان ما</p>
          <div className="horiz-line2"></div>
        </div>
        <CustomerSwiper />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
