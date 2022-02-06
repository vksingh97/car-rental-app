import React, { useState } from "react";
import "./OtpInputComponent.css";
import { useNavigate } from "react-router-dom";

const OtpInputComponent = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

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
        <div>
          <span className="resend-otp">Resend OTP Again</span>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            id="verify-otp-button"
            onClick={() => {
              if (otp.join("") === "1234") {
                navigate("/summary", { replace: true });
              }
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
