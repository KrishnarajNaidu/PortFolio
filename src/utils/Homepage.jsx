import React from "react";
import './Homepage.css';

function Homeo() {
    return (
        <>

<section className="section3">
            <section className="home flex-center-home" id="home">
                <div className="home-container">
                    <div className="media-icons">
                        <a href="/"><i class="fab fa-facebook-f"></i></a>
                        <a href="/"><i class="fab fa-instagram"></i></a>
                        <a href="/"><i class="fab fa-twitter"></i></a>
                    </div>
                    <div className="info">
                        <h2>Hi , I am Krishnaraj</h2>
                        <h3>Frontend Developer & Web Designer</h3>
                        <p>Frontend Developer who cares deeply about user experience. Serious passion for UI designing and new technolog</p>
                        <a href="/" class="btn">Download CV <i class="fa-solid fa-download"></i></a>
                    </div>
                    <div className="home-img">
                        <img src={require('../Images/portfolio.png')} alt="image-main" />
                    </div>
                </div>
            </section>
            </section>
        </>      

    
    )
}

export default Homeo;