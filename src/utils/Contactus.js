
import React from "react";
import './Contact.css'
import { Link } from "react-router-dom";

function Contactus(){
return(
<>
<section className="section-2">
<div id='contact' className='contact'>
        <div className='container'>
          <div className='row'>
            <div className='contact-left'>
              <h1 className='contact-title'>Contact Me</h1>
              <p><i class="fa-solid fa-paper-plane"></i>krishnarajnaidu40222@gmail.com</p>
              <p><i class="fa-solid fa-phone"></i>+91 8828293722</p>
              <div className='social-icons'>

                {/* <Link to='/'><FontAwesomeIcon icon={faEnvelope} /></Link> */}
                <Link to='/'><i class="fa-brands fa-square-facebook"></i></Link>
                <Link to='/'><i class="fa-brands fa-square-twitter"></i></Link>
                <Link to='/'><i class="fa-brands fa-linkedin"></i></Link>
                <Link to='/'><i class="fa-brands fa-square-instagram"></i></Link>
              </div>
              <a href="../Krishnaraj-Resume.pdf" download className='download-btn all-btn'>Download CV</a>
            </div>
            <div className='contact-right'>
               <form>
                <input type="text" name="fname" placeholder="Your First Name" required/>
                <input type="text" name="lname" placeholder="Your Last Name" required/>
                <input type="tel" name="number" placeholder="Your Number" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <textarea type="Message" row="" placeholder='Your Message'></textarea><br></br>
               <button type='submit' className='form-btn'>Submit</button>
               </form>
            </div>
          </div>
        </div>
      </div>
      </section>
</>
)
}

export default Contactus;