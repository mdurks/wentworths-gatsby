import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

export const Div__block_may_also_like = styled.div`
  ${css_breakpoints.min_desktop} {
  }
  text-align: center;

  .flickity-page-dots {
    bottom: 70px;
  }

  .flickity-viewport {
    overflow-y: visible;
    overflow-x: hidden;
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
      margin: 100px 0 50px;
      font-size: 40px;
      text-transform: none;
    }

    &__carousel {
      height: 760px;
    }

    &__itemLink {
      display: block;
      width: calc(1400px / 3);
      margin: 14px 9px;
      padding: 30px;
      background-color: #f4f3f1;

      transition: all ease-in-out 0.4s;
      box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 1%);
      transform: scale(1);

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 23%);
      }
    }

    &__productTitle {
      height: 85px;
      margin: 15px 0 0;
      font-size: 24px;
      font-family: "Playfair Display", serif;
      text-transform: capitalize;
    }

    &__productPrice {
      color: #a0703e;
    }
  }
`
