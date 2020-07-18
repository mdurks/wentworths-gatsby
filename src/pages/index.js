import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import SEO from "../components/seo"
// import Snipcart from "../components/snipcart"
import MainNav from "../components/mainNav"

const pageQuery = graphql`
  {
    gcms {
      welcomes {
        heroHeading
        firstIntroMessage {
          html
        }
        heroImage {
          url
        }
      }
    }
  }
`

const IndexPage = () => {
  const {
    gcms: { welcomes },
  } = useStaticQuery(pageQuery)

  return (
    <>
      <MainNav />
      <main>
        <h1>{welcomes[0].heroHeading}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: welcomes[0].firstIntroMessage.html,
          }}
        ></div>
      </main>
    </>
  )
}

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
