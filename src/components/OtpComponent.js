import React from "react";
import "./PriceComponent.css";
import Header from "./HeaderComponent";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { bid } from "./RentalForm";
import { user } from "./UserDetailComponent";
import OtpInputComponent from "./OtpInputComponent";

const OtpComponent = () => {
  return (
    <div>
      <Header />
      <div id="colorstrip">
        <h2>Verify OTP</h2>
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
          {/* <h3>{`${"delhi"} - ${"mumbai"}`}</h3>

          <h5>{`${"5"} Persons, ${"SUV"}`}</h5> */}
        </div>
        <hr />
        <br />
      </div>
      <div className="user-detail-box">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <h6>BID DETAILS</h6>
          </Grid>
        </Grid>
        <br />
        <div className="row">
          <h5>{`+91-${user.mobile}`}</h5>
          <h5>{user.name}</h5>
          <h5>{user.remarks}</h5>
        </div>
        <div>
          <h1 className="rupee-symbol">&#x20b9;</h1>
          <h1 className="verify-page-price">{`1200`}</h1>
          <h6 className="fixed-price">Fixed Price</h6>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <p style={{ fontSize: 20, fontFamily: "sans-serif", color: "gray" }}>
            We've sent an OTP to your mobile number, Please enter it
            <br />
            below to submit your bid
          </p>
          <p
            style={{
              fontSize: 20,
              fontFamily: "sans-serif",
              color: "black",
              paddingLeft: 225,
              marginTop: -45,
            }}
          >
            <strong>{user.mobile}</strong>
          </p>
          <div>
            <Link to="/userDetail">
              <Grid item xs={4}>
                <EditOutlinedIcon
                  color="primary"
                  className="edit-number-icon"
                />
                <span className="edit-number-text">
                  <strong>Edit</strong>
                </span>
              </Grid>
            </Link>
          </div>
          <div>
            <OtpInputComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpComponent;
