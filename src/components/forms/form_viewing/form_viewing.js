import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { gsap, ScrollTrigger } from "gsap/all"
import { useAppContext } from "../../../store/AppContext"
import { Section__contact_container } from "./form_viewing.styles"
import { replaceAll } from "../../../common/utility"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const Form_viewing = () => {
  const appContext = useAppContext()

  const formName = replaceAll(
    String(appContext.contactModalTitle),
    " ",
    "-"
  ).toLowerCase()
  console.log("formName", formName)

  const siteMetadata = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          url
        }
      }
    }
  `)

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
            document.body.classList.remove("no_y_scroll")
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
          <svg
            width="26"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 25"
          >
            <path
              d="M0 22.8c0-.2.1-.5.3-.7l.9-.8a315 315 0 0 0 9-9.6 173.5 173.5 0 0 0-8.6-8.8L1 2.2a1 1 0 0 1-.2-.5L1 1l.6-.5.8-.4a3.3 3.3 0 0 1 2 0l.9.6A29.9 29.9 0 0 1 8.5 4l1.3 1.5A1262.2 1262.2 0 0 0 13 9a879.6 879.6 0 0 1 6.3-7.4l.5-.7.6-.5.6-.3 1-.1 1 .1 1 .4.5.5c.2.3.3.5.3.8l-.5 1-1 1a655.3 655.3 0 0 1-7.7 8 228 228 0 0 1 3 3.3l1.6 1.7a991.9 991.9 0 0 1 4.6 4.6l.8.7c.3.2.4.5.4.8l-.1.8-.5.6-1 .4-1.6.2-.5-.1-.6-.3a4.3 4.3 0 0 1-1.3-1.3l-.6-.8a75 75 0 0 0-3.9-4.4l-3-3.5a350.7 350.7 0 0 0-8.5 10c-.3.2-.7.4-1 .4l-1.2-.1-1.1-.4-.8-.7c-.2-.3-.3-.6-.3-1Z"
              fill="#fff"
            />
          </svg>
        </button>
        <h3 className="viewingContainer__title">
          {appContext.contactModalTitle}
        </h3>
        <div className="viewingContainer__glitterBar"></div>
        <form
          className="viewingContainer__form"
          name={formName}
          method="POST"
          data-netlify="true"
        >
          {appContext.productUrl && (
            <input
              type="hidden"
              id="Product_URL"
              name="Product_URL"
              value={`${siteMetadata.site.siteMetadata.url}${appContext.productUrl}`}
            ></input>
          )}
          {appContext.contactModalTitle === "Contact" && (
            <p>Please fill in your contact details and message below.</p>
          )}
          {appContext.contactModalTitle === "Book a viewing" &&
            appContext.productName && (
              <p>
                I would like to book a viewing of the {appContext.productName}.
              </p>
            )}
          {appContext.contactModalTitle === "Book a viewing" &&
            !appContext.productName && (
              <p>
                We look forward to meeting you and discussing exactly what you
                are looking for.
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
