import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "../components/image"

const CategoryPage = () => (
  <Layout>
    <SEO title="Academic" />
    <h1>Category Page</h1>
    {/* style={{ maxWidth: `500px`, marginBottom: `1.45rem` }} */}
    <p>My category page </p>
    <button className='button-link'><Link to="/" className='button-link'>&#60;&#60; Back to Homepage</Link></button>
  </Layout>
)

export default CategoryPage


