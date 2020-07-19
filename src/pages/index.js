import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
// import Snipcart from "../components/snipcart"
import { Styled_SiteContainer } from "../styles/commonStyles"

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
      <Layout>
        <Styled_SiteContainer>
          <h1>{welcomes[0].heroHeading}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: welcomes[0].firstIntroMessage.html,
            }}
          ></div>
        </Styled_SiteContainer>
      </Layout>
      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css"
      />
      <div
        hidden
        id="snipcart"
        data-api-key="YmJkMDViNmYtYjg2MC00YTc0LTkwNDMtNGUzZGYwYTkyN2JjNjM3MzAzMTM2MDgxMjQzNzc0"
        data-currency="gbp"
      ></div>
      <script src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"></script>
    </>
  )
}

export default IndexPage
