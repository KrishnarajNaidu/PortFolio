import React from "react";
import './About.css'
// import { Link } from "react-router-dom";

function Aboutus() {
    return (
        <>
            <section className='about-me section-1'>
                <div className='title-section'>
                    <h2>About<span>Me</span></h2>
                    <span className='title-bg'>Resume</span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 parent-col-6-1">
                            <h2> Personal <span>Infos</span></h2>
                            <div className="row">
                                <div className="col-6 child-col-6">
                                    <div className="about-data">
                                        <p>First Name : </p>
                                        <span>Krishnaraj</span>
                                    </div>
                                    <div className="about-data">
                                        <p>Age : </p>
                                        <span>22</span>
                                    </div>
                                    <div className="about-data">
                                        <p>Freelance : </p>
                                        <span className='green'>Available</span>
                                    </div>
                                    <div className="about-data">
                                        <p>phone : </p>
                                        <span>+91 8828-(293)-(722)</span>
                                    </div>
                                    <div className="about-data">
                                        <p>Linked In</p>
                                        <span>Krishnaraj</span>
                                    </div>
                                </div>
                                <div className="col-6 child-col-6">
                                    <div className="about-data">
                                        <p>Last Name : </p>
                                        <span>Naidu</span>
                                    </div>
                                    <div className="about-data">
                                        <p>Nationality : </p>
                                        <span>Indian</span>
                                    </div>
                                    <div className="about-data">
                                        <p>Address : </p>
                                        <span>Navi Mumbai</span>
                                    </div>
                                    <div className="about-data">
                                        <p>Email : </p>
                                        <span className="small-size">krishnarajnaidu4022@gmail.com</span>
                                    </div>
                                    <div className="about-data">
                                        <p>Languages</p>
                                        <span className="small-size">English,Hindi,Tamil,Marathi</span>
                                    </div>
                                </div>
                            </div>
                            <a href='/'>
                                <div className="btn-main">
                                    <div className="btn-txt">
                                        <p>Download CV</p>
                                    </div>
                                    <div className="btn-icon">
                                        <i class="fa-solid fa-download"></i>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="col-6 parent-col-6-2">
                            <div className="row">
                                <div className="col-6">
                                    <div className="about-me-box">
                                        <h2>0<sup>+</sup></h2>
                                        <p>Years of Experience</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="about-me-box">
                                        <h2>3<sup>+</sup></h2>
                                        <p>Completed Project</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="about-me-box">
                                        <h2>1<sup>+</sup></h2>
                                        <p>Happy Customers</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="about-me-box">
                                        <h2>0<sup>+</sup></h2>
                                        <p>Awards Won</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Aboutus;