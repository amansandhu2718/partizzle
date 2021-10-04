import React, { Component } from "react";
import "./Login.css";
import Navbar from "../../comps/header/Navbar"
import Mainbg from "../../assets/images/party.svg"
import Footer from "../../comps/Footer/Footer";



export default class Login extends Component {
  render() {
    return (
      <><Navbar />
      <div style={{backgroundColor:"black",marginTop:'10px'}}>
        <section>
          <div className="container mainsection">
            <div className="row">
              <div className="col col-12 col-lg-6 centerr">
                <div className="writings my-auto">
                  <h1 className="mainheading">PARTIZLE</h1>
                  <h5 className="secondheading">LOGIN</h5>
                  
                </div>
              </div>
              <div className="col col-12 col-lg-6 ">
                <div className="imgmain">
                  <img src={Mainbg} className="img-fluid homecol" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        <Footer />
      </>
    );
  }
}
