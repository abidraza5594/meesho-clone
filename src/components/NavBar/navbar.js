import "./navbar.css"
import Logo from "../../img/meesho.png"
import Cart from "../../img/cart.png"
import Mobile from "../../img/mobile.png"
import Search from "../../img/search.png"
import User from "../../img/user.png"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';


const NavBar = (props) => {
    const items = useSelector((state) => state.cart);
    const {isLoggedIn}=props
    const navigate = useNavigate();
    const LoginHandler = () => {
        if (!isLoggedIn) {
            alert('First Login To see Cart Details !.. !')
            navigate('/login');
        } else {
            navigate("/cartdetails")
        }
    
    }
    const LogOutHandler = () => {
        localStorage.removeItem("userNumber")
        // window.location.reload()
        navigate("/")
    }
    return (
        <header class="header">
            <div class="headerLeft">
                <div class="logoContainer">
                    <Link to={"/"}><img src={Logo} alt="" /></Link>
                </div>
                <div class="searchInputContainer">
                    <div class="searchIcon">
                        <img src={Search} alt="" />
                    </div>
                    <form action="" id="inputForm">
                        <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" class="inputSearch" />
                    </form>
                    <div class="inputCloseSearch">
                        <i class="fa-solid fa-xmark" id="closeSearch"></i>
                    </div>

                    <div class="searchRecentModal">
                        <h3>Recent Searches</h3>
                        <div class="listofRecent">

                        </div>
                    </div>
                </div>
            </div>

            <div class="headerRight">
                <div class="downloadContainer">
                    <div class="mobileIcon">
                        <img src={Mobile} alt="" />
                    </div>
                    <p>Download App</p>

                    <div class="downloadHoverBtnContainer">
                        <h3>Download From</h3>

                        <a href="" class="downloadBtn">
                            <img src="https://images.meesho.com/images/pow/playstore-icon-big.webp" alt="" />
                        </a>
                        <a href="" class="downloadBtn">
                            <img src="https://images.meesho.com/images/pow/appstore-icon-big.webp" alt="" />
                        </a>
                    </div>
                </div>

                <div class="becomeSupplierContainer">
                    <p>Become a Supplier</p>
                </div>

                <div class="profileAndCart" style={{ cursor: "pointer" }} >
                    <div class="profileContainer" >
                        <div class="profileIcon" >
                            <img src={User} alt="" />
                        </div>
                        <p >{isLoggedIn ? "Welcome" : "Profile"}</p>
                    </div>

                    {isLoggedIn ? <div class="profileContainer" >
                        <div class="profileIcon" >
                            <img src="https://tse3.mm.bing.net/th?id=OIP.ODW2UKCKy206wOV7WwAx0gHaHa&pid=Api&P=0&h=180" alt="" />
                        </div>
                        <p onClick={LogOutHandler}>LogOut</p>
                    </div>
                    : 
                    <Link to={"/cartdetails"} style={{textDecoration:"none"}}>
                    <div class="CartContainer"  style={{ cursor: "pointer" }}>
                        <div class="CartIcon">
                            <img src={Cart} alt="" />
                        </div>
                        <p style={{color:"#333333"}}>Cart {items.length}</p>
                    </div>
                    </Link>
                    }

                </div>
            </div>
            <ToastContainer />
        </header>

    );
}

export default NavBar;

