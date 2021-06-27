import "./Theme.css";
import Navbar from "../../comps/header/Navbar";
import Footer from "../../comps/Footer/Footer";
import React, { Component } from "react";

export default class Theme extends Component {
  render() {
    return (
      <>
        <div className="def">
          <Navbar />
        </div>

        <div className="scroll-container">
          <div className="scroll-area one">1</div>
          <div className="scroll-area two ">2</div>
          <div className="scroll-area three">3</div>
          <div className="scroll-area four" style={{ height: "auto" }}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
