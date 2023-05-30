import "./productcart.css"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { loading, Allproducts } from "../../App";


const ProductCart = (props) => {
    const pro = useContext(Allproducts)
    const lod = useContext(loading)
    console.log(Allproducts)
    console.log(loading)
    const { products, filteredData } = props;
    return (
        <>
            {lod ? (
                <>
                    <h4>Loading.....</h4>
                    <img src="https://shortpixel.com/img/spinner2.gif" alt="" />
                </>
            ) :
                <>
                    {filteredData.length === 0 ?
                        <>
                            {pro.map((data) =>
                                <Link to={`details/${data.id}`} style={{ textDecoration: "none" }}>
                                    <div key={data.id} className="cartcontainer1" >
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
                            )}
                        </>
                        : <>
                            {filteredData.map((data) =>
                                <Link to={`details/${data.id}`} style={{ textDecoration: "none" }}>
                                    <div key={data.id} className="cartcontainer1" >
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
                            )}
                        </>}
                </>
            }
        </>
    );
}

export default ProductCart;