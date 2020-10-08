import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "../components/image"

const TravelPage = () => (
  <Layout>
    <img src={'/marble.jpg'} alt={"Title Background"} style={{opacity: 0.5, margin: '-190px auto 0'}}/>
    <SEO title="Travel" />
    <h1>Travel Page</h1>
    {/* style={{ maxWidth: `500px`, marginBottom: `1.45rem` }} */}
    <p>My travel page </p>
    <button className='button-link'><Link to="/" className='button-link'>&#60;&#60; Back to Homepage</Link></button>
  </Layout>
)

export default TravelPage


