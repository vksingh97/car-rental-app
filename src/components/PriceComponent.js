import React from "react";
import "./PriceComponent.css";
import Header from "./HeaderComponent";

const Price = () => {
  return (
    <div>
      <Header />
      <div id="colorstrip">
        <h2>Place your Bid</h2>
      </div>
      <div className="pricebox">
        <h6>JOURNEY DETAILS</h6>
      </div>
    </div>
  );
};

export default Price;
