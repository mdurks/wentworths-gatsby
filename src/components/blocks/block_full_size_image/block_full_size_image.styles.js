import styled, { css } from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

const section_vertical_padding = "12vh" // add this value in the scrolltrigger start point
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

export const Div__block_full_size_image = styled.div`
  position: relative;
  display: block;
  min-height: calc(100vh + ${section_vertical_padding});
  overflow: hidden;
  /* padding: calc(${section_vertical_padding} / 2) ${section_horizontal_padding}; */
  border-bottom: 10px solid white;

  > a {
    display: block;
  }

  .graphcms-image-outer-wrapper {
    position: absolute !important;
    height: 100%;
    width: 100%;
  }

  .block_full_size_image {
    position: absolute;
    /*
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    */
    width: 105%;
    height: 105%;

    div {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 2500px) {
      max-width: 2500px;
      // width: $section_content_max_width;
    }
  }

  &.fixDescription .block_full_size_image__descriptionWrapper {
    position: fixed;
  }

  &.fixDescriptionFadeIn .block_full_size_image__descriptionWrapper {
    opacity: 1;
  }

  .block_full_size_image__descriptionWrapper {
    display: none;

    ${css_breakpoints.min_tablet} {
      display: block;
      position: absolute;
      bottom: 25px;
      right: 25px;
      overflow: hidden;
      opacity: 0;
      transition: opacity ease .4s;
      bottom: 50px;
      right: 50px;
    }

    .block_full_size_image__questionButon {
      /* position: absolute;
      top: 0;
      right: 0; */
      display: block;
      width: 44px;
      height: 44px;
      padding: 10px;
      font-size:  25px;
      font-weight: bold;
      color: #b3924c;
      background: white;
      border-radius: 100%;
      line-height: 0;
      text-align: center;
      transition: all ease .s;
      z-index: 1;
      pointerevents: none;

      ${css_breakpoints.min_tablet} {
        display: none;
      }
    }

    a {
      display: none;
      width: 44px;
      height: 44px;
      background: hsl(0deg 0% 100% / 80%);
      border-radius: 100px;
      overflow: hidden;
      transition: all ease .4s;

      ${css_breakpoints.min_tablet} {
        display: block;
      }

      :before {
        content: '?';
        position: absolute;
        top: 0;
        right: 0;
        width: 44px;
        height: 44px;
        padding: 10px;
        font-size:  25px;
        font-weight: bold;
        color: #b3924c;
        background: white;
        border-radius: 100%;
        line-height: 23px;
        text-align: center;
        opacity: 1;
        transition: all ease .3s;
      }

      > span {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        width: 500px;
        opacity: 0;
        transition: all ease .4s;
        text-decoration: underline;
      }

      @media (hover: hover) {
        &:hover {
          :before {
            opacity: 0;
          }

          > span {
            opacity: 1;
          }
        }
      }
    }
  }
`
