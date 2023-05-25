import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div className='footerContainer'>
        <div className='first'>
            <h1>Shop Non-Stop on Meesho</h1>
            <h3>Trusted by more than 1 Crore Indians</h3>
            <h3>Cash on Delivery | Free Delivery</h3>
            <div class="footerimg">
                    <a href="" class="footerimglink">
                        <img src="https://images.meesho.com/images/pow/playstore-icon-big.webp" alt="" />
                    </a>
                    <a href="" class="footerimglink">
                        <img src="https://images.meesho.com/images/pow/appstore-icon-big.webp" alt=""/>
                    </a>
                </div>
        </div>

        <div className='second'>
            <h3>Careers</h3>
            <h3>Become a supplier</h3>
            <h3>Hall of Fame</h3>
        </div>

        <div className='third'>
            <h3 className='sandsarif'>Legal and Policies</h3>
            <h3 className='sandsarif'>Meesho Tech Blog</h3>
            <h3 className='sandsarif'>Notices and Returns</h3>
        </div>

        <div className='four'>
            <h3>Reach out to us</h3>
            <div className='footericone'>
                
            </div>
        </div>

        <div className='five'>
            <h3 style={{color:"black"}}>Contact Us</h3>
            <p>Fashnear Technologies Private Limited,</p>
            <p>CIN: U74900KA2015PTC082263</p>
            <p>06-105-B, 06-102, (138 Wu)</p>
            <p>Vaishnavi Signature, No. 78/9,</p>
            <p>Outer Ring Road, Bellandur,</p>
            <p>Varthur Hobli, Bengaluru-560103,</p>
            <p>Karnataka, India</p>
            <p>E-mail address:</p>
            <p>query@meesho.com</p>
            <p>© 2015-2022 Meesho.com</p>
        </div>

    </div>
  )
}

export default Footer