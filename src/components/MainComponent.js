import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import "./MainComponent.css";

const Main = () => {
  return (
    <div>
      <Header />
      <div id="colorstrip">
        <h2>Place Your Bid</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
