import React from "react"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

const Styled_footer = styled.footer`
  margin-top: auto;
  z-index: 10;
`

const Footer = () => (
  <Styled_footer>
    <Styled_SiteContainer>
      <div>© Wentworth Jewels {new Date().getFullYear()}</div>
    </Styled_SiteContainer>
  </Styled_footer>
)

export default Footer
