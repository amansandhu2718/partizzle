import React from "react";
import { useState,useEffect } from "react";
import faker from "faker";
import Card from "../../comps/card/Card";
import Navbar from "../../comps/header/Navbar";
import "./beverages.css";
//import W3 from "../../assets/images/w3.jpeg";
import ABC from "../../assets/images/drinkbg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../comps/Footer/Footer";
import Axios from 'axios'
import beverages_data from "../home/data.json";
import coke from "../../assets/images/coke.webp";
//import { lorem } from "faker/locale/az";




function Beverages(props) {
 
  useEffect(() => {
    getData();
  },[]);

 let [mydata, setmydata]=useState([]); 
  const notify = (qty, id, title) => {
    toast(`${qty} ${title} Added To Cart`);
    let obj = {
      prodId: id,
      title: title,
      qty: qty,
    };
    props.jk(obj);
   
  };

  
  
 function getData() {
  
   Axios.get("http://localhost:5000/beverages").then(res=>{
    setmydata(res.data);
    })

}
return (
    <>
      <ToastContainer />
      {console.log(mydata)}
      <Navbar />
      <div className="container mt-3">
        <img src={ABC} alt="blaw" className="img-fluid" />
        <hr className="text-light mt-3  bg-light" />
      </div>
      <div className="products container">

    
{mydata.map((element)=>{
 return(<Card
 itemTitle={element.name}
 itemId={element.id}
 itemDesc={element.description}
 itemPrice={element.price}
 itemPhoto={coke}
 xyz={notify}
/> )
})}
      


    
        
      </div>
      <Footer />
    </>
  );
}
export default Beverages;
