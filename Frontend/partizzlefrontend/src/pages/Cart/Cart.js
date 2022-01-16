import React from "react";
import Navbar from "../../comps/header/Navbar";
import "./Cart.css";
import { QuantityPicker } from "react-qty-picker";
import CartItem from "../../comps/CartItem/CartItem";
import Axios from 'axios'
import { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Card from "../../comps/card/Card";


function Cart(props) {

  var [mydata, setmydata]=useState([]);
  let [total, setTotal] = useState(0);
  let [temp, setTemp] = useState(false);

  useEffect(() => {
    getData();
  },[]);

  // useEffect(() => {
  //   getData()
  // },[mydata]);


  function updateTotal(){
    //getData();
  }

  function countTotal(mydata){
    var tt=0
    for(let i = 0;i<mydata.length;i++){
        tt=tt+(mydata[i].price*mydata[i].qty);
    }
    setTotal(tt);
  }


  function getData() {
    const loggedIn=localStorage.getItem('ID');
    if (loggedIn) {
      Axios.get("http://localhost:5000/cart",{
        params: {
          Id: loggedIn
        }
      }).then(res=>{
      console.log(res.data);
     setmydata(res.data);
     countTotal(res.data)
     printcard();
     })  
    }
    else{
      alert("Login First")
    }  
 }

function notify() {
  
}

//  const notify = (qty, id, title) => {
//   toast(`${qty} ${title} Added To Cart`);
//   let obj = {
//     prodId: id,
//     title: title,
//     qty: qty,
//   };
//   //props.jk(obj);
 
// };



 const printcard = ()=>{
  console.log(mydata);

  if (mydata.length>0) {
    const abc = mydata.map((element)=>{
      if (element.qty>0) {
        
      return(<CartItem
        //update={updateTotal}
        itemTitle={element.id}
        //itemId={element.id}
        itemDesc={element.desc}
        itemPrice={element.price}
        itemPhoto={element.pic}
        itemQty={element.qty}
        //xyz={notify}
       /> )
       
      // return(<Card
      //   defaultValue={element.qty}
      //   itemTitle={element.name}
      //   itemId={element.id}
      //   itemDesc={element.description}
      //   itemPrice={element.price}
      //   itemPhoto={element.pic}
      //   xyz={notify}
      //  />)
       

      }
    })
    
    return abc;
  }
  
  else{
    const abc = "Loading..."
    return abc;
  }
  
}













  return (
    <>
      <Navbar />

      <div className="container   text-light">
        <div class="card w-100 mb-3 trans overr2">
          <div class="row g-0">
            <div class="col-md-8 p-3 overr ">
              <div class="jumbotron cartcolorbg shade">
                <h1 class="display-6  ">Shopping cart</h1>

                <hr class="my-4" />
                {printcard()}
              </div>
            </div>
            <div class="col-md-4  hhh">
              <div class="card-body">
                <div class="jumbotron shade p-4">
                  <h1 class="display-6">Summary</h1>

                  <hr class="my-4" />
                  <div className="w-100 leftright">
                    <h5> Subtotal</h5>
                    <h5> {total} /- RS</h5>
                  </div>
                  <div className="w-100 leftright">
                    <p> Delivery Charges</p>
                    <p> 100 /- RS</p>
                  </div>
                  <div className="w-100 leftright">
                    <p> Discount</p>
                    <p> 50 /- RS</p>
                  </div>
                  <form action="">
                    <hr class="my-4" />
                    <div className="w-100 leftright">
                      <h5> Total price</h5>
                      <h5> {total+50} /- RS</h5>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">
                        Payment method
                      </label>

                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option value="" disabled selected>
                          Select your option
                        </option>
                        <option>Paytm</option>
                        <option>COD</option>
                        <option>Debit card</option>
                        <option>Credit Card</option>
                        <option>Net banking</option>
                      </select>
                    </div>
                    <p class="lead mt-3">
                      <a
                        class="btn btn-primary btn-lg w-100"
                        href="#"
                        role="button"
                      >
                        Checkout
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
