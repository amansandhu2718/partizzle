import React, { Component } from 'react'
import P1 from "../../assets/images/P1.jpg";
import { Link } from "react-router-dom";
import "./CardHome.css"


export default class CardHome extends Component {
    render() {
        return (
            <div className="container mt-3 text-light">
        <div className="row mt-3">
          <div className="col-lg-3 pt-3">
            <div className="bgmehroon2">
            
              <div className="card bgmehroon" style={{ width: "100%" }}>
              <Link to="/theme">
                <div className="card-body">
                  <h5 className="card-title">BOOK A THEME</h5>
                  <p className="card-text">
                    Choose theme of "YOUR" choice for "YOUR" party
                  </p>
                  <img src={P1} className="img-fluid" alt="" />
                </div>
                </Link>
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
        )
    }
}
