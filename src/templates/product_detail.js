import React from "react"
import { graphql } from "gatsby"
// import SEO from "../components/seo"
// import Snipcart from "../components/snipcart"
import MainNav from "../components/mainNav"

const DetailsPage = ({
  data: {
    gcms: { product },
  },
}) => {
  return (
    <>
      <MainNav />
      <h1>Detail</h1>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </>
  )
}

export const pageQuery = graphql`
  query ProductPageQuery($id: ID!) {
    gcms {
      product(where: { id: $id }) {
        name
        description
        price
      }
    }
  }
`

export default DetailsPage
