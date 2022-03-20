import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Helmet } from "react-helmet"

// import Layout from "../components/layout"
// import Snipcart from "../components/snipcart"
import { Styled_SiteContainer } from "../styles/commonStyles"

const pageQuery = graphql`
  {
    gcms {
      products(orderBy: updatedAt_DESC) {
        createdAt
        updatedAt
        publishedAt
        id
        slug
        name
        categoryType
        productType
        price
        description
        image {
          url
        }
      }
    }
  }
`

const ProductsPage = () => {
  const {
    gcms: { products },
  } = useStaticQuery(pageQuery)

  const reducer = (previous, current, index, array) => {
    const returns = previous + current
    return returns
  }

  const totalProducts = products
    .map(product => product.categoryType.length)
    .reduce(reducer)

  let productCount = 0

  return (
    <>
      <Helmet
        meta={[
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ]}
      />
      <Styled_SiteContainer>
        <h2 style={{ margin: "150px 0 0" }}>All Products:</h2>
        <p style={{ margin: "0 0 50px" }}>
          {products.length} Unique products, {totalProducts} Occurances
        </p>
        <p style={{ margin: "0 0 30px" }}>
          This page is created for snipcart so that it can register every
          product and it's URL. Any time products are added or removed, this
          page MUST be re-submited in the snipcart admin to update it's list of
          products. Otherwise snipcart won't recognise that product and no one
          will be able to buy it.
        </p>
        <p>Ordered by: 'Updated' (descending)</p>
        {products.map(product => (
          <ul
            style={{
              margin: "30px 0",
              background: "#efede8",
              padding: "5px 15px",
            }}
          >
            {product.categoryType.map(category => {
              productCount++
              return (
                <li
                  key={category + product.slug}
                  style={{ padding: "5px", display: "flex" }}
                >
                  <div>{productCount}.</div>
                  <div>
                    <a
                      style={{
                        margin: "0 15px 0 10px",
                        textDecoration: "underline",
                      }}
                      href={`/${category}/${product.productType}/${product.slug}`}
                    >
                      {product.name} £{product.price}
                    </a>
                    <small>{` ( ${category} > ${product.productType} )`}</small>
                    <br />
                    <button
                      type="button"
                      className="snipcart-add-item"
                      data-item-id={product.id}
                      data-item-price={product.price}
                      data-item-url={product.slug}
                      data-item-description={product.description}
                      data-item-image={product.image[0].url}
                      data-item-name={product.name}
                      style={{
                        border: "1px solid grey",
                        margin: "0 10px 0 10px",
                      }}
                    >
                      Add to basket
                    </button>
                    <small>
                      {` Created: ${product.createdAt.slice(
                        0,
                        19
                      )},  Published: ${product.publishedAt.slice(0, 19)}`}
                    </small>
                  </div>
                </li>
              )
            })}
          </ul>
        ))}
      </Styled_SiteContainer>
    </>
  )
}

export default ProductsPage
