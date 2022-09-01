import React from "react"
import { useEffect, useState } from "react"
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
import { Svg_ringPearl } from "../../../images/svg/ringPearl"
import { Svg_ringGemstone } from "../../../images/svg/ringGemstone"
import { Svg_ringDiamond } from "../../../images/svg/ringDiamond"
import { Svg_ringEternity } from "../../../images/svg/ringEternity"
import { Svg_ringAnniversary } from "../../../images/svg/ringAnniversary"
import { Svg_ringPlain } from "../../../images/svg/ringPlain"
import { Svg_earringStud } from "../../../images/svg/earringStud"
import { Svg_earringDiamond } from "../../../images/svg/earringDiamond"
import { Svg_earringGemstone } from "../../../images/svg/earringGemstone"
import { Svg_earringPearl } from "../../../images/svg/earringPearl"
import { Svg_necklacePendant } from "../../../images/svg/necklacePendant"
import { Svg_necklaceDiamond } from "../../../images/svg/necklaceDiamond"
import { Svg_necklaceGemstone } from "../../../images/svg/necklaceGemstone"
import { Svg_necklacePearl } from "../../../images/svg/necklacePearl"
import { Svg_necklaceChain } from "../../../images/svg/necklaceChain"
import { Svg_braceletDiamond } from "../../../images/svg/braceletDiamond"
import { Svg_braceletGemstone } from "../../../images/svg/braceletGemstone"
import { Svg_braceletPearl } from "../../../images/svg/braceletPearl"
import { Svg_braceletPlain } from "../../../images/svg/braceletPlain"

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
    document.querySelector(".primaryLinkHighlighter").style.opacity = "0"
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

    //
    // BREAK FUNCTION if no sub elements - e.g. basket button
    // ------------------------------------------------------------------------------------
    if (!document.querySelectorAll(".subNav--open ul > *").length) return
    //

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

    // Check if view all... link exists and it's location
    const subMenuElementsLocationOfViewAllLink = subMenuElements.findIndex(
      el => {
        return el.classList.contains("viewAllLink")
      }
    )
    // If view all... link exists first, push it to end of array to animate last
    if (subMenuElementsLocationOfViewAllLink === 0) {
      subMenuElements.push(subMenuElements.splice(0, 1)[0])
      // reset 'View all...' button location so it only fades in
      gsap.set(subMenuElements[subMenuElementsLength - 1].firstChild, {
        y: "0px",
      })
    }

    let staggerAmmount
    if (subMenuElementsLength > 6) staggerAmmount = 65
    else staggerAmmount = 150
    let subMenuElementStagger = -staggerAmmount

    subMenuElements.forEach((element, index) => {
      subMenuElementStagger += staggerAmmount
      // if view all... link exists, then delay animating in to draw attention to it
      if (
        index + 1 === subMenuElementsLength &&
        subMenuElementsLocationOfViewAllLink === 0
      )
        subMenuElementStagger += 250

      setTimeout(() => {
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
    const toElement = e.toElement?.classList?.[0]
    if (
      toElement?.indexOf("Div__mainNav__container") >= 0 ||
      toElement?.indexOf("MainNavstyles__Nav__mainNav") >= 0 ||
      toElement?.indexOf("MainNavstyles__A__mainNav__logo") >= 0
    )
      closeSecondaryLinkBackground()
  }

  const [mobileMenuState, setMobileMenuState] = useState("closed")

  const closeMainNavAnimation = () => {
    document.querySelector(".mainNav").classList.add("animating")
    document
      .querySelector(".mainNav")
      .classList.remove("mainNavOpenPrimary", "mainNavOpenSecondary")
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
        "-=0.4"
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
        "-=0.6"
      )
    } else if (mobileMenuState === "viewSecondary") {
      gsap.to(".mainNav", {
        delay: 0.6,
        duration: 0.75,
        height: 0,
        ease: "power1.inOut",
        onComplete: () => {
          resetSecondaryMenu()
          document.querySelector(".mainNav").classList.remove("animating")
          resetCentreMainNav()
        },
      })
      // Secondary title: 'Engagement
      gsap.to(".SecondaryMenuOpen p", {
        duration: 1,
        top: "50%",
        opacity: 0,
        ease: "back.inOut",
      })
      // Secondary 'Back' button
      gsap.to(".SecondaryMenuOpen button", {
        duration: 0.6,
        // top: "50%",
        opacity: 0,
        ease: "power1.inOut",
      })
      // All secondary li items
      gsap.to(
        // using Array.from seems to break this
        // Array.from(
        //   document.querySelectorAll(".SecondaryMenuOpen li")
        // ).reverse(),
        document.querySelectorAll(".SecondaryMenuOpen li"),
        {
          duration: 0.6,
          top: "50%",
          opacity: 0,
          stagger: 0.025,
          ease: "back.inOut",
        }
      )
    }
    setMobileMenuState("closed")
  }

  // useEffect(() => {
  // setimeout used for dev purposes below since this useeffect fires before chrome device simulator kicks in and doesn't recognise window.innerwidth yet, probably not needed for real mobile devices
  // setTimeout(() => {
  //   if (window.innerWidth < 1024) closeMainNavAnimation()
  // }, 50)
  // })

  const openMainNavOpenAnimation = () => {
    setMobileMenuState("viewPrimary")
    document
      .querySelector(".mainNav")
      .classList.add("animating", "mainNavOpenPrimary")
    document.querySelector(".UL__primaryLinks").scrollTo(0, 0)

    gsap.set(document.querySelectorAll(".UL__primaryLinks > li"), {
      top: "50%",
    })

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
    document.querySelector(".SecondaryMenuOpen").style = ""
    document.querySelector(".SecondaryMenuOpen").scrollTop = 0
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
    setMobileMenuState("viewSecondary")
    document.querySelector(".mainNav").classList.remove("mainNavOpenPrimary")
    document.querySelector(".mainNav").classList.add("mainNavOpenSecondary")

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

  // When clicking the 'Back' button from secondary nav
  const closeSecondaryMenuAnimation = e => {
    document.querySelector(".SecondaryMenuOpen").scrollTop = 0
    setMobileMenuState("viewPrimary")
    const menu = e.target.parentNode
    menu.classList.remove("SecondaryMenuOpen")
    document.querySelector(".mainNav").classList.add("mainNavOpenPrimary")
    document.querySelector(".mainNav").classList.remove("mainNavOpenSecondary")

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
      // if nav is not open, show nav:
      document.documentElement.classList.add("no_y_scroll")
      openMainNavOpenAnimation()
    } else {
      // if nav is open, hide nav:
      document.documentElement.classList.remove("no_y_scroll")
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
              <Div__secondaryLinkWrapper
                onMouseOut={e => primaryLinkMouseOut(e)}
              >
                <P__secondaryLinksTitle>Engagement</P__secondaryLinksTitle>
                <UL__secondaryLinkList viewAllLink className="viewAllLink">
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

                {/* Shape */}

                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Shape
                  </Li__secondaryLinkListHeading>
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

                {/* Colour */}

                <UL__secondaryLinkList>
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
                      to="/engagement/blue-engagement-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_gemstoneSide
                        width="23"
                        height="17"
                        stroke="#0053ff"
                        strokeWidth="4"
                      />
                      Blue engagement rings
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

                {/* Gemstone */}

                <UL__secondaryLinkList>
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

                {/* Metal */}

                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Metal
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/engagement/silver-engagement-rings/"
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
                      to="/engagement/gold-engagement-rings/"
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
                      to="/engagement/platinum-engagement-rings/"
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
                      to="/engagement/white-gold-engagement-rings/"
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
                      to="/engagement/rose-gold-engagement-rings/"
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

                {/* Womens Rings */}

                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Womens
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/weddings/womens-weddings-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_ringDiamond width="23" height="17" />
                      Womens Wedding rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>

                {/* Mens Rings */}

                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Mens
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/weddings/mens-weddings-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_ringPlain width="23" height="17" />
                      Mens Wedding rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>

                {/* Anniversary, Eternity etc */}

                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Anniversary
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/weddings/anniversary-weddings-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_ringAnniversary width="23" height="17" />
                      Anniversary rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/weddings/eternity-weddings-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_ringEternity width="23" height="17" />
                      Eternity rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>

                {/* Metal */}

                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Metal
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/weddings/silver-weddings-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_donut width="17" height="17" fill="silver" />
                      Silver wedding rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/weddings/gold-weddings-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_donut width="17" height="17" fill="gold" />
                      Gold wedding rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/weddings/platinum-weddings-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_donut width="17" height="17" fill="grey" />
                      Platinum wedding rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/weddings/white-gold-weddings-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_donut width="17" height="17" fill="silver" />
                      White Gold wedding rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/weddings/rose-gold-weddings-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_donut width="17" height="17" fill="#E0BFB8" />
                      Rose Gold wedding rings
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
                {/* <UL__secondaryLinkList viewAllLink className="viewAllLink">
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      View All Jewellery Rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList> */}

                {/* Rings */}

                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Rings
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/diamond-jewellery-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_ringDiamond width="23" height="17" />
                      Diamond rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/gemstone-jewellery-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_ringGemstone width="23" height="17" />
                      Gemstone rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/pearl-jewellery-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_ringPearl width="20" height="25" />
                      Pearl rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/mens-jewellery-rings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_ringPlain width="20" height="25" />
                      Mens rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink viewAllLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/rings/"
                      noIcon
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      View all rings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>

                {/* Earrings */}

                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Earrings
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/stud-jewellery-earrings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_earringStud width="23" height="17" strokeWidth="1" />
                      Stud earrings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/diamond-jewellery-earrings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_earringDiamond
                        width="23"
                        height="17"
                        strokeWidth="1"
                      />
                      Diamond earrings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/gemstone-jewellery-earrings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_earringGemstone
                        width="23"
                        height="17"
                        strokeWidth="1"
                      />
                      Gemstone earrings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/pearl-jewellery-earrings/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_earringPearl width="23" height="17" />
                      Pearl earrings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink viewAllLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/earrings/"
                      noIcon
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      View all earrings
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>

                {/* Necklaces */}

                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Necklaces
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/pendant-jewellery-necklaces/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_necklacePendant
                        width="23"
                        height="17"
                        strokeWidth="1"
                      />
                      Pendant necklaces
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/diamond-jewellery-necklaces/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_necklaceDiamond
                        width="23"
                        height="17"
                        strokeWidth="1"
                      />
                      Diamond necklaces
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/gemstone-jewellery-necklaces/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_necklaceGemstone
                        width="23"
                        height="17"
                        strokeWidth="1"
                      />
                      Gemstone necklaces
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/pearl-jewellery-necklaces/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_necklacePearl width="23" height="17" />
                      Pearl necklaces
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/chain-jewellery-necklaces/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_necklaceChain width="23" height="17" />
                      Chain necklaces
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink viewAllLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/necklaces/"
                      noIcon
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      View all necklaces
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>

                {/* Bracelets */}

                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Bracelets
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/diamond-jewellery-bracelets/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_braceletDiamond
                        width="23"
                        height="17"
                        strokeWidth="1"
                      />
                      Diamond bracelets
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/gemstone-jewellery-bracelets/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_braceletGemstone width="23" height="17" />
                      Gemstone bracelets
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/pearl-jewellery-bracelets/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_braceletPearl width="23" height="17" />
                      Pearl bracelets
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/mens-jewellery-bracelets/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      <Svg_braceletPlain width="23" height="17" />
                      Mens bracelets
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink viewAllLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/jewellery/bracelets/"
                      noIcon
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      View all bracelets
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>
                {/* <UL__secondaryLinkList>
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
                </UL__secondaryLinkList> */}
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
                  <Li__secondaryLinkListHeading>
                    Craft
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/services/bespoke-jewellery-design/"
                      noIcon
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
                      noIcon
                      to="/services/hand-crafted-jewellery/"
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
                      noIcon
                      to="/services/jewellery-remodelling/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Jewellery Remodelling
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>
                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Maintain
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      noIcon
                      to="/services/jewellery-repairs/"
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
                      noIcon
                      to="/services/watch-repairs/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Watch Repairs
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      noIcon
                      to="/services/ring-resizing/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Ring Resizing
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>
                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Services
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      noIcon
                      to="/services/jewellery-valuations/"
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
                      noIcon
                      to="/services/pearl-stringing/"
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
                      noIcon
                      to="/services/buy-silver-and-gold/"
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      We Buy Silver and Gold
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
                  <Li__secondaryLinkListHeading>
                    Why Wentworths?
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/about/about/"
                      noIcon
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
                      to="/about/ethical-and-sustainable-practices/"
                      noIcon
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Ethical And Sustainable Practices
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/about/fair-trade-gold/"
                      noIcon
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Fair Trade Gold
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>
                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Customer Care
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/about/faq/"
                      noIcon
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
                      to="/about/free-shipping/"
                      noIcon
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Free Shipping
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/about/returns-policy/"
                      noIcon
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
                      to="/about/terms-and-conditions/"
                      noIcon
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      Terms And Conditions
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>
                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    News and Media
                  </Li__secondaryLinkListHeading>
                  <Li__secondaryLink>
                    <A__secondaryCategoryLink
                      as={Link}
                      to="/blog/"
                      noIcon
                      onClick={closeSecondaryLinkBackground}
                      exit={{
                        trigger: () => click_mobile_burger_btn(),
                      }}
                    >
                      News &amp; Articles
                    </A__secondaryCategoryLink>
                  </Li__secondaryLink>
                </UL__secondaryLinkList>
                <UL__secondaryLinkList>
                  <Li__secondaryLinkListHeading>
                    Contact
                  </Li__secondaryLinkListHeading>
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
