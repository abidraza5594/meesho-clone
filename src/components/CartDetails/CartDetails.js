import "./cartdetails.css"
import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove ,add} from '../../store/cartSlice';
import { Link, Navigate } from "react-router-dom";
const CardDetails = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    const allproductPrice=products.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
    
    const quantityIncreament=(data)=>{
      // dispatch(add())
    }
    const quantityDeacreament=()=>{}

    return (
        <div className="main-cart-item">

            <div className="leftconatiner">
            { products.length==0 ? <> <h1>Cart is Empty..!</h1> </> : 
              
              <>
              {products.map((data)=>
              <div className="innercartitem" key={data.id}>
                <img src={data.image} alt="" />

                <div className="innercartitemleft">
                  <p style={{fontSize:"15px"}}>{data.title}</p>
                  <p>Price : {data.price}   <span style={{marginLeft:"20px"}}>Size : L</span> </p>
                  <span>Qty : <button>-</button> {1} <button onClick={()=>quantityIncreament()}>+</button> </span>
                  <button onClick={() => handleRemove(data.id)}>REMOVE</button>
                </div>
              </div>
              )}
              </> 
            }
            </div>


            <div className="rightcartitem">
            <div className="totalprice">
            <span>Price Details</span>
                <span>Cart : {products.length} {products.length<=1 ? "item":"items"}</span>
            </div>
                <div className="spacebetween">
                    <div>Total Product Price:</div>
                    <div>&#x24;{allproductPrice}</div>  
                </div>
                <hr />
                <div className="spacebetween">
                  <div className="totalorder">
                    <div>Order Total:</div> 
                    <div>&#x24;{allproductPrice}</div>
                  </div>
                </div>
                <p style={{marginLeft:"10px"}}>Clicking on 'Continue' will not deduct any money</p>
                <Link style={{marginLeft:"10px"}} to="/login"><button>Continue</button></Link>
                <div className="rightimg" >
                  <img src="https://images.meesho.com/images/marketing/1588578650850.png" alt="" />
                </div>
            </div>
           
        </div>
    );
};

export default CardDetails;
