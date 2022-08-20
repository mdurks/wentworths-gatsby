import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

export const Styled_footer = styled.footer`
  padding-bottom: 80px;
  background-color: #fff;

  ${css_breakpoints.min_tablet} {
    padding-bottom: 0;
  }

  .footerContainer {
    ${css_breakpoints.min_desktop} {
      display: flex;
      flex-direction: row;
      padding: 70px 0 100px;

      > div {
        flex: 1 1 20%;
        padding: 0 21.666px;

        &:first-of-type {
          flex: 1 1 35%;
          padding-left: 0;

          .heading {
            margin-left: 0;
            padding-left: 0;
            text-transform: uppercase;
          }
        }
        &:last-of-type {
          padding-right: 0;

          .heading {
            margin-right: 0;
            padding-right: 0;
          }
        }
      }
    }
  }

  .heading {
    position: relative;
    margin: 0 0 20px;
    padding: 0 0 10px 20px;
    font-size: 25px;
    border-bottom: 1px solid #e5e5e5;
    text-align: center;

    ${css_breakpoints.min_tablet} {
      margin: 0 -20px 40px -20px;
      padding: 0 0 20px 20px;
      text-align: left;
    }
  }

  /* ul a {
    display: block;
    padding: 6px 0;
    transition: all ease 0.3s;

    &:hover {
      padding-left: 5px;
    }

    ${css_breakpoints.min_tablet} {
      padding: 4px 0;
    }
  } */

  ul button {
    display: block;
    padding: 6px 0;
    border: none;
    background: transparent;
    font-size: inherit;
    transition: all ease 0.3s;

    &:hover {
      padding-left: 5px;
    }

    ${css_breakpoints.min_tablet} {
      padding: 4px 0;
    }
  }

  .accordionContentWrapper {
    ${css_breakpoints.max_mobile} {
      overflow: hidden;
      max-height: 0;
      transition: all ease 0.3s;

      li:last-of-type {
        padding-bottom: 20px;
      }
    }
  }

  .firstAccordionGroup {
    ${css_breakpoints.max_mobile} {
      margin-top: 30px;
    }
  }

  .lastAccordionGroup {
    ${css_breakpoints.max_mobile} {
      border-bottom: 1px solid #c5c5c5;

      form {
        padding-bottom: 30px;
      }
    }
  }

  .accordionButton {
    ${css_breakpoints.max_mobile} {
      margin: 0;
      padding: 0px 0 5px;
      text-align: left;
      border-top: 1px solid #c5c5c5;
      border-bottom: none;

      &:before {
        content: "❯";
        transform: rotate(90deg);
        position: absolute;
        top: 6px;
        right: 12px;
        font-size: 20px;
        transition: all ease 0.3s;
      }
      &.active:before {
        transform: rotate(-90deg);
      }
    }
  }

  .footerEssentialDetails {
    padding-top: 20px;
    text-align: center;

    ${css_breakpoints.min_tablet} {
      padding-top: 0;
      text-align: left;
    }

    .heading {
      display: none;

      ${css_breakpoints.min_tablet} {
        display: block;
      }
    }
  }

  .footerCopyrightMsg {
    margin-top: 30px;
    text-align: center;
    font-size: 14px;

    ${css_breakpoints.min_tablet} {
      background: #e3e3e3;
      margin-top: 0;
      text-align: left;
    }
  }

  /* Mailchimp newsletter signup */

  .mailChimpWrapper {
    .email {
      width: 100%;
      margin: 12px 0;
      padding: 10px;
    }
    .button {
      padding: 10px;
      cursor: pointer;
    }
    .optionalParent {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brandingLogo {
      width: 150px;
      margin: 15px 0 0;
    }
  }
`
export const FooterLink = styled.a`
  display: block;
  padding: 6px 0;
  transition: all ease 0.3s;

  &:hover {
    padding-left: 5px;
  }

  ${css_breakpoints.min_tablet} {
    padding: 4px 0;
  }
`
