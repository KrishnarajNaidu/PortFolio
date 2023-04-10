import React from "react";
import Navbar from '../components/Navbar'
import Skillspage from "../utils/Skills";

function Skills(){
    return(
<>
<Navbar/>
<div className="Home">
<Skillspage/>
</div>
</>
    )
}

export default Skills;