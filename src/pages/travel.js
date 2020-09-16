import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "../components/image"

const TravelPage = () => (
  <Layout>
    <SEO title="Travel" />
    <h1>Travel Page</h1>
    {/* style={{ maxWidth: `500px`, marginBottom: `1.45rem` }} */}
    <p>My travel page </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TravelPage


