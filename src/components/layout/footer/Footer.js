import React, { useEffect } from "react"
import { gsap, ScrollTrigger } from "gsap/all"
import { useAppContext } from "../../../store/AppContext"
import Link from "gatsby-plugin-transition-link"
import { Styled_footer, FooterLink } from "./Footer.styles"
import { Styled_SiteContainer } from "../../../styles/commonStyles"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const Footer = () => {
  const appContext = useAppContext()

  const clickAccordionButton = e => {
    const clickedAccordionButton = e.target
    const accordionContentEl = clickedAccordionButton.nextSibling

    clickedAccordionButton.classList.toggle("active")
    accordionContentEl.classList.toggle("active")

    if (accordionContentEl.classList.contains("active"))
      accordionContentEl.style.maxHeight =
        accordionContentEl.scrollHeight + "px"
    else accordionContentEl.style.maxHeight = ""
  }

  useEffect(() => {
    //
    // mobile:
    //
    if (window.innerWidth < 768) {
      //
      // tablet / desktop:
      //
    } else {
      let footer_timeline = gsap.timeline({
        // paused: true,
        scrollTrigger: {
          trigger: ".footerContainer",
          // markers: true,
          start: "25% bottom",
          // toggleActions: "restart none none reset",
          // toggleActions: "restart none none none",
        },
      })

      for (let i = 1; i <= 4; i++) {
        gsap.set(`.animate_footer_items_${i}`, {
          opacity: 0,
          y: "25px",
        })
      }

      footer_timeline.to(".animate_footer_items_1", {
        duration: 0.6,
        stagger: 0.13,
        opacity: 1,
        y: "0",
        ease: "back",
      })
      footer_timeline.to(
        ".animate_footer_items_2",
        {
          duration: 0.55,
          stagger: 0.13,
          opacity: 1,
          y: "0",
          ease: "back",
        },
        "-=0.5"
      )
      footer_timeline.to(
        ".animate_footer_items_3",
        {
          duration: 0.4,
          stagger: 0.13,
          opacity: 1,
          y: "0",
          ease: "back",
        },
        "-=0.5"
      )
      footer_timeline.to(
        ".animate_footer_items_4",
        {
          duration: 0.35,
          stagger: 0.13,
          opacity: 1,
          y: "0",
          ease: "back",
        },
        "-=0.5"
      )
    }
  }, [])

  return (
    <Styled_footer>
      <Styled_SiteContainer>
        <div className="footerContainer">
          <div className="footerEssentialDetails">
            <h3 className="heading animate_footer_items_1">Wentworths</h3>
            {/* <p className="animate_footer_items_1">
              Wentworth Jewels are based in Perth Australia
            </p> */}
            <p className="animate_footer_items_1">
              <strong>TEL:</strong> 01234 567 8910
            </p>
            <p className="animate_footer_items_1">
              <strong>MON-SAT</strong> - 10am - 5pm
            </p>
          </div>
          <div className="firstAccordionGroup">
            <h3
              className="heading animate_footer_items_2 accordionButton"
              onClick={e => clickAccordionButton(e)}
            >
              Services
            </h3>
            <ul class="accordionContentWrapper">
              <li class="animate_footer_items_2">
                <FooterLink as={Link} to="/services/bespoke-jewellery-design/">
                  Bespoke Jewellery Design
                </FooterLink>
              </li>
              <li class="animate_footer_items_2">
                <FooterLink as={Link} to="/services/hand-crafted-jewellery/">
                  Hand Crafted Jewellery
                </FooterLink>
              </li>
              <li class="animate_footer_items_2">
                <FooterLink as={Link} to="/services/jewellery-remodelling/">
                  Jewellery Remodelling
                </FooterLink>
              </li>
              <li class="animate_footer_items_2">
                <FooterLink as={Link} to="/services/jewellery-repairs/">
                  Jewellery Repairs
                </FooterLink>
              </li>
              <li class="animate_footer_items_2">
                <FooterLink as={Link} to="/services/buy-silver-and-gold/">
                  We Buy Silver and Gold
                </FooterLink>
              </li>
              <li class="animate_footer_items_2">
                <FooterLink as={Link} to="/services/ring-resizing/">
                  Ring Resizing
                </FooterLink>
              </li>
              <li class="animate_footer_items_2">
                <FooterLink as={Link} to="/services/jewellery-valuations/">
                  Jewellery Valuations
                </FooterLink>
              </li>
              <li class="animate_footer_items_2">
                <FooterLink as={Link} to="/services/pearl-stringing/">
                  Pearl Stringing
                </FooterLink>
              </li>
              <li class="animate_footer_items_2">
                <FooterLink as={Link} to="/services/watch-repairs/">
                  Watch Repairs
                </FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className="heading animate_footer_items_3 accordionButton"
              onClick={e => clickAccordionButton(e)}
            >
              About
            </h3>
            <ul className="accordionContentWrapper">
              <li className="animate_footer_items_3">
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
                  Contact Us
                </button>
              </li>
              <li className="animate_footer_items_3">
                <button
                  type="button"
                  onClick={() => {
                    appContext.setContactModalTitle("Book a viewing")
                    appContext.setProductName()
                    appContext.setProductUrl(window.location)
                    appContext.setContactModalOpen(!appContext.contactModalOpen)
                    // disable the webpage beneath the model from scrolling
                    if (window.innerWidth < 768)
                      document.body.classList.add("no_y_scroll")
                  }}
                >
                  Book an Appointment
                </button>
              </li>
              <li className="animate_footer_items_3">
                <FooterLink as={Link} to="/about/about/">
                  About Wentworths
                </FooterLink>
              </li>
              <li class="animate_footer_items_3">
                <FooterLink as={Link} to="/blog/">
                  News & Articles
                </FooterLink>
              </li>
              <li class="animate_footer_items_3">
                <FooterLink as={Link} to="/about/fair-trade-gold/">
                  Fair Trade Gold
                </FooterLink>
              </li>
              <li class="animate_footer_items_3">
                <FooterLink as={Link} to="/about/returns-policy/">
                  Returns Policy
                </FooterLink>
              </li>
              <li class="animate_footer_items_3">
                <FooterLink as={Link} to="/about/terms-and-conditions/">
                  Terms & Conditions
                </FooterLink>
              </li>
              <li class="animate_footer_items_3">
                <FooterLink as={Link} to="/about/faq/">
                  FAQ
                </FooterLink>
              </li>
              <li class="animate_footer_items_3">
                <FooterLink as={Link} to="/about/free-shipping/">
                  Free Shipping
                </FooterLink>
              </li>
              <li class="animate_footer_items_3">
                <FooterLink
                  as={Link}
                  to="/about/ethical-and-sustainable-practices/"
                >
                  Ethical And Sustainable Practices
                </FooterLink>
              </li>
            </ul>
          </div>
          <div className="lastAccordionGroup">
            <h3
              className="heading animate_footer_items_4 accordionButton"
              onClick={e => clickAccordionButton(e)}
            >
              Newsletter
            </h3>
            <div className="accordionContentWrapper">
              <small className="animate_footer_items_4">
                Enter your email below to keep up to date with news, events and
                special offers:
              </small>
              {/* <form className="animate_footer_items_4" action="">
                <label htmlFor="newsletterInput">Newsletter sign-up:</label>
                <input id="newsletterInput" type="text" />
                <button>Submit</button>
              </form> */}

              {/* Begin Mailchimp Signup Form */}
              {/* <link
                href="//cdn-images.mailchimp.com/embedcode/slim-10_7_dtp.css"
                rel="stylesheet"
                type="text/css"
              /> */}
              <div id="mc_embed_signup" className="mailChimpWrapper">
                <form
                  action="https://wentworthjewels.us20.list-manage.com/subscribe/post?u=d5846f86c03e5c2c5a3e185f8&amp;id=a98250718c"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  target="_blank"
                  novalidate
                >
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    class="email animate_footer_items_4"
                    id="mce-EMAIL"
                    placeholder="email address"
                    required
                  />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_d5846f86c03e5c2c5a3e185f8_a98250718c"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div class="optionalParent animate_footer_items_4">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button"
                    />
                    <p class="brandingLogo">
                      <a
                        href="http://eepurl.com/hSezpL"
                        title="Mailchimp - email marketing made easy and fun"
                      >
                        <img
                          src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                          alt="mailchimp logo"
                          width="150"
                          height="28"
                        />
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Styled_SiteContainer>
      <div className="footerCopyrightMsg">
        <Styled_SiteContainer>
          Copyright © {new Date().getFullYear()} - Wentworths - All rights
          reserved.
        </Styled_SiteContainer>
      </div>
    </Styled_footer>
  )
}

export default Footer
