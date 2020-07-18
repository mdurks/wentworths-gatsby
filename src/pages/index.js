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
  )
}

export default IndexPage
