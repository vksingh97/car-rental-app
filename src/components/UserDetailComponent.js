import React, { useState } from "react";
import "./PriceComponent.css";
import Header from "./HeaderComponent";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { bid } from "./RentalForm";
import { price_entered } from "./PriceComponent";
import InputAdornment from "@mui/material/InputAdornment";

let user;
const validationSchema = yup.object({
  mobile: yup.string().required("Number is required"),
  name: yup.string().required("Name is required"),
});
const UserDetailComponent = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      mobile: "",
      whatsapp_upates: false,
      name: "",
      remarks: "",
    },
    onSubmit: (values) => {
      setUserDetails(values);
      console.log(userDetails);
      user = values;
      console.log(user);
    },
    validationSchema: validationSchema,
  });
  const [userDetails, setUserDetails] = useState(formik.initialValues);
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
            value={price_entered}
            disabled="disabled"
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
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
                value={formik.values.mobile}
                style={{ marginRight: 400 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91-</InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="whatsapp-color-strip">
              <div className="col-12">
                <div className="form-check updates-checkbox">
                  <input type="checkbox" value="false" />
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
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
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
                type="submit"
                className="btn btn-primary col-12"
                style={{ marginTop: 18, height: 50 }}
                onClick={(e) => {
                  user = userDetails;
                  if (!user) {
                    e.preventDefault();
                  } else {
                    formik.handleSubmit();
                    navigate("/verifyOtp", { replace: true });
                  }
                }}
              >
                Verify via OTP
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailComponent;
export { user };
