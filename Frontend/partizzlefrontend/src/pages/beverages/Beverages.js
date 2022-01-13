import React from "react";
import { useState,useEffect } from "react";
import Card from "../../comps/card/Card";
import Navbar from "../../comps/header/Navbar";
import "./beverages.css";
import ABC from "../../assets/images/drinkbg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../comps/Footer/Footer";
import Axios from 'axios'
import coke from "../../assets/images/coke.webp";




function Beverages(props) {
 
  useEffect(() => {
    console.log("running");
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

  var reader = new FileReader;

  const printcard = ()=>{
    console.log(mydata);
    if (mydata.length>0) {
      const abc = mydata.map((element)=>{
        return(<Card
        itemTitle={element.name}
        itemId={element.id}
        itemDesc={element.description}
        itemPrice={element.price}
        itemPhoto={element.image}
        xyz={notify}
       /> )
       })
      return abc;
    }
    else{
      const abc = "Loading..."
      return abc;
    }
  }
  
 function getData() {
  
   Axios.get("http://localhost:5000/beverages").then(res=>{
     console.log(res.data);
    setmydata(res.data);
    })
}

return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container mt-3">
        <img src={ABC} alt="blaw" className="img-fluid" />
        <hr className="text-light mt-3  bg-light" />
      </div>
      <div className="products container">

    
{
printcard()
}
      


    
        
      </div>
      <Footer />
    </>
  );
}
export default Beverages;
