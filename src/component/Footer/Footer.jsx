import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                 <img src={assets.logo} alt='logo'/>
                 <p>Tomatoprovides dishes craft with the finest igredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time dishes craft with the finest igredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook_icon" />
                    <img src={assets.twitter_icon} alt="twitter_icon" />
                    <img src={assets.linkedin_icon} alt="linkedin_icon" />
                 </div>
                </div>
                <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                 </ul>
                </div>
                <div className="footer-content-right">
                <h2> GET IN TOUCH</h2>
                <ul>
                    <li>+91 8375980138</li>
                    <li>contact123@tomato.com</li>
                    <li>jatin00138@gmail.com</li>
                </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 &copy Tomato.com - All Right Reserved.</p>
        </div>
    
  )
}

export default Footer