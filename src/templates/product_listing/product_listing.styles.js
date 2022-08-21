import styled from "styled-components"
import css_breakpoints from "../../common/css_breakpoints"

export const Div__productsPage = styled.div`
  background: #e5e3de;
`

export const Div__pageHeader = styled.div`
  position: relative;
  padding: 60px 0 80px;
  text-align: center;
  /* min-height: 560px; */

  ${css_breakpoints.min_desktop} {
    min-height: auto;
    padding: 105px 0 40px;
  }

  p {
    margin: auto;
    font-family: "Raleway", sans-serif;
    opacity: 0;

    ${css_breakpoints.min_desktop} {
      width: 50%;
    }
  }

  .subTitle {
    position: relative;
    width: auto;
    font-family: "Playfair Display", serif;
    font-size: clamp(21px, 4vw, 35px);
    text-transform: uppercase;
    opacity: 0;
    z-index: 1;

    ${css_breakpoints.min_desktop} {
      margin: 0 0 0 -320px;
    }
  }

  .pageTitle {
    position: relative;
    margin: 10px 0 50px;
    font-family: "Amalfi Coast", serif;
    font-size: clamp(41px, 7vw, 80px);
    line-height: clamp(61px, 7vw, 120px);
    text-transform: capitalize;
    color: #c1a260;
    opacity: 0;

    ${css_breakpoints.min_desktop} {
      margin: 0 0 60px;
    }

    .pageTitleAttributeValue {
      position: absolute;
      top: -60px;
      left: 50%;
      transform: translateX(-50%);
      font-family: "Playfair Display", serif;
      text-transform: uppercase;
      color: black;
      font-size: clamp(30px, 3vw, 40px);
      line-height: normal;
      letter-spacing: 6px;

      ${css_breakpoints.min_desktop} {
        top: -70px;
        letter-spacing: 10px;
      }
    }
  }

  .show_filters_btn {
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    background-color: transparent;
    padding: 10px 0;
    border-bottom: 1px solid #ac832f;
    font-family: "Playfair Display", serif;
    font-size: 25px;
    text-transform: uppercase;
    color: #ac832f;
    transition: all ease-in-out 0.5s;
    -webkit-tap-highlight-color: transparent;

    &:after {
      content: "❯";
      position: absolute;
      top: 10px;
      right: 1px;
      transform: rotate(90deg);
    }

    .show_filters_btn_text_hide {
      display: none;
    }

    &_open {
      color: black;
      border-color: black;

      .show_filters_btn_text_show {
        display: none;
      }
      .show_filters_btn_text_hide {
        display: inline-block;
      }

      &:after {
        right: 4px;
        transform: rotate(270deg);
      }
    }

    ${css_breakpoints.min_desktop} {
      display: none;
    }
  }
`

export const Div__filter = styled.div`
  position: relative;
  padding: 10px 0 0;
  // commented out below as it was interferring with initial page load aninmations and delaying this element.  Added this css property via GSAP after animation.
  // this transition allows the filter height to grow once we've picked a filter and push the page down, without it, the page just jumps up/down
  /* transition: all ease-in-out 0.5s; */
  overflow: hidden;
  opacity: 0;

  ${css_breakpoints.min_desktop} {
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    height: 75px !important;
    overflow: visible;

    &:before {
      content: "";
      position: absolute;
      top: 32px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #c0b7a3;
    }

    &.checked_items {
      height: 126px !important;
    }
  }

  fieldset {
    position: relative;
    flex: 0 1 280px;
    margin: 0;
    padding: 0;
    border: none;
    border-bottom: 1px solid #ada99f;

    ${css_breakpoints.min_desktop} {
      border: none;
    }

    &.item_checked,
    &.filter_menu_open {
      .filter_list_container {
        height: calc((var(--number-of-menu-items)) * 47px - 2px);
        max-height: 214px;
        margin: 5px 0 15px;
        overflow: visible;

        ${css_breakpoints.min_desktop} {
          height: calc((var(--number-of-menu-items) + 1) * 50px - 8px);
          max-height: 265px;
          margin: 0;
          padding: 35px 11px 15px 10px;
          border: 1px solid #c0b7a3;
          border-top: 1px solid #e5e3de;
        }
      }

      label {
        animation-name: animateIn;
        animation-duration: 300ms;
        animation-delay: calc((2 + var(--animation-order)) * 125ms);
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
      }

      legend {
        &:after {
          transform: rotate(270deg);
          right: 4px;

          ${css_breakpoints.min_desktop} {
            top: 32px;
            right: auto;
            transform: rotate(90deg);
          }
        }
      }

      @media (hover: hover) {
        &:hover {
          legend {
            color: black;
          }
        }
      }
    }

    &.item_checked {
      .filter_list_container {
        position: relative;
        height: 60px;
        margin: 0;
        padding: 0;

        ${css_breakpoints.min_desktop} {
          height: 88px;
          padding: 23px 11px 15px 10px;
        }
      }

      legend {
        /* padding-left: 60px;
        padding-right: 0; */

        &:after {
          opacity: 0;
        }
      }

      /* .filter_legend_amount {
        opacity: 0;
        position: absolute;
      } */
    }
  }

  legend {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    font-family: "Playfair Display", serif;
    font-size: 25px;
    text-transform: uppercase;
    color: #a77711;
    transition: all ease-in-out 0.3s;

    &:after {
      content: "❯";
      /* content: "❭"; */
      position: absolute;
      top: 0;
      right: 0;
      transform: rotate(90deg);
      transition: all ease 0.3s;
    }

    .filter_legend_amount {
      margin: 8px 0 0 5px;
      font-size: 22px;
      font-family: "Arial, sans-serif";
      transition: all ease 0.3s;
    }

    ${css_breakpoints.min_desktop} {
      display: inline;
      width: auto;
      padding: 10px 30px;
      text-align: center;
      z-index: 10;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #e5e3de;
        z-index: -1;
      }
      &:after {
        /* content: "❯"; */
        content: "❭";
        position: absolute;
        top: 38px;
        left: 46%;
        right: auto;
        transform: rotate(90deg);
        transition: all ease 0.3s;
        opacity: 1;
        pointer-events: none;
        z-index: -1;
      }
    }
  }

  .filter_list_container {
    width: 100%;
    height: 0px;
    border: 1px solid #e5e3de;
    border-radius: 0 0 10px 10px;
    background-color: #e5e2dc;
    transition: all ease-in-out 0.4s;
    overflow: hidden;
    z-index: 5;

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: -30px;
      padding: 0 10px;
    }
  }

  ul {
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;

    ${css_breakpoints.min_desktop} {
      padding: 0 7px 0 0;

      /* ::-webkit-scrollbar {
        width: 14px;
      }
      ::-webkit-scrollbar-track {
        background: #efede9;
      }
      ::-webkit-scrollbar-thumb {
        background: #d0c3a8;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #d0c3a8;
      } */
    }
  }

  label {
    display: block;
    padding: 10px 15px;
    margin: 0 0 2px;
    background-color: #efede9;
    color: #000;
    transition: all ease-in-out 0.65s;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;

    ${css_breakpoints.min_desktop} {
      display: block;
      margin: 0 5px 2px;
      border-radius: 5px;
      font-size: 16px;

      &:hover {
        background-color: #f9f8f6;
        color: #000;
        transition: all ease-in-out 0.3s;

        .filter_item_amount {
          color: #000;
        }
      }
    }
  }

  li:last-child label {
    margin-bottom: 0;
  }

  @keyframes animateIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  input {
    width: 20px;
    height: 20px;
    margin: 0 10px 0 0;
    border-radius: 5px;
    vertical-align: text-top;
    border: 1px solid #ada99f;
    cursor: pointer;
  }

  .filter_item_amount {
    /* font-family: "Arial, sans-serif"; */
    float: right;
    margin: -2px 0 0;
    font-size: 18px;
    color: #966500;
    transition: all ease-in-out 0.3s;
  }
`

export const Div__filter_info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
  text-align: center;
  opacity: 0;

  ${css_breakpoints.min_desktop} {
    flex-direction: row;
    margin: 0;
  }

  .filter_info__showingNumber {
    text-align: center;
    text-transform: capitalize;

    span {
      text-transform: lowercase;
    }

    ${css_breakpoints.min_desktop} {
      flex: 1;
      // left padding is the width of the sort by group
      padding: 11px 0 0 275px;
    }
  }

  .sortProducts {
    margin: 30px 0 30px;

    &__container {
      position: relative;
      display: flex;
      margin: auto;
      width: 275px;
    }

    &__label {
      padding-top: 12px;
      color: #ac832f;
      font-size: 18px;
    }

    &__list_container {
      position: absolute;
      top: -5px;
      right: 0;
      display: flex;
      flex-direction: column;
      width: 200px;
      height: 62px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #c0b7a3;
      background-color: #e5e3de;
      overflow: hidden;
      transition: all 0.4s ease-in-out;
      z-index: 4;

      &:before {
        content: "❯";
        position: absolute;
        top: 14px;
        right: 26px;
        transform: rotate(90deg);
        transition: all 0.4s ease-in-out;
        z-index: 5;
      }
      &.open:before {
        opacity: 0;
      }

      @media (hover: hover) {
        &:hover {
          height: 184px;

          button {
            opacity: 1;
          }
        }
      }

      &.open {
        height: 184px;

        button {
          opacity: 1;
        }
      }
    }

    button {
      order: 1;
      padding: 7px 15px;
      margin: 0 0 2px;
      border-radius: 5px;
      font-size: 16px;
      text-align: left;
      background-color: #efede9;
      opacity: 0;
      transition: all 0.4s ease-in-out;
      -webkit-tap-highlight-color: transparent;

      @media (hover: hover) {
        &:hover {
          background-color: #f9f8f6;
        }
      }

      &.selected {
        order: 0;
        opacity: 1;
      }

      &:focus {
        opacity: 1;
      }
    }
  }
`

export const Div__productRow = styled.div`
  text-align: center;

  ${css_breakpoints.max_desktop} {
    margin: 0 -30px 75px;
    overflow: hidden;

    > a {
      margin-bottom: -30px;

      &:nth-child(odd) {
        left: -12%;
      }
      &:nth-child(even) {
        left: 12%;
      }
    }
  }

  ${css_breakpoints.min_desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 40px 0 0;
  }
`
