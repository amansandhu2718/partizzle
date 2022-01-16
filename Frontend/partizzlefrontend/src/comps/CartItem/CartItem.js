import React, { useState, useEffect } from "react";
import image from "../../assets/images/2.jpeg";
import "./CartItem.css";
import { QuantityPicker } from "react-qty-picker";
import Axios from 'axios';
import NumberPicker from "react-widgets/NumberPicker";



export default function CartItem(props) {
  
  const [quantity, setquantity] = useState(props.itemQty)
  const [add, setAdd] = useState(true);
  const [value, setValue] = useState(0);
  
  useEffect(() => {
   sendReqToCart();
  //  props.update();
  }, [quantity])
  

  function sendReqToCart(){
  
    const email=localStorage.getItem('ID');
    const token=localStorage.getItem('TOKEN');
    const pname=props.itemTitle;
    const pdesc=props.itemDesc;
    const pprice=props.itemPrice;
    const ppic=props.itemPhoto;  
    const qty=quantity;
    const data={email,token,pname,qty,pdesc,ppic,pprice};
    
    console.log(data);
    
    
    Axios.post("http://localhost:5000/addToCart",data).then(res=>{
      if (res.data.res==true) {
        //props.xyz(qty, props.itemId, props.itemTitle);
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
                  <img  src={`data:image/png;base64,${props.itemPhoto.data}`} alt="" className="cartitemcardimage" />
                
              </div>
              <div className="col col-12 col-sm-12 col-md-8 mt-3">
                <div className="cartitemcardcontent">
                  <div className="w-100 leftright">
                    <h5>{props.itemTitle}</h5>
                    <QuantityPicker min={0} max={25} value={quantity} onChange={(value)=>{
                      setquantity(value);
                    }}/>
                    {/* <NumberPicker
                    className="helloa"
                    min={0}
                    defaultValue={0}
                    max={20}
                    value={quantity}
                    onChange={jkq}
                    onfocus={null}

                  /> */}
                    <span></span>
                  </div>
                  <hr />
                  <p>
                    {props.itemDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
}



