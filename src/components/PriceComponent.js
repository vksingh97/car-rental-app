import React, { useEffect, useState } from "react";
import "./PriceComponent.css";
import Header from "./HeaderComponent";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const testInfo = {
  source: "delhi",
  destination: "noida",
  car_type: "SUV",
  travellers: "5",
};

let next_button_clicked;
let bid_flag = false;
const validationSchema = yup.object({
  number: yup.string().required("Number is required"),
  name: yup.string().required("Name is required"),
});

const Price = () => {
  // console.log(bid_flag);
  const [bidAmount, setBidAmount] = useState({
    amount: "",
    next_flag: false,
  });
  useEffect(() => {
    next_button_clicked = false;
  }, []);
  console.log(next_button_clicked);

  // console.log(bidAmount.next_flag);
  const WithNextButton = React.memo(() => {
    return (
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
            onChange={(e) => {
              if (parseInt(e.target.value) <= 0 || e.target.value === "") {
                bid_flag = false;
              } else {
                bid_flag = true;
                setBidAmount({ amount: e.target.value, next_flag: true });
                e.preventDefault();
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
          <button
            className="btn btn-primary price-page-button col-10"
            type="submit"
            disabled={parseInt(bidAmount) <= 0}
            onClick={() => {
              next_button_clicked = true;
              setBidAmount(bidAmount - 1);
              setBidAmount(bidAmount + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  });

  const WithoutNextButton = React.memo(() => {
    const formik = useFormik({
      initialValues: {
        mobile: "",
        whatsapp_upates: false,
        name: "",
        remarks: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: validationSchema,
    });
    return (
      <div>
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
              onChange={(e) => {
                if (parseInt(e.target.value) <= 0 || e.target.value === "") {
                  bid_flag = false;
                } else {
                  bid_flag = true;
                  setBidAmount({ name: e.target.value, next_flag: true });
                }
              }}
            ></input>
          </div>
          <div className="form-check rate-negotiable-checkbox">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label">Rate Negotiable</label>
          </div>
          <br />
          <br /> <br /> <br /> <br /> <br />
          <hr />
        </div>
        <div className="contact-box">
          <form onSubmit={formik.handleSubmit}>
            <div className="col-12">
              <div>
                <TextField
                  className="col-12 contact-text-field"
                  name="mobile"
                  type="text"
                  id="mobile_number_field"
                  label="Enter your 10 digit Mobile number"
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                  style={{ marginRight: 400 }}
                />
              </div>
              <div className="whatsapp-color-strip">
                <div className="col-12">
                  <div className="form-check updates-checkbox">
                    <input type="checkbox" value="" />
                    <label
                      className="form-check-label"
                      style={{ paddingLeft: 20 }}
                    >
                      Get updates on{" "}
                    </label>
                    <WhatsAppIcon
                      style={{ color: "rgb(76,202,90)", marginLeft: 10 }}
                    />
                    <label style={{ color: "rgb(76,202,90)" }}>
                      <strong>WhatsApp</strong>
                    </label>
                  </div>
                </div>
              </div>
              <div className="name-field">
                <TextField
                  className="col-12 contact-text-field"
                  name="name"
                  type="text"
                  label="Enter your Name *"
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              <div>
                <TextField
                  className="col-12 contact-text-field"
                  name="remarks"
                  type="text"
                  label="Enter Remarks (optional)"
                  margin="normal"
                  style={{ marginTop: 40 }}
                  onChange={formik.handleChange}
                  value={formik.values.remarks ? formik.values.remarks : ""}
                />
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary col-12"
                  style={{ marginTop: 18, height: 50 }}
                >
                  Verify via OTP
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div id="colorstrip">
        <h2>Place your Bid</h2>
      </div>
      <div>
        {bidAmount.next_flag ? (
          <WithoutNextButton key="no_next" />
        ) : (
          <WithNextButton key="next" />
        )}
      </div>
    </div>
  );
};

export default Price;
