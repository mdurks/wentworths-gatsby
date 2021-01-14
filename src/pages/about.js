import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// import Layout from "../components/layout"
import { Styled_SiteContainer } from "../styles/commonStyles"

import { gsap } from "gsap/all"
// import { render } from "preact"

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

class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    // init gsap timeline for this page
    this.tl = gsap.timeline()

    // reference to the animation
    this.myEntryTween = null
  }

  componentDidMount() {
    // document.getElementById("gatsby-focus-wrapper").style.opacity = "0"
    this.myEntryTween = gsap.to("#gatsby-focus-wrapper", {
      duration: 1,
      opacity: 1,
    })
  }

  render() {
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
}

export default AboutPage

//
// Functional component:

// const AboutPage = () => {
//   const {
//     gcms: { abouts },
//   } = useStaticQuery(pageQuery)

//   return (
//     <>
//       <Styled_SiteContainer>
//         <h1>{abouts[0].heroHeading}</h1>
//         <div
//           dangerouslySetInnerHTML={{
//             __html: abouts[0].firstIntroMessage.html,
//           }}
//         ></div>
//       </Styled_SiteContainer>
//     </>
//   )
// }

// export default AboutPage
