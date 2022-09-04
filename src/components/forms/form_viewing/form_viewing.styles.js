import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

export const Section__contact_container = styled.section`
  //   position: fixed;
  //   top: 80px;
  //   right: 0;
  //   width: 100%;
  //   height: calc(100% - 160px);
  //   font-size: 18px;
  //   overflow: hidden;
  z-index: 20;

  .viewingContainer {
    &__catchClickToCloseModal {
      position: absolute;
      top: 0;
      right: calc(100vw - 100vw);
      height: 100vh;
      width: 0;
      z-index: -1;
    }

    &__openBtn {
      position: fixed;
      top: calc(50% - 230px);
      right: -108px;
      padding: 10px 20px 6px;
      border: 0;
      background: white;
      color: grey;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      border-radius: 20px 20px 0 0;
      border: 2px solid grey;
      border-top: 5px solid grey;
      transform: rotate(-90deg) translateY(-50%);
      z-index: 5;
    }

    &__content {
      position: fixed;
      top: 0;
      right: -100vw;
      width: 100%;
      height: 100%;
      transition: all ease-in-out 0.4s;
      /* box-shadow: 0px 0px 8px 4px rgb(0 0 0 / 33%); */
      z-index: 5;
      overflow-y: scroll;

      ${css_breakpoints.min_tablet} {
        right: -660px;
        display: flex;
        flex-direction: column;
        width: 650px;
        height: 100vh;
        backdrop-filter: blur(5px);
        overflow-y: hidden;
        overflow: visible;
      }

      &.open {
        right: 0px;

        .viewingContainer__catchClickToCloseModal {
          width: 100vw;
        }
      }
    }

    &__closeBtn {
      position: absolute;
      top: 7px;
      right: 10px;
      padding: 5px 15px;
      background: none;
      border-radius: 8px;
      color: #fff;
      font-size: 30px;

      ${css_breakpoints.min_tablet} {
        top: 27px;
      }
    }

    &__title {
      padding: 15px 60px 15px 15px;
      font-size: 26px;
      /* font-family: "Playfair Display", serif; */
      font-family: "Raleway", sans-serif;
      text-transform: uppercase;
      color: #ffffff;
      background-color: #b3924c;

      ${css_breakpoints.min_tablet} {
        padding: 35px 100px 25px 50px;
        font-size: 30px;
        background-color: hsl(41deg 76% 34% / 85%);
      }
    }

    &__glitterBar {
      height: 10px;
      background: hsl(43deg 67% 68%);

      ${css_breakpoints.min_tablet} {
        height: 20px;
      }
    }

    &__form {
      padding: 20px 15px;
      background: white;

      ${css_breakpoints.min_tablet} {
        height: 100%;
        overflow-y: auto;
        padding: 40px 50px;
        background: hsl(0deg 0% 100% / 85%);
      }

      p {
        margin-bottom: 20px;

        ${css_breakpoints.min_tablet} {
          margin-bottom: 30px;
        }
      }

      textarea {
        padding-bottom: 25px;
      }
    }

    &__2col {
      display: flex;
      flex-direction: column;
      margin: 0 -10px 0;

      ${css_breakpoints.min_tablet} {
        flex-direction: row;
        margin: 0 -10px 20px;
      }
    }

    &__col {
      flex: 1 0 100%;
      padding: 0 10px;
      margin-bottom: 20px;

      ${css_breakpoints.min_tablet} {
        flex: 1 0 50%;
        margin: 0;
      }
    }

    &__row {
      margin-bottom: 20px;
    }

    &__label {
      display: block;
      padding: 0 0 7px;
      color: #a77711;
      font-size: 16px;

      ${css_breakpoints.min_tablet} {
        font-size: 18px;
      }
    }

    &__input {
      display: block;
      width: 100%;
      padding: 10px 15px;
      font-size: 14px;
      font-family: "Raleway", sans-serif;
      background: white;
      border-width: 1px;
      border-style: solid;
      border-color: #c5c5c5;
      /* border-top-color: #9e7620; */
      /* border-left-color: #9e7620; */
      /* border-right-color: #adadad; */
      /* border-bottom-color: #adadad; */
      border-radius: 4px;
      box-shadow: inset 2px 2px 5px 0px rgb(0 0 0 / 20%);

      ${css_breakpoints.min_tablet} {
        padding: 10px 20px;
        font-size: 15px;
      }

      &:focus {
        outline: none;
        border-width: 2px;
        border-color: hsl(43deg 35% 65%);
      }
    }

    &__submitGrp {
      display: flex;
      margin: 40px 0 0;

      p {
        margin: 0;
      }
    }

    &__tel {
      flex: 1 0 auto;
    }

    &__submitBtn {
      padding: 10px 25px;
      background-color: hsl(43deg 60% 46%);
      font-size: 20px;
      /* font-weight: bold; */
      text-transform: uppercase;
      letter-spacing: 1px;
      color: white;
      border: none;
      border-radius: 6px;

      ${css_breakpoints.min_tablet} {
        font-size: 22px;
      }
    }
  }
`
