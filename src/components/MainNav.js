import React from "react"
import { useEffect } from "react"

import { Link } from "gatsby"
// import Link from "gatsby-plugin-transition-link"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled, { css } from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import { gsap } from "gsap/all"

import nav_rockywall from "../images/nav/rockywall.png"
import nav_engagement_default from "../images/nav/nav-engagement-default.jpg"
import nav_engagement_earrings from "../images/nav/nav-engagement-earrings.jpg"
import nav_engagement_rings from "../images/nav/nav-engagement-rings.jpg"
import nav_engagement_necklace from "../images/nav/nav-engagemet-necklace.jpg"
import nav_engagement_bracelet from "../images/nav/nav-engagemn-bracelet.jpg"

const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const Button__burgerBtn = styled.button`
  position: absolute;
  top: 11px;
  right: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  padding: 0 10px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  outline: none;
  -webkit-tap-highlight-color: transparent; /* for removing the highlight */
  z-index: 15;

  div:before,
  div:after,
  div {
    position: relative;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.75);
    border-radius: 100px;
    content: "";
    display: block;
  }
  div:before {
    top: -5px;
  }
  div:after {
    top: 3px;
  }

  ${bp_min_desktop} {
    display: none;
  }
`

const Nav__mainNav = styled.nav`
  position: absolute;
  height: 30%;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(0deg, #6db2c300 0%, #6db2c3 100%);
  padding: 0;
  z-index: 5;

  .showMobileNav & {
    background: #3d8799;
    height: 100%;
    background: linear-gradient(0deg, #3d8799 99.9%, #6db2c3 100%);
  }

  ${bp_min_desktop} {
    transition: all ease-out 0.5s;
    position: fixed;
    height: auto;
    background: linear-gradient(0deg, #6db2c300 0%, #6db2c3 100%);
    padding: 50px 50px 80px;
  }

  .mainNav--shrink & {
    ${bp_min_desktop} {
      background: white;
      box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
      padding: 0 50px;
    }
  }
`

const Div__mainNav__container = styled.div`
  height: 100%;

  ${bp_min_desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: ${bp_desktop_max};
    height: auto;
    margin: auto;
  }
`

const A__mainNav__logo = styled.a`
  display: block;
  margin: 0;
  padding: 20px 60px 20px 20px;
  font-family: "Playfair Display", serif;
  font-size: 22px;
  text-transform: uppercase;
  text-decoration: none !important;
  color: white;
  transition: all ease 0.5s;

  &:hover {
    color: black;
  }

  ${bp_min_desktop} {
    margin: 0 auto 0 0;
    .mainNav--shrink & {
      color: rgb(109, 109, 109);
    }
  }
`

const Ul__mainNav__listContainer = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: calc(100% - 70px); // minus logo space above
  background: linear-gradient(0deg, #92bfca 0%, #3d8799 100%);
  overflow-y: auto;

  .showMobileNav & {
    display: flex;
  }

  ${bp_min_desktop} {
    display: flex;
    flex-direction: row;
    height: auto;
    background: none;
    overflow-y: visible;
  }
`

const Button__topLevelLink = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  border: none;
  background-color: transparent;
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none !important;
  cursor: pointer;
  transition: all ease 0.85s;
  z-index: 10;
  -webkit-tap-highlight-color: transparent; /* for removing the highlight */

  ${bp_max_desktop} {
    outline: none;
  }

  // white block behind button
  ${bp_min_desktop} {
    &:before {
      z-index: -1;
      content: "";
      position: absolute;
      top: -50px;
      left: 0;
      width: 100%;
      height: 110px;
      background-color: white;
      box-shadow: 0px 1px 4px 5px rgba(0, 0, 0, 0.1);
      opacity: 0;
      transition: all ease 0.5s;
    }

    // coloured underline of link
    &:after {
      content: "";
      position: absolute;
      top: 49px;
      left: 50%;
      transform: translateX(-50%);
      width: 0%;
      height: 6px;
      background-color: #62a3b4;
      opacity: 0;
      transition: all ease 0.5s;
    }
  }

  ${bp_min_desktop} {
    .mainNav--shrink & {
      color: #b3b3b3;
    }
  }
`

const Div__mainNav__subNavGroupWrapper = styled.div`
  overflow: hidden;
  flex: 1 0 0px;
  transition: all ease 0.6s;

  /* .open & {
    flex: 1 0 268px;
  } */

  ${bp_min_desktop} {
    display: block;
    overflow: visible;
    position: absolute;
    top: 100px;
    width: 100%;
    height: 0;
    left: 0;
    overflow: hidden;

    .mainNav--shrink & {
      top: 49px;
    }
  }
`

const Div__mainNav__subNavGroup = styled.div`
  background-color: rgba(255, 255, 255, 0.3);

  ${bp_min_desktop} {
    display: block;
    position: absolute;
    top: -510px;
    left: 0;
    width: 100%;
    // background-color: white;
    border-top: 11px solid #bedfe8;
    z-index: 5;
    opacity: 0;
    transition: all ease 0.65s;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${nav_rockywall});
      z-index: -1;
    }
  }
`

const Div__mainNav__subNavGroup__container = styled.div`
  ${bp_min_desktop} {
    display: flex;
    flex-direction: row;
    max-width: ${bp_desktop_max};
    margin: auto;
    background-color: white;
  }
`

const Div__mainNav__subNavGroup__linkImg = styled.div`
  display: none;

  ${bp_min_desktop} {
    position: relative;
    display: block;
    width: 400px;
    height: 292px;
    border: 10px solid white;
    opacity: 0;
    transition: all ease 1s;
    transition-delay: 0.25s;

    transform: rotate(0);
    left: 5px;
    top: 0;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);

    background-image: url(${nav_engagement_default});
    background-repeat: no-repeat;
    background-position: center center;
  }
`

const Ul__mainNav__subNavList = styled.ul`
  position: relative;
  padding: 0 0 20px;
  text-align: center;
  transition: padding ease 0.5s;

  .open & {
    padding: 0 17.5% 20px;
  }

  ${bp_min_desktop} {
    flex: 1 0 35%;
    display: block;
    padding: 20px 30px;
    width: 400px;
    text-align: left;
  }

  li {
    display: block;
    bottom: -50px;
    opacity: 0;
    transition: all ease 0.4s;

    .open & {
      bottom: 0;
      opacity: 1;
    }

    &:first-of-type {
      border-top: 1px solid rgba(255, 255, 255, 0);
      padding-top: 0;

      .open & {
        border-top: 1px solid rgba(255, 255, 255, 0.65);
        padding-top: 20px;
      }
    }

    &:nth-child(2) {
      transition-delay: 0.1s;
    }
    &:nth-child(3) {
      transition-delay: 0.2s;
    }
    &:nth-child(4) {
      transition-delay: 0.3s;
    }

    &:nth-child(2) a:after {
      transition-delay: 0.1s;
    }
    &:nth-child(3) a:after {
      transition-delay: 0.2s;
    }
    &:nth-child(4) a:after {
      transition-delay: 0.3s;
    }

    ${bp_min_desktop} {
      &:nth-child(1) {
        transition-delay: 0.4s;
      }
      &:nth-child(2) {
        transition-delay: 0.5s;
      }
      &:nth-child(3) {
        transition-delay: 0.6s;
      }
      &:nth-child(4) {
        transition-delay: 0.7s;
      }

      &:nth-child(1) a:before {
        background-image: url(${nav_engagement_rings});
      }
      &:nth-child(2) a:before {
        background-image: url(${nav_engagement_earrings});
      }
      &:nth-child(3) a:before {
        background-image: url(${nav_engagement_necklace});
      }
      &:nth-child(4) a:before {
        background-image: url(${nav_engagement_bracelet});
      }
    }

    &:last-of-type a {
      border: none;
    }
  }

  a {
    display: block;
    padding: 18px;
    color: white;
    font-size: 18px;
    text-decoration: none;
    transition: all ease 0.3s;

    ${bp_max_desktop} {
      position: relative;
    }

    &:after {
      content: "";
      height: 0;
      width: calc(100% + 55%);
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      opacity: 1;
      // transition-delay: .5s;
      transition: all ease 0.4s;

      .open & {
        height: 100%;
        opacity: 0;
      }
    }

    ${bp_min_desktop} {
      font-size: 20px;
      border-bottom: 1px solid rgb(223, 223, 223);
      color: grey;

      &:before {
        content: "";
        position: absolute;
        top: 0px;
        left: -400px;
        width: 400px;
        height: 274px;
        border: 10px solid white;
        box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
        background-repeat: no-repeat;
        background-position: center center;
        opacity: 0;
        transition: all ease 0.5s;
        transform: rotate(0);
        transform: rotate(-4deg);
      }

      &:hover {
        padding-left: 25px;
        color: #6ea9b7;

        &:before {
          opacity: 1;
          top: 3px;
          left: -395px;
          transform: rotate(-1deg);
        }
      }
    }
  }
`

const Div__mainNav__subNavMessage = styled.div`
  display: none;

  ${bp_min_desktop} {
    display: block;
    width: 400px;
    padding: 47px 30px 40px;
    opacity: 0;
    transition: all ease 1.5s;
    transition-delay: 0.6s;

    p {
      font-size: 16px;
      line-height: 30px;
      color: grey;
    }
  }
`

const Li__mainNav__topLevelLink = styled.li`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);

  ${bp_min_desktop} {
    display: block;
    border: none;
  }

  &.open ${Button__topLevelLink} {
    background-color: rgba(255, 255, 255, 0.3);

    ${bp_min_desktop} {
      background-color: transparent;
    }
  }

  &:hover {
    ${Button__topLevelLink} {
      ${bp_min_desktop} {
        color: #6ea9b7;

        // white block behind button
        &:before {
          opacity: 1;
          height: 125px;
        }

        // coloured underline of link
        &:after {
          width: 74%;
          background-color: #c8e5ec;
          opacity: 1;
        }
      }
    }

    ${Div__mainNav__subNavGroup} {
      opacity: 1;
      top: 10px;

      .mainNav--shrink & {
        top: 10px;
      }
    }
  }

  ${props =>
    props.mainNav__topLevelLink__hasSubMenu &&
    css`
      ${Button__topLevelLink} {
        position: relative;

        ${bp_max_desktop} {
          &:before {
            content: ">";
            font-size: 28px;
            position: absolute;
            top: 50%;
            right: 25px;
            transform: translateY(-50%) rotate(90deg);
            transition: all ease 0.5s;
          }
        }
      }

      ${bp_min_desktop} {
        &:hover {
          ${Button__topLevelLink}:before {
            transition: all ease 1s;
            box-shadow: 0px -8px 4px 5px rgba(0, 0, 0, 0.1);
          }

          ${Div__mainNav__subNavGroupWrapper} {
            height: 335px;

            .mainNav--shrink & {
              height: 335px;
            }
          }

          ${Ul__mainNav__subNavList} li {
            bottom: 0;
            opacity: 1;
          }

          ${Div__mainNav__subNavGroup__linkImg} {
            opacity: 1;
            left: -7px;
            top: -1px;
          }

          ${Div__mainNav__subNavMessage} {
            opacity: 1;
          }
        }
      }
    `};

  ${bp_max_desktop} {
    // rotate mobile chevron if sub menu open
    &.open {
      ${Button__topLevelLink}:before {
        right: 34px;
        transform: translateY(-50%) rotate(-90deg);
      }
    }
  }
`

// const Styled_SubMenuContainer = styled.div`

//   @media (min-width: 768px) and (hover: hover) {
//     ${Styled_ToplevelItem}:hover & {
//       display: block;
//     }
//   }
// `

const MainNav = () => {
  // class MainNav extends React.Component {
  // constructor(props) {
  //   super(props)
  //   // init gsap timeline for this page
  //   this.tl = gsap.timeline()

  //   // reference to the animation
  //   this.page_exit_animation = null
  //   this.page_exit_animation_duration = 1
  // }

  // componentDidMount() {
  //   this.page_exit_animation = (exit, node) => {
  //     console.log(exit, node)
  //     gsap.to("#gatsby-focus-wrapper", {
  //       duration: this.page_exit_animation_duration,
  //       opacity: 0,
  //     })
  //   }

  // let mobileBurgerBtn = document.getElementById("mobileBurgerBtn")
  // let htmlTag = document.documentElement
  // let mainNav = document.getElementById("mainNav")

  // // Toggle this in dev to keep menu open
  // // htmlTag.classList.add("pageNoScrollY");

  // mobileBurgerBtn.addEventListener("click", () => {
  //   htmlTag.classList.toggle("pageNoScrollY")
  // })

  // mainNav.addEventListener("click", e => {
  //   let el = e.target

  //   if (el.matches("a")) {
  //     htmlTag.classList.remove("pageNoScrollY")
  //   }
  //   if (el.matches(".hasSubMenu")) {
  //     el.classList.toggle("openSubMenu")
  //   }
  // })
  // }

  let clickedMobileBurgerBtn = () => {
    if (
      String(document.documentElement.classList).indexOf("no_scroll") < 0 &&
      window.innerWidth < 1024
    ) {
      document.documentElement.classList.add("no_scroll")
      document.documentElement.classList.add("showMobileNav")
    } else {
      document.documentElement.classList.remove("no_scroll")
      document.documentElement.classList.remove("showMobileNav")
    }
  }

  let mainNavToggleSubNavOpenClassOnParent = e => {
    if (
      String(e.target.parentNode.classList).indexOf("open") < 0 &&
      window.innerWidth < 1024
    ) {
      if (document.querySelector("nav .open > div") != null) {
        document.querySelector("nav .open > div").removeAttribute("style")
      }
      document.querySelectorAll("nav .open").forEach(el => {
        el.classList.remove("open")
      })
      e.target.parentNode.classList.toggle("open")
      e.target.nextSibling.setAttribute(
        "style",
        "flex: 1 0 " +
          (e.target.nextSibling.firstChild.offsetHeight + 19) +
          "px"
      )
    } else {
      e.target.parentNode.classList.remove("open")
      e.target.nextSibling.removeAttribute("style")
    }
  }

  useEffect(() => {
    let bodyObserverToggleMainNavClass = (entries, observer) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          // In view
          document.body.classList.add("mainNav--normal")
          document.body.classList.remove("mainNav--shrink")
        } else {
          // Out of view
          document.body.classList.remove("mainNav--normal")
          document.body.classList.add("mainNav--shrink")
        }
      }
    }
    let bodyObserverOptions = {
      root: null, // relative to document viewport
      rootMargin: "25%", // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 1.0, // visible amount of item shown in relation to root
    }
    let bodyObserver = new IntersectionObserver(
      bodyObserverToggleMainNavClass,
      bodyObserverOptions
    )
    bodyObserver.observe(document.getElementById("___gatsby"))
  }, [])

  return (
    <>
      <Button__burgerBtn onClick={clickedMobileBurgerBtn}>
        <div></div>
      </Button__burgerBtn>

      <Nav__mainNav>
        <Div__mainNav__container>
          <A__mainNav__logo as={Link} to="/">
            Wentworth Jewels
          </A__mainNav__logo>

          <Ul__mainNav__listContainer>
            <Li__mainNav__topLevelLink mainNav__topLevelLink__hasSubMenu>
              <Button__topLevelLink
                onClick={mainNavToggleSubNavOpenClassOnParent}
              >
                Engagement
              </Button__topLevelLink>

              <Div__mainNav__subNavGroupWrapper>
                <Div__mainNav__subNavGroup>
                  <Div__mainNav__subNavGroup__container>
                    <Div__mainNav__subNavGroup__linkImg></Div__mainNav__subNavGroup__linkImg>

                    <Ul__mainNav__subNavList>
                      <li>
                        <a href="/engagement/rings/">Rings</a>
                      </li>
                    </Ul__mainNav__subNavList>

                    <Div__mainNav__subNavMessage>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sit officia impedit atque aperiam ratione cum
                        distinctio similique ipsam? Tempora magni quam nemo
                        quasi architecto maxime neque nostrum obcaecati ut
                        suscipit!
                      </p>
                    </Div__mainNav__subNavMessage>
                  </Div__mainNav__subNavGroup__container>
                </Div__mainNav__subNavGroup>
              </Div__mainNav__subNavGroupWrapper>
            </Li__mainNav__topLevelLink>

            <Li__mainNav__topLevelLink mainNav__topLevelLink__hasSubMenu>
              <Button__topLevelLink
                onClick={mainNavToggleSubNavOpenClassOnParent}
              >
                Weddings
              </Button__topLevelLink>

              <Div__mainNav__subNavGroupWrapper>
                <Div__mainNav__subNavGroup>
                  <Div__mainNav__subNavGroup__container>
                    <Div__mainNav__subNavGroup__linkImg></Div__mainNav__subNavGroup__linkImg>

                    <Ul__mainNav__subNavList>
                      <li>
                        <a href="/weddings/rings/">Rings</a>
                      </li>
                      <li>
                        <a href="/weddings/earrings/">Earrings</a>
                      </li>
                      <li>
                        <a href="/weddings/necklaces/">Necklaces</a>
                      </li>
                    </Ul__mainNav__subNavList>

                    <Div__mainNav__subNavMessage>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sit officia impedit atque aperiam ratione cum
                        distinctio similique ipsam? Tempora magni quam nemo
                        quasi architecto maxime neque nostrum obcaecati ut
                        suscipit!
                      </p>
                    </Div__mainNav__subNavMessage>
                  </Div__mainNav__subNavGroup__container>
                </Div__mainNav__subNavGroup>
              </Div__mainNav__subNavGroupWrapper>
            </Li__mainNav__topLevelLink>

            <Li__mainNav__topLevelLink mainNav__topLevelLink__hasSubMenu>
              <Button__topLevelLink
                onClick={mainNavToggleSubNavOpenClassOnParent}
              >
                Jewellery
              </Button__topLevelLink>

              <Div__mainNav__subNavGroupWrapper>
                <Div__mainNav__subNavGroup>
                  <Div__mainNav__subNavGroup__container>
                    <Div__mainNav__subNavGroup__linkImg></Div__mainNav__subNavGroup__linkImg>

                    <Ul__mainNav__subNavList>
                      <li>
                        <a href="/jewellery/rings/">Rings</a>
                      </li>
                      <li>
                        <a href="/jewellery/earrings/">Earrings</a>
                      </li>
                      <li>
                        <a href="/jewellery/necklaces/">Necklaces</a>
                      </li>
                      <li>
                        <a href="/jewellery/bracelets/">Bracelets</a>
                      </li>
                    </Ul__mainNav__subNavList>

                    <Div__mainNav__subNavMessage>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sit officia impedit atque aperiam ratione cum
                        distinctio similique ipsam? Tempora magni quam nemo
                        quasi architecto maxime neque nostrum obcaecati ut
                        suscipit!
                      </p>
                    </Div__mainNav__subNavMessage>
                  </Div__mainNav__subNavGroup__container>
                </Div__mainNav__subNavGroup>
              </Div__mainNav__subNavGroupWrapper>
            </Li__mainNav__topLevelLink>

            <Li__mainNav__topLevelLink>
              <Button__topLevelLink as={Link} to="/collections/">
                Collections
              </Button__topLevelLink>
            </Li__mainNav__topLevelLink>

            <Li__mainNav__topLevelLink>
              <Button__topLevelLink as={Link} to="/gifts/">
                Gifts
              </Button__topLevelLink>
            </Li__mainNav__topLevelLink>

            <Li__mainNav__topLevelLink>
              <Button__topLevelLink as={Link} to="/time-piece/">
                Time Piece
              </Button__topLevelLink>
            </Li__mainNav__topLevelLink>

            <Li__mainNav__topLevelLink>
              <Button__topLevelLink as={Link} to="/about/">
                Heritage
              </Button__topLevelLink>
            </Li__mainNav__topLevelLink>
          </Ul__mainNav__listContainer>
        </Div__mainNav__container>
      </Nav__mainNav>
    </>
  )
}

export default MainNav
