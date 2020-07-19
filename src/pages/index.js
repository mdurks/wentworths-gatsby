import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"

import Layout from "../components/layout"
// import Snipcart from "../components/snipcart"
import styled from "styled-components"
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

const Styled_HeroImg = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  > div > div {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 600px) {
    height: 400px;
  }
  @media (min-width: 950px) {
    height: 600px;
  }
`

const IndexPage = () => {
  const {
    gcms: { welcomes },
  } = useStaticQuery(pageQuery)

  return (
    <Layout>
      <Styled_HeroImg>
        <div>
          <GraphImg
            image={welcomes[0].heroImage}
            transforms={["quality=value:80"]}
            maxWidth={1200}
          />
        </div>
      </Styled_HeroImg>

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
