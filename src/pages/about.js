import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import SEO from "../components/seo"
// import Snipcart from "../components/snipcart"
import MainNav from "../components/mainNav"

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
      <MainNav />
      <main>
        <h1>{abouts[0].heroHeading}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: abouts[0].firstIntroMessage.html,
          }}
        ></div>
      </main>
    </>
  )
}

export default AboutPage
