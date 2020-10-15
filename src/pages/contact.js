import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Container} from "react-bootstrap"

const ContactPage = () => (
  <Layout>
    <img src={'/marble.jpg'} alt={"Title Background"} style={{opacity: 0.5}}/>
    <Container 
      style={{
        width: '70%',
        margin: '-190px auto 0',
        zIndex: '1',
        position: 'relative',
        background: '#ffff',
        maxWidth: '800px',
        padding: '100px 50px 0',
        overflow: 'hidden'}}
    >
      <SEO title="Contact" />
      <h1>Contact Me</h1>
      <p>Email me at <a href="mailto:venemr.fu@gmail.com" className="text-link"><b>venemr.fu@gmail.com</b></a> or fill out the contact form if you'd like to send me a message or provide any feedback.</p>
      <p>I am happy to get in touch with you!</p>
      <p>Cheers,</p>
      <p>Mengru</p>

      <form method="post" action="https://getform.io/f/a7283541-9169-4cbe-9382-38b4b5de61a0">
        <div>
          <label>
            <div><b>Your Name (Required)</b></div>
            <input className="inputbox" type="text" name="name" id="name" required/>
          </label>
        </div>
        <div>
          <label>
            <div><b>Your Email (Required)</b></div>
            <input className="inputbox" type="text" name="email" id="email" required/>
          </label>
        </div>
        <div>
          <label>
            <div><b>Subject</b></div>
            <input className="inputbox" type="text" name="subject" id="subject"/>
          </label>
        </div>
        <div>
          <label>
            <div><b>Your Message</b></div>
            <textarea className="textbox" type="text" name="message" id="message"/>
          </label>
          <div style={{marginLeft: 450, marginTop: 10}}>
            <button className="read-more-link" type="submit">Send</button>
          </div>
        </div>
      </form>   
      <button className='button-link'><Link to="/" className='button-link'>&#60;&#60; Back to Homepage</Link></button>
     
    </Container>
  </Layout>
)

export default ContactPage
