import css_breakpoints from "../../../common/css_breakpoints"
import styled, { css } from "styled-components"

import nav_rockywall from "../../../images/nav/rockywall.png"
import nav_engagement_default from "../../../images/nav/nav-engagement-default.jpg"
import nav_engagement_earrings from "../../../images/nav/nav-engagement-earrings.jpg"
import nav_engagement_rings from "../../../images/nav/nav-engagement-rings.jpg"
import nav_engagement_necklace from "../../../images/nav/nav-engagemet-necklace.jpg"
import nav_engagement_bracelet from "../../../images/nav/nav-engagemn-bracelet.jpg"

export const Button__burgerBtn = styled.button`
  position: absolute;
  top: 11px;
  right: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  padding: 0 10px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  outline: none;
  -webkit-tap-highlight-color: transparent; /* for removing the highlight */
  z-index: 15;

  div:before,
  div:after,
  div {
    position: relative;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.75);
    border-radius: 100px;
    content: "";
    display: block;
  }
  div:before {
    top: -5px;
  }
  div:after {
    top: 3px;
  }

  ${css_breakpoints.min_desktop} {
    display: none;
  }
`

export const Nav__mainNav = styled.nav`
  position: absolute;
  height: 30%;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  /* background: linear-gradient(0deg, #6db2c300 0%, #6db2c3 100%); */
  transition: all ease-out 0.7s;

  ${css_breakpoints.min_desktop} {
    z-index: 2;
    position: fixed;
    height: auto;
    /* background: linear-gradient(0deg, #6db2c300 0%, #6db2c3 100%); */
    padding: 50px 50px 0;
  }

  &:hover {
    background: #b3924c;
  }

  .showMobileNav & {
    z-index: 5;
    background: #3d8799;
    height: 100%;
    /* background: linear-gradient(0deg, #3d8799 99.9%, #6db2c3 100%); */
  }

  /* Style nav bar when on the product pages */
  .mainNav--brown & {
    /* background: linear-gradient(0deg, #6db2c300 0%, #7b7262 100%); */
  }

  /* For when we scroll down the page, shrink the nav and make bg white */
  .mainNav--shrink & {
    ${css_breakpoints.min_desktop} {
      background: #b3924c;
      /* box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1); */
      padding: 0 50px;
    }
  }

  /* Style nav bar for when we want to hide the nav bar e.g block_full_size_image component */
  .mainNav--shrink--transparent & {
    background: transparent;
    /* opacity: 0; */
    top: -22px;

    > div > a {
      /* padding-bottom: 0; */
      padding: 30px 20px 10px 20px;
      background: #b3924c;
    }
    > div > ul {
      opacity: 0;
    }

    &:hover {
      top: 0px;
      background: #b3924c;

      > div > a {
        /* padding-bottom: 20px; */
        padding: 20px 60px 20px 20px;
      }
      > div > ul {
        opacity: 1;
      }
    }
  }
`

export const Div__mainNav__container = styled.div`
  height: 100%;

  ${css_breakpoints.min_desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: ${css_breakpoints.desktop_max};
    height: auto;
    margin: auto;
  }
`

export const A__mainNav__logo = styled.a`
  position: relative;
  display: block;
  margin: 0;
  padding: 20px 60px 20px 20px;
  font-family: "Playfair Display", serif;
  font-size: 22px;
  text-transform: uppercase;
  text-decoration: none !important;
  color: #a57c24;
  transition: all ease 0.5s;
  z-index: 5;

  &:hover {
    color: black;
  }

  .mainNav:hover & {
    color: white;
  }

  ${css_breakpoints.min_desktop} {
    margin: 0 auto 0 0;
    .mainNav--shrink & {
      color: white;
    }
  }
`

export const Ul__mainNav__listContainer = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: calc(100% - 70px); // minus logo space above
  background: linear-gradient(0deg, #92bfca 0%, #3d8799 100%);
  overflow-y: auto;

  .showMobileNav & {
    display: flex;
  }

  .mainNav--brown & {
    background: linear-gradient(0deg, #b7a78f 0%, #857e6f 100%);

    ${css_breakpoints.min_desktop} {
      background: none;
    }
  }

  ${css_breakpoints.min_desktop} {
    display: flex;
    flex-direction: row;
    height: auto;
    background: none;
    overflow-y: visible;
  }
`

export const Button__topLevelLink = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  border: none;
  background-color: transparent;
  color: #a57c24;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none !important;
  cursor: pointer;
  transition: all ease 0.85s;
  z-index: 10;
  -webkit-tap-highlight-color: transparent; /* for removing the highlight */

  ${css_breakpoints.max_desktop} {
    outline: none;
  }

  .mainNav:hover & {
    color: white;
  }

  // white block behind button
  ${css_breakpoints.min_desktop} {
    &:before {
      z-index: -1;
      content: "";
      position: absolute;
      top: -50px;
      left: 0;
      width: 100%;
      height: 110px;
      background-color: white;
      /* box-shadow: 0px 1px 4px 5px rgba(0, 0, 0, 0.1); */
      opacity: 0;
      transition: all ease 0.5s;
    }

    // coloured underline of link
    &:after {
      content: "";
      position: absolute;
      top: 54px;
      left: 50%;
      transform: translateX(-50%);
      width: 0%;
      height: 6px;
      background-color: #a57c24;
      opacity: 0;
      transition: all ease 0.5s;
    }
  }

  ${css_breakpoints.min_desktop} {
    .mainNav--shrink & {
      color: white;
    }
  }
`

export const Div__mainNav__subNavGroupWrapper = styled.div`
  overflow: hidden;
  flex: 1 0 0px;
  transition: all ease 0.6s;

  /* .open & {
    flex: 1 0 268px;
  } */

  ${css_breakpoints.min_desktop} {
    display: block;
    overflow: visible;
    position: absolute;
    top: 120px;
    width: 100%;
    height: 0;
    left: 0;
    overflow: hidden;

    .mainNav--shrink & {
      top: 78px;
    }
  }
`

export const Div__mainNav__subNavGroup = styled.div`
  background-color: rgba(255, 255, 255, 0.3);

  ${css_breakpoints.min_desktop} {
    display: block;
    position: absolute;
    top: -510px;
    left: 0;
    width: 100%;
    // background-color: white;
    /* border-top: 11px solid #bedfe8; */
    z-index: 5;
    opacity: 0;
    transition: all ease 0.65s;
    /* box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1); */

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background-image: url(${nav_rockywall}); */
      background: white;
      z-index: -1;
    }
  }
`

export const Div__mainNav__subNavGroup__container = styled.div`
  ${css_breakpoints.min_desktop} {
    display: flex;
    flex-direction: row;
    max-width: ${css_breakpoints.desktop_max};
    margin: auto;
    background-color: white;
  }
`

export const Div__mainNav__subNavGroup__linkImg = styled.div`
  display: none;

  ${css_breakpoints.min_desktop} {
    position: relative;
    display: block;
    width: 400px;
    height: 292px;
    margin: 10px 0;
    border: 10px solid white;
    opacity: 0;
    transition: all ease 1s;
    transition-delay: 0.25s;

    transform: rotate(0);
    left: 5px;
    top: 0;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);

    background-image: url(${nav_engagement_default});
    background-repeat: no-repeat;
    background-position: center center;
  }
`

export const Ul__mainNav__subNavList = styled.ul`
  position: relative;
  padding: 0 0 20px;
  text-align: center;
  transition: padding ease 0.5s;

  .open & {
    padding: 0 17.5% 20px;
  }

  ${css_breakpoints.min_desktop} {
    flex: 1 0 35%;
    display: block;
    padding: 20px 30px;
    width: 400px;
    text-align: left;
  }

  li {
    display: block;
    bottom: -50px;
    opacity: 0;
    transition: all ease 0.4s;

    .open & {
      bottom: 0;
      opacity: 1;
    }

    &:first-of-type {
      border-top: 1px solid rgba(255, 255, 255, 0);
      padding-top: 0;

      .open & {
        border-top: 1px solid rgba(255, 255, 255, 0.65);
        padding-top: 20px;
      }
    }

    &:nth-child(2) {
      transition-delay: 0.1s;
    }
    &:nth-child(3) {
      transition-delay: 0.2s;
    }
    &:nth-child(4) {
      transition-delay: 0.3s;
    }

    &:nth-child(2) a:after {
      transition-delay: 0.1s;
    }
    &:nth-child(3) a:after {
      transition-delay: 0.2s;
    }
    &:nth-child(4) a:after {
      transition-delay: 0.3s;
    }

    ${css_breakpoints.min_desktop} {
      &:nth-child(1) {
        transition-delay: 0.4s;
      }
      &:nth-child(2) {
        transition-delay: 0.5s;
      }
      &:nth-child(3) {
        transition-delay: 0.6s;
      }
      &:nth-child(4) {
        transition-delay: 0.7s;
      }

      &:nth-child(1) a:before {
        background-image: url(${nav_engagement_rings});
      }
      &:nth-child(2) a:before {
        background-image: url(${nav_engagement_earrings});
      }
      &:nth-child(3) a:before {
        background-image: url(${nav_engagement_necklace});
      }
      &:nth-child(4) a:before {
        background-image: url(${nav_engagement_bracelet});
      }
    }

    &:last-of-type a {
      border: none;
    }
  }

  a {
    display: block;
    padding: 18px;
    color: white;
    font-size: 18px;
    text-decoration: none;
    transition: all ease 0.3s;

    ${css_breakpoints.max_desktop} {
      position: relative;
    }

    &:after {
      content: "";
      height: 0;
      width: calc(100% + 55%);
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      opacity: 1;
      // transition-delay: .5s;
      transition: all ease 0.4s;

      .open & {
        height: 100%;
        opacity: 0;
      }
    }

    ${css_breakpoints.min_desktop} {
      font-size: 20px;
      border-bottom: 1px solid rgb(223, 223, 223);
      color: grey;

      &:before {
        content: "";
        position: absolute;
        top: 19px;
        left: -400px;
        width: 400px;
        height: 274px;
        border: 10px solid white;
        box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
        background-repeat: no-repeat;
        background-position: center center;
        opacity: 0;
        transition: all ease 0.5s;
        transform: rotate(0);
        transform: rotate(-4deg);
      }

      &:hover {
        padding-left: 25px;
        color: #a57c24;

        &:before {
          opacity: 1;
          top: 19px;
          left: -407px;
          transform: rotate(-1deg);
        }
      }
    }
  }
`

export const Div__mainNav__subNavMessage = styled.div`
  display: none;

  ${css_breakpoints.min_desktop} {
    display: block;
    width: 400px;
    padding: 47px 30px 40px;
    opacity: 0;
    transition: all ease 1.5s;
    transition-delay: 0.6s;

    p {
      font-size: 16px;
      line-height: 30px;
      color: grey;
    }
  }
`

export const Li__mainNav__topLevelLink = styled.li`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);

  ${css_breakpoints.min_desktop} {
    display: block;
    border: none;
  }

  &.open ${Button__topLevelLink} {
    background-color: rgba(255, 255, 255, 0.3);

    ${css_breakpoints.min_desktop} {
      background-color: transparent;
    }
  }

  &:hover {
    ${Button__topLevelLink} {
      ${css_breakpoints.min_desktop} {
        color: #a57c24;

        // white block behind button
        &:before {
          opacity: 1;
          height: 130px;
        }

        // coloured underline of link
        &:after {
          width: 74%;
          background-color: #c1a260;
          opacity: 1;
        }
      }
    }

    ${Div__mainNav__subNavGroup} {
      opacity: 1;
      top: 1px;

      .mainNav--shrink & {
        top: 1px;
      }
    }
  }

  ${props =>
    props.mainNav__topLevelLink__hasSubMenu &&
    css`
      ${Button__topLevelLink} {
        position: relative;

        ${css_breakpoints.max_desktop} {
          &:before {
            content: ">";
            font-size: 28px;
            position: absolute;
            top: 50%;
            right: 25px;
            transform: translateY(-50%) rotate(90deg);
            transition: all ease 0.5s;
          }
        }
      }

      ${css_breakpoints.min_desktop} {
        &:hover {
          ${Button__topLevelLink}:before {
            transition: all ease 1s;
            /* box-shadow: 0px -8px 4px 5px rgba(0, 0, 0, 0.1); */
          }

          ${Div__mainNav__subNavGroupWrapper} {
            height: 335px;

            .mainNav--shrink & {
              height: 335px;
            }
          }

          ${Ul__mainNav__subNavList} li {
            bottom: 0;
            opacity: 1;
          }

          ${Div__mainNav__subNavGroup__linkImg} {
            opacity: 1;
            left: -7px;
            /* top: -1px; */
          }

          ${Div__mainNav__subNavMessage} {
            opacity: 1;
          }
        }
      }
    `};

  ${css_breakpoints.max_desktop} {
    // rotate mobile chevron if sub menu open
    &.open {
      ${Button__topLevelLink}:before {
        right: 34px;
        transform: translateY(-50%) rotate(-90deg);
      }
    }
  }
`

// export const Styled_SubMenuContainer = styled.div`

//   @media (min-width: 768px) and (hover: hover) {
//     ${Styled_ToplevelItem}:hover & {
//       display: block;
//     }
//   }
// `
