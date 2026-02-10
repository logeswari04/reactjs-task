import React from "react";
import {Link} from "react-router-dom"
import pizza from "../Assets/pizza.jpeg"
import "./Home.css"


export default function Homes() {
  

  return (
    <div>
    <div className="home"   >
       < img src={pizza} alt="pizza Logo" />
   
    </div>
      <div className="headerContainer">
        <div className="hero">
<h1> Pedro's Pizzeria </h1>
<p>PIZZA TO FIT ANY TASTE</p>
</div>
<Link to="/menu">
<button>Order Now</button>
</Link>
</div>
</div>
  );
}