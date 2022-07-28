import css_breakpoints from "../../../common/css_breakpoints"
import { navHeight } from "../../../common/globalVars"
import styled, { css } from "styled-components"

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
  font-size: 24px;
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

    @media (hover: hover) {
      &:hover {
        color: #b3924c !important;
      }
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
  font-size: 24px;
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
  /* left: 0; */
  left: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 0 ${navHeight.mobile}px;
  /* background: aliceblue; */
  /* background: #f9f6ee; */
  z-index: 1;

  ${css_breakpoints.min_desktop} {
    position: absolute;
    top: ${navHeight.desktop}px;
    bottom: auto;
    left: 0;
    flex-direction: row;
    padding: 0;
    height: auto;
    visibility: hidden;
    opacity: 0;
    background: transparent;
    transition: all ease-in-out 0.3s;

    .subNav--open & {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const P__secondaryLinksTitle = styled.p`
  position: relative;
  left: 100%;
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

export const Button__secondaryListBack = styled.button`
  position: relative;
  left: 100%;
  width: 100%;
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
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

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
    overflow-y: hidden;
  }

  ${css_breakpoints.min_desktop} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: stretch;
    align-content: space-around;
    /* max-width: ${css_breakpoints.desktop_max}; */
    height: 300px;
    margin: auto;
    padding: 50px 15%;
    overflow-y: auto;
    overflow-x: auto;
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
  }
`

export const A__secondaryCategoryLink = styled.a`
  display: block;
  padding: 8px 0;
  font-size: 22px;
  color: #76591b;

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

    /* Style nav bar for when we want to hide the nav bar e.g block_full_size_image component */
    .mainNav--shrink--transparent & {
      background: transparent;
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
