import React, { useState } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const [result, setResult] = useState("")


  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")

    const formData = new FormData(event.target)
    formData.append("access_key", "e072233d-d014-4e45-82be-e886d72d5a89")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
         alert("✅ Message sent successfully!");
        event.target.reset()
      } else {
      alert("❌ Failed to send message.");
      }
    } catch (error) {
      setResult("Network error ❌")
    }
  }

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I’m open to new projects and collaborations.
            Feel free to reach out—I’ll get back to you as soon as possible.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>abhijithmadathilparabil@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9400603950</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Thrissur, Kerala</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required />

          <button className="contact-submit" type="submit">
            Submit Now
          </button>

          {/* STATUS MESSAGE */}
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact
