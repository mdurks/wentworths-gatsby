import React from "react"

// import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import { Styled_SiteContainer } from "../styles/commonStyles"

const NotFoundPage = () => (
  <>
    <Styled_SiteContainer>
      <SEO title="404: Not found" />
      <h1>We're sorry, the page wasn't found</h1>
      <p>
        This page doesn't exist or it's being built and hasn't been hooked in
        yet.
      </p>
    </Styled_SiteContainer>
  </>
)

export default NotFoundPage
