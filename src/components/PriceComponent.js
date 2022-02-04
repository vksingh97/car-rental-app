import React, { useState } from "react";
import "./PriceComponent.css";
import Header from "./HeaderComponent";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const testInfo = {
  source: "delhi",
  destination: "noida",
  car_type: "SUV",
  travellers: "5",
};

const Price = () => {
  const [bidAmount, setBidAmount] = useState(0);

  return (
    <div>
      <Header />
      <div id="colorstrip">
        <h2>Place your Bid</h2>
      </div>
      <div className="pricebox">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <h6>JOURNEY DETAILS</h6>
          </Grid>
          <div className="edit-button">
            <Link to="/">
              <Grid item xs={4}>
                <EditOutlinedIcon color="primary" className="edit-icon" />
                <span className="edit-text">
                  <strong>Edit</strong>
                </span>
              </Grid>
            </Link>
          </div>
        </Grid>
        <br />
        <div className="row">
          <h3>{`${testInfo.source} - ${testInfo.destination}`}</h3>
          {testInfo.travellers === "1" ? (
            <h5>{`${testInfo.travellers} Person, ${testInfo.car_type}`}</h5>
          ) : (
            <h5>{`${testInfo.travellers} Persons, ${testInfo.car_type}`}</h5>
          )}
        </div>
        <hr />
        <br />
        <div className="input-amount">
          <p>&#x20b9;</p>
          <input
            required
            type="text"
            placeholder="0"
            className="input-amount-field"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Price;
