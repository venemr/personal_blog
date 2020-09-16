import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "../components/image"

const AcademicPage = () => (
  <Layout>
    <SEO title="Academic" />
    <h1>Academic Page</h1>
    {/* style={{ maxWidth: `500px`, marginBottom: `1.45rem` }} */}
    <p>My academic page </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AcademicPage


