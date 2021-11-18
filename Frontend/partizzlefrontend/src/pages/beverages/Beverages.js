import React from "react";
import faker from "faker";
import Card from "../../comps/card/Card";
import Navbar from "../../comps/header/Navbar";
import "./beverages.css";
//import W3 from "../../assets/images/w3.jpeg";
import ABC from "../../assets/images/drinkbg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../comps/Footer/Footer";
import beverages_data from "../home/data.json";
import coke from "../../assets/images/coke.webp";
//import { lorem } from "faker/locale/az";




function Beverages(props) {
  const notify = (qty, id, title) => {
    toast(`${qty} ${title} Added To Cart`);
    let obj = {
      prodId: id,
      title: title,
      qty: qty,
    };
    props.jk(obj);
    // console.log(obj);
  };
  



  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container mt-3">
        <img src={ABC} alt="blaw" className="img-fluid" />
        <hr className="text-light mt-3  bg-light" />
      </div>
      <div className="products container">
        
        
        {beverages_data.products.map(element => (
            <Card
          itemTitle={element.name}
          itemId={element.id}
          itemDesc={element.description}
          itemPrice={element.price}
          itemPhoto={coke}
          xyz={notify}
        />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default Beverages;
