import React from 'react';
import Navbar from '../../comps/header/Navbar'
import { Link, useHistory } from "react-router-dom";

function Profile(){
    const history=useHistory();

    function logMeOut(){
        let loggedIn=localStorage.getItem('ID');
        if (loggedIn) {
            localStorage.clear();
        }else{
history.push("/login")
window.location.reload(false);

        }
      
    }
    return(
     <>
        <Navbar/>
        <center>
        <h2 style={{color:"white",}}>Profile</h2>

        <button className="btn btn-danger" onClick={logMeOut}>Log Out</button>
        </center>
     </>
    )
}
export default Profile;