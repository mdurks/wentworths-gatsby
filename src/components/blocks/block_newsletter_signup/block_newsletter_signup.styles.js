import styled, { css } from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

const section_vertical_padding = "10vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

export const Block_newsletter_signupWrapper = styled.div`
  position: relative;
  background: #588d8d;
  overflow: hidden;

  ${css_breakpoints.min_desktop} {
  }

  .Block_newsletter_signup__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    div {
      top: -250px;
      width: auto;
      height: 150%;
    }
  }

  .Block_newsletter_signup__contentWrapper {
    position: relative;
    margin: 100px 0;
    background: hsl(0deg 0% 100% / 33%);
    z-index: 1;

    h2 {
      position: relative;
      top: -19px;
      text-align: center;
      color: black;
      font-family: "Amalfi Coast", serif;
      font-size: 38px;
      line-height: 55px;

      ${css_breakpoints.min_tablet} {
        top: -60px;
        font-size: clamp(40px, 7vw, 72px);
        line-height: normal;
      }

      span {
        display: block;
        font-size: 27px;

        ${css_breakpoints.min_tablet} {
          display: inline;
          font-size: clamp(40px, 7vw, 72px);
        }
      }
    }
  }

  .Block_newsletter_signup__formWrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    top: -5px;
    width: 100%;
    max-width: 575px;
    margin: auto;
    padding: 0 10px 40px;

    ${css_breakpoints.min_tablet} {
      top: -75px;
      padding: 0;
    }

    .mailChimpWrapper {
      order: 1;

      ${css_breakpoints.min_tablet} {
        order: 0;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 0;

      ${css_breakpoints.min_tablet} {
        margin: 30px 0;
        flex-direction: row;
        align-items: unset;
      }

      input[type="email"] {
        width: 100%;
        padding: 10px;
        border: 3px solid #588d8d;
        border-radius: 5px;
        font-family: "Raleway", sans-serif;

        ${css_breakpoints.min_tablet} {
          padding: 10px 15px;
          font-size: 19px;
        }
      }

      input[type="submit"] {
        height: 100%;
        margin: 25px 0 0;
        padding: 10px 20px;
        border: none;
        background: #588d8d;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;

        ${css_breakpoints.min_tablet} {
          margin: 0 0 0 25px;
          padding: 0 20px;
        }
      }
    }

    p {
      ${css_breakpoints.min_tablet} {
        font-size: 20px;
      }
    }

    p:last-of-type {
      margin: 15px 0 0;
      text-transform: uppercase;

      ${css_breakpoints.min_tablet} {
        margin: 0;
        font-size: 16.25px;
      }
    }
  }
`
