import React from "react";
import Navbar from '../components/Navbar'
import Aboutus from "../utils/Aboutus";

function About(){
    return(
<>
<Navbar/>
<div className="Home">
<Aboutus/>
</div>
</>
    )
}

export default About;