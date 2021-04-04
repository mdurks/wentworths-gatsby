import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import white_bordered_two_ringss_pink_ribbon from "../images/general-product/white-bordered-two-ringss-pink-ribbon.jpg"
import white_bordered_pink_diamon_ring from "../images/general-product/white-bordered-pink-diamon-ring.jpg"
import sparkle_background_blue from "../images/sparkle-background-blue.png"

const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const section_vertical_padding = "0vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

const pageQuery = graphql`
  {
    gcms {
      welcomes {
        heroHeading
        firstIntroMessage {
          html
        }
        heroImage {
          id
          url
          handle
          width
          height
        }
      }
    }
  }
`

const Div__ITB = styled.div`
  padding: (${section_vertical_padding} / 2) ${section_horizontal_padding};
  min-height: calc(100vh + ${section_vertical_padding});
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0;

  > section {
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      flex: 1 0 50%;
    }
  }

  h1 {
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  p + p {
    margin-top: 25px;
  }

  img {
    width: auto;
  }
`

const Div__ITB__imgGroup = styled.div`
  position: relative;
`

const Div__ITB__colorBox01 = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% + 167px);
  width: 11px;
  height: 185px;
  background-color: #9cccd7;
`

const Div__ITB__colorBox02 = styled.div`
  position: absolute;
  bottom: 2px;
  left: calc(50% - 177px);
  width: 11px;
  height: 185px;
  background-color: #9cccd7;
`

const Img__ITB__imgSparkle = styled.img`
  position: relative;
  left: calc(50% - (310px / 2));
  top: calc(50% - (607px / 2));
`

const Img__ITB__layout1__img1 = styled.img`
  position: absolute;
  left: calc(40% - (326px / 2));
  top: calc(50% - (444px / 2));
`

const Img__ITB__layout1__img2 = styled.img`
  position: absolute;
  left: calc(59% - (356px / 2));
  top: calc(95% - (211px / 2));
  z-index: 1;
`

const Div__ITB__textGroup = styled.div`
  padding: 0 5%;
  > div {
  }
`

const ImageTextBox = () => {
  const {
    gcms: { welcomes },
  } = useStaticQuery(pageQuery)

  return (
    <>
      <Div__ITB>
        <Styled_SiteContainer>
          <Div__ITB__imgGroup>
            <Div__ITB__colorBox01></Div__ITB__colorBox01>
            <Div__ITB__colorBox02></Div__ITB__colorBox02>
            <Img__ITB__imgSparkle src={sparkle_background_blue} alt="" />
            <Img__ITB__layout1__img1
              src={white_bordered_two_ringss_pink_ribbon}
              alt=""
            />
            <Img__ITB__layout1__img2
              src={white_bordered_pink_diamon_ring}
              alt=""
            />
          </Div__ITB__imgGroup>
          <Div__ITB__textGroup>
            <h1>{welcomes[0].heroHeading}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: welcomes[0].firstIntroMessage.html,
              }}
            ></div>
          </Div__ITB__textGroup>
        </Styled_SiteContainer>
      </Div__ITB>
    </>
  )
}

export default ImageTextBox
