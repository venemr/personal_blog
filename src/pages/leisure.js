import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LeisurePage = () => (
  <Layout>
    <img src={'/marble.jpg'} alt={"Title Background"} style={{opacity: 0.5, margin: '-190px auto 0'}}/>
    <SEO title="Leisure" />
    <h1>My Recommendations for Leisure</h1>
    <div>
       <p>
       I am an indoor person and I enjoy spending most of my free time staying at home, feeling cozy in the small world within my bedroom. 
       On the weekends, I could happily sit in my pajamas all day in front of my laptop watching movies and TV shows or spending the whole afternnon reading books on my bed.
       I don't necessarily agree with the perception that reading a book makes you intellectual, while spending time watching TV shows make you a couch potato.  
       I like reading books as well as watching TV shows, purposelessly but making myself happy, maybe if I have to picture myself, I would be an intellectual couch potato then ୧(๑•̀⌄•́๑)૭✧. 
       </p>
    </div>
    <p>
       More often than not, I don't have any specific goals set in mind at the time when I'm picking things to read or watch or listen to, usually are just random choices. 
       I enjoy immersing myself into various genres, and it is my own way of relaxing and recharging myself, and sometimes I feel it is beneficial to broad my mind and gain different perspectives from others as well. 
    </p>
    <p>Here I'm keeping a running list of books, movies, TV shows, documentaries, and podcasts in my recommendation pool for sharing. Hope you enjoy! </p>
    <h2>Recommended Movies</h2>
    <p><strong>君の名前は。</strong>(Your Name) <span role="img" aria-label="star">🌟🌟🌟🌟🌟</span></p>
    <p><strong>デスノート</strong> (Death Note) <span role="img" aria-label="star">🌟🌟🌟🌟</span></p>
    <p><strong>重庆森林</strong> (Chungking Express) <span role="img" aria-label="star">🌟🌟🌟🌟</span></p>
    <p><strong>风声</strong> (The Message) <span role="img" aria-label="star">🌟🌟🌟🌟</span></p>
    <p><strong>Annie Hall</strong> <span role="img" aria-label="star">🌟🌟🌟🌟🌟</span></p>
    <p><strong>Midnight in Paris</strong> <span role="img" aria-label="star">🌟🌟🌟🌟</span></p>
    <p><strong>A Rainy Day in New York</strong> <span role="img" aria-label="star">🌟🌟🌟🌟</span></p>
    <p><strong>The Trial of the Chicago 7</strong> <span role="img" aria-label="star">🌟🌟🌟🌟🌟</span></p>
    <p><strong>Molly's Game</strong> <span role="img" aria-label="star">🌟🌟🌟🌟</span></p>
    <p></p>
    <p></p>
    <p></p>
    <h2>Recommended Books</h2>
    <p><strong><a className="text-link" href="https://www.amazon.com/Nightingale-Novel-Kristin-Hannah/dp/1250080401">The Nightingale</a></strong> by Kristin Hannah</p>
    <p><strong><a className="text-link" href="https://www.amazon.com/Great-Alone-Novel-Kristin-Hannah/dp/1250229537/ref=sr_1_3?dchild=1&keywords=the+great+alone&qid=1604895909&sr=8-3">The Great Alone</a></strong> by Kristin Hannah</p>
    <p><strong><a className="text-link" href="https://www.amazon.com/Born-Crime-Stories-African-Childhood/dp/0399588191/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1604895976&sr=8-2">Born A Crime</a></strong> by Trevor Noah</p>
    <p><strong><a className="text-link" href="https://www.amazon.com/Bel-Canto-Patchett-Ann-Paperback/dp/B009O3DG8M/ref=sr_1_3?dchild=1&keywords=bel+canto&qid=1604896030&sr=8-3">Bel Canto</a></strong> by Ann Patchett</p>
    <p></p>
    <p></p>
    <p></p>
    <h2>Recommended TV Shows</h2>
    <p><strong>Terrace House</strong></p>
    <p><strong>Signal</strong></p>
    <p><strong>The Kingdom</strong></p>
    <p><strong>Stranger</strong></p>
    <p><strong>沉默的真相</strong> (The Long Night)</p>
    <p><strong>Emily in Paris</strong></p>
    <p><strong>The Queen's Gambit</strong></p>
    <p><strong>Start-up</strong></p>
    <p><strong>Flea Bag</strong></p>
    <p><strong>The Crown</strong></p>
    <p></p>
    <p></p>
    <p></p>
    <h2>Recommended Documentaries</h2>
    <p><strong>Tiger King</strong></p>
    <p><strong>The Social Dilemma</strong></p>
    <p><strong>BLACKPINK: Light Up the Sky</strong></p>
    <p><strong>Knock Down the House</strong></p>
    <p><strong>Snowden</strong></p>
    <p></p>
    <p></p>
    <h2><strong>Recommended Podcast</strong></h2>
    <p><strong>After Hours</strong></p>
    <p><strong>The World</strong></p>
    <p></p>
    <p></p>
    <p></p>
    <button className='button-link'><Link to="/" className='button-link'>&#60;&#60; Back to Homepage</Link></button>
  </Layout>
)

export default LeisurePage


