import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Themes.css";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Mousewheel,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Mousewheel]);

export default class Themes extends Component {
  render() {
    return (
      <div className="container-fluid abc ">
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
            <div className="THEME"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="THEME"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="THEME"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="THEME"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="THEME"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="THEME"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="THEME"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="THEME"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="THEME"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
