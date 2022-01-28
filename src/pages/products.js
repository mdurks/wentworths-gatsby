import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

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
      <Styled_SiteContainer>
        <h2 style={{ margin: "150px 0 50px" }}>
          All Products ({totalProducts}):
        </h2>
        <p style={{ margin: "0 0 20px" }}>
          This page is creatd for snipcart so that it can register every product
          and it's URL. Click the links if you want to view that product page.
          Updated, Created and Published are there for any kind of audit.
        </p>
        <p style={{ margin: "0 0 50px" }}>
          Any time products are added or removed, re-submit this page in the
          snipcart admin to update it's list of products.
        </p>
        <p>orderBy: updatedAt_DESC</p>
        {products.map(product => (
          <ul style={{ margin: "30px 0" }}>
            {product.categoryType.map(category => {
              productCount++
              return (
                <li key={category + product.slug} style={{ padding: "5px" }}>
                  {productCount}.
                  <a
                    style={{
                      margin: "0 10px 0 10px",
                      textDecoration: "underline",
                    }}
                    href={`/${category}/${product.productType}/${product.slug}`}
                  >
                    View
                  </a>
                  <button
                    type="button"
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url={product.slug}
                    data-item-description={product.description}
                    data-item-image={product.image[0].url}
                    data-item-name={product.name}
                  >
                    {`£${product.price} ${product.name}`}
                  </button>
                  <small>
                    {` ( ${category}/${
                      product.productType
                    } ), Updated: ${product.updatedAt.slice(
                      0,
                      19
                    )}, Created: ${product.createdAt.slice(
                      0,
                      19
                    )},  Published: ${product.publishedAt.slice(0, 19)}`}
                  </small>
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
