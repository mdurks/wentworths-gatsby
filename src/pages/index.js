import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"

// import Layout from "../components/layout"
// import Snipcart from "../components/snipcart"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import two_diamond_rings_bluebackground_large from "../images/general-product/two-diamond-rings-bluebackground-large.jpg"
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

const Styled_HeroImg = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  > div > div {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 600px) {
    height: 400px;
  }
  @media (min-width: 950px) {
    height: 600px;
  }
`

const Section__hero = styled.section`
  padding: (${section_vertical_padding} / 2) ${section_horizontal_padding};
  min-height: calc(100vh + ${section_vertical_padding});
  position: relative;
  display: flex;
  overflow: hidden;

  .Section__hero__backgroundImg {
    object-fit: cover;
    // z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;

    @media (min-width: 2500px) {
      // width of image
      max-width: 2500px;
      // width: $section_content_max_width;
    }
  }

  .Section__hero__heading {
    position: absolute;
    top: 26%;
    left: 27%;
    margin: 0;
    font-size: clamp(24px, 5vw, 52px);
    font-family: "Playfair Display", serif;
    text-transform: uppercase;
    color: black;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    z-index: 1;
  }

  .Section__hero__heading--handwritten {
    position: absolute;
    top: 220%;
    left: 26%;
    font-size: clamp(80px, 13vw, 220px);
    font-family: "Alex Brush", serif;
    text-transform: none;
    color: white;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    z-index: -1;
  }
`

const Div__ITB = styled.div`
  padding: (${section_vertical_padding} / 2) ${section_horizontal_padding};
  min-height: calc(100vh + ${section_vertical_padding});
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

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
  height: 100%;
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

const Img__ITB__img1__layout1 = styled.img`
  position: absolute;
  left: calc(40% - (326px / 2));
  top: calc(50% - (444px / 2));
`

const Img__ITB__img1__layout2 = styled.img`
  position: absolute;
  left: calc(59% - (356px / 2));
  top: calc(95% - (211px / 2));
  z-index: 1;
`

const IndexPage = () => {
  const {
    gcms: { welcomes },
  } = useStaticQuery(pageQuery)

  return (
    <>
      <Section__hero>
        <img
          class="Section__hero__backgroundImg"
          src={two_diamond_rings_bluebackground_large}
          alt=""
        />
        <Styled_SiteContainer>
          <p class="Section__hero__heading">
            We are the memory{" "}
            <span class="Section__hero__heading--handwritten">makers</span>
          </p>
        </Styled_SiteContainer>
      </Section__hero>

      <Div__ITB>
        <Styled_SiteContainer>
          <Div__ITB__imgGroup>
            <Div__ITB__colorBox01></Div__ITB__colorBox01>
            <Div__ITB__colorBox02></Div__ITB__colorBox02>
            <Img__ITB__imgSparkle src={sparkle_background_blue} alt="" />
            <Img__ITB__img1__layout1
              src={white_bordered_two_ringss_pink_ribbon}
              alt=""
            />
            <Img__ITB__img1__layout2
              src={white_bordered_pink_diamon_ring}
              alt=""
            />
          </Div__ITB__imgGroup>
          <div>
            <h1>{welcomes[0].heroHeading}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: welcomes[0].firstIntroMessage.html,
              }}
            ></div>
          </div>
        </Styled_SiteContainer>
      </Div__ITB>

      {/* <Styled_HeroImg>
        <div>
          <GraphImg
            image={welcomes[0].heroImage}
            transforms={["quality=value:80"]}
            maxWidth={1200}
          />
        </div>
      </Styled_HeroImg> */}
    </>
  )
}

export default IndexPage
