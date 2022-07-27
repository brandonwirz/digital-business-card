import React from "react"
import linkedinIcon from '../images/linkedin.png'; 
import githubIcon from '../images/github-icon.png'; 

export default function Footer(){
  return(
    <footer>
      <a href="https://www.linkedin.com/in/bwirz/"><img src={linkedinIcon} className="social-icon" alt="linkedin-icon"/></a>
      <a href="https://github.com/brandonwirz"><img src={githubIcon} className="social-icon" alt="github-icon"/></a>
    </footer>
  )
}