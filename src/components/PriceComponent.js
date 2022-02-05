import React, { useState } from "react";
import "./PriceComponent.css";
import Header from "./HeaderComponent";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { bid } from "./RentalForm";

let price_entered;
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
          <h3>{`${bid.source} - ${bid.destination}`}</h3>
          {bid.travellers === "1" ? (
            <h5>{`${bid.travellers} Person, ${bid.car_type}`}</h5>
          ) : (
            <h5>{`${bid.travellers} Persons, ${bid.car_type}`}</h5>
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
            autoFocus
            onChange={(e) => {
              if (parseInt(e.target.value) <= 0 || e.target.value === "") {
                return null;
              } else {
                price_entered = e.target.value;
                setBidAmount(e.target.value);
              }
            }}
          ></input>
        </div>
        <br />
        <div className="form-check rate-negotiable-checkbox">
          <input className="form-check-input" type="checkbox" value="" />
          <label className="form-check-label">Rate Negotiable</label>
        </div>

        <div className="col-12">
          <Link to="/userDetail">
            <button
              className="btn btn-primary price-page-button col-10"
              type="submit"
              disabled={parseInt(bidAmount) <= 0}
              onClick={() => {
                setBidAmount(bidAmount - 1);
                setBidAmount(bidAmount + 1);
              }}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Price;
export { price_entered };
