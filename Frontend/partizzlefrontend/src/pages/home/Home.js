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
import { Link } from "react-router-dom";
import Helmet from "helmet";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

function Home() {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const swiper = new Swiper(".mySwiper", {
  //     effect: "coverflow",
  //     grabCursor: true,
  //     mousewheel: true,
  //     centeredSlides: true,
  //     slidesPerView: "auto",
  //     coverflowEffect: {
  //       rotate: 50,
  //       stretch: 0,
  //       depth: 100,
  //       modifier: 1,
  //       slideShadows: true,
  //     },
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },
  //   });
  //   setCount(swiper);
  // });
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
                  <img src={Cur} className="imh img-fluid" alt="img" />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      width: "100%",
                      height: " 100%",
                    }}
                  >
                    <div
                      className="cen"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div className="cen"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item pblack">
              <div className="p-3">
                <div style={{ position: "relative" }} className="hg">
                  <img src={Cur1} className="imh img-fluid" alt="pics" />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      className="cen"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div className="cen"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item pblack">
              <div className="p-3">
                <div style={{ position: "relative" }} className="hg">
                  <img src={Cur3} className="imh img-fluid" alt="pics" />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      className="cen"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div className="cen"></div>
                    </div>
                  </div>
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
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pt-3">
            <div className="bgblue2">
              <Link to="/beverages">
                <div className="card bgblue" style={{ width: "100%" }}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 pt-3">
            <div className="bgpurple2">
              <div className="card bgpurple" style={{ width: "100%" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pt-3">
            <div className="bggreen2">
              <div className="card bggreen" style={{ width: "100%" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
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
        <Swiper navigation={true} className="mySwiper">
          <SwiperSlide>
            <img className="img-fluid" src={pic1} alt="pics" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid" src={pic2} alt="pics" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid" src={pic3} alt="pics" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid" src={pic4} alt="pics" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid" src={pic1} alt="pics" />
          </SwiperSlide>
          <div className="swiper-pagination"></div>
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
