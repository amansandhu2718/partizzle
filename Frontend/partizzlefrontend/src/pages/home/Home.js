import React from "react";
import "./Home.css";
import Navbar from "../../comps/header/Navbar";

import Carousel from "../../comps/carousel/Carousel";
import CardHome from "../../comps/Card Home/CardHome";
import Slider from "../../comps/Slider/Slider";
import RecentEvents from "../../comps/RecentEvents/RecentEvents";
import Footer from "../../comps/Footer/Footer";

function Home() {
  return (
    <><Navbar />
     <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
     
      <Carousel />
      <CardHome />
      <Slider />
      <RecentEvents />
      <Footer />
     </div>
    </>
  );
}
export default Home;
