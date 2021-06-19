
import './App.css';
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Cart from './pages/Cart/Cart'
import Profile from './pages/Profile/Profile'
import Err from './pages/err404/Err404';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [state, setState] = useState("")
  useEffect(() => {
      fetch("http://localhost:5000").then(
          res => setState(res.data)
      )
  })
  return (
   <>
   <h1>{state}</h1>
   <form action="http://localhost:5000/" method="post">
          <input type="text" name="id" />
          <input type="password" name="pass" />
          <button type="submit"> send</button>
        </form>
   
  <BrowserRouter>
   <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/contact" component={Contact} exact/>
    <Route path="/cart" component={Cart} exact/>
    <Route path="/profile" component={Profile} exact/>
    <Route path="/" component={Err}/>
    </Switch>
    </BrowserRouter>
    
 </>
  );
}

export default App;
