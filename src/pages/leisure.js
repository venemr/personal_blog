import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LeisurePage = () => (
  <Layout>
    <img src={'/marble.jpg'} alt={"Title Background"} style={{opacity: 0.5, margin: '-190px auto 0'}}/>
    <SEO title="Leisure" />
    <h1>My Recommendations in Leisure Time</h1>
    <div>
       <p>
       I am an indoor person and I enjoy spending most of my free time staying at home, feeling cozy. 
       On weekends, I could happily sit in my pajamas all day in front of my laptop watching movies and TV shows or spending my night reading books on my bed.
       I don't necessarily agree with the perception that reading a book makes you intellectual, while spending time watching TV shows make you a couch potato.  
       I read books as well as watch TV shows, purposelessly but making myself happy, maybe if I have to picture myself, I would be an intellectual couch potato LOL. 
       </p>
    </div>
    <p>
       More often than not, I don't have any specific goals set in mind at the time when I'm picking things to read or watch or listen to, usually are just random choices. 
       I tend to immerse myself into different genres, and it is my own way of relaxing and recharging myself, and it also helps me broad my mind to gain some different perspectives from others. 
       Here I'm keeping a running list of books, movies, TV shows, documentaries, and podcasts in my recommendation pool for sharing.
    </p>
    <p>Hope you enjoy! </p>
    <h2>Recommended Movies</h2>
    <p>君の名前は。(Your Name)</p>
    <p>デスノート (Death Note)</p>
    <p>重庆森林 (Chungking Express)</p>
    <p>风声 (The Message)</p>
    <p>Annie Hall</p>
    <p></p>
    <p></p>
    <p></p>
    <h2>Recommended Books</h2>
    <p>The Nightinggale</p>
    <p>The Great Alone</p>
    <p>Born A Crime</p>
    <p></p>
    <p></p>
    <p></p>
    <h2>Recommended TV Shows</h2>
    <p>Signal</p>
    <p>The Kingdom</p>
    <p>Stranger</p>
    <p>沉默的真相 (The Long Night)</p>
    <p>Emily in Paris</p>
    <p></p>
    <p></p>
    <p></p>
    <h2>Recommended Documentaries</h2>
    <p>Tiger King</p>
    <p>The Social Dilemma</p>
    <p></p>
    <p></p>
    <p></p>
    <h2>Recommended Podcast</h2>
    <p>After Hours</p>
    <p></p>
    <p></p>
    <p></p>
    <button className='button-link'><Link to="/" className='button-link'>&#60;&#60; Back to Homepage</Link></button>
  </Layout>
)

export default LeisurePage


