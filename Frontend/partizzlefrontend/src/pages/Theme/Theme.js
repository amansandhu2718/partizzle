import "./Theme.css";
import Navbar from "../../comps/header/Navbar";
import Themes from "../../comps/Themes/Themes";
import React, { Component } from "react";
import Themeform from "../../comps/themeform/Themeform";
export default class Theme extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="outerthemebg">
          <div className="ThemeBg">
            <Themes />
          </div>
        </div>
      </>
    );
  }
}
