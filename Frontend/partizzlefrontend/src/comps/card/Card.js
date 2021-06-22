import React from "react";
import "./card.css";

function Card(props) {
  return (
    <>
      <div className="cusmar pblack2 text-light">
        <div
          className="img-square-wrapper"
          style={{ height: "100%", backgroundColor: "red" }}
        >
          <img className="img-fluid my-auto mm" src={props.w} alt="Card  cap" />
        </div>
        <div className="cen p-2">
          <div>
            <h4 style={{ textAlign: "left" }}>Card title</h4>
            <p className="cc" style={{ textAlign: "left" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary mt-2">ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
