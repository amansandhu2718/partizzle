import React from "react";
import Card from "../../comps/card/Card";
import Navbar from "../../comps/header/Navbar";
import "./beverages.css";
import W3 from "../../assets/images/w3.jpeg";
import ABC from "../../assets/images/drinkbg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from '../../comps/Footer/Footer'
function Beverages() {
  const notify = () => toast("Item Added to cart");
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container mt-3">
        <img src={ABC} alt="blaw" className="img-fluid" />
        <hr className="text-light mt-3  bg-light" />
      </div>
      <div className="products container">
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
        <Card w={W3} xyz={notify} />
      </div>
      <Footer />
    </>
  );
}
export default Beverages;
