import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { Styled_SiteContainer } from "../styles/commonStyles"

const pageQuery = graphql`
  {
    gcms {
      abouts {
        heroHeading
        firstIntroMessage {
          html
        }
      }
    }
  }
`

const AboutPage = () => {
  const {
    gcms: { abouts },
  } = useStaticQuery(pageQuery)

  return (
    <>
      <Styled_SiteContainer>
        <h1>{abouts[0].heroHeading}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: abouts[0].firstIntroMessage.html,
          }}
        ></div>
      </Styled_SiteContainer>
    </>
  )
}

export default AboutPage
