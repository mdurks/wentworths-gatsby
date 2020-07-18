import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

const Styled_BurgerBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 40px;
  padding: 12px 11px;
  background-color: #000;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  z-index: 15;

  @media (min-width: 768px) {
    display: none;
  }

  div:before,
  div:after,
  div {
    position: relative;
    top: 0;
    height: 3px;
    display: block;
    background-color: white;
    pointer-events: none;
    transition: all ease 0.3s;
  }

  div {
    .pageNoScrollY & {
      background: none;
    }

    p {
      position: absolute;
      text-indent: -9999px;
    }
  }

  div:before {
    top: -7px;
    content: "";

    .pageNoScrollY & {
      top: -1px;
      transform: rotate(45deg);
    }
  }

  div:after {
    top: 4px;
    content: "";

    .pageNoScrollY & {
      top: -4px;
      transform: rotate(-45deg);
    }
  }
`

const Styled_Nav = styled.nav`
  /* display: none; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 90px 0 0;
  background-color: hsl(53, 90%, 87%);
  transition: all ease 0.4s;
  opacity: 0;
  z-index: 10;
  pointer-events: none;
  overflow: scroll;

  .pageNoScrollY & {
    /* display: block; */
    opacity: 1;
    pointer-events: all;
  }

  @media (min-width: 768px) {
    position: relative;
    display: block;
    padding: 0;
    height: auto;
    background: none;
    opacity: 1;
    pointer-events: all;
    overflow: visible;
  }
`

const Styled_MainNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    border-bottom: 2px dotted #dedede;
  }
`

const Styled_ToplevelItem = styled.li`
  position: relative;
  border-bottom: 1px solid black;

  @media (min-width: 768px) {
    position: initial;
    display: inline-block;
    border: none;
  }
  /* Desktop: Hovering on this item shows the Styled_SubMenuContainer */
  /* Mobile: We need a chevron to communicate this is a dropdown */

  @media (max-width: 767px) {
    &.hasSubMenu :after {
      content: "";
      position: absolute;
      top: 22px;
      right: 20px;
      width: 15px;
      height: 15px;
      border: 4px solid black;
      border-left: none;
      border-top: none;
      transform: rotate(45deg);
      transition: all ease 0.3s;
    }
    &.hasSubMenu.openSubMenu :after {
      top: 26px;
      transform: rotate(-135deg);
    }
  }
`

const StyledLink = styled(Link)`
  display: block;
  padding: 20px;
  font-size: 15px;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-weight: bold;

  @media (min-width: 768px) {
    display: inline-block;
    padding: 20px 0;
    font-size: 18px;
  }

  :hover {
    text-decoration: none;
  }

  .hasSubMenu & {
    display: inline-block;
  }

  /* Underline that appears on desktop */
  @media (min-width: 768px) {
    &.is-active:after {
      content: "";
      display: block;
      position: relative;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 2px;
      background-color: #000;
    }
  }
`

const Styled_SubMenuContainer = styled.div`
  display: none;
  text-align: left;
  background-color: hsl(53, 100%, 92%);

  @media (min-width: 768px) {
    position: absolute;
    width: 100%;
    top: 64px;
    left: 0;
    padding: 20px;
    border-top: 2px dotted #dedede;
    z-index: 10;
  }

  .openSubMenu & {
    display: block;
  }

  > p {
    display: none;

    @media (min-width: 768px) {
      display: block;
      margin: 0 0 10px 20px;
    }
  }

  ul > li {
    flex: 1 0 auto;

    a {
      padding: 20px;
      display: block;

      :hover {
        text-decoration: none;
        background-color: hsl(53, 100%, 85%);
      }
    }
  }

  > ul {
    list-style-type: none;
    margin: 0 0 20px;
    padding: 0;

    @media (min-width: 768px) {
      display: flex;
      margin: 0;
    }
  }

  @media (min-width: 768px) and (hover: hover) {
    ${Styled_ToplevelItem}:hover & {
      display: block;
    }
  }
`

class MainNav extends React.Component {
  componentDidMount() {
    let mobileBurgerBtn = document.getElementById("mobileBurgerBtn")
    let htmlTag = document.documentElement
    let mainNav = document.getElementById("mainNav")

    // Toggle this in dev to keep menu open
    // htmlTag.classList.add("pageNoScrollY");

    mobileBurgerBtn.addEventListener("click", () => {
      htmlTag.classList.toggle("pageNoScrollY")
    })

    mainNav.addEventListener("click", e => {
      let el = e.target

      if (el.matches("a")) {
        htmlTag.classList.remove("pageNoScrollY")
      }
      if (el.matches(".hasSubMenu")) {
        el.classList.toggle("openSubMenu")
      }
    })
  }

  render() {
    return (
      <>
        <Styled_BurgerBtn id="mobileBurgerBtn">
          <div>
            <p>Mobile menu</p>
          </div>
        </Styled_BurgerBtn>
        <Styled_Nav id="mainNav">
          <Styled_SiteContainer mainNav>
            <Styled_MainNav>
              <Styled_ToplevelItem className="hasSubMenu">
                <StyledLink activeClassName="is-active" to="/engagement/">
                  Engagement
                </StyledLink>
                <Styled_SubMenuContainer>
                  <p>Engagement:</p>
                  <ul>
                    <li>
                      <Link to="/engagement/rings/">Rings</Link>
                    </li>
                    <li>
                      <Link to="/engagement/coloured/">Coloured</Link>
                    </li>
                    <li>
                      <Link to="/engagement/trilogy/">Trilogy</Link>
                    </li>
                    <li>
                      <Link to="/engagement/wedding-band/">Wedding band</Link>
                    </li>
                    <li>
                      <Link to="/engagement/rejuvenated-rings/">
                        Rejuvenated rings
                      </Link>
                    </li>
                    <li>
                      <Link to="/engagement/bespoke design/">
                        Bespoke design
                      </Link>
                    </li>
                  </ul>
                </Styled_SubMenuContainer>
              </Styled_ToplevelItem>

              <Styled_ToplevelItem className="hasSubMenu">
                <StyledLink activeClassName="is-active" to="/weddings/">
                  Weddings
                </StyledLink>
                <Styled_SubMenuContainer>
                  <p>Weddings:</p>
                  <ul>
                    <li>
                      <Link to="/weddings/rings/">Rings</Link>
                    </li>
                    <li>
                      <Link to="/weddings/earrings/">Earrings</Link>
                    </li>
                    <li>
                      <Link to="/weddings/necklaces/">Necklaces</Link>
                    </li>
                    <li>
                      <Link to="/weddings/tiaras/">Tiaras</Link>
                    </li>
                    <li>
                      <Link to="/weddings/gifts/">Gifts</Link>
                    </li>
                    <li>
                      <Link to="/weddings/bespoke-design/">
                        Bespoke designs
                      </Link>
                    </li>
                    <li>
                      <Link to="/weddings/eternity-rings/">Eternity rings</Link>
                    </li>
                  </ul>
                </Styled_SubMenuContainer>
              </Styled_ToplevelItem>

              <Styled_ToplevelItem className="hasSubMenu">
                <StyledLink activeClassName="is-active" to="/jewellery/">
                  Jewellery
                </StyledLink>
                <Styled_SubMenuContainer>
                  <p>Jewellery:</p>
                  <ul>
                    <li>
                      <Link to="/jewellery/rings/">Rings</Link>
                    </li>
                    <li>
                      <Link to="/jewellery/earrings/">Earrings</Link>
                    </li>
                    <li>
                      <Link to="/jewellery/necklaces/">Necklaces</Link>
                    </li>
                    <li>
                      <Link to="/jewellery/bracelets/">Bracelets</Link>
                    </li>
                  </ul>
                </Styled_SubMenuContainer>
              </Styled_ToplevelItem>

              <Styled_ToplevelItem>
                <StyledLink activeClassName="is-active" to="/collections/">
                  Collections
                </StyledLink>
              </Styled_ToplevelItem>

              <Styled_ToplevelItem>
                <StyledLink activeClassName="is-active" to="/gifts/">
                  Gifts
                </StyledLink>
              </Styled_ToplevelItem>

              <Styled_ToplevelItem>
                <StyledLink activeClassName="is-active" to="/time-piece/">
                  Time piece
                </StyledLink>
              </Styled_ToplevelItem>

              <Styled_ToplevelItem>
                <StyledLink activeClassName="is-active" to="/about/">
                  Heritage
                </StyledLink>
              </Styled_ToplevelItem>
            </Styled_MainNav>
          </Styled_SiteContainer>
        </Styled_Nav>
      </>
    )
  }
}

export default MainNav
