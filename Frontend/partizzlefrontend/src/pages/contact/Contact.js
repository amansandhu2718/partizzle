// import "./Navbar.css";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../../comps/header/Navbar";
import Footer from "../../comps/Footer/Footer";
import { Link, useHistory } from "react-router-dom";
import imgg from "../../assets/images/contactt.svg"

function Contact() {
 
  return (
    <>
     <Navbar/>
     <div style={{color:"white"}}>
     <div  className="main" style={{paddingTop:"7vh"}}>
 <div className="container-fluid kcontactouter">
<div className="container">
    <div className="row">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-5 kcontact">
<br/>
        <h1 >CONTACT US</h1>


    <form className="w-100" style={{display: "flex",justifyContent: "center", alignItems: "center",flexDirection: "column"}}>
      <div className="mb-3 w-100">
        <label for="exampleInputFirst name" className="form-label">First name</label>
        <input type="First name" className="form-control " id="exampleInputFirst name"/>

      </div>
      <div className="mb-3 w-100">
        <label for="exampleInputLast name" className="form-label">Last name</label>
        <input type="Last name" className="form-control" id="exampleInputLast name"/>
      </div>
      <div className="mb-3 w-100 ">
        <label for="exampleInputEmail" className="form-label">Email</label>
        <input type="Email" className="form-control" id="exampleInputwEmail"/>
       </div>
       <div className="mb-3 w-100">
        <label for="exampleInputMessage" className="form-label">Message</label>
        <textarea className="form-control" id="exampleInputMessage" rows="2" cols="50"></textarea>
      </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
      </div><div className="col lg-1"></div>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-6" style={{paddingTop: "11vh"}}>
        <img src={imgg} alt="" style={{width: "100%",height: "40vh"}} className="kimgheight " />
      </div>

    </div>
    
     <br/>
    
   <br/>
   </div>
 </div>
 <iframe className="w-100 "style={{height:"40vh"}}  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=rohini%20sector%205%20New%20Delhi+(JIMS)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://embedmaps.org/'>add map to website</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=83bffde56cf3f37e3bdbbb58a9e8ea0cf61879dc'></script>
  
 </div>
     </div>
     <Footer/>
    </>
  );
}

export default Contact;
