import styled from "styled-components"

export const Section__contact_container = styled.section`
  //   position: fixed;
  //   top: 80px;
  //   right: 0;
  //   width: 100%;
  //   height: calc(100% - 160px);
  //   font-size: 18px;
  //   overflow: hidden;
  //   z-index: 10;

  .viewingContainer {
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
      right: -660px;
      width: 650px;
      height: 100%;
      transition: all ease-in-out 0.4s;
      backdrop-filter: blur(5px);
      /* box-shadow: 0px 0px 8px 4px rgb(0 0 0 / 33%); */
      z-index: 5;

      &.open {
        right: 0px;
      }
    }

    &__closeBtn {
      position: absolute;
      top: 38px;
      right: 10px;
      padding: 5px 15px;
      background: none;
      border-radius: 8px;
      color: #fff;
      font-size: 30px;
    }

    &__title {
      padding: 35px 100px 25px 50px;
      font-size: 45px;
      font-family: "Playfair Display", serif;
      text-transform: none;
      color: #ffffff;
      background-color: #996f159e;
    }

    &__glitterBar {
      height: 20px;
      background: hsl(43deg 67% 68%);
    }

    &__form {
      height: 100%;
      padding: 40px 50px;
      background: hsl(0deg 0% 100% / 70%);

      p {
        margin-bottom: 20px;
      }
    }

    &__2col {
      display: flex;
      margin: 0 -10px 30px;
    }

    &__col {
      flex: 1 0 50%;
      padding: 0 10px;
    }

    &__label {
      display: block;
      padding: 0 0 20px;
      color: hsl(43deg 100% 35%);
      font-size: 20px;
      /* font-weight: bold; */
    }

    &__input {
      display: block;
      width: 100%;
      padding: 15px 20px;
      font-size: 18px;
      color: grey;
      font-family: "Raleway", sans-serif;
      background: white;
      border-width: 1px;
      border-style: solid;
      border-top-color: white;
      border-left-color: white;
      border-right-color: #adadad;
      border-bottom-color: #adadad;
      border-radius: 5px;
      box-shadow: inset 3px 3px 10px 1px rgb(0 0 0 / 20%);

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
      color: grey;
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
    }
  }
`
