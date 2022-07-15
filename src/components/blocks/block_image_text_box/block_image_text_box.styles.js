//
//
//  This is an old component that I may be able to use in the future
//  used to be the original homepage intro text and image design
//
//
import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"
import { navHeight } from "../../../common/globalVars"

const section_vertical_padding = "0vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

export const Div__ITB = styled.div`
         /* min-height: 100vh; */
         position: relative;
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 15px 0 75px;
         overflow: hidden;

         ${css_breakpoints.min_desktop} {
           /* min-height: calc(100vh - ${navHeight.desktop}px - 30px);
           max-height: 900px; */
           padding: 80px 0;
         }

         > section {
           ${css_breakpoints.min_desktop} {
             display: flex;
             flex-direction: row-reverse;
             justify-content: center;
             align-items: flex-start;
           }

           > div {
             ${css_breakpoints.min_desktop} {
               flex: 1 0 50%;
             }
           }
         }

         h1 {
           margin: 20px 0 30px;
           text-transform: uppercase;

           ${css_breakpoints.min_desktop} {
             margin: 0 0 30px;
           }
         }

         p + p {
           margin-top: 25px;
         }

         img {
           width: 100%;

           ${css_breakpoints.min_desktop} {
             width: auto;
           }
         }
       `

export const Div__ITB__imgGroup = styled.div`
  ${css_breakpoints.min_desktop} {
    position: relative;
    margin: 0 0 110px;
  }
`

export const Div__ITB__colorBox01 = styled.div`
  ${css_breakpoints.min_tablet} {
    position: absolute;
    top: 0;
    left: calc(50% + 167px);
    width: 11px;
    height: 185px;
    background-color: #9cccd7;
  }
`

export const Div__ITB__colorBox02 = styled.div`
  ${css_breakpoints.min_tablet} {
    position: absolute;
    bottom: 2px;
    left: calc(50% - 177px);
    width: 11px;
    height: 185px;
    background-color: #9cccd7;
  }
`

export const Img__ITB__imgSparkle = styled.img`
  display: none;

  ${css_breakpoints.min_desktop} {
    display: block;
    position: relative;
    right: auto;
    bottom: auto;
    left: calc(50% - (310px / 2));
    top: calc(50% - (607px / 2));
    filter: grayscale(1);
  }
`

export const Img__ITB__layout1__img1 = styled.div`
  display: none;
  ${css_breakpoints.min_desktop} {
    display: block;
    position: absolute;
    left: calc(40% - (326px / 2));
    top: calc(50% - (444px / 2));
    height: 444px;
    overflow: hidden;
  }
`

export const Img__ITB__layout1__img2 = styled.div`
  margin: 20px 0 0 -5px;

  ${css_breakpoints.min_desktop} {
    margin: 0;
    position: absolute;
    left: calc(59% - (356px / 2));
    top: calc(95% - (211px / 2));
    overflow: hidden;
    height: 211px;
    z-index: 1;
  }
`

export const Div__ITB__textGroup = styled.div`
  ${css_breakpoints.min_desktop} {
    padding: 50px 5%;
  }
`
