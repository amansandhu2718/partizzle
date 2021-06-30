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

function App() {
  let arr = [
    { prodId: 43, title: "two", qty: 0 },
    { prodId: 123456, title: "Amandeep", qty: 0 },

    { prodId: 134, title: "three", qty: 3 },
  ];
  let [hello, sethello] = useState([]);

  let updateCart = (obj) => {
    console.log(obj.prodId);

    arr.forEach((e) => {
      if (e.prodId === obj.prodId) {
        if (e.qty === obj.qty) {
        } else {
          if (obj.qty == 0) {
            console.log("zero");

            let pos = arr.indexOf(e);
            console.log("**************");
            console.log(arr);
            console.log(pos);
            arr.splice(pos, 1);

            console.log(arr);
            console.log("**************");
          } else {
            e.qty = obj.qty;
            console.log("updated");
            console.log(e.qty);
          }
        }
      } else {
        arr.push(obj);
        console.log("pushed");
      }
    });
  };

  return (
    <>
      <BrowserRouter>
        {console.log(hello)}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/cart" render={() => <Cart kl={hello} />} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route
            path="/beverages"
            render={() => <Beverages jk={updateCart} />}
            exact
          />
          <Route path="/theme" component={Theme} exact />
          <Route path="/food" component={Food} exact />
          <Route path="/decors" component={Decors} exact />
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
