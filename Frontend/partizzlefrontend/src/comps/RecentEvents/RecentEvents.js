import React, { Component } from 'react'
import P1 from "../../assets/images/P1.jpg";
import P2 from "../../assets/images/P2.jpg";


export default class RecentEvents extends Component {
    render() {
        return (
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
        )
    }
}
