import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { gsap, ScrollTrigger } from "gsap/all"
import { useAppContext } from "../../../store/AppContext"
import { Section__contact_container } from "./form_viewing.styles"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const Form_viewing = () => {
  //
  const appContext = useAppContext()
  //
  const siteMetadata = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          url
        }
      }
    }
  `)
  //
  return (
    <Section__contact_container className="viewingContainer">
      {/* <button
        className="viewingContainer__openBtn"
        onClick={() => {
          appContext.setContactModalOpen(true)
        }}
      >
        Book Viewing
      </button> */}
      <div className="viewingContainer__content">
        <button
          className="viewingContainer__closeBtn"
          onClick={() => {
            appContext.setContactModalOpen(false)

            // setTimeout to allow modal close animation to finish
            setTimeout(() => {
              appContext.setContactModalTitle()
              appContext.setProductName()
              appContext.setProductUrl()
            }, 500)
          }}
          aria-label={`Close ${appContext.contactModalTitle} form`}
        >
          ✖
        </button>
        <h3 className="viewingContainer__title">
          {appContext.contactModalTitle}
        </h3>
        <div className="viewingContainer__glitterBar"></div>
        <form className="viewingContainer__form" action="">
          <input
            type="hidden"
            id="Enquirey_URL"
            name="Enquirey_URL"
            value={`${siteMetadata.site.siteMetadata.url}${appContext.productUrl}`}
          ></input>
          {appContext.contactModalTitle === "Book a viewing" &&
            appContext.productName && (
              <p>
                I would like to book a viewing of the {appContext.productName}.
              </p>
            )}
          {appContext.contactModalTitle === "Enquire" &&
            appContext.productName && (
              <p>I would like to enquire about the {appContext.productName}.</p>
            )}
          <div className="viewingContainer__2col">
            <div className="viewingContainer__col">
              <label
                className="viewingContainer__label"
                htmlFor="contactForm_name"
              >
                Name:
              </label>
              <input
                className="viewingContainer__input"
                type="text"
                id="contactForm_name"
              />
            </div>
            <div className="viewingContainer__col">
              <label
                className="viewingContainer__label"
                htmlFor="contactForm_email"
              >
                Email:
              </label>
              <input
                className="viewingContainer__input"
                type="text"
                id="contactForm_email"
              />
            </div>
          </div>
          <label
            className="viewingContainer__label"
            htmlFor="contactForm_message"
          >
            Message:
          </label>
          <textarea
            className="viewingContainer__input"
            rows="9"
            id="contactForm_message"
          ></textarea>
          <div className="viewingContainer__submitGrp">
            <div className="viewingContainer__tel">
              <p>
                <strong>Tel:</strong> 01234 556 789
              </p>
              <p>
                <strong>MON-SAT:</strong> 10am - 5pm
              </p>
            </div>
            <div className="viewingContainer__submit">
              <button className="viewingContainer__submitBtn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Section__contact_container>
  )
}

export default Form_viewing
