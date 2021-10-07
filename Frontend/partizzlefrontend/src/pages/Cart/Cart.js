import React from "react";
import Navbar from "../../comps/header/Navbar";
import "./Cart.css";
import { QuantityPicker } from 'react-qty-picker';

function Cart(props) {
  return (
    <>
      {console.log(props.kl)}
      <Navbar />

      <div className="container bilak mt-3">

      <QuantityPicker min={1} max={25} smooth  />
        
      </div>
    </>
  );
}

export default Cart;
