import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../comps/header/Navbar";
import Footer from "../../comps/Footer/Footer";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"

export default function Login() {

  const history = useHistory();

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  

  const login = () =>{
    const data = {email, password}
    axios.post("http://localhost:5000/signin",data).then((res)=>{
      const mytoken = res.data.token;
      if (res.data.statusCode==200 && res.data.res==true) {
        localStorage.setItem('ID', email);
        localStorage.setItem('TOKEN', mytoken);
        history.push("/")
      } else {
        alert("Credentials Doesn't Match")
        history.push("/login")
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
                    <h1 className="mainheading">Sign in</h1>

                    <form action="" method="post" className="loginform">
                      <input
                        type="Email"
                        className="form-control mt-5"
                        placeholder="Email"
                        onChange={(event)=>{
                          setEmail(event.target.value);
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
                        type="button"
                        value="Sign In"
                        className="btn btn-lg btn-primary mt-4"
                        onClick={login}
                      />

                      <Link
                        to="/sign-up"
                        className="mt-2"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Contact Us"
                      >
                        Not a user, Sign up here
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
































// export default class Login extends Component {
//   render() {


//     const [ user, setUser] = useState({
//       email:"",
//       password:""
//   })



//     return (
      // <>
      //   <Navbar />
      //   <div className="loginbgg">
      //     <section>
      //       <div className="container mainsection">
      //         <div className="row w-100">
      //           <div className="col col-12  col-md-6 col-lg-5 ">
      //             <div className="writings my-auto">
      //               <h1 className="mainheading">Sign in</h1>

      //               <form action="" method="post" className="loginform">
      //                 <input
      //                   type="Email"
      //                   className="form-control mt-5"
      //                   placeholder="Email"
      //                 />
      //                 <input
      //                   type="Password"
      //                   className="form-control mt-3"
      //                   placeholder="Password"
      //                 />
      //                 <input
      //                   type="button"
      //                   value="Sign In"
      //                   className="btn btn-lg btn-primary mt-4"
      //                 />

      //                 <Link
      //                   to="/sign-up"
      //                   className="mt-2"
      //                   data-toggle="tooltip"
      //                   data-placement="bottom"
      //                   title="Contact Us"
      //                 >
      //                   Not a user, Sign up here
      //                 </Link>
      //               </form>
      //             </div>
      //           </div>
      //           <div className="col col-12 col-lg-6 "></div>
      //         </div>
      //       </div>
      //     </section>
      //   </div>
      //   <Footer />
      // </>
//     );
//   }
// }






