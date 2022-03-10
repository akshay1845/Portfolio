import React, {useState} from 'react'
import "./contact.scss"

export default function Contact() {

  const [message, setMessage] = useState(false)
  const handleSubmit= (e) =>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
       <div className="left">
         <img src="assets/form.svg" alt="" />
       </div>
       <div className="right">
         <h2>Contact</h2>
         <form onSubmit={handleSubmit}>
           <input className="margin" type="text" placeholder="Email" />
           <textarea className="margin" placeholder="message"></textarea>
           <button className="margin" type="send">Send</button>
           {message && <span>Thanks!, I'll reply ASAP :)</span>}
         </form>
       </div>
    </div>
  )
}
