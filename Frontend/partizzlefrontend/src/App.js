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

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/beverages" component={Beverages} exact />
          <Route path="/theme" component={Theme} exact />
          <Route path="/food" component={Food} exact />
          <Route path="/" component={Err} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
