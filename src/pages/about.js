import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <img src={'/marble.jpg'} alt={"Title Background"} style={{opacity: 0.5, margin: '-190px auto 0'}}/>
    <SEO title="About" />
    <h1>A Little More About Me...</h1>
    <img alt='asd' src={'/napavalley.jpg'} style={{width: '1000px'}}/>
    {/* style={{ maxWidth: `500px`, marginBottom: `1.45rem` }} */}
    <p>I created this blog as I wanted to step out of my comfort zone to learn some programming.</p>
    <p>I am currently working as data analyst at Twitch, and I'm interested in data analysis and machine learning. </p>
    <p>In my spare time, I'm passionate about fashion styling and food exploring.</p>
    <p>I love music and I have a variety of favorite musicians with diverse genres, Illenium, Novo Amor, Kenshi Yonezu, Zoey Yung, Chace etc.. So many that I cannot name them all!!!</p>
    <p>During the COVID-19 Pandemic, I've been developing new hobbies at home, such as drawing, reading, watching movies and playing legos, which helps me maintain some inner peace during this overwhelming period.</p>
    <button className='button-link'><Link to="/" className='button-link'>&#60;&#60; Back to Homepage</Link></button>
  </Layout>
)

export default AboutPage


