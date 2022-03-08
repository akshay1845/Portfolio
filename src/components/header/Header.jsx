import React from 'react'
import './header.scss'
import { Mail, Person,  } from "@material-ui/icons"

function Header({menuOpen, setMenuOpen}) {
  return (
    <div className={"header "+ (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">DARSHAK</a>

          <div className="itemContainer">
          <Person className="icon" />
          <span>+91 80256 36521</span> 
          </div>

           
          <div className="itemContainer">
          <Mail className="icon" />
          <span>darshak@gmail.com</span> 
          </div>

        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header