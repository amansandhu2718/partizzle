import React from "react";
import faker from "faker";
import Card from "../../comps/card/Card";
import Navbar from "../../comps/header/Navbar";
import "./beverages.css";
//import W3 from "../../assets/images/w3.jpeg";
import ABC from "../../assets/images/drinkbg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../comps/Footer/Footer";
//import { lorem } from "faker/locale/az";

function Beverages(props) {
  const notify = (qty, id, title) => {
    console.log(id);
    toast(`${qty} ${title} Added To Cart`);
    console.log(id);
    let obj = {
      prodId: id,
      title: title,
      qty: qty,
    };
    props.jk(obj);
    console.log(obj);
  };
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container mt-3">
        <img src={ABC} alt="blaw" className="img-fluid" />
        <hr className="text-light mt-3  bg-light" />
      </div>
      <div className="products container">
        <Card
          itemTitle="Amandeep"
          itemId="123456"
          itemDesc={faker.lorem.sentence()}
          itemPrice={5656}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemId="456789"
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
        <Card
          itemTitle={faker.name.firstName()}
          itemDesc={faker.lorem.sentence()}
          itemPrice={faker.commerce.price()}
          itemPhoto={faker.image.avatar()}
          xyz={notify}
        />
      </div>
      <Footer />
    </>
  );
}
export default Beverages;
