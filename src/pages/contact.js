import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Container} from "react-bootstrap"

const ContactPage = () => (
  <Layout>
    <img src={'/marble.jpg'} alt={"Contact Me Background"} style={{opacity: 0.5}}/>
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
      <p>Email me at <a href="mailto:venemr.fu@gmail.com">venemr.fu@gmail.com</a> if you'd like to send me a message.</p>
      <p>I am happy to get in touch with you!</p>
      <p>Cheers,</p>
      <p>Mengru</p>
      <button className='button-link'><Link to="/" className='button-link'>&#60;&#60; Back to Homepage</Link></button>
    </Container>
  </Layout>
)

export default ContactPage
