import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import pic1 from "../../assets/images/1.jpeg";
import pic2 from "../../assets/images/2.jpeg";
import pic3 from "../../assets/images/3.jpeg";
import pic4 from "../../assets/images/4.jpeg";
import F1 from "../../assets/images/f1.jpg";
import F2 from "../../assets/images/f2.jpg";
import F4 from "../../assets/images/f4.jpg";
import "./Slider.css";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Mousewheel,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Mousewheel]);

export default class Slider extends Component {
  render() {
    return (
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
          //pagination={true}
        >
          <SwiperSlide>
            <img src={F1} className="img-fluid slid" alt="hai kuch" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={F2} className="img-fluid slid" alt="hai kuch" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={F4} className="img-fluid slid" alt="hai kuch" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic1} className="img-fluid slid" alt="hai kuch" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic2} className="img-fluid slid" alt="hai kuch" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic3} className="img-fluid slid" alt="hai kuch" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic4} className="img-fluid slid" alt="hai kuch" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={F2} className="img-fluid slid" alt="hai kuch" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={F4} className="img-fluid slid" alt="hai kuch" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
