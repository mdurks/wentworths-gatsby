import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// import Layout from "../components/layout"
import { Styled_SiteContainer } from "../styles/commonStyles"

const pageQuery = graphql`
  {
    gcms {
      contacts {
        heroHeading
        firstIntroMessage
      }
    }
  }
`

const ContactPage = () => {
  const {
    gcms: { contacts },
  } = useStaticQuery(pageQuery)

  return (
    <>
      <Styled_SiteContainer>
        <h1>{contacts[0].heroHeading}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: contacts[0].firstIntroMessage,
          }}
        ></div>

        <br />
        <br />
        <br />

        <form name="Contact" method="post" action="/">
          <input type="hidden" name="form-name" value="Contact" />
          <p>
            <label htmlFor="name">
              Your Name: <br />
              <input id="name" type="text" name="name" />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Your Email: <br />
              <input id="email" type="email" name="email" />
            </label>
          </p>
          <p>
            <label htmlFor="message">
              Message: <br />
              <textarea id="message" name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Styled_SiteContainer>
    </>
  )
}

export default ContactPage
