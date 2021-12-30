import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

export const Div__block_may_also_like = styled.div`
  border-top: 10px solid white;
  background: #f4f3f1;
  text-align: center;

  .flickity-page-dots {
    bottom: 70px;
  }

  .flickity-viewport {
    overflow-y: visible;
    overflow-x: hidden;
    width: 100%;
  }

  .flickity-slider {
    padding-top: 15px;

    > div:hover {
      z-index: 5;
    }
  }

  .flickity-prev-next-button {
    top: 41%;
  }

  .youMayAlsoLike {
    &__headingGroup {
    }

    &__heading {
      margin: 35px 0 -30px;
      font-family: "Amalfi Coast", sans-serif;
      font-size: clamp(40px, 7vw, 100px);
      line-height: clamp(80px, 8vw, 170px);
      text-transform: none;
      color: #a57c24;

      ${css_breakpoints.min_desktop} {
        margin: 165px 0 10px;
      }
    }

    &__carousel {
      height: 520px;

      ${css_breakpoints.min_desktop} {
        height: 640px;
      }
    }

    &__itemLink {
      display: block;
      width: calc(1400px / 4.5);
      margin: 14px 9px;
      padding: 30px;
      /* background-color: #f4f3f1; */

      transition: all ease-in-out 0.3s;
      /* box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 1%); */
      transform: scale(1);

      &:hover {
        transform: scale(1.05);
        /* box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 23%); */
      }
    }

    &__productTitle {
      height: 85px;
      margin: 15px 0 0;
      font-family: "Raleway", sans-serif;
      font-size: 16px;
      line-height: 25px;
      text-transform: uppercase;
      color: #8f8571;
    }

    &__productPrice {
      display: block;
      font-family: "Times New Roman", serif;
      font-family: "Tahoma", "serif";
      color: #a0703e;
    }
  }
`
