import React from "react"
import { useEffect } from "react"
import { useAppContext } from "../../../store/AppContext"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-plugin-transition-link"
import Snipcart from "../../snipcart"
import { gsap } from "gsap/all"

import Svg_basket from "../../../images/svg/basket"
import Svg_gemstoneSide from "../../../images/svg/gemstoneSide"
import { Svg_donut } from "../../../images/svg/donut"
import { Svg_curPrincess } from "../../../images/svg/cutPrincess"
import { Svg_curRoundBrilliant } from "../../../images/svg/cutRoundBrilliant"

import {
  Nav__mainNav,
  Div__mainNav__container,
  A__mainNav__logo,
  UL__primaryLinks,
  Div__primaryLinkTitle,
  Div__primaryLinkHighlighter,
  Div__secondaryLinkBackground,
  LI__primaryLink,
  Li__secondaryLink,
  UL__secondaryLinkList,
  Li__secondaryLinkListHeading,
  P__secondaryLinksTitle,
  Button__secondaryListBack,
  Button__primary,
  A__primary,
  Div__secondaryLinkWrapper,
  A__secondaryCategoryLink,
  Btn__secondaryCategoryLink,
  StickyMobileMenu,
} from "./MainNav.styles"

// import AniLink from "gatsby-plugin-transition-link/AniLink"

const pageQuery = graphql`
  {
    gcms {
      mainNavigationContents {
        engagementMenu {
          html
        }
        weddingsMenu {
          html
        }
        jewelleryMenu {
          html
        }
      }
    }
  }
`

const MainNav = () => {
  const {
    gcms: { mainNavigationContents },
  } = useStaticQuery(pageQuery)

  const appContext = useAppContext()

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

  useEffect(() => {
    let body_observer_toggle_main_nav_class = (entries, observer) => {
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
    let body_observer_options = {
      root: null, // relative to document viewport
      rootMargin: "0%", // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 1.0, // visible amount of item shown in relation to root
    }
    let bodyObserver = new IntersectionObserver(
      body_observer_toggle_main_nav_class,
      body_observer_options
    )
    bodyObserver.observe(document.getElementById("___gatsby"))

    document.querySelector(".primaryLinkHighlighter").style.left =
      document.querySelector("nav ul li").offsetLeft + "px"
  }, [])

  const closeSecondaryLinkBackground = () => {
    if (window.innerWidth < 1200) return
    document.body.classList.remove("subNav--openForAPrimaryLink")
    document.querySelector(".secondaryLinkBackground").style.height = "0"
    document
      .querySelectorAll(".subNav--open")
      .forEach(primaryLink => primaryLink.classList.remove("subNav--open"))
  }

  const primaryLinkMouseOver = e => {
    if (window.innerWidth < 1200) return
    // to enable 'Div__secondaryLinkBackground' mouse over area beneath drop down menu to catch mouse out
    document.body.classList.add("subNav--openForAPrimaryLink")
    // clean up and remove any previously active sub menus
    document
      .querySelectorAll(".subNav--open")
      .forEach(primaryLink => primaryLink.classList.remove("subNav--open"))
    // now all sub menus are clear, apply this sub nav menu open class
    e.target.parentNode.classList.add("subNav--open")

    // Primary link highlighter:
    document.querySelector(".primaryLinkHighlighter").style.opacity = "1"
    document.querySelector(".primaryLinkHighlighter").style.left =
      e.target.offsetLeft + "px"
    document.querySelector(".primaryLinkHighlighter").style.width =
      e.target.offsetWidth + "px"

    // Submenu Background:
    const nextSiblingHeight = e.target?.nextSibling?.offsetHeight
    if (nextSiblingHeight)
      document.querySelector(".secondaryLinkBackground").style.height =
        nextSiblingHeight + "px"
    else document.querySelector(".secondaryLinkBackground").style.height = "0"

    // Submenu Animations:
    gsap.set(document.querySelectorAll(".subNav--open ul > *"), {
      opacity: 0,
      y: "-15px",
    })
    // get all main submenu groups of link containers
    const subMenuElements = Array.from(
      document.querySelectorAll(".subNav--open ul")
    )
    const subMenuElementsLength = subMenuElements.length
    // Push 'View all...' button to end of array to animate last
    subMenuElements.push(subMenuElements.splice(0, 1)[0])
    // reset 'View all...' button location so it only fades in
    gsap.set(subMenuElements[subMenuElementsLength - 1].firstChild, {
      y: "0px",
    })

    let subMenuElementStagger = -150

    subMenuElements.forEach((element, index) => {
      subMenuElementStagger += 150
      if (index + 1 === subMenuElementsLength) subMenuElementStagger += 250

      setTimeout(() => {
        console.log("element", element)
        gsap.to(element.childNodes, {
          opacity: 1,
          y: "0px",
          stagger: 0.05,
          duration: 0.32,
          ease: "power1.inOut",
        })
      }, subMenuElementStagger)
    })
  }

  const primaryLinkMouseOut = e => {
    if (window.innerWidth < 1200) return
    document.querySelector(".primaryLinkHighlighter").style.opacity = "0"
    const toElement = e.toElement?.classList?.[0]
    if (toElement?.indexOf("Div__mainNav__container") >= 0)
      closeSecondaryLinkBackground()
  }

  let mobileMenuState = "closed"

  const closeMainNavAnimation = () => {
    console.log("closeMainNavAnimation - mobileMenuState:", mobileMenuState)
    document.querySelector(".mainNav").classList.add("animating")

    if (mobileMenuState === "viewPrimary" || mobileMenuState === "closed") {
      const tl_mainNavClose = gsap.timeline()
      tl_mainNavClose.to(
        Array.from(
          document.querySelectorAll(".UL__primaryLinks > li")
        ).reverse(),
        {
          duration: 0.6,
          top: "50%",
          opacity: 0,
          stagger: 0.05,
          ease: "back.inOut",
        }
      )
      tl_mainNavClose.to(
        ".Div__primaryLinkTitle",
        {
          duration: 0.6,
          top: "50%",
          opacity: 0,
          ease: "back.inOut",
          // ease: "ease",
        },
        "-=0.25"
      )
      tl_mainNavClose.to(
        ".mainNav",
        {
          duration: 0.6,
          height: 0,
          ease: "power1.inOut",
          onComplete: () => {
            document.querySelector(".mainNav").classList.remove("animating")
            resetCentreMainNav()
          },
        },
        "-=0.5"
      )
    } else if (mobileMenuState === "viewSecondary") {
      gsap.to(".mainNav", {
        delay: 0.35,
        duration: 0.75,
        height: 0,
        ease: "power1.inOut",
      })
      gsap.to(".SecondaryMenuOpen p", {
        delay: 0.15,
        duration: 0.75,
        top: "50%",
        opacity: 0,
        ease: "back.inOut",
      })
      gsap.to(".SecondaryMenuOpen button", {
        duration: 0.6,
        top: "50%",
        opacity: 0,
        ease: "power1.inOut",
      })
      gsap.to(
        Array.from(
          document.querySelectorAll(".SecondaryMenuOpen li")
        ).reverse(),
        {
          duration: 0.75,
          top: "50%",
          opacity: 0,
          stagger: 0.05,
          ease: "back.inOut",
          onComplete: () => {
            resetSecondaryMenu()
            document.querySelector(".mainNav").classList.remove("animating")
            resetCentreMainNav()
          },
        }
      )
    }
    mobileMenuState = "closed"
  }

  // useEffect(() => {
  // setimeout used for dev purposes below since this useeffect fires before chrome device simulator kicks in and doesn't recognise window.innerwidth yet, probably not needed for real mobile devices
  // setTimeout(() => {
  //   if (window.innerWidth < 1024) closeMainNavAnimation()
  // }, 50)
  // })

  const openMainNavOpenAnimation = () => {
    mobileMenuState = "viewPrimary"
    document.querySelector(".mainNav").classList.add("animating")
    document.querySelector(".UL__primaryLinks").scrollTo(0, 0)

    const tl_mainNavOpen = gsap.timeline()
    tl_mainNavOpen.to(".mainNav", {
      duration: 0.75,
      height: "100%",
      ease: "power1.inOut",
    })
    tl_mainNavOpen.to(
      ".Div__primaryLinkTitle",
      {
        duration: 0.75,
        top: 0,
        opacity: 1,
        ease: "back.inOut",
      },
      "-=0.6"
    )
    tl_mainNavOpen.to(
      document.querySelectorAll(".UL__primaryLinks > li"),
      {
        duration: 0.6,
        top: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "back.inOut",
        onComplete: () => {
          document.querySelector(".mainNav").classList.remove("animating")
        },
      },
      "-=0.55"
    )
  }

  const slideLeftMainNavAnimation = () => {
    gsap.to(".Div__primaryLinkTitle", {
      duration: 0.75,
      left: "-100%",
      ease: "ease",
    })
    gsap.to(document.querySelectorAll(".UL__primaryLinks > li"), {
      duration: 0.6,
      left: "-100%",
      stagger: 0.05,
      ease: "ease",
    })
  }

  const slideCenterMainNavAnimation = () => {
    gsap.to(".Div__primaryLinkTitle", {
      duration: 0.75,
      left: 0,
      ease: "ease.inOut",
    })
    gsap.to(document.querySelectorAll(".UL__primaryLinks > li"), {
      duration: 0.6,
      left: 0,
      stagger: 0.05,
      ease: "ease.inOut",
    })
  }

  const resetCentreMainNav = () => {
    gsap.to(".Div__primaryLinkTitle", { left: 0 })
    gsap.to(document.querySelectorAll(".UL__primaryLinks > li"), { left: 0 })
  }

  const resetSecondaryMenu = () => {
    console.log("resetSecondaryMenu")
    document.querySelector(".SecondaryMenuOpen").style = ""
    document
      .querySelectorAll(".SecondaryMenuOpen p")
      .forEach(el => (el.style = ""))
    document
      .querySelectorAll(".SecondaryMenuOpen li")
      .forEach(el => (el.style = ""))
    document
      .querySelectorAll(".SecondaryMenuOpen button")
      .forEach(el => (el.style = ""))
    document
      .querySelector(".SecondaryMenuOpen")
      .classList.remove("SecondaryMenuOpen")
  }

  const openSecondaryMenuAnimation = e => {
    mobileMenuState = "viewSecondary"
    const menu = e.target.nextElementSibling
    menu.classList.add("SecondaryMenuOpen")

    gsap.set(menu, { left: 0 })
    gsap.to(menu.getElementsByTagName("p"), {
      delay: 0.25,
      duration: 0.6,
      left: 0,
      ease: "ease",
    })
    gsap.to(menu.getElementsByTagName("li"), {
      delay: 0.25,
      duration: 0.6,
      left: 0,
      stagger: 0.05,
      ease: "ease.inOut",
    })
    gsap.to(menu.getElementsByTagName("button"), {
      delay: 0.25,
      duration: 0.6,
      left: 0,
      ease: "ease",
    })
    slideLeftMainNavAnimation()
  }

  const closeSecondaryMenuAnimation = e => {
    mobileMenuState = "viewPrimary"
    const menu = e.target.parentNode
    menu.classList.remove("SecondaryMenuOpen")

    gsap.to(menu.getElementsByTagName("p"), {
      duration: 0.6,
      left: "100%",
      ease: "ease",
    })
    gsap.to(menu.getElementsByTagName("li"), {
      duration: 0.6,
      left: "100%",
      stagger: 0.05,
      ease: "ease.inOut",
      onComplete: () => {
        gsap.set(menu, { left: "100%" })
      },
    })
    gsap.to(menu.getElementsByTagName("button"), {
      duration: 0.6,
      left: "100%",
      ease: "ease",
    })
    setTimeout(() => {
      slideCenterMainNavAnimation()
    }, 250)
  }

  let click_mobile_burger_btn = () => {
    if (window.innerWidth >= 1024) return
    if (
      String(document.documentElement.classList).indexOf("no_y_scroll") < 0 &&
      window.innerWidth < 1024
    ) {
      document.documentElement.classList.add("no_y_scroll")
      document.documentElement.classList.add("showMobileNav")
      openMainNavOpenAnimation()
    } else {
      document.documentElement.classList.remove("no_y_scroll")
      document.documentElement.classList.remove("showMobileNav")
      closeMainNavAnimation()
    }
  }

  return (
    <>
      <Nav__mainNav className="mainNav">
        <Div__mainNav__container>
          {/* Brand logo */}
          <A__mainNav__logo as={Link} to="/">
            Wentworths
          </A__mainNav__logo>

          <Div__primaryLinkTitle className="Div__primaryLinkTitle">
            Wentworths
          </Div__primaryLinkTitle>

          <UL__primaryLinks className="UL__primaryLinks">
            <Div__primaryLinkHighlighter className="primaryLinkHighlighter"></Div__primaryLinkHighlighter>
            <Div__secondaryLinkBackground className="secondaryLinkBackground">
              <div
                className="secondaryLinkBackgroundMouseOutCatcher"
                onMouseOver={closeSecondaryLinkBackground}
              ></div>
            </Div__secondaryLinkBackground>

            <LI__primaryLink hiddenOnDesktop>
              <A__primary as={Link} to="/" onClick={click_mobile_burger_btn}>
                Home
              </A__primary>
            </LI__primaryLink>

            {/* Engagement */}
            <LI__primaryLink>
              <Button__primary
                onMouseOver={e => primaryLinkMouseOver(e)}
                onMouseOut={e => primaryLinkMouseOut(e)}
                type="button"
                onClick={e => {
                  openSecondaryMenuAnimation(e)
                }}
              >
                Engagement
              </Button__primary>
              <Div__secondaryLinkWrapper>
                <P__secondaryLinksTitle>Engagement</P__secondaryLinksTitle>

                <UL__secondaryLinkList viewAllLink>
                  {/* <UL__secondaryLinkList style={{ flexDirection: "column" }}> */}
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      View All Engagement Rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>

                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Shape
                  </Li__secondaryLinkListHeading>
                  {/* <UL__secondaryLinkList style={{ flexDirection: "column" }}> */}
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/princess-engagement-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_curPrincess
                        width="21"
                        height="21"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      Princess Cut engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/round-engagement-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_curRoundBrilliant
                        width="21"
                        height="21"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      Round Cut engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>

                <UL__secondaryLinkList>
                  {/* <UL__secondaryLinkList style={{ flexDirection: "column" }}> */}
                  <Li__secondaryLinkListHeading>
                    Colour
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/amber-engagement-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_gemstoneSide
                        width="23"
                        height="17"
                        strokeWidth="4"
                        stroke="#dfa700"
                      />
                      Amber engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/clear-engagement-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_gemstoneSide
                        width="23"
                        height="17"
                        strokeWidth="4"
                      />
                      Clear engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/default-engagement-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_gemstoneSide
                        width="23"
                        height="17"
                        strokeWidth="4"
                      />
                      Default engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/pink-engagement-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_gemstoneSide
                        width="23"
                        height="17"
                        strokeWidth="4"
                        stroke="#ff5c74"
                      />
                      Pink engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>

                <UL__secondaryLinkList>
                  {/* <UL__secondaryLinkList style={{ flexDirection: "column" }}> */}
                  <Li__secondaryLinkListHeading>
                    GemStone
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/aquamarine-engagement-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_gemstoneSide
                        width="23"
                        height="17"
                        strokeWidth="4"
                        stroke="#00ab8f"
                      />
                      Aquamarine engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/diamond-engagement-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_gemstoneSide
                        width="23"
                        height="17"
                        strokeWidth="4"
                      />
                      Diamond engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/morganite-engagement-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_gemstoneSide
                        width="23"
                        height="17"
                        strokeWidth="4"
                        stroke="#d38d72"
                      />
                      Morganite engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>

                <UL__secondaryLinkList>
                  {/* <UL__secondaryLinkList style={{ flexDirection: "column" }}> */}
                  <Li__secondaryLinkListHeading>
                    Metal
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/silver-engagement-rings"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_donut width="17" height="17" fill="silver" />
                      Silver engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/gold-engagement-rings"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_donut width="17" height="17" fill="gold" />
                      Gold engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/platinum-engagement-rings"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_donut width="17" height="17" fill="grey" />
                      Platinum engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/white-gold-engagement-rings"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_donut width="17" height="17" fill="silver" />
                      White Gold engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/rose-gold-engagement-rings"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_donut width="17" height="17" fill="#E0BFB8" />
                      Rose Gold engagement rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>

                <Button__secondaryListBack
                  type="button"
                  onClick={e => {
                    closeSecondaryMenuAnimation(e)
                  }}
                >
                  &lt; Back
                </Button__secondaryListBack>
              </Div__secondaryLinkWrapper>
            </LI__primaryLink>

            {/* Weddings */}
            <LI__primaryLink>
              <Button__primary
                onMouseOver={e => primaryLinkMouseOver(e)}
                onMouseOut={e => primaryLinkMouseOut(e)}
                type="button"
                onClick={e => {
                  openSecondaryMenuAnimation(e)
                }}
              >
                Wedding
              </Button__primary>
              <Div__secondaryLinkWrapper>
                <P__secondaryLinksTitle>Wedding</P__secondaryLinksTitle>
                <UL__secondaryLinkList>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/weddings/rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>
                <Button__secondaryListBack
                  type="button"
                  onClick={e => {
                    closeSecondaryMenuAnimation(e)
                  }}
                >
                  &lt; Back
                </Button__secondaryListBack>
              </Div__secondaryLinkWrapper>
            </LI__primaryLink>

            {/* Jewellery */}
            <LI__primaryLink>
              <Button__primary
                onMouseOver={e => primaryLinkMouseOver(e)}
                onMouseOut={e => primaryLinkMouseOut(e)}
                type="button"
                onClick={e => {
                  openSecondaryMenuAnimation(e)
                }}
              >
                Jewellery
              </Button__primary>
              <Div__secondaryLinkWrapper>
                <P__secondaryLinksTitle>Jewellery</P__secondaryLinksTitle>
                <UL__secondaryLinkList>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/necklaces/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Necklaces
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/bracelets/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Bracelets
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/earrings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Earrings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>
                <Button__secondaryListBack
                  type="button"
                  onClick={e => {
                    closeSecondaryMenuAnimation(e)
                  }}
                >
                  &lt; Back
                </Button__secondaryListBack>
              </Div__secondaryLinkWrapper>
            </LI__primaryLink>

            {/* Other links */}
            {/* <LI__primaryLink>
              <A__primary
                href="/"
                onClick={click_mobile_burger_btn}
                onMouseOver={e => primaryLinkMouseOver(e)}
                onMouseOut={e => primaryLinkMouseOut(e)}
              >
                Collections
              </A__primary>
            </LI__primaryLink> */}

            {/* Services */}
            <LI__primaryLink>
              <Button__primary
                onMouseOver={e => primaryLinkMouseOver(e)}
                onMouseOut={e => primaryLinkMouseOut(e)}
                type="button"
                onClick={e => {
                  openSecondaryMenuAnimation(e)
                }}
                className="servicesBtnPrimary"
              >
                Services
              </Button__primary>
              <Div__secondaryLinkWrapper>
                <P__secondaryLinksTitle>Services</P__secondaryLinksTitle>
                <UL__secondaryLinkList>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/services/bespoke-jewellery-design"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Bespoke Jewellery Design
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/services/hand-crafted-jewellery"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Hand Crafted Jewellery
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/services/jewellery-remodelling"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Jewellery Remodelling
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/services/jewellery-repairs"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Jewellery Repairs
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/services/buy-silver-and-gold"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      We Buy Silver and Gold
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/services/ring-resizing"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Ring Resizing
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/services/jewellery-valuations"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Jewellery Valuations
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/services/pearl-stringing"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Pearl Stringing
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/services/watch-repairs"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Watch Repairs
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>
                <Button__secondaryListBack
                  type="button"
                  onClick={e => {
                    closeSecondaryMenuAnimation(e)
                  }}
                >
                  &lt; Back
                </Button__secondaryListBack>
              </Div__secondaryLinkWrapper>
            </LI__primaryLink>

            {/* About */}
            <LI__primaryLink>
              <Button__primary
                onMouseOver={e => primaryLinkMouseOver(e)}
                onMouseOut={e => primaryLinkMouseOut(e)}
                type="button"
                onClick={e => {
                  openSecondaryMenuAnimation(e)
                }}
              >
                About
              </Button__primary>
              <Div__secondaryLinkWrapper>
                <P__secondaryLinksTitle>About</P__secondaryLinksTitle>
                <UL__secondaryLinkList>
                  <Li__secondaryLink>
                    <Btn__secondaryCategoryLink
                      onClick={() => {
                        // disable the webpage beneath the model from scrolling
                        if (window.innerWidth < 768)
                          document.body.classList.add("no_y_scroll")
                        appContext.setContactModalTitle("Contact")
                        appContext.setContactModalOpen(
                          !appContext.contactModalOpen
                        )
                      }}
                    >
                      Contact
                    </Btn__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/about/about"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      About Wentworths
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/blog"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      News &amp; Articles
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/about/fair-trade-gold"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Fair Trade Gold
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Returns Policy
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Terms & Conditions
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      FAQ
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Free Shipping
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>
                <Button__secondaryListBack
                  type="button"
                  onClick={e => {
                    closeSecondaryMenuAnimation(e)
                  }}
                >
                  &lt; Back
                </Button__secondaryListBack>
              </Div__secondaryLinkWrapper>
            </LI__primaryLink>

            {/* <LI__primaryLink hiddenOnMobile>
              <Button__primary
                onMouseOver={e => primaryLinkMouseOver(e)}
                onMouseOut={e => primaryLinkMouseOut(e)}
                onClick={() => {
                  // disable the webpage beneath the model from scrolling
                  if (window.innerWidth < 768)
                    document.body.classList.add("no_y_scroll")
                  appContext.setContactModalTitle("Contact")
                  appContext.setContactModalOpen(!appContext.contactModalOpen)
                }}
              >
                Contact
              </Button__primary>
            </LI__primaryLink> */}

            <LI__primaryLink hiddenOnMobile>
              <Button__primary
                onMouseOver={e => {
                  primaryLinkMouseOver(e)
                }}
                onMouseOut={e => {
                  primaryLinkMouseOut(e)
                }}
                className="snipcart-checkout"
              >
                Basket <span className="snipcart-items-count"></span>
                <Svg_basket
                  width="45"
                  height="45"
                  fill="#483a1e"
                  stroke="#483a1e"
                  strokeWidth="1.6"
                />
              </Button__primary>
            </LI__primaryLink>
          </UL__primaryLinks>
        </Div__mainNav__container>
      </Nav__mainNav>

      <StickyMobileMenu>
        <button
          type="button"
          onClick={() => {
            // disable the webpage beneath the model from scrolling
            if (window.innerWidth < 768)
              document.body.classList.add("no_y_scroll")
            appContext.setContactModalTitle("Contact")
            appContext.setContactModalOpen(!appContext.contactModalOpen)
          }}
        >
          <svg
            width="24"
            height="18"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10.625C1 16.5833 8.96875 19.3333 19.75 19.3333C20.6875 20.7083 25.5625 23 28.1875 23C26.3125 21.5333 25.8438 18.4167 25.8438 17.0417C27.5625 16.7361 31 14.9333 31 10.1667C31 4.20833 22.5625 1 15.5312 1C8.5 1 1 5.125 1 10.625Z"
              stroke="white"
              stroke-width="2"
            />
          </svg>
          <span>Contact</span>
        </button>
        <button type="button" onClick={click_mobile_burger_btn}>
          <svg
            width="24"
            height="18"
            viewBox="0 0 29 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="16" width="29" height="2" fill="white" />
            <rect y="8" width="29" height="2" fill="white" />
            <rect width="29" height="2" fill="white" />
          </svg>

          <span>Menu</span>
        </button>
        <button type="button" className="snipcart-checkout">
          <span className="snipcart-items-count"></span>
          <Svg_basket width="35" height="35" strokeWidth="1.5" />
          <span>Basket</span>
        </button>
      </StickyMobileMenu>
    </>
  )
}

export default MainNav
