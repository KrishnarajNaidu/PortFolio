import React from "react";
import './Footer.css';

// import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
        <footer>
        <div className="footer-container">
            <div className="social-icons">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-google-plus"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div className="footernav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="footerbottom">
                <p>Copyright &copy;2023; Designed by <span className="designer">Krishnaraj</span></p>
            </div>
        </footer>
        </>
    )
}
export default Footer;