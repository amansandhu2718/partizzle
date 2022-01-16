import React, { useEffect, useState } from "react";
import "./card.css";
import "react-widgets/styles.css";
import NumberPicker from "react-widgets/NumberPicker";
import Axios from 'axios';

function Card(props) {
  const [add, setAdd] = useState(true);
  const [value, setValue] = useState(0);
  
//  useEffect(() => {
//     console.log("running of card");
//     if (value > 0 && value <= 20) {
//       sendReqforCart()
//     }
//   },[value]); 



function sendReqToCart(){
  console.log("sendReqToCart function called");
  const email=localStorage.getItem('ID');
  const token=localStorage.getItem('TOKEN');
  console.log(token);
  console.log(typeof(token));
  const pname=props.itemTitle;
  const qty=value;
  const data={email,token,pname,qty};
  
  console.log(data);
  
  
  Axios.post("http://localhost:5000/addToCart",data).then(res=>{
    if (res.data.res==true) {
      props.xyz(qty, props.itemId, props.itemTitle);
      console.log("added to cart");
    }
    else{
      alert("Item Not Added to cart")
    }
    })
}



  const jkq = (value) => {
    setValue(value);
    if (value > 0 && value <= 20) {
      setAdd(true);
    }
  };
  const handleLangChange = () => {
    var lang = value;
    if (lang >= 0 && lang <= 20) {
      sendReqToCart()
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
                //src={props.itemPhoto}
                src={`data:image/png;base64,${props.itemPhoto.data}`}
                className=" rounded-start imgcover2"
                alt="..."
              />
            </div>
            <div className=" col-6 col-sm-6 col-md-7 ">
              <div className="card-body">
                <h5 className="card-title">{props.itemTitle}</h5>
                <h5 className="card-title">{props.itemId}</h5>
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
