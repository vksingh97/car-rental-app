import React, { useState } from "react";
import { useFormik } from "formik";
import "./RentalForms.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const carTypes = ["Hatchback", "Sedan", "SUV"];

let bid;

const validationSchema = yup.object({
  source: yup.string().required("Source Location is required"),
  destination: yup.string().required("Destination is required"),
  car_type: yup.string().required("Car Type is required"),
});

const RentalForm = () => {
  const formik = useFormik({
    initialValues: {
      source: "",
      destination: "",
      car_type: "",
      travellers: "",
    },
    onSubmit: (values) => {
      setBidDetails(values);
      bid = values;

      if (!bid) {
      } else {
        if (bid.car_type === "Hatchback") {
          if (parseInt(bid.travellers) > 4) {
            alert(
              `Number of Travellers cannot be greater than 4 for ${bid.car_type}`
            );
          } else {
            nagivate("/price", { replace: true });
          }
        } else if (bid.car_type === "SUV") {
          if (parseInt(bid.travellers) > 6) {
            alert(
              `Number of Travellers cannot be greater than 6 for ${bid.car_type}`
            );
          } else {
            nagivate("/price", { replace: true });
          }
        } else if (bid.car_type === "Sedane") {
          if (parseInt(bid.travellers) > 4) {
            alert(
              `Number of Travellers cannot be greater than 4 for ${bid.car_type}`
            );
          } else {
            nagivate("/price", { replace: true });
          }
        }
      }
    },
    validationSchema: validationSchema,
  });
  const [bidDetails, setBidDetails] = useState(formik.initialValues);
  const nagivate = useNavigate();
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="col-12 box-main-page">
          <div>
            <TextField
              className="col-5"
              name="source"
              type="text"
              id="source_location_field"
              // required
              label="Source Location"
              margin="normal"
              onChange={formik.handleChange}
              error={formik.touched.source && Boolean(formik.errors.source)}
              helperText={formik.touched.source && formik.errors.source}
              value={formik.values.source}
              style={{ marginRight: 95 }}
            />
            <TextField
              className="col-5"
              name="destination"
              type="text"
              id="destination_location_field"
              // required
              label="Destination"
              value={formik.values.destination}
              onChange={formik.handleChange}
              error={
                formik.touched.destination && Boolean(formik.errors.destination)
              }
              helperText={
                formik.touched.destination && formik.errors.destination
              }
              margin="normal"
            />
          </div>
          <div className="col-12">
            <TextField
              className="col-11"
              // required
              id="car_type_field"
              type="text"
              name="car_type"
              select
              label="Enter Car Type"
              value={formik.values.car_type}
              style={{ marginTop: 50 }}
              onChange={formik.handleChange}
              error={formik.touched.car_type && Boolean(formik.errors.car_type)}
              helperText={formik.touched.car_type && formik.errors.car_type}
              margin="normal"
            >
              {carTypes.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="col-12">
            <TextField
              className="col-11"
              id="travellers_count"
              label="Number of Travellers"
              type="text"
              name="travellers"
              style={{ marginTop: 50, marginBottom: 50 }}
              onChange={formik.handleChange}
              value={formik.values.travellers}
              margin="normal"
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary col-10 bid-button" type="submit">
              Enter Bid Details
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RentalForm;
export { bid };
