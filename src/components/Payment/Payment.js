import "./payment.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../footer/Footer";
import NavBar from "../NavBar/navbar";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

export const Payment = () => {
    const products = useSelector((state) => state.cart);
    const allproductPrice=products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0);
  const navigate = useNavigate();

  const [card, setCard] = useState();
  const [cvv, setCvv] = useState();
  const [exDate, setExDate] = useState();
  const paymentHandler = (e) => {
    //   e.preventDefault();
    if (!card || !cvv || !exDate) {
      toast.error("Please fill all the payment details!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      navigate("/");
      toast.success("Congratulations! your order get placed.", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }); 
        document.location.reload();
      
    }
  };
//   const OrdertoPay = object.cart.reduce((T, C, I) => {
//     return T + C.price;
//   }, 0);
  return (
    <div>
      {" "}
      <NavBar />
      <div style={{ justifyContent: "center", display: "flex" }}>
        <h1 className="Proceed">Proceed Your Payment</h1>
      </div>
      <div id="container">
        <div class="wraper">
          {" "}
          <h2 className="phead" style={{ top: "0px" }}>
            Payment of :<span style={{ color: "rgb(134, 255, 100)",fontSize:"25px" }}> &#x24;{allproductPrice.toFixed(2)}</span>
            {/* {Math.floor(OrdertoPay * 100 - 33)}/- */}
          </h2>
          <from>
            <br></br>
            <label htmlFor="cnum">Enter the card number : </label>
            <input
              id="cnum"
              type="tel"
              onChange={(e) => setCard(e.target.value)}
              value={card}
              required
              minLength="16"
              placeholder={"Enter Your Card Number"}
            />
            <br></br>
            <br></br>
            <label htmlFor="expiry">Enter the expiry date : </label>
            <input
              id="expiry"
              value={exDate}
              required
              placeholder="MM/YY"
              onChange={(e) => setExDate(e.target.value)}
              type="tel"
              minLength="5"
            />
            <br></br>
            <br></br>
            <label htmlFor="cvv">Enter your CVV : </label>
            <input
              id="cvv"
              type="tel"
              required
              placeholder="    CVV"
              minLength="3"
              value={cvv}
              maxLength="3"
              onChange={(e) => setCvv(e.target.value)}
            />
            <br></br> <br></br> <br></br>
            <button className="proceedtopayment" id="btn" onClick={paymentHandler} type="submit">
              Proceed to payment
            </button>
          </from>
        </div>
      </div>
      <div style={{marginTop:"50px"}}><Footer /></div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};