import React from "react";
import Card from "../../comps/card/Card";
import Navbar from "../../comps/header/Navbar";
import "./decors.css";
import D1 from "../../assets/images/d1.jpg";
import D2 from "../../assets/images/d2.jpg";
import D3 from "../../assets/images/d3.jpg";
import D4 from "../../assets/images/d4.jpg";
import ABC from "../../assets/images/drinkbg.png";
import Decorbg from "../../assets/images/decorbg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../comps/Footer/Footer";
function Decors() {
  const notify = () => toast("Item Added to cart");
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container mt-3">
        <img src={Decorbg} alt="blaw" className="img-fluid" />
        <hr className="text-light mt-3  bg-light" />
      </div>
      <div className="products container">
        <Card w={D1} xy0z={notify} />
        <Card w={D2} xyz={notify} />
        <Card w={D4} xyz={notify} />
        <Card w={D1} xyz={notify} />
        <Card w={D2} xyz={notify} />0
        <Card w={D4} xyz={notify} />
        <Card w={D1} xyz={notify} />
        <Card w={D2} xyz={notify} />
        <Card w={D4} xyz={notify} />
      </div>
      <Footer />
    </>
  );
}
export default Decors;
