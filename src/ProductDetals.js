import "./detailspage.css"
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from './components/NavBar/navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { add } from "./store/cartSlice"; 
import { STATUSES } from "./store/productSlice"; 

function ProductDetails() {
    const [productDetails, setProductDetails] = useState(null);
    const [cartNumber,setCartNumber]=useState(0)
    const cartdetails=[]
    const { id } = useParams()
    const { pathname } = useLocation()
    const dispatch = useDispatch();
    const handleAdd = (product) => {
        dispatch(add(product));
        toast.success("Product Added To Your Cart!",{
            position: "top-center"
        });
    };
    useEffect(() => {
        fetchData();
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    }, [pathname])
        
    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const jsonData = await response.json();
            setProductDetails(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    
    if (productDetails===null){console.log("null----------")}else{
        for(let i of productDetails){
            console.log(i.category)
        }
    }
    console.log("productDetails",productDetails)



    return (
        <>
            <NavBar cartNumber={cartNumber}/>
            {!productDetails ? (
                <img src="https://shortpixel.com/img/spinner2.gif" style={{width:"250px",height:"250px" ,margin:"300px"}} alt="" />
            ) : (
                <>
                <div className="cartcontainer">
                    <div className="detailsimgandbtn">
                        <img src={productDetails[id - 1].image} alt="" />
                        <div className="btns">
                            <button className="addtocart" onClick={() => handleAdd(productDetails[id - 1])} >Add to Cart</button>
                            <Link to="/login"><button className="buynow">Buy Now</button></Link>
                        </div>
                    </div>

                    <div className="flexcontainer">
                        <h3 style={{marginRight:"300px"}}>{productDetails[id - 1].title}</h3>
                        <h1 style={{marginLeft:"-87%"}}>&#8377; {productDetails[id - 1].price}</h1>
                        <div className="ratingreviews">
                            <span>{productDetails[id - 1].rating.rate}</span>
                            <p>{productDetails[id - 1].rating.count} Reviews</p>
                        </div>
                        <div className="selectsize">
                            <h3>Select Size</h3>
                            <small>Free Size</small>
                        </div>

                        <div className='fulldetails'>
                            <h3>Product Details</h3>
                            <p style={{fontSize:"15px"}}>Name : {productDetails[id - 1].title}</p>
                            <p>Base Metal : Lorem ipsum dolor sit amet</p>
                            <p>Plating :  dolor sit amet</p>
                            <p>Size : Free Size (Lenght Size: 30 <sub>in</sub>)</p>
                            <a href="">More Information</a>
                        </div>
                    </div>
                </div>
                
                <h3>Related Products</h3>
                <div className="relatedproduct">
                {productDetails.map((data) =>
                    <>
                        {data.category===productDetails[id-1].category ?

                        data.title!==productDetails[id-1].title ?
                        <Link to={`/details/${data.id}`} style={{textDecoration:"none"}}>
                        <div key={data.id} className="cartcontainer1">
                            <img src={data.image} alt="" />
                            <h2 style={{fontSize:"15px"}}>{data.title}</h2>
                            <div className="flexcontainer1">
                                <span> &#8377; {data.price}</span><small>onwards</small>
                            </div>
                            <div className="flexcontainer1">
                                <div className="rating1">{data.rating.rate}</div>
                                <span className="reviews1">{data.rating.count} Reviews</span>
                            </div>
                        </div>
                        </Link>
                         : ""
                        
                        :""}
                    </>
                )}

                </div>
                <ToastContainer />

                </>
            )}
        </>
    );
}
export default ProductDetails;