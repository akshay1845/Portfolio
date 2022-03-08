import React, { useEffect, useRef } from 'react'
import './intro.scss'
import {init} from 'ityped'
function Intro() {

  const textRef = useRef();

  useEffect(()=>{ 
    init(textRef.current, {
      showCursor:true,
      backDelay: 1500,
      backSpeed : 60,
      strings : [".NET Developer", "JAVA Developer", "Designer"], 
    });
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="man-image" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Darshak Gadher</h1>
          <h3>Full Stack  <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow-down.png" alt ="Down-arrow"></img>
        </a>
      </div>

    </div>
  )
}

export default Intro