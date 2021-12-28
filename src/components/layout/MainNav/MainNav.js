import React from "react"
import { useEffect } from "react"
import { useAppContext } from "../../../store/AppContext"
import { Link } from "gatsby"
// import Link from "gatsby-plugin-transition-link"

import {
  Button__burgerBtn,
  Nav__mainNav,
  Div__mainNav__container,
  A__mainNav__logo,
  Ul__mainNav__listContainer,
  Button__topLevelLink,
  Div__mainNav__subNavGroupWrapper,
  Div__mainNav__subNavGroup,
  Div__mainNav__subNavGroup__container,
  Div__mainNav__subNavGroup__linkImg,
  Ul__mainNav__subNavList,
  Div__mainNav__subNavMessage,
  Li__mainNav__topLevelLink,
} from "./MainNav.styles"

// import AniLink from "gatsby-plugin-transition-link/AniLink"
// import { gsap } from "gsap/all"

const MainNav = () => {
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

  let click_mobile_burger_btn = () => {
    if (
      String(document.documentElement.classList).indexOf("no_y_scroll") < 0 &&
      window.innerWidth < 1024
    ) {
      document.documentElement.classList.add("no_y_scroll")
      document.documentElement.classList.add("showMobileNav")
    } else {
      document.documentElement.classList.remove("no_y_scroll")
      document.documentElement.classList.remove("showMobileNav")
    }
  }

  let main_nav_toggle_sub_nav_open = e => {
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
      rootMargin: "20%", // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 1.0, // visible amount of item shown in relation to root
    }
    let bodyObserver = new IntersectionObserver(
      body_observer_toggle_main_nav_class,
      body_observer_options
    )
    bodyObserver.observe(document.getElementById("___gatsby"))
  }, [])

  return (
    <>
      <Button__burgerBtn
        className="burgerBtn"
        aria-label="mobile main navigation toggle"
        onClick={click_mobile_burger_btn}
      >
        <div></div>
      </Button__burgerBtn>
      <Nav__mainNav className="mainNav">
        <Div__mainNav__container>
          <A__mainNav__logo as={Link} to="/">
            Wentworth Jewels
          </A__mainNav__logo>

          <Ul__mainNav__listContainer>
            <Li__mainNav__topLevelLink mainNav__topLevelLink__hasSubMenu>
              <Button__topLevelLink onClick={main_nav_toggle_sub_nav_open}>
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
              <Button__topLevelLink onClick={main_nav_toggle_sub_nav_open}>
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
              <Button__topLevelLink onClick={main_nav_toggle_sub_nav_open}>
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
              <Button__topLevelLink as={Link} to="/about/">
                About
              </Button__topLevelLink>
            </Li__mainNav__topLevelLink>

            <Li__mainNav__topLevelLink>
              <Button__topLevelLink
                onClick={() => {
                  appContext.setContactModalTitle("Contact")
                  appContext.setContactModalOpen(!appContext.contactModalOpen)
                }}
              >
                Contact
              </Button__topLevelLink>
            </Li__mainNav__topLevelLink>
          </Ul__mainNav__listContainer>
        </Div__mainNav__container>
      </Nav__mainNav>
    </>
  )
}

export default MainNav
