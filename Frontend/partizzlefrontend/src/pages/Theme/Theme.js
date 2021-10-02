import "./Theme.css";
import Navbar from "../../comps/header/Navbar";
import Footer from "../../comps/Footer/Footer";
import React, { Component } from "react";

export default class Theme extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="theme1 theme">
          <div className="row themerow"></div>
          <div className="row themerow">
            <div className="col themecol col-12 col-sm-12 col-md-6">
              <h1 className="themehead1">Birthday Theme</h1>
              <p className="themepara1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
              <div className="btnrow">
                <div className="xr">
                  <label className="text-light ">Veg only</label>
                  <input type="checkbox" className="mx-2 mycheckbox" />
                </div>
                <input
                  type="button"
                  className="mt-3 btn btn-primary themebtn1"
                  value="Add to cart"
                />
              </div>
            </div>
            <div className="col colhid "></div>
          </div>
        </div>
        <div className="theme2 theme"></div>
        <div className="theme3 theme"></div>
        <div className="theme4 theme"></div>
        <Footer />
      </>
    );
  }
}
