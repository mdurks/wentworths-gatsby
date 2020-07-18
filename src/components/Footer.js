import React from "react"
import { Styled_SiteContainer } from "../styles/commonStyles"

const Footer = () => (
  <footer>
    <Styled_SiteContainer>
      <div>© Wentworth Jewels {new Date().getFullYear()}</div>
    </Styled_SiteContainer>
  </footer>
)

export default Footer
