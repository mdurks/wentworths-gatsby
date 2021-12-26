import React from "react"

import styled from "styled-components"
import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const Section__contact_container = styled.section`
  //   position: fixed;
  //   top: 80px;
  //   right: 0;
  //   width: 100%;
  //   height: calc(100% - 160px);
  //   font-size: 18px;
  //   overflow: hidden;
  //   z-index: 10;

  .contactContainer {
    &__openBtn {
      position: fixed;
      top: calc(50% - 30px);
      right: -77px;
      padding: 10px 20px 6px;
      border: 0;
      background: white;
      color: grey;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      border-radius: 20px 20px 0 0;
      border: 2px solid grey;
      border-top: 5px solid grey;
      transform: rotate(-90deg) translateY(-50%);
      z-index: 5;
    }

    &__content {
      position: fixed;
      top: 50%;
      right: -660px;
      transform: translateY(-50%);
      margin: 10px 0;
      width: 650px;
      transition: all ease-in-out 0.4s;
      backdrop-filter: blur(5px);
      box-shadow: 0px 0px 8px 4px rgb(0 0 0 / 33%);
      border-radius: 20px 0 0 20px;
      z-index: 5;

      &.open {
        right: 0px;
      }
    }

    &__closeBtn {
      position: absolute;
      top: 38px;
      right: 24px;
      padding: 5px 15px;
      border: 2px solid white;
      background: none;
      border-radius: 8px;
      color: white;
      font-size: 30px;
    }

    &__title {
      padding: 35px 100px 25px 50px;
      font-size: 45px;
      font-family: "Playfair Display", serif;
      text-transform: none;
      color: hsl(350deg 100% 33%);
      background-color: hsl(354deg 67% 68% / 63%);
      border-radius: 20px 0 0 0;
    }

    &__glitterBar {
      height: 20px;
      background: hsl(354deg 67% 68%);
    }

    &__form {
      height: calc(100vh - 330px);
      padding: 40px 50px;
      background: hsl(0deg 0% 100% / 82%);
      border-radius: 0 0 0 20px;
    }

    &__2col {
      display: flex;
      margin: 0 -10px 30px;
    }

    &__col {
      flex: 1 0 50%;
      padding: 0 10px;
    }

    &__label {
      display: block;
      padding: 0 0 20px;
      color: #d24d64;
      font-size: 20px;
      font-weight: bold;
    }

    &__input {
      display: block;
      width: 100%;
      padding: 15px 20px;
      font-size: 18px;
      color: grey;
      font-family: "Raleway", sans-serif;
      background: white;
      border-width: 1px;
      border-style: solid;
      border-top-color: white;
      border-left-color: white;
      border-right-color: #adadad;
      border-bottom-color: #adadad;
      border-radius: 5px;
      box-shadow: inset 3px 3px 10px 1px rgb(0 0 0 / 20%);

      &:focus {
        outline: none;
        border-width: 2px;
        border-color: #c59095;
      }
    }

    &__submitGrp {
      display: flex;
      margin: 40px 0 0;
    }

    &__tel {
      flex: 1 0 auto;
      color: grey;
    }

    &__submitBtn {
      padding: 10px 20px;
      background-color: hsl(350deg 60% 56%);
      font-size: 20px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: white;
      border: none;
      border-radius: 6px;
    }
  }
`

const form_contact = props => {
  //
  //
  //
  let click_contactContainer__openBtn = () => {
    let contactContainer = document.querySelector(".contactContainer__content")
    if (String(contactContainer.classList).indexOf("open") < 0) {
      contactContainer.classList.add("open")
    } else {
      contactContainer.classList.remove("open")
    }
  }
  let click_contactContainer__closeBtn = () => {
    document
      .querySelector(".contactContainer__content")
      .classList.remove("open")
  }

  return (
    <Section__contact_container className="contactContainer">
      <button
        className="contactContainer__openBtn"
        onClick={click_contactContainer__openBtn}
      >
        Contact
      </button>
      <div className="contactContainer__content">
        <button
          className="contactContainer__closeBtn"
          onClick={click_contactContainer__closeBtn}
          aria-label="Close contact form"
        >
          ✖
        </button>
        <h3 className="contactContainer__title">Get in touch...</h3>
        <div className="contactContainer__glitterBar"></div>
        <form className="contactContainer__form" action="">
          <div className="contactContainer__2col">
            <div className="contactContainer__col">
              <label
                className="contactContainer__label"
                htmlFor="contactForm_name"
              >
                Name:
              </label>
              <input
                className="contactContainer__input"
                type="text"
                id="contactForm_name"
              />
            </div>
            <div className="contactContainer__col">
              <label
                className="contactContainer__label"
                htmlFor="contactForm_email"
              >
                Email:
              </label>
              <input
                className="contactContainer__input"
                type="text"
                id="contactForm_email"
              />
            </div>
          </div>
          <label
            className="contactContainer__label"
            htmlFor="contactForm_message"
          >
            Message:
          </label>
          <textarea
            className="contactContainer__input"
            rows="9"
            id="contactForm_message"
          ></textarea>
          <div className="contactContainer__submitGrp">
            <div className="contactContainer__tel">
              <p>
                <strong>Tel:</strong> 01234 556 789
              </p>
              <p>
                <strong>MON-SAT:</strong> 10am - 5pm
              </p>
            </div>
            <div className="contactContainer__submit">
              <button className="contactContainer__submitBtn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Section__contact_container>
  )
}

export default form_contact
