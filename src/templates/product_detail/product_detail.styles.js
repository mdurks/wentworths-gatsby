import styled from "styled-components"
import css_breakpoints from "../../common/css_breakpoints"

const section_vertical_height = "100vh"
const section_vertical_padding = "5vh"

export const Div__detail_hero_block = styled.div`
  position: relative;
  height: calc(100vh - 60px);
  background-color: #e5e3de;

  ${css_breakpoints.min_tablet} {
    max-height: 925px;
  }

  .heroCarousel {
    height: calc(100vh - 60px);

    ${css_breakpoints.min_tablet} {
      width: 100%;
      height: 100%;
    }
  }

  .flickity-viewport {
    height: 100%;
  }

  .heroCarousel .flickity-slider > div {
    height: 100% !important;
    width: 100% !important;
  }

  .flickity-page-dots {
    bottom: 40px;

    ${css_breakpoints.min_tablet} {
      display: none;
    }
  }

  .graphImg {
    height: 100% !important;
    width: 100% !important;

    img {
      height: 100% !important;
      width: auto !important;
      left: 50% !important;
      transform: translateX(-50%);
    }
  }

  .heroProductPrice {
    position: relative;
    top: 0;
    margin: 0 0 20px;
    /* font-family: "Playfair Display", serif; */
    font-family: "Tahoma ", "serif";
    font-size: 32px;
    color: #a57c24;
    /* opacity: 0; */
    transition: all ease 0.25s;
  }

  .productVAT {
    position: relative;
    top: -4px;
    padding: 0 0 0 12px;
    font-family: "Playfair Display", serif;
    font-size: 14px;
    color: #000;
    /* opacity: 0; */
  }

  .productStage {
    position: absolute;
    height: 120px;
    width: 100%;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
    background-color: white;
    border-radius: 100%;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.2),
      inset 0px 0px 20px 10px rgba(0, 0, 0, 0.08);
    transition: all ease 0.5s;

    ${css_breakpoints.min_desktop} {
      bottom: 0px;
      width: 433px;
      height: 176px;
    }
  }
`

export const Styled_Title = styled.h2`
  font-size: 29px;
  color: #a57c24;
  /* opacity: 0; */

  ${css_breakpoints.min_desktop} {
    position: relative;
    top: 0;
    font-size: 38px;
    line-height: 48px;
    margin-bottom: 25px;
    transition: all ease 0.25s;
  }

  .closed_hero_details & {
    top: 10px;
    opacity: 0;
  }

  .hero_details_hovered & {
    top: 0;
    opacity: 1;
  }
`

// export const Styled_BackgroundImg = styled.div`
//   position: absolute;
//   top: 100px;
//   left: -1px;
//   width: calc(100% + 2px);
//   height: 100vh;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   z-index: -1;

//   ${css_breakpoints.min_desktop} {
//     top: 0;
//   }

//   > div {
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     height: 100%;

//     > div {
//       height: 100%;
//     }
//   }
// `

export const HeroProductContentWrapper = styled.div`
  ${css_breakpoints.min_tablet} {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 100%;
  }
`

export const Styled_Img = styled.div`
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 80px 0 100px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  ${css_breakpoints.min_desktop} {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    width: 540px;
    height: 540px;
    margin: 0;
    cursor: zoom-in;
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
  }

  div {
    height: 100%;
    width: 100%;
  }

  .animating_to_modal {
    height: 100%;
    margin: 0;
    top: 0;
    box-shadow: none !important;
    transform: translate(0px, 0px) scale(1) !important;
    transition: none !important;
    opacity: 1 !important;

    img {
      object-fit: contain !important;
    }
  }

  .reset_after_animated_to_modal {
    /* position: relative;
    overflow: hidden;
    z-index: 1;
    opacity: 1;
    transform: translate(0px, -100px) scale(1);
    transition: none !important;

    ${css_breakpoints.min_desktop} {
      transform: translate(0px, -100px) scale(0.9);
    } */
  }
`

export const HeroCarouselThumbnails = styled.div`
  position: absolute;
  top: 47%;
  left: 50px;
  transform: translateY(-50%);
  display: none;
  flex-direction: column;
  /* height: 300px; */
  z-index: 5;

  ${css_breakpoints.min_tablet} {
    display: flex;
  }

  button {
    padding: 0;
    padding: 5px 0;
    background: transparent;
    border: 2px solid transparent;
    transition: all ease 0.3s;
    transform: scale(1);

    :hover {
      margin: 9px 0;
      transform: scale(1.2);
    }

    &.active {
      margin: 17px 0;
      transform: scale(1.35);

      > div {
        border: 2px solid rgb(255 255 255 / 66%);
      }
    }

    .graphcms-image-wrapper {
      width: 70px;
      height: 50px;
    }
  }
`

export const Styled_CMScontent = styled.div`
  /* display: none; */
  position: relative;

  ${css_breakpoints.min_desktop} {
    /* outline: 1px solid red; */
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%) scale(1);
    width: 34%;
    padding: 25px 45px 30px;
    text-align: left;
    transition: all ease 0.5s;
  }

  &[data-slideNumber="slide0"] {
    top: 50% !important;
  }

  .backgroundColour {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background: rgb(255 255 255 / 30%);
    z-index: -1;
    transition: all ease 0.5s;
  }

  .hoverBlocker {
    display: none;
  }

  &.closed_hero_details {
    top: 66%;
    width: 368px;
    padding: 20px;
    transform: translateY(-50%) scale(0.8);

    .backgroundColour {
      height: 148px;
      border-radius: 25px;
    }

    .hoverBlocker {
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      width: calc(100% + 10px);
      height: 70%;
      background: blue;
      z-index: 456;
    }

    .heroProductPrice,
    .heroDetailsWrapper {
      opacity: 0;
      top: 10px;
    }
  }

  &.hero_details_hovered {
    top: 60%;
    transform: translateY(-50%) scale(1);

    .backgroundColour {
      height: 100%;
      background: rgb(255 255 255 / 80%);
      backdrop-filter: blur(8px);
      border-radius: 6px;
    }
    .heroProductPrice,
    .heroDetailsWrapper {
      opacity: 1;
      top: 0;
    }
  }

  .heroDetailsWrapper {
    position: relative;
    top: 0;
    margin: 50px 0;
    font-size: 15px;
    /* opacity: 0; */
    transition: all ease 0.25s;

    > div {
      display: flex;
      margin-bottom: 5px;

      &:last-of-type {
        margin-bottom: 0;
      }

      span {
        padding-right: 10px;

        &:first-of-type {
          flex: 1 1 40%;
        }

        &:last-of-type {
          flex: 1 1 60%;
        }
      }
    }

    .selectRingSize {
      display: block;
      margin: 15px 0 0;

      a {
        display: inline-block;
        text-decoration: underline;
      }
    }
  }

  .selectRingSizeWrapper {
    margin: 0 0 30px;
    padding: 18px 22px;
    border-radius: 5px;
    background: hsl(0deg 0% 100% / 20%);
    font-size: 15px;

    ${css_breakpoints.min_desktop} {
      margin-left: -22px;
    }
  }

  .addToCartBtn {
    display: block;
    width: 100%;
    margin: 0 0 20px;
    padding: 17px 20px;
    border-radius: 100px;
    border: none;
    background: #b3924c;
    color: white;
    font-size: 18px;
    text-transform: uppercase;

    ${css_breakpoints.min_tablet} {
      padding: 10px 20px;
    }
  }

  .secondaryCTAWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 -8px;

    ${css_breakpoints.min_tablet} {
      flex-direction: row;
    }
  }

  .secondaryCTABtn {
    flex: 1;
    margin: 0 8px 20px;
    padding: 7px 20px;
    border-radius: 100px;
    border: 1px solid #a57c24;
    background: transparent;
    color: #a57c24;
    font-size: 16px;

    ${css_breakpoints.min_tablet} {
      margin: 0 8px;
    }
  }
`

export const Div_detailed_description_block = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #f4f3f1;

  ${css_breakpoints.min_desktop} {
    min-height: calc(100vh + ${section_vertical_padding});
    padding: 0;
    padding-top: 75px;
    /* padding-bottom: 75px; */
  }

  p {
    + p {
      margin-top: 40px;
    }

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

  .detailed_description_colWrapper {
    display: flex;
    flex-direction: column;
    padding: 30px 0 0;

    ${css_breakpoints.min_desktop} {
      flex-direction: row;
      padding: 0;
    }

    > div:first-of-type {
      ${css_breakpoints.min_desktop} {
        flex: 1 1 55%;
        padding: 0 0 50px;
      }
    }

    > div:last-of-type {
      ${css_breakpoints.min_desktop} {
        flex: 1 1 45%;
        padding: 50px;
      }
    }
  }

  .detailed_description_text {
    opacity: 0;
    padding-top: 20px;

    ${css_breakpoints.min_desktop} {
      height: 75vh;
      padding-top: 0;
      padding-right: 30px;
      overflow-y: auto;
      font-size: 16px;
    }
  }
  /* &.stick_description .detailed_description_text {
    position: fixed;
    top: 150px;
    width: ${
      document.querySelector(".detailed_description_text").offsetWidth + "px"
    };
  } */

  .productScrollingImg {
    position: relative;
    top: 100px;
    margin-bottom: 30px;
    /* outline: 1px solid grey; */
    opacity: 0;
    transform: scale(0.8);

    &.animating_to_modal {
      height: 100%;
      margin: 0;
      top: 0;
      box-shadow: none !important;
      transform: translate(0px, 0px) scale(1) !important;
      transition: none !important;
      opacity: 1 !important;

      img {
        object-fit: contain !important;
      }
    }

    &.reset_after_animated_to_modal {
      position: relative;
      overflow: hidden;
      z-index: 1;
      opacity: 1;
      transform: translate(0px, -100px) scale(1);
      transition: none !important;

      ${css_breakpoints.min_desktop} {
        transform: translate(0px, -100px) scale(0.9);
      }
    }
  }

  .graphcms-image-outer-wrapper {
    transition: all 0.4s ease;
    transform: scale(1);
    height: 100%;
    width: 100%;

    .productScrollingImg {
      /* box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.1); */
      transition: all 0.4s ease;
    }

    @media (hover: hover) {
      cursor: zoom-in;

      &:hover {
        transform: scale(1.05);

        .productScrollingImg {
          box-shadow: 5px 5px 15px 3px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`

export const Div_social_share_group = styled.div`
  background: #f4f3f1;

  .socialShareContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 0 0 35px;
    padding: 10px 0 10px;
    border-top: 1px dotted grey;
    text-align: center;

    ${css_breakpoints.min_desktop} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
    }
  }

  p {
    margin: 5px 0 0;

    ${css_breakpoints.min_desktop} {
      margin: 0 10px 0 0;
    }
  }

  a {
    position: relative;
    top: 0;
    display: inline-block;
    margin: 5px;
    padding: 12px;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    transition: all ease 0.3s;

    &:last-of-type {
      margin-right: 0;
    }

    ${css_breakpoints.min_desktop} {
      &:hover {
        top: -4px;
      }
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

export const Div_modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  /* overflow: auto; */

  .modalContent {
    /* position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    */

    position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    left: 0;
    top: 0;

    ${css_breakpoints.min_desktop} {
      padding: 30px;
    }

    @media (hover: hover) {
      cursor: zoom-in;
    }

    &.modalContent--zoom {
      width: 200%;
      height: auto;

      ${css_breakpoints.min_desktop} {
        width: 150%;
        padding: 100px;

        @media (hover: hover) {
          cursor: zoom-out;
        }
      }

      div {
        width: auto;
        height: auto;
      }
    }

    div {
      width: 100%;
      height: 100%;
    }

    img {
      object-fit: contain !important;
    }
  }

  .modal_close {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 15px;
    background-color: #846a4f;
    color: white;
    border-radius: 100%;
    line-height: 15px;
    font-size: 26px;
    cursor: pointer;
    font-weight: bold;
    user-select: none;
    transition: all ease 0.3s;
    opacity: 0;
    z-index: 5;
    -webkit-tap-highlight-color: transparent;

    ${css_breakpoints.min_desktop} {
      top: 40px;
      right: 45px;
    }

    @media (hover: hover) {
      &:hover {
        padding: 28px;
        top: 27px;
        right: 32px;
        font-size: 20px;
      }

      &:active {
        padding: 22px;
        top: 33px;
        right: 38px;
      }
    }
  }

  .modal_next_prev_btn {
    opacity: 0;

    ${css_breakpoints.min_desktop} {
      position: fixed;
      top: 50%;
      left: 50px;
      padding: 12px 16px 16px;
      background-color: #846a4f;
      color: white;
      border-radius: 100%;
      line-height: 15px;
      font-size: 26px;
      cursor: pointer;
      font-weight: bold;
      transition: all ease 0.3s;
      user-select: none;
      z-index: 5;

      &--next {
        left: auto;
        right: 50px;
      }

      @media (hover: hover) {
        &:not([disabled]):hover {
          left: 35px;
          top: calc(50% - 10px);
          padding: 17px 30px 26px 12px;
          font-size: 40px;
        }

        &--next {
          &:not([disabled]):hover {
            left: auto;
            right: 35px;
            padding: 17px 12px 26px 30px;
          }
        }
      }

      &:disabled {
        background-color: #c0c0c0;
        cursor: not-allowed;
      }

      &:not([disabled]):active {
        padding: 14px 27px 23px 9px;
        top: calc(50% - 6px);
      }

      &--next {
        &:not([disabled]):active {
          padding: 14px 9px 23px 27px;
          top: calc(50% - 6px);
        }
      }
    }
  }

  .modalPagination {
    position: absolute;
    bottom: 50px;
    display: flex;
    justify-content: center;
    width: 100%;

    &__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 80vw;
      padding: 5px 5px 15px;
      background: #ffffff7d;
      border-radius: 3px;
      height: 76px;
    }

    &__pageBtn {
      position: relative;
      /* top: 50px; */
      flex: 0 0 auto;
      width: 62px;
      height: 62px;
      margin: 6px 0 14px;
      padding: 0px 6px;
      margin-top: 0;
      background-color: transparent;
      transition: margin-top ease 0.3s, width ease 0.3s, height ease 0.3s,
        left ease 0.3s;
      -webkit-tap-highlight-color: transparent;

      > div {
        border: 1px solid #846a4f;
        background-color: white;
      }

      &:hover {
        width: 60px;
        height: 60px;
        margin-top: -5px;

        &:before {
          bottom: -16px;
        }
      }

      &:before {
        content: "";
        position: absolute;
        bottom: -9px;
        left: 6px;
        width: 50px;
        height: 0px;
        background-color: #846a4f;
        z-index: 1;
        transition: all ease 0.3s;
      }

      &.modalPagination__selected {
        /* border: 2px solid black; */

        &:before {
          height: 5px;
        }
      }
    }
  }
`
