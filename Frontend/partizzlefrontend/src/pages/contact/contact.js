import React, { useState, useEffect } from "react";
import Navbar from "../../comps/header/Navbar";

function Contact() {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <>
      <ul>
        {/* {dd.map((e) => {
          return <p> {e.name}</p>;
        })} */}
      </ul>
      <Navbar />
      <h1>contact</h1>
    </>
  );
}
export default Contact;
