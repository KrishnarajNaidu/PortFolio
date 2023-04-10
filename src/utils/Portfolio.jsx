import React from "react";
import './portfolio.css';

// import { Link } from "react-router-dom";

function Project() {
    return (
        <>
            <section className="portfolio section1">
                <div className="title-section">
                    <h2>My<span>Portfolio</span></h2>
                    <span className="title-bg">Works</span>
                </div>
                <div className="container">
                    <h5 className="sub-heading">Projects</h5>
                    <div className="row">

                        <div className="col-4">
                            <a href="https://krishnarajnaidu.github.io/MyPortFolio.github.io/" target={"_blank"}></a>
                            <div className="image">
                                <img src={require('../Images/Capture.JPG')} alt="project1" />
                                <p>Hotel Mangement <br /> Website</p>
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>
                        </div>

                        <div className="col-4">
                            <a href="https://krishnarajnaidu.github.io/MyPortFolio.github.io/" target={"_blank"}></a>
                            <div className="image">
                                <img src={require('../Images/Capture2.JPG')} alt="project1" />
                                <p>Portfolio <br /> Website</p>
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>
                        </div>
                        <div className="col-4">
                            <a href="https://krishnarajnaidu.github.io/MyPortFolio.github.io/" target={"_blank"}></a>
                            <div className="image">
                                <img src={require('../Images/Capture3.JPG')} alt="project1" />
                                <p>Shoes Ecommerce <br /> Website</p>
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>
                        </div>
                  
                        <div className="col-4">
                            <a href="https://krishnarajnaidu.github.io/MyPortFolio.github.io/" target={"_blank"}></a>
                            <div className="image">
                                <img src={require('../Images/Capture4.JPG')} alt="project1" />
                                <p>Marks Calculator <br /> Website</p>
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>
                        </div>
                        <div className="col-4">
                            <a href="https://krishnarajnaidu.github.io/MyPortFolio.github.io/" target={"_blank"}></a>
                            <div className="image">
                                <img src={require('../Images/Capture5.JPG')} alt="project1" />
                                <p>Calculator <br /> Website</p>
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>
                        </div>
                        <div className="col-4">
                            <a href="https://krishnarajnaidu.github.io/MyPortFolio.github.io/" target={"_blank"}></a>
                            <div className="image">
                                <img src={require('../Images/Capture6.JPG')} alt="project1" />
                                <p>Calculator <br /> Website</p>
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Project;