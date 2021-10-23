import React, { Component } from "react";
import image from "../../assets/images/2.jpeg";
import "./CartItem.css";
import { QuantityPicker } from "react-qty-picker";
export default class CartItem extends Component {
  render() {
    return (
      <div className="caritemcard">
        <div
          style={{
            position: "absolute",
            right: 0,
            color: "#C32A43",
            textAlign: "center",
            top: 0,
            padding: "8px",
            display: "inline",
            borderRadius: "6px",
            zIndex: "999",
          }}
        >
          <i class="fas fa-lg fa-trash"></i>
        </div>
        <div className="row ">
          <div className="col col-12 col-sm-12 col-md-4  text-center">
            <img src={image} alt="" className="cartitemcardimage" />
          </div>
          <div className="col col-12 col-sm-12 col-md-8 mt-3">
            <div className="cartitemcardcontent">
              <div className="w-100 leftright">
                <h5> Item name</h5>
                <QuantityPicker min={0} />
                <span></span>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                debitis, hic velit voluptate molestiae quaerat voluptates
                aperiam porro alias culpa?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
