import React, { Component } from 'react'
import Cur1 from "../../assets/images/cur..bg1.png";
import Cur3 from "../../assets/images/cur.3.png";
import V2 from "../../assets/vids/My Video.mp4";


export default class Carousel extends Component {
    render() {
        return (
            <div>
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
                    style={{
                      pointerEvents: "none",
                    }}
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
            </div>
        )
    }
}
