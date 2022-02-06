import React, { useState } from "react";
import "./OtpInputComponent.css";
import SummaryComponent from "./SummaryComponent";
import { Link, useNavigate } from "react-router-dom";

let my_otp;
const OtpInputComponent = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (index === 3) {
      console.log(otp);
    }
    my_otp = otp.join("");

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          {otp.map((data, index) => {
            return (
              <input
                className="otp-field"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => {
                  handleChange(e.target, index);
                }}
                onFocus={(e) => e.target.select()}
                style={{
                  width: 80,
                  height: 60,
                  margin: 20,
                  right: 280,
                  position: "relative",
                }}
              />
            );
          })}
        </div>
        {/* <p>OTP Entered - {otp.join("")}</p> */}
        <div>
          <span className="resend-otp">Resend OTP Again</span>
        </div>
        <div className="col-12">
          {/* <Link to="/summary"> */}
          <button
            className="btn btn-primary"
            id="verify-otp-button"
            onClick={(e) => {
              if (otp.join("") === "1234") {
                console.log("match");
              }
              navigate("/summary", { replace: true });
            }}
          >
            Verify via OTP
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default OtpInputComponent;
