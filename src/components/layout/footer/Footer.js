import React, { useEffect } from "react"
import { gsap, ScrollTrigger } from "gsap/all"
import { Styled_footer } from "./Footer.styles"
import { Styled_SiteContainer } from "../../../styles/commonStyles"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const Footer = () => {
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
        stagger: 0.15,
        opacity: 1,
        y: "0",
        ease: "back",
      })
      footer_timeline.to(
        ".animate_footer_items_2",
        {
          duration: 0.55,
          stagger: 0.15,
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
          stagger: 0.15,
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
          stagger: 0.15,
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
            <h3 className="heading animate_footer_items_1">Wentworth Jewels</h3>
            <p className="animate_footer_items_1">
              Wentworth Jewels are based in Perth Australia
            </p>
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
            <ul className="accordionContentWrapper">
              <li className="animate_footer_items_2">
                <a href="/">Valutions</a>
              </li>
              <li className="animate_footer_items_2">
                <a href="/">Cleaning & Repairs</a>
              </li>
              <li className="animate_footer_items_2">
                <a href="/">Gift Cards</a>
              </li>
              <li className="animate_footer_items_2">
                <a href="/">Price Match & Guarantee</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className="heading animate_footer_items_3 accordionButton"
              onClick={e => clickAccordionButton(e)}
            >
              Customer Care
            </h3>
            <ul className="accordionContentWrapper">
              <li className="animate_footer_items_3">
                <a href="/">Book an Appointment</a>
              </li>
              <li className="animate_footer_items_3">
                <a href="/">Visit Our Shop</a>
              </li>
              <li className="animate_footer_items_3">
                <a href="/">About Us</a>
              </li>
              <li className="animate_footer_items_3">
                <a href="/">Contact Us</a>
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
              <p className="animate_footer_items_4">
                Keep up to date with news, events and special offers.
              </p>
              <form className="animate_footer_items_4" action="">
                <label htmlFor="newsletterInput">Newsletter sign-up:</label>
                <input id="newsletterInput" type="text" />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footerCopyrightMsg">
          <small>© Wentworth Jewels {new Date().getFullYear()}</small>
        </div>
      </Styled_SiteContainer>
    </Styled_footer>
  )
}

export default Footer
