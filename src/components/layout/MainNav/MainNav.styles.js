import css_breakpoints from "../../../common/css_breakpoints"
import { navHeight } from "../../../common/globalVars"
import styled, { css } from "styled-components"
import { breakpoints } from "../../../common/globalVars"

// ${css_breakpoints.min_desktop} {
// }

/* Style nav bar for when we want to hide the nav bar e.g block_full_size_image component */
// .mainNav--shrink--transparent & {
// }

// @media (hover: hover) {
// }

// ${props =>
//   props.mainNav__topLevelLink__hasSubMenu &&
//   css`
//   `};

export const Div__mainNav__container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 0 ${navHeight.mobile + 5}px 0;

  ${css_breakpoints.min_desktop} {
    flex-direction: row;
    justify-content: space-between;
    max-width: ${css_breakpoints.desktop_max};
    height: auto;
    margin: auto;
    padding: 0;
  }
`

export const A__mainNav__logo = styled.a`
  position: relative;
  display: none;
  margin: 0;
  /* padding: 20px 60px 21px 20px; */
  padding: 15px 60px 16px 20px;
  font-family: "Playfair Display", serif;
  font-size: 22px;
  text-transform: uppercase;
  text-decoration: none !important;
  /* color: #a57c24; */
  color: white;
  transition: all ease 0.5s;
  z-index: 5;

  ${css_breakpoints.min_desktop} {
    display: block;
    margin: 0 auto 0 0;

    /* .mainNav--shrink & {
      color: white;
    } */
  }

  ${css_breakpoints.min_desktop} {
    @media (hover: hover) {
      &:hover {
        color: black;
      }
    }
    @media (hover: hover) {
      .mainNav:hover & {
        color: white;
      }
    }
  }
`

export const UL__primaryLinks = styled.ul`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  .animating & {
    overflow-y: hidden;
  }

  ${css_breakpoints.min_desktop} {
    display: flex;
    flex-direction: row;
    height: auto;
    margin: 0;
    overflow-y: auto;
    overflow-x: auto;
  }
`

export const Div__primaryLinkHighlighter = styled.div`
  display: none;

  ${css_breakpoints.min_desktop} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 100%;
    background: white;
    opacity: 0;
    transition: all ease 0.5s;
    z-index: -1;
  }
`

export const Div__secondaryLinkBackground = styled.div`
  display: none;

  ${css_breakpoints.min_desktop} {
    display: block;
    position: absolute;
    top: ${navHeight.desktop}px;
    left: 0;
    width: 100%;
    height: 0;
    background: white;
    transition: all ease-in-out 0.5s;
    z-index: -1;

    // this catches mouse over event for when user leaves drop down menu
    // covers all of the page below the menu so user can't not mouseover it
    .subNav--openForAPrimaryLink & div {
      position: absolute;
      bottom: -100vh;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: -2;
    }
  }
`

export const Div__primaryLinkTitle = styled.div`
  position: relative;
  margin: 30px 30px 20px;
  padding: 0;
  /* border-bottom: 1px solid grey; */
  text-transform: uppercase;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-size: 40px;
  line-height: normal;

  ${css_breakpoints.min_desktop} {
    display: none;
    padding: 0 0 15px;
  }
`

export const Button__primary = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 8px 0;
  border: 0;
  background: transparent;
  /* font-family: "Playfair Display", serif; */
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  transition: all ease 0.5s;
  color: #76591b;
  -webkit-tap-highlight-color: transparent;

  ${css_breakpoints.min_desktop} {
    padding: 0 20px;
    /* font-family: Raleway, sans-serif; */
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1px;
    color: white;

    /* @media (hover: hover) {
      &:hover {
        color: #b3924c !important;
      }
    } */

    .subNav--open & {
      color: #b3924c !important;
    }

    /* .mainNav--shrink & {
      color: white;
    } */

    &.snipcart-checkout {
      .snipcart-items-count {
        position: absolute;
        top: 24px;
        right: 27px;
        width: 30px;
        text-align: center;
        font-family: "Tahoma", "serif";
        font-size: 16px;
        color: white;
        z-index: 2;
        pointer-events: none;
      }

      svg {
        position: relative;
        top: -5px;
        margin: 0 0 0 10px;
        pointer-events: none;

        * {
          transition: all ease 0.3s;
        }
      }
    }
  }

  &[type="button"] {
    &:before {
      content: ">";
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      font-family: Raleway, sans-serif;
      font-weight: bold;
      /* font-size: 40px;
      line-height: 58px; */
      color: #d59919;

      ${css_breakpoints.min_desktop} {
        display: none;
      }
    }
  }
`

export const A__primary = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 8px 0;
  border: 0;
  background: transparent;
  /* font-family: "Playfair Display", serif; */
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  transition: all ease 0.5s;
  color: #76591b;
  -webkit-tap-highlight-color: transparent;

  ${css_breakpoints.min_desktop} {
    padding: 0 20px;
    /* font-family: Raleway, sans-serif; */
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;

    @media (hover: hover) {
      &:hover {
        color: #b3924c !important;
      }
    }

    /* .mainNav--shrink & {
      color: white;
    } */
  }
`

export const Div__secondaryLinkWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 120px 0px 170px;
  z-index: 1;

  ${css_breakpoints.min_desktop} {
    position: absolute;
    top: ${navHeight.desktop}px;
    bottom: auto;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    padding: 0 0 80px;
    height: auto;
    min-height: 150px;
    max-width: ${breakpoints.maxDesktop}px;
    visibility: hidden;
    overflow: hidden;
    opacity: 0;
    background: transparent;
    transition: all ease-in-out 0.3s;
    flex-direction: row;
    flex-wrap: wrap;

    .subNav--open & {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const Div__secondaryLinkItemWrapper = styled.div`
  ${css_breakpoints.min_desktop} {
    flex: 1 1 auto;
  }
`

export const P__secondaryLinksTitle = styled.p`
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  margin: 0;
  padding: 30px 30px 20px;
  background: #f3eddd;
  z-index: 1;

  text-transform: uppercase;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-size: 40px;
  line-height: normal;

  ${css_breakpoints.min_desktop} {
    display: none;
  }
`

export const Button__secondaryListBack = styled.button`
  position: fixed;
  left: 100%;
  bottom: 60px;
  width: 100%;
  height: 55px;
  margin: 5px 0 0;
  padding: 13px 0;
  border: none;
  background: #876d37;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
  -webkit-tap-highlight-color: transparent;

  ${css_breakpoints.min_desktop} {
    display: none;
  }
`

export const LI__primaryLink = styled.li`
  background: transparent;

  ${css_breakpoints.max_desktop} {
    position: relative;
    margin: 0 25px 3px;
    border-bottom: 1px dashed #b3924c;
  }

  // show sub items
  ${css_breakpoints.min_desktop} {
    transition: all ease-in-out 0.2s;

    :hover {
      transition-delay: 0.25s;
      background: white;

      /* ${Div__secondaryLinkWrapper} {
        visibility: visible;
        opacity: 1;
      } */

      ${Button__primary} {
        color: #a77711 !important;
        font-weight: bold;
      }
    }
  }

  ${props =>
    props.hiddenOnMobile &&
    css`
      display: none;
      ${css_breakpoints.min_desktop} {
        display: block;
      }
    `};

  ${props =>
    props.hiddenOnDesktop &&
    css`
      display: block;
      ${css_breakpoints.min_desktop} {
        display: none;
      }
    `};
`

export const UL__secondaryLinkList = styled.ul`
  /* height: 100%; */
  width: 100%;
  /* overflow-y: hidden; */
  /* overflow-x: hidden; */

  ${props =>
    props.centredTextDesktop &&
    css`
      ${css_breakpoints.min_desktop} {
        li > a {
          text-align: center;
        }
      }
    `}

  .animating & {
    /* overflow-y: hidden; */
  }

  ${css_breakpoints.min_desktop} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: stretch;
    align-content: space-around;
    /* max-width: ${css_breakpoints.desktop_max}; */
    /* height: 300px; */
    /* margin: auto; */
    /* padding: 50px 15px 35px; */
    padding: 30px 15px 5px;
    overflow-y: auto;
    overflow-x: auto;
    flex: 1 1;
  }

  ${props =>
    props.viewAllLink &&
    css`
      a {
        font-size: 20px;
      }

      ${css_breakpoints.min_desktop} {
        flex: 1 0 100%;
        height: auto;
        padding: 15px 0 0;
        order: 1;

        a {
          margin: 0;
          padding: 10px 25px;
          border-radius: 100px;
          background: #b3924c;
          color: white;
          font-size: 16px;

          &:before {
            bottom: 13px;
          }

          &:hover {
            margin: 0;
            padding: 10px 25px;
            color: white;

            &:before {
              width: calc(100% - 47px);
              background: #ffffff;
            }
          }
        }
      }
    `}
`

export const Li__secondaryLinkListHeading = styled.li`
  position: relative;
  left: 100%;
  margin: 30px 25px 10px;
  font-family: "Playfair Display", serif;
  font-size: 26px;

  ${css_breakpoints.min_desktop} {
    left: auto;
    margin: 0;
    padding: 10px 5px 15px 0;
    color: #a77711;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`

export const Li__secondaryLink = styled.li`
  position: relative;
  flex: 1 1 auto;
  position: relative;
  left: 100%;
  margin: 0 25px 3px;
  border-bottom: 1px dashed #b3924c;

  ${css_breakpoints.min_desktop} {
    flex: none;
    left: 0;
    margin: 0;
    border: none;
    opacity: 0;

    ${props =>
      props.viewAllLink &&
      css`
        /* margin-top: auto; */
        padding-top: 20px;
      `};
  }
`

export const A__secondaryCategoryLink = styled.a`
  display: flex;
  align-items: center;
  padding: ${props => (props.noIcon ? "8px 0" : "8px 0 8px 35px")};

  font-size: 16px;
  color: #76591b;

  .viewAllLink & {
    padding: 8px 0;
  }

  ${css_breakpoints.min_desktop} {
    position: relative;
    height: 100%;
    margin: 0 5px 0 0;
    padding: ${props => (props.noIcon ? "4px 0" : "4px 0 4px 35px")};
    font-size: 14px;
    text-transform: capitalize;
    color: black;
    transition: all ease 0.3s;

    &:before {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 50%;
      width: 0;
      height: 1px;
      background: #fff;
      transition: all ease 0.5s;
    }

    &:hover {
      margin-right: 0;
      padding-left: ${props => (props.noIcon ? "10px" : "40px")};
      color: #936400;

      &:before {
        ${props =>
          props.noIcon
            ? css`
                width: calc(100% - 7px);
              `
            : css`
                width: calc(100% - 17px);
              `};
        background: #c1a260;
        left: ${props => (props.noIcon ? "10px" : "37px")};
      }

      svg {
        left: -3px;
        width: 29px;
        height: 21px;
      }
    }

    .viewAllLink & {
      padding: 10px 25px;

      &:before {
        left: 50%;
        transform: translateX(-50%);
      }

      &:hover {
        &:before {
          width: calc(100% - 45px);
        }
      }
    }
  }

  svg {
    position: absolute;
    left: 0;
    transition: all ease 0.3s;
    width: 23px;
    height: 17px;
    /* transform: scale(1); */
  }
`

export const Btn__secondaryCategoryLink = styled.button`
  display: block;
  padding: 8px 0;
  font-size: 22px;
  color: #76591b;
  background: none;

  ${css_breakpoints.min_desktop} {
    position: relative;
    height: 100%;
    margin: 0 5px 0 0;
    padding: 5px 0 5px 5px;
    font-size: 18px;
    text-transform: none;
    color: black;
    transition: all ease 0.3s;

    &:before {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: #c1a260;
      transition: all ease 0.5s;
    }

    &:hover {
      margin-right: 0;
      padding-left: 10px;
      color: #936400;

      &:before {
        width: calc(100% + 10px);
      }
    }
  }
`

// This component will be animated when the user clicks the
// menu button.  It slides up, then the 'Div__mainNav__container'
// becomes visible which is the first child animates all of it's contents

export const Nav__mainNav = styled.nav`
  /* display: none; */
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  height: 0;
  background: #f3eddd;

  // this toggles the visibility of the mobile menu
  .showMobileNav & {
    /* display: block; */
  }

  ${css_breakpoints.min_desktop} {
    display: block;
    top: 0;
    bottom: auto;
    height: auto;
    /* background: transparent; */
    background: #b3924c;
    transition: all ease 0.5s;

    @media (hover: hover) {
      &:hover {
        background: #b3924c;

        ${Button__primary} {
          color: white;
        }
      }
    }

    /* For when we scroll down the page, shrink the nav and change background */
    /* .mainNav--shrink & {
      ${css_breakpoints.min_desktop} {
        background: #b3924c;
      }
    } */

    /* Style nav bar for when we want to "fade out" the nav bar e.g block_full_size_image component */
    .mainNav--shrink--transparent & {
      background: transparent;

      &:hover {
        background: #b3924c;
      }
    }
    .subNav--openForAPrimaryLink & {
      background: #b3924c;
    }
  }
`

export const StickyMobileMenu = styled.div`
  z-index: 5;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 4px 0 0;
  width: 100%;
  height: ${navHeight.mobile}px;
  background: #b3924c;

  ${css_breakpoints.min_desktop} {
    display: none;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 58px;
    width: 80px;
    border: none;
    background: transparent;
    -webkit-tap-highlight-color: transparent;

    svg {
      /* margin: auto; */
    }

    span {
      margin: 3px 0 0;
      font-size: 13px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: white;
    }
  }

  .snipcart-checkout {
    position: relative;

    .snipcart-items-count {
      position: absolute;
      top: 8px;
      right: 25px;
      width: 30px;
      text-align: center;
      font-family: "Tahoma", "serif";
      font-size: 15px;
      color: white;
      z-index: 2;
    }

    svg {
      position: relative;
      top: -7px;
      margin: 0 0 -12px;

      * {
        transition: all ease 0.3s;
      }
    }
  }
`
