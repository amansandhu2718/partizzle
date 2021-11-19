import React, { useState } from "react";
import Navbar from "../../comps/header/Navbar";
import Footer from "../../comps/Footer/Footer";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const add = () => {
    console.log(category);
    const data = { name, description, price, category };
    axios.post("http://localhost:5000/add-data", data).then((res) => {
      alert("Data Added");
    });
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
                  <h1 className="mainheading">ADD DATA</h1>

                  <form
                    action=""
                    method="post"
                    className="loginform"
                    encType="multipart/form-data"
                  >
                    <input
                      type="text"
                      className="form-control mt-5"
                      placeholder="Name"
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                    <input
                      type="text"
                      className="form-control mt-3"
                      placeholder="Description"
                      onChange={(event) => {
                        setDescription(event.target.value);
                      }}
                    />
                    <input
                      type="number"
                      className="form-control mt-3"
                      placeholder="Price"
                      onChange={(event) => {
                        setPrice(event.target.value);
                      }}
                    />
                    <input
                      type="file"
                      className="form-control mt-3"
                      name="avatar"
                      onChange={(event) => {
                        setImage(event.target.value);
                      }}
                    />
                    <select
                      className="form-control mt-3"
                      onChange={(event) => {
                        setCategory(event.target.value);
                      }}
                    >
                      <option value="">Select A Category</option>
                      <option value="drinks">Drinks</option>
                      <option value="food">Food</option>
                      <option value="Decor">Decor</option>
                    </select>
                    <input
                      type="button"
                      value="ADD Data"
                      className="btn btn-lg btn-primary mt-4"
                      onClick={add}
                    />
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
  );
}
