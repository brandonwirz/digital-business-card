import React from "react"
import profileImg from '../images/brandon.png'; 

export default function Nav() {
  return(
    <div>
     <header className="header-img-wrapper">
       <img src={profileImg} className="bw-profile-img" alt="bw-profile"/>
     </header>
     <main>
       <h1>Brandon Wirz</h1>
       <h2>Frontend Developer</h2>
       <a href="http://wirzdesign.com/"><p>wirzdesign.com</p>
     </a>
       <div className="flex-btn-wrapper">
         <button className="email-cta"><span>Email</span></button>
         <button className="linkedin-cta wh-txt-clr"><span>LinkedIn</span></button>
       </div>
     </main>
   </div>
  )
}