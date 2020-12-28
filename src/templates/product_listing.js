import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Product from "../components/Product_in_list"

import { Styled_SiteContainer } from "../styles/commonStyles"
// import Snipcart from "../components/snipcart"

const ProductPage = ({
  data: {
    gcms: { products },
  },
  pageContext,
}) => {
  console.log(pageContext)
  return (
    <>
      <Styled_SiteContainer productFlexList>
        {products.map(({ id, ...product }) => (
          <Product
            key={id}
            category={`${pageContext.category}/${pageContext.product_type}`} // this forms part of the URL
            product={product}
          />
        ))}
      </Styled_SiteContainer>
    </>
  )
}

// Create a 'page query' allowing variables in a gql query
// Define variables for the 'context' values coming from gatsby-node.js
// Use these variables to filter by category and product type e.g. jewellery & rings

export const pageQuery = graphql`
  query ProductListingQuery(
    $category: [GCMS_CategoryType!]
    $product_type: GCMS_ProductType
  ) {
    gcms {
      products(
        orderBy: updatedAt_DESC
        where: {
          productType: $product_type
          AND: { categoryType_contains_some: $category }
        }
      ) {
        id
        slug
        name
        categoryType
        productType
        price
        description
        createdAt
        image {
          id
          url
          handle
          width
          height
        }
      }
    }
  }
`

export default ProductPage
