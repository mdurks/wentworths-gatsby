import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          products {
            name
            id
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title="Home" />
        <button className="snipcart-checkout">
          Cart (<span className="snipcart-items-count"></span>)
        </button>
        <button
          className="snipcart-add-item"
          data-item-id="ckcgn5txc0gca0198idxivaeh"
          data-item-price="2.00"
          data-item-url="/"
          data-item-description="Made from solid gold, the design combines precious and semi-precious stones in a beautiful and flattering oval structure.\n\nWear this ring with the coordinating stud earrings for a dazzling evening look.\n\nMorganite weight 0.64ct, diamond weight 0.05ct"
          data-item-image="https://media.graphcms.com/ikX2xVpqSpGH6EMMQXP5"
          data-item-name="9ct Rose Gold Morganite and Diamond Oval Cocktail Ring"
        >
          Add to cart
        </button>
        <ul>
          {data.gcms.products.map(mountain => {
            const { name, id } = mountain
            return <li key={id}>{name}</li>
          })}
        </ul>
      </>
    )}
  />
)

export default IndexPage

// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

// export default IndexPage
