import React from "react";
import Card from "../../comps/card/Card";
import Navbar from "../../comps/header/Navbar";
import "./beverages.css";
import W3 from "../../assets/images/w3.jpeg";
import ABC from "../../assets/images/cur..bg1.png";

function Beverages() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <img src={ABC} alt="blaw" className="img-fluid" />
        <hr className="text-light mt-3  bg-light" />
      </div>

      <div className="products container">
        <Card w={W3} xyz="ritik" />
        <Card w={W3} />
        <Card w={W3} />
        <Card w={W3} />
        <Card w={W3} />
        <Card w={W3} />
        <Card w={W3} />
        <Card w={W3} />
        <Card w={W3} />
        <Card w={W3} />
        <Card w={W3} />
        <Card w={W3} />
        <Card w={W3} />
      </div>
    </>
  );
}
export default Beverages;
