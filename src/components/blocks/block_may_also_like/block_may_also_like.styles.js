import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

export const Div__block_may_also_like = styled.div`
  border-bottom: 10px solid white;
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
      color: black;

      ${css_breakpoints.min_tablet} {
        color: #c1a260;
      }

      ${css_breakpoints.min_desktop} {
        margin: 125px 0 -20px;
      }
    }

    &__carousel {
      height: 520px;

      ${css_breakpoints.min_desktop} {
        height: 540px;
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
      font-size: 18px;
      line-height: 25px;
      text-transform: capitalize;
      color: black;
    }

    &__productPrice {
      display: block;
      font-family: "Tahoma", "serif";
      color: #a77711;
    }
  }
`
// ${css_breakpoints.min_tablet} {
//       display: block;
//       position: absolute;
//       top: 265px;
//       left: 50%;
//       transform: translateX(-50%);
//       width: 60%;
//       font-size: 18px;
//       line-height: 25px;
//       text-transform: capitalize;
//       font-family: "Raleway", sans-serif;
//       color: black;
//       /* transition: top ease-in-out 0.3s, opacity ease-in-out 0.65s; */
//       transition: top ease-in-out 0.3s;
//       opacity: 1 !important;

//       span {
//         display: block;
//         font-family: "Tahoma", "serif";
//         color: #a77711;
//       }
//     }
