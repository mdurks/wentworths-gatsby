import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"
import LogoSmall from "../images/wentworth_symbol_small.png"
import LogoBig from "../images/wentworth_symbol_large.png"

const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;
`

const Styled_WentworthSymbolImg = styled.div`
  display: block;
  margin: 10px auto;
  width: 60px;
  height: 68px;
  background-image: url(${LogoSmall});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media only screen and (min-width: 767px) {
    background-image: url(${LogoBig});
    margin: 20px auto;
    width: 100px;
    height: 115px;
  }
`

const Styled_WentworthTitle = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  font-size: 25px;
  line-height: 25px;
  text-align: center;

  :first-letter {
    font-size: 32px;
  }

  :first-of-type {
    margin-right: 7px;
  }

  @media only screen and (min-width: 767px) {
    font-size: 40px;
    line-height: 40px;

    :first-letter {
      font-size: 50px;
    }
  }
`

const Header = () => (
  <header>
    <Styled_SiteContainer>
      <Link to="/contact/">Contact</Link> | <Link to="/contact/">Services</Link>{" "}
      | <Link to="/contact/">Blog</Link>
      <button className="snipcart-checkout">
        Cart (<span className="snipcart-items-count"></span>)
      </button>
    </Styled_SiteContainer>
    <Styled_SiteContainer textCenter>
      <StyledLink to="/">
        <Styled_WentworthSymbolImg />
        <Styled_WentworthTitle>Wentworth</Styled_WentworthTitle>
        <Styled_WentworthTitle>Jewels</Styled_WentworthTitle>
      </StyledLink>
    </Styled_SiteContainer>
  </header>
)

export default Header
