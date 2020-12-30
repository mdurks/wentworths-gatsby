import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

// import Layout from "../components/layout"
// import Snipcart from "../components/snipcart"
import { Styled_SiteContainer } from "../styles/commonStyles"

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
      <Styled_SiteContainer>
        <h2>Products</h2>
        <ul>
          {products.map(({ slug, ...product }) => (
            <li key={slug}>
              <Link to={`/products/${slug}/`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </Styled_SiteContainer>
    </>
  )
}

export default ProductsPage
