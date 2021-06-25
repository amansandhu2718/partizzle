import "./Home.css";
import Navbar from "../../comps/header/Navbar";
import Cur from "../../assets/images/cur..bg.png";
import Cur1 from "../../assets/images/cur..bg1.png";
import Cur3 from "../../assets/images/cur.3.png";
import P1 from "../../assets/images/P1.jpg";
import P2 from "../../assets/images/P2.jpg";
import pic1 from "../../assets/images/1.jpeg";
import pic2 from "../../assets/images/2.jpeg";
import pic3 from "../../assets/images/3.jpeg";
import pic4 from "../../assets/images/4.jpeg";
import V1 from "../../assets/vids/wine.mp4";
import V2 from "../../assets/vids/My Video.mp4";
import { Link } from "react-router-dom";
import Helmet from "helmet";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Autoplay, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Mousewheel,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Mousewheel]);

function Home() {
  const seekss = (e) => {
    // e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <Helmet>{/* <script src={Hello}></script> */}</Helmet>
      <div className="container mt-2">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active pblack">
              <div className="p-3">
                <div style={{ position: "relative" }} className="hg">
                  <video
                    className="img-fluid "
                    preload={Autoplay}
                    style={{
                      pointerEvents: "none",
                    }}
                    onPlay={seekss}
                    autoPlay={true}
                    muted
                    playsinline
                    controls={false}
                    src={V2}
                  ></video>
                </div>
              </div>
            </div>
            <div className="carousel-item pblack">
              <div className="p-3">
                <div style={{ position: "relative" }} className="hg">
                  <img src={Cur1} className="imh img-fluid" alt="pics" />
                </div>
              </div>
            </div>
            <div className="carousel-item pblack">
              <div className="p-3">
                <div style={{ position: "relative" }} className="hg">
                  <img src={Cur3} className="imh img-fluid" alt="pics" />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container mt-3 text-light">
        <div className="row mt-3">
          <div className="col-lg-3 pt-3">
            <div className="bgmehroon2">
              <div className="card bgmehroon" style={{ width: "100%" }}>
                <div className="card-body">
                  <h5 className="card-title">BOOK A THEME</h5>

                  <p className="card-text">
                    Choose theme of "YOUR" choice for "YOUR" party
                  </p>
                  <img src={P1} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pt-3">
            <div className="bgblue2">
              <Link to="/beverages">
                <div className="card bgblue" style={{ width: "100%" }}>
                  <div className="card-body">
                    <h5 className="card-title">DRINKS</h5>

                    <p className="card-text">
                      A large variety of non-aloholic and alcoholic drinks
                    </p>
                    <img src={P1} className="img-fluid" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 pt-3">
            <div className="bgpurple2">
              <div className="card bgpurple" style={{ width: "100%" }}>
                <div className="card-body">
                  <h5 className="card-title">FOOD</h5>

                  <p className="card-text">
                    A large variety of non-aloholic and alcoholic drinks
                  </p>
                  <img src={P1} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pt-3">
            <div className="bggreen2">
              <div className="card bggreen" style={{ width: "100%" }}>
                <div className="card-body">
                  <h5 className="card-title">DECORS</h5>

                  <p className="card-text">
                    A large variety of non-aloholic and alcoholic drinks
                  </p>
                  <img src={P1} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pblack  mt-5">
        <div className="cen ">
          <h3 className="text-light mt-5">BEST SELLERS</h3>
        </div>
        <Swiper
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="pblack container mt-3 pt-2">
        <div className="cen">
          <h3 className="text-light mt-5">OUR RECENT EVENTS</h3>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card mb-2 cen2 pblack text-light">
              <div className="card-body">
                <img
                  src={P1}
                  className="img-fluid"
                  style={{ width: "100%" }}
                  alt="pics"
                />
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card mb-2 cen2 pblack text-light">
              <div className="card-body">
                <img
                  src={P2}
                  className="img-fluid"
                  style={{ width: "100%" }}
                  alt="pics"
                />
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
