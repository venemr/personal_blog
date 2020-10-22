import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Banner from "../components/banner"


//add a colored line under profile image
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 2,
          marginTop: 20
      }}
  />
);

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <Banner /> 
   
    <div className='profile-container'>
    
      <h1>Hello, Nice to Meet You.</h1>
      
        <div>
          <Image />
        </div>
        <ColoredLine color="lightpink" />
        <div className="text">
          <p>Hi I'm Mengru, I'm a Chinese girl who is currently living in San Francisco Bay Area. </p>
          <p>I'm very excited to start blogging and to share with you my precious life moments and what I passionately love to do. </p>
          <p>I'd like to use this blog to constantly look back my own life to know better about who I am and where I'm heading to at each life stage.</p>
        </div>

    </div>
  </Layout>
)

export default IndexPage




