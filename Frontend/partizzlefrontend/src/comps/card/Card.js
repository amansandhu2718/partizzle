import React, { useState } from "react";
import "./card.css";
import "react-widgets/styles.css";
import NumberPicker from "react-widgets/NumberPicker";

function Card(props) {
  const [add, setAdd] = useState(true);
  const [value, setValue] = useState(0);
  const jkq = (value) => {
    setValue(value);
    if (value > 0 && value <= 20) {
      setAdd(true);
    }
  };
  const handleLangChange = () => {
    var lang = value;
    if (lang > 0 && lang <= 20) {
      props.xyz(lang, props.itemId, props.itemTitle);
    } else {
      setAdd(false);
    }
  };
  return (
    <>
      <div className="cusmar pblack2 text-light">
        <div className="img-square-wrapper" style={{ height: "100%" }}>
          <img
            className="img-fluid my-auto mm"
            src={props.itemPhoto}
            alt="Card  cap"
          />
        </div>
        <div className="cen p-2">
          <div>
            <h4 style={{ textAlign: "left" }}>{props.itemTitle}</h4>
            <p className="cc" style={{ textAlign: "left" }}>
              {props.itemDesc}
            </p>
            <p>{props.itemPrice}</p>
            <div>
              <NumberPicker
                min={0}
                defaultValue={0}
                max={20}
                value={value}
                onChange={jkq}
              />
            </div>
            <button className="btn btn-primary mt-4" onClick={handleLangChange}>
              ADD TO CART
            </button>
            <p className="card-err mt-2 ">
              {add ? null : "Select Atleast One Item"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
