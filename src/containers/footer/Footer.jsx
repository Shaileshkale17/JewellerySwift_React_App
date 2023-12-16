import React from 'react'
import './Footer.css'
import {IoLogoFacebook} from 'react-icons/io'
import { FaXTwitter } from "react-icons/fa6";
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'


function Footer() {
  return (
    <footer className="footer">
        <div className="F-container">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a href="#"><IoLogoFacebook /></a>
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy">
            <p>All Copyright Reserved By © shailesh kale</p>
        </div>
    </footer>
  )
}

export default Footer
