import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="lgcontainer ">
          <div className="box text-center">
            <form className="p-4">
              <h1 style={{ opacity: "0.3" }}>Partizzle</h1>
              <h1 className="h3 mb-3 ">Login </h1>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control  "
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control mt-3"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
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
