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
      <div className="col col-12 col-sm-6 col-md-6 col-lg-4 p-2  ">
        <div className="card aabbcc mb-3 itemcard" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className=" col-6 col-sm-6 col-md-5  imgcover">
              <img
                src={props.itemPhoto}
                className=" rounded-start imgcover2"
                alt="..."
              />
            </div>
            <div className=" col-6 col-sm-6 col-md-7 ">
              <div className="card-body">
                <h5 className="card-title">{props.itemTitle}</h5>
                <p className="card-text cardtext">{props.itemDesc}</p>
                <p className="card-text">
                  <h4>{props.itemPrice} Rs</h4>
                  <NumberPicker
                    className="helloa"
                    min={0}
                    defaultValue={0}
                    max={20}
                    value={value}
                    onChange={jkq}
                    onfocus={null}
                  />
                  <p className="card-err ">
                    {add ? null : "Select Atleast One Item"}
                  </p>
                  <button
                    className="btn btn-primary  w-100"
                    onClick={handleLangChange}
                  >
                    ADD TO CART
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
