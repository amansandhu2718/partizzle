import React, { useState } from "react";
import "../../pages/Login/Login.css";
import Navbar from "../../comps/header/Navbar";
import Footer from "../../comps/Footer/Footer";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"


export default function Signup() {


  const history = useHistory();
  
  const [name, setName] = useState("")
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [conpassword, setConpassword] = useState("")
  const [address, setAddress] = useState("")
  const [mobile, setMobile] = useState("")

  

  const signup = () =>{
    const data = {name,email,password,conpassword,address,mobile}
    axios.post("http://localhost:5000/signup",data).then((res)=>{
      if (res.data.status==200) {
        history.push("/login")
      }else{
        console.log(res.data.status);
        alert(res.data.msg);
        // history.push("/sign-up")
      }
    })
  };


  return (
    <>
        <Navbar />
        <div className="loginbgg">
          <section>
            <div className="container mainsection">
              <div className="row w-100">
                <div className="col col-12  col-md-6 col-lg-5 ">
                  <div className="writings my-auto">
                    <h1 className="mainheading">Sign Up</h1>

                    <form action="" method="post" className="loginform">
                      <input
                        type="text"
                        className="form-control mt-5"
                        placeholder="Name"
                        onChange={(event)=>{
                          setName(event.target.value);
                        }}
                      />
                      <input
                        type="Email"
                        className="form-control mt-3"
                        placeholder="Email"
                        onChange={(event)=>{
                          setEmail(event.target.value);
                        }}
                      />
                      <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Address"
                        onChange={(event)=>{
                          setAddress(event.target.value);
                        }}
                      />
                      <input
                        type="number"
                        className="form-control mt-3"
                        placeholder="Mobile"
                        onChange={(event)=>{
                          setMobile(event.target.value);
                        }}
                      />
                      <input
                        type="Password"
                        className="form-control mt-3"
                        placeholder="Password"
                        onChange={(event)=>{
                          setPassword(event.target.value);
                        }}
                      />
                      <input
                        type="Password"
                        className="form-control mt-3"
                        placeholder="Confirm Password"
                        onChange={(event)=>{
                          setConpassword(event.target.value);
                        }}
                      />
                      <input
                        type="button"
                        value="Sign Up"
                        className="btn btn-lg btn-primary mt-4"
                        onClick={signup}
                      />

                      <Link
                        to="/login"
                        className="mt-2"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Contact Us"
                      >
                        Already a user? Sign In here
                      </Link>
                    </form>
                  </div>
                </div>
                <div className="col col-12 col-lg-6 "></div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
  )
}












// export default class Signup extends Component {
//   render() {
//     return (
      
//     );
//   }
// }
