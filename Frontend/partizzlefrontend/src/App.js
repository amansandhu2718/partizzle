import "./App.css";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import Err from "./pages/err404/Err404";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Beverages from "./pages/beverages/Beverages";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Theme from "./pages/Theme/Theme";
import Food from "./pages/Food/Food";
import Decors from "./pages/Decors/Decors";
import React, { useState } from "react";
import Admin from "./pages/Admin/Admin";

function App() {
  let arr = [
    { prodId: 43, title: "two", qty: 0 },
    { prodId: 123456, title: "Amandeep", qty: 0 },

    { prodId: 134, title: "three", qty: 3 },
  ];

  // let updateCart = (obj) => {
  //   console.log(obj.prodId);

  //   arr.forEach((e) => {
  //     if (e.prodId === obj.prodId) {
  //       if (e.qty === obj.qty) {
  //       } else {
  //         if (obj.qty == 0) {
  //           console.log("zero");

  //           let pos = arr.indexOf(e);
  //           console.log("**************");
  //           console.log(arr);
  //           console.log(pos);
  //           arr.splice(pos, 1);

  //           console.log(arr);
  //           console.log("**************");
  //         } else {
  //           e.qty = obj.qty;
  //           console.log("updated");
  //           console.log(e.qty);
  //         }
  //       }
  //     } else if (e.prodId != obj.prodId) {
  //       arr.push(obj);
  //       console.log("pushed");
  //     }
  //   });
  // };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/cart" render={() => <Cart />} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/sign-up" component={Signup} exact />
          <Route
            path="/beverages"
            render={() => <Beverages link="beverages" />}
            exact
          />
          <Route path="/theme" component={Theme} exact />
          <Route path="/food" 
           render={()=> <Beverages link="food"/>}
           exact />
          <Route path="/decors" 
          render={()=> <Beverages link="decors"/>}
          exact />
          <Route path="/admin" component={Admin} exact/>
          <Route path="/" component={Err} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
// console.log(arr);
// let pos = arr.indexOf(e);
// arr.splice(pos, 1);
// console.log(arr);
