import React from "react";
import Card from "../../comps/card/Card";
import Navbar from "../../comps/header/Navbar";
import "./Food.css";
import F1 from "../../assets/images/f1.jpg";
import F2 from "../../assets/images/f2.jpg";
import F3 from "../../assets/images/f3.jpg";
import F4 from "../../assets/images/f4.jpg";
import food_data from "../Food/data.json";
import burger from "../../assets/images/burger.jpg";

//import ABC from "../../assets/images/drinkbg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../comps/Footer/Footer";
function Beverages() {
  const notify = () => toast("Item Added to cart");
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container mt-3">
        <img src={F3} alt="blaw" className="img-fluid" />
        <hr className="text-light mt-3  bg-light" />
      </div>
      <div className="products container">
      {food_data.products.map(element => (
            <Card
          itemTitle={element.name}
          itemId={element.id}
          itemDesc={element.description}
          itemPrice={element.price}
          itemPhoto={burger}
          xyz={notify}
        />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default Beverages;
