import React from "react";
import Navbar from "../../comps/header/Navbar";
import "./Cart.css";
import { QuantityPicker } from "react-qty-picker";
import CartItem from "../../comps/CartItem/CartItem";

function Cart(props) {
  return (
    <>
      <Navbar />

      <div className="container   text-light">
        <div class="card w-100 mb-3 trans overr2">
          <div class="row g-0">
            <div class="col-md-8 p-3 overr ">
              <div class="jumbotron cartcolorbg shade">
                <h1 class="display-6  ">Shopping cart</h1>

                <hr class="my-4" />
                <CartItem />
                <CartItem />
                <CartItem />
              </div>
            </div>
            <div class="col-md-4  hhh">
              <div class="card-body">
                <div class="jumbotron shade p-4">
                  <h1 class="display-6">Summary</h1>

                  <hr class="my-4" />
                  <div className="w-100 leftright">
                    <h5> Subtotal</h5>
                    <h5> 2000 /- RS</h5>
                  </div>
                  <div className="w-100 leftright">
                    <p> Delivery Charges</p>
                    <p> 100 /- RS</p>
                  </div>
                  <div className="w-100 leftright">
                    <p> Discount</p>
                    <p> -200 /- RS</p>
                  </div>
                  <form action="">
                    <hr class="my-4" />
                    <div className="w-100 leftright">
                      <h5> Total price</h5>
                      <h5> 1900 /- RS</h5>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">
                        Payment method
                      </label>

                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option value="" disabled selected>
                          Select your option
                        </option>
                        <option>Paytm</option>
                        <option>COD</option>
                        <option>Debit card</option>
                        <option>Credit Card</option>
                        <option>Net banking</option>
                      </select>
                    </div>
                    <p class="lead mt-3">
                      <a
                        class="btn btn-primary btn-lg w-100"
                        href="#"
                        role="button"
                      >
                        Checkout
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
