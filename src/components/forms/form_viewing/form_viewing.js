import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { gsap, ScrollTrigger } from "gsap/all"
import { useAppContext } from "../../../store/AppContext"
import { Section__contact_container } from "./form_viewing.styles"
import { replaceAll } from "../../../common/utility"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const Form_viewing = () => {
  console.log("Form_viewing")
  const appContext = useAppContext()

  const formName = replaceAll(
    String(appContext.contactModalTitle),
    " ",
    "-"
  ).toLowerCase()

  const siteMetadata = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          url
        }
      }
    }
  `)

  const closeModal = () => {
    document.body.classList.remove("no_y_scroll")
    appContext.setContactModalOpen(false)

    // setTimeout to allow modal close animation to finish
    setTimeout(() => {
      appContext.setContactModalTitle()
      appContext.setProductName()
      appContext.setProductUrl()
    }, 500)
  }

  const [attemptSubmitForm, setAttemptSubmitForm] = useState(false)
  const [nameInput, setNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [messageInput, setMessageInput] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    setAttemptSubmitForm(true)
    if (!nameInput) {
      document.getElementById("contactForm_name").focus()
      return
    } else if (!emailInput) {
      document.getElementById("contactForm_email").focus()
      return
    } else if (!messageInput) {
      document.getElementById("contactForm_message").focus()
      return
    }
    setAttemptSubmitForm(false)
    setAttemptSubmitForm("")
    setNameInput("")
    setEmailInput("")
    setMessageInput("")
    document.getElementById("formViewing").submit()
  }

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
        <div
          className="viewingContainer__catchClickToCloseModal"
          onClick={() => {
            closeModal()
          }}
        ></div>
        <button
          className="viewingContainer__closeBtn"
          onClick={() => {
            closeModal()
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
          method="post"
          action="/thank-you-for-your-message"
          data-netlify="true"
          id="formViewing"
        >
          <input type="hidden" name="form-name" value={formName} />
          {appContext.productUrl && (
            <input
              type="hidden"
              id="Product_URL"
              name="Product_URL"
              value={`${siteMetadata.site.siteMetadata.url}${appContext.productUrl}`}
            ></input>
          )}
          {appContext.contactModalTitle === "Contact" && (
            <p>
              Please fill in your contact details and message below. Please
              enter the following information for us to contact you.
            </p>
          )}
          {appContext.contactModalTitle === "Book a viewing" &&
            appContext.productName && (
              <p>
                I would like to book a viewing of the{" "}
                <strong>{appContext.productName}</strong>. Please enter the
                following information for us to contact you.
              </p>
            )}
          {appContext.contactModalTitle === "Book a viewing" &&
            !appContext.productName && (
              <p>
                We look forward to meeting you and discussing exactly what you
                are looking for. Please enter the following information for us
                to contact you.
              </p>
            )}
          {appContext.contactModalTitle === "Enquire" &&
            appContext.productName && (
              <p>
                I would like to enquire about the{" "}
                <strong>{appContext.productName}</strong>. Please enter the
                following information for us to contact you.
              </p>
            )}
          <div className="viewingContainer__2col">
            <div className="viewingContainer__col">
              <label
                className="viewingContainer__label"
                htmlFor="contactForm_name"
              >
                (Required) Your name:
              </label>
              <input
                type="text"
                name="name"
                className={`viewingContainer__input ${
                  attemptSubmitForm &&
                  !nameInput &&
                  "viewingContainer__inputError"
                }`}
                id="contactForm_name"
                required
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
              />
              {attemptSubmitForm && !nameInput && (
                <div className="viewingContainer__inputErrorMessage">
                  Please enter your name
                </div>
              )}
            </div>
            <div className="viewingContainer__col">
              <label
                className="viewingContainer__label"
                htmlFor="contactForm_email"
              >
                (Required) Your email:
              </label>
              <input
                type="email"
                name="email"
                className={`viewingContainer__input ${
                  attemptSubmitForm &&
                  !nameInput &&
                  "viewingContainer__inputError"
                }`}
                id="contactForm_email"
                required="true"
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
              />
              {attemptSubmitForm && !emailInput && (
                <div className="viewingContainer__inputErrorMessage">
                  Please enter your email
                </div>
              )}
            </div>
          </div>
          <div className="viewingContainer__row">
            <label
              className="viewingContainer__label"
              htmlFor="contactForm_phone"
            >
              (Optional) Your phone:
            </label>
            <input
              type="tel"
              name="phone"
              className="viewingContainer__input"
              id="contactForm_phone"
            />
          </div>
          <div className="viewingContainer__row">
            <label
              className="viewingContainer__label"
              htmlFor="contactForm_message"
            >
              (Required) Your message:
            </label>
            <textarea
              name="message"
              className={`viewingContainer__input ${
                attemptSubmitForm &&
                !nameInput &&
                "viewingContainer__inputError"
              }`}
              rows="7"
              id="contactForm_message"
              required
              value={messageInput}
              onChange={e => setMessageInput(e.target.value)}
            ></textarea>
            {attemptSubmitForm && !messageInput && (
              <div className="viewingContainer__inputErrorMessage">
                Please enter your message
              </div>
            )}
          </div>
          {((attemptSubmitForm && !messageInput) ||
            (attemptSubmitForm && !emailInput) ||
            (attemptSubmitForm && !nameInput)) && (
            <div>
              There are errors or missing information in the form above. Please
              check you have provided all the required information.
            </div>
          )}
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
              <button
                type="button"
                className="viewingContainer__submitBtn"
                onClick={e => {
                  handleSubmit(e)
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Section__contact_container>
  )
}

export default Form_viewing
