import React from 'react'
import './Skills.css'

function Skillspage() {
    return (

        <>
            <section className='skills section2' id='skills'>
                <div className="container flex-center">
                    <h1 className='section-title-02'>Skills</h1>
                    <div className="content">
                        <div className="skills-description">
                            <h3>Education & Skills</h3>
                            <p>Objective To take a challenging role as Front End Web Developer in a highly technical company where I could utilize my skills in Web Design, Front-End Web Development, Software, and CMS/e-Commerce and use these skills in providing quality service to the company.</p>
                        </div>
                        <div className="skills-info education-all">

                            <div className="education">
                                <h4><label>Education</label></h4>
                                <ul className='edu-list'>
                                    <li className='item'>
                                        <span className='year'>2016-2017</span>
                                        <p><span>SSC</span> - Sushma patil vidyalaya,<br/> Kamothe</p>
                                    </li>
                                    <li className='item'>
                                        <span className='year'>2018-2019</span>
                                        <p><span>HSC</span> - Oriental college of commerce an technology, Sanpada</p>
                                    </li>
                                    <li className='item'>
                                        <span className='year'>2016-2017</span>
                                        <p><span>BSC - IT</span> - Oriental college of commerce an technology, Sanpada</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="education">
                                <h4><label>Skills</label></h4>
                                <ul className='bars'>
                                    <li className='bar'>
                                        <div className="info">
                                            <span>HTML</span>
                                            <span>95%</span>
                                        </div>
                                        <div className='line html'></div>
                                    </li>
                                    <li className='bar'>
                                        <div className="info">
                                            <span>CSS</span>
                                            <span>85%</span>
                                        </div>
                                        <div className='line css'></div>
                                    </li>
                                    <li className='bar'>
                                        <div className="info">
                                            <span>Javascript</span>
                                            <span>75%</span>
                                        </div>
                                        <div className='line javascript'></div>
                                    </li>
                                    <li className='bar'>
                                        <div className="info">
                                            <span>BOOTSTRAP</span>
                                            <span>90%</span>
                                        </div>
                                        <div className='line bootstrap'></div>
                                    </li>
                                    <li className='bar'>
                                        <div className="info">
                                            <span>REACT JS</span>
                                            <span>60%</span>
                                        </div>
                                        <div className='line reactjs'></div>
                                    </li>
                                    <li className='bar'>
                                        <div className="info">
                                            <span>MYSQL</span>
                                            <span>60%</span>
                                        </div>
                                        <div className='line mysql'></div>
                                    </li>
                                </ul>
                            </div>
                            <div className="education">
                                <h4><label>Course</label></h4>
                                <ul className="edu-list">
                                    <li className="item">
                                        <span className='year'>2018</span>
                                        <p><span>MSCIT Course</span> - Kamothe</p>
                                    </li>
                                    <li className="item">
                                        <span className='year'>2023</span>
                                        <p><span>React Js course</span> - Kamothe</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="skills-description">
                            <h3>Work & Experience</h3>
                        </div>
                        <div className="skills-info ">
                            <div className="experience-card">
                                <div className="upper">
                                    <h3>Fresher</h3>
                                    <h5>Looking for a Job</h5>
                                    <span>Any time</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

            </section>
        </>

    )
}

export default Skillspage;