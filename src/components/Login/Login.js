import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/navbar";
import "./login.css"
import CartDetails from "../CartDetails/CartDetails";
// import { userContext } from "./Contex/UserContext";



const Login = () => {
  const [mob, setMob] = useState("");
  const verify = localStorage.getItem("userNumber");
  const [otp, setOtp] = useState("");
  const [otpStatus, setOtpStatus] = useState(false);
  const [sendOtp, setSendOtp] = useState("");
  const navigate = useNavigate();

  const handleCLick = () => {
    if (mob.length !== 10)
      toast.error("Please enter mobile number of 10 digits", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    else {
      let sendOtp = Math.floor(100000 + Math.random() * 900000);
      alert(" OTP for login -" + sendOtp);
      setSendOtp(sendOtp);
      setOtpStatus(true);
    }
  };

  const verifyOTP = () => {
    //here we comparing the type and value of the otp
    if (sendOtp === Number(otp)) {
      toast.success("login successfull", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      localStorage.setItem("userNumber", mob);

      navigate("/cartdetails");
    } else {
      toast.error("Please enter the right OTP", {
        position: "top-right",
        autoClose: 900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      {verify ? (
        <>
          <>
            <NavBar isLoggedIn={localStorage.getItem("userNumber")}/>
            <h1 style={{ marginLeft: "20%" }}>Hi ,</h1>
            <div className="navi">
              <h2 style={{ marginLeft: "10%" }}>Your userNumber is {verify}</h2>
            </div>
            <div className="container">
              {" "}
              <button
              style={{backgroundColor:"pink" ,color:"black"}}
                className="navigateHome Mybutton"
                onClick={() => {
                  navigate("/");
                }}
              >
               Navigate to Home page
              </button>
              <button className="Mybutton"
              style={{backgroundColor:"pink",color:"black"}}
                id="Logout"
                onClick={() => {
                  localStorage.removeItem("userNumber");
                  toast.success("Log out Successful", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                  //setting cart to zero after logout
                  navigate("/");

                  document.location.reload();
                }}
              
              >
                {" "}
                Log out
              </button>
            </div>
            <div style={{ marginBottom: "0px" }}>
              {/* <Footer /> */}
            </div>
          </>
          <ToastContainer />
        </>
      ) : (
        <>
          <NavBar />
          <ToastContainer />
          <div className="LoginContainer">
            <div className="LoginBox">
              <div className="Typography">
                {" "}
                {otpStatus
                  ? `Enter OTP send to ${mob}`
                  : "Sign Up to view your profile"}{" "}
              </div>
              <div>
                {otpStatus ? (
                  <div>
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter OTP  here"
                      min="6"
                      max="6"
                      value={otp}
                      maxLength="6"
                      onChange={(e) => {
                        let a = e.target.value;
                        let b = a.toString();
                        setOtp(b);
                      }}
                    />
                    <button className="Mybutton"
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        backgroundColor: "hotpink",
                        fontSize:"25px"
                      }}
                      onClick={verifyOTP}
                    >
                      verify
                    </button>{" "}
                    <ToastContainer />
                  </div>
                ) : (
                  <>
                    <span>Country</span>
                    <div className="" style={{ display: "flex", gap: "10px" }}>
                      <div
                        className="country-code"
                        style={{ borderBottom: "1px solid grey" }}
                      >
                        <div variant="h6" className="login-title Typography">
                          IN +91
                        </div>
                      </div>
                      <div
                        className="phone-input"
                        style={{
                          borderBottom: "1px solid grey",
                          flexGrow: "2",
                        }}
                      >
                        <input
                          type="number"
                          max="10"
                          placeholder="Phone Number"
                          value={mob}
                          maxLength="10"
                          onChange={(e) => setMob(e.target.value)}
                          style={{
                            width: "90%",
                            border: "none",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>
                    <button className="Mybutton"
                      onClick={handleCLick}
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        backgroundColor: "hotpink",
                      }}
                    >
                      Send OTP
                    </button>
                  </>
                )}
              </div>
              <div style={{ textAlign: "center" }}>
                By continuing, you agree to Meesho’s{" "}
                <a href="https://www.meesho.com/legal/terms-conditions">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="https://www.meesho.com/legal/privacy">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};
export default Login;
