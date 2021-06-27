import React, { Component } from "react";
import "./themeform.css";

export default class Themeform extends Component {
  render() {
    return (
      <>
        <div className="box text-center">
          <form className="p-4">
            <h1 style={{ opacity: "0.3" }}>"{this.props.theme}"</h1>
            <h5 className=" mb-3 ">
              Count your age by friends, not years. ...{" "}
            </h5>

            <div>
              <select
                class="form-select mt-3"
                aria-label="Default select example"
              >
                <option selected>select no of guests</option>
                <option value="1">10</option>
                <option value="2">30</option>
                <option value="3">60</option>
              </select>
            </div>
            <div className="">
              <select class="form-select mt-3">
                <option selected>type of food</option>
                <option value="1">Vegetarian</option>
                <option value="2">Non-Vegetarian</option>
              </select>
            </div>
            <div className="">
              <select class="form-select mt-3">
                <option selected>type of Drink</option>
                <option value="1">Alcoholic</option>
                <option value="2">Non-Alcoholic</option>
              </select>
            </div>
            <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
              Confirm
            </button>
          </form>
        </div>
      </>
    );
  }
}
