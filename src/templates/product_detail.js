import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Snipcart from "../components/snipcart"
import { Styled_SiteContainer } from "../styles/commonStyles"

const DetailsPage = ({
  data: {
    gcms: { product },
  },
}) => {
  return (
    <Layout>
      <Styled_SiteContainer>
        <h1>Detail</h1>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </Styled_SiteContainer>
    </Layout>
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
