import React from "react";
import { Formik, Form } from "formik";
import './RentalForms.css'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';

const carTypes = [
  'Hatchback', 'Sedan', 'SUV'
]

const RentalForm = () => {
  return (
    <Formik
      initialValues={{
        source: "",
        destination: "",
        car_type: "",
        travellers: "",
      }}
    >
      {(formik) => (
        <div>
          <Form>
            {/* <div className="col-12">
              <div className="mb-2 col-5">
                <label htmlFor="source">
                  Source Location <strong>*</strong>
                </label>
                <input className="form-control" autoComplete="off" />
              </div>
              <div className="col-4">
                <label htmlFor="source">
                  Source Location <strong>*</strong>
                </label>
                <input className="form-control" autoComplete="off" />
              </div>
            </div> */}
            
            {/* 
                  <div className="col-5 inputBox1">
                    <input type="email" name="email" required></input>
                    <label>Source Location <strong>*</strong></label>
                  </div>
            
                  <div className="col-6 inputBox2">
                        <input type="text" name="text" required></input>
                        <label>Destination<strong>*</strong></label>
                  </div>
                  <input type="submit" name="sign-in" value="Sign In" />
                
              </div> */}
<div className="col-12 box">
<div>
              <TextField
              className="col-5"
              required
        id="source_location_field"
        label="Source Location"
        style={{marginRight: 55}}
        // value={name}
        // onChange={handleChange}
      />
              <TextField
              className="col-5"
              required
        id="destination_location_field"
        label="Destination"
        // value={name}
        // onChange={handleChange}
      />
      </div>
      <div className="col-12">
      <TextField className="col-11"
          id="car_type_field"
          required
          select
          label="Enter Car Type"
          style={{marginTop:50}}
          // value={currency}
          // onChange={handleChange}
        >
          {carTypes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div className="col-12">
      <TextField className="col-11"
          id="travellers_count"
          label="Number of Travellers"
          style={{marginTop:50, marginBottom:50}}
          // value={currency}
          // onChange={handleChange}
        />
      </div>
      <div className="col-12">
      <button className="btn btn-primary col-10 bid-button">Enter Bid Details</button>
      </div>

      </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RentalForm;
