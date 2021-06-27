import "./Theme.css";
import Navbar from "../../comps/header/Navbar";
import Footer from "../../comps/Footer/Footer";
import React, { Component } from "react";
import Themeform from "../../comps/themeform/Themeform";
export default class Theme extends Component {
  render() {
    return (
      <>
        <div className="def">
          <Navbar />
        </div>

        <div className="scroll-container">
          <div className="scroll-area one">
            <div className="birthday">
              <Themeform theme="Birthday" />
            </div>
          </div>
          <div className="scroll-area two ">
            <div className="birthday">
              <Themeform theme="Haloween" />
            </div>
          </div>
          <div className="scroll-area three">
            <div className="birthday">
              <Themeform theme="Christmas" />
            </div>
          </div>
          <div
            className="scroll-area four"
            style={{ height: "auto", width: "100vw" }}
          >
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
