import React, { Component } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import Cur from "../../assets/images/cur..bg.png";
import pic1 from "../../assets/images/1.jpeg";
import pic2 from "../../assets/images/2.jpeg"
import pic3 from "../../assets/images/3.jpeg";
import pic4 from "../../assets/images/4.jpeg";
import V1 from "../../assets/vids/wine.mp4";
import "./Slider.css"

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
        
        )
    }
}
