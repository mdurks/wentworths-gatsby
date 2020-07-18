import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
// import SEO from "../components/seo"
// import Snipcart from "../components/snipcart"
import MainNav from "../components/mainNav"

const pageQuery = graphql`
  {
    gcms {
      products {
        name
        slug
      }
    }
  }
`

const ProductsPage = () => {
  const {
    gcms: { products },
  } = useStaticQuery(pageQuery)

  return (
    <>
      <MainNav />
      <h1>Products</h1>
      <ul>
        {products.map(({ slug, ...product }) => (
          <li key={slug}>
            <Link to={`/products/${slug}/`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProductsPage
