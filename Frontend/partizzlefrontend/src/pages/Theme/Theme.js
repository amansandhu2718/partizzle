import "./Theme.css"
import Navbar from '../../comps/header/Navbar'
import React, { useRef, useState , Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Mousewheel,Pagination
  } from 'swiper/core';
  
  SwiperCore.use([Mousewheel,Pagination]);

export default class Theme extends Component {
    render() {
        return (
            <>
            <div className="pos"><Navbar /></div>
            <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{"clickable": true}} className="myySwiper">
                <SwiperSlide>
                    <div className="full"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="full"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="full"></div>
                </SwiperSlide>
            </Swiper>
        
            </>
        )
    }
}
