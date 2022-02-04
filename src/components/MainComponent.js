import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import "./MainComponent.css";
import RentalForm from "./RentalForm";

const Main = () => {
  return (
    <div>
      <Header />
      <div id="colorstrip">
        <h2>Place your Bid</h2>
      </div>
      <RentalForm />
      <Footer />
    </div>
  );
};

export default Main;
