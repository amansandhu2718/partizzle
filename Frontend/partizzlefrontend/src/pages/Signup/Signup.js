import React, { Component } from "react";
import "./Signup.css";

export default class Signup extends Component {
  render() {
    return (
      <>
        <div className="lgcontainer ">
          <div className="box text-center">
            <form className="p-4">
              <h1 style={{ opacity: "0.3" }}>Partizzle</h1>
              <h1 className="h3 mb-3 ">Signup </h1>
              <div className="form-floating ">
                <input
                  type="text"
                  className="form-control  "
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Full Name</label>
              </div>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control mt-3 "
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control mt-3 "
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Mobile </label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="form-floating">
                <input
                  type=" Confirm password"
                  className="form-control mt-3"
                  placeholder="Password"
                />
                <label for="floatingPassword">Confirm Password</label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary mt-3"
                type="submit"
              >
                Sign in
              </button>
              <p className="mt-2 mb-3 text-light">&copy; 2021</p>
            </form>
          </div>
        </div>
      </>
    );
  }
}
