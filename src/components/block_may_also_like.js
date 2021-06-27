import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"
import { useEffect } from "react"
import { gsap, ScrollTrigger } from "gsap/all"

import styled from "styled-components"
import Flickity from "react-flickity-component"
import { Styled_SiteContainer } from "../styles/commonStyles"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const Div__block_may_also_like = styled.div`
  ${bp_min_desktop} {
  }
  text-align: center;

  .flickity-page-dots {
    bottom: 80px;
  }

  .flickity-slider {
    > div {
      transition: all ease-in-out 0.4s;
      box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 1%);
      transform: scale(1);

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 33%);
        z-index: 5546;
      }
    }
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
      height: 740px;
    }

    &__itemLink {
      display: block;
      width: calc(1400px / 3);
      margin: 14px 9px;
      padding: 30px;
      background-color: #f4f3f1;

      &:hover {
        transform: scale(1.1);
      }
    }

    &__productName {
      margin: 30px 0;
      font-size: 24px;
      font-family: "Playfair Display", serif;
      text-transform: capitalize;
    }
  }
`

const pageQuery = graphql`
  {
    gcms {
      products(
        orderBy: updatedAt_DESC
        where: { categoryType_contains_some: engagement }
      ) {
        id
        slug
        name
        description
        categoryType
        productType
        price
        createdAt
        updatedAt
        image(first: 1) {
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

const Block_best_seller = () => {
  const {
    gcms: { products },
  } = useStaticQuery(pageQuery)

  const flickityOptions = {
    prevNextButtons: true,
    setGallerySize: false,
    pageDots: true,
    initialIndex: 1,
    // freeScroll: true,
    // wrapAround: true,
    // percentPosition: false,
    // freeScrollFriction: 0.065,
  }

  return (
    <>
      <Div__block_may_also_like className="youMayAlsoLike">
        <Styled_SiteContainer className="youMayAlsoLike__headingGroup">
          <h2 className="youMayAlsoLike__heading">You may also like...</h2>
        </Styled_SiteContainer>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        ></link>
        <Flickity
          className={"youMayAlsoLike__carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {products.map((el, index) => (
            <div>
              <a
                href={`/engagement/${el.productType}/${el.slug}/`}
                className="youMayAlsoLike__itemLink"
              >
                <GraphImg
                  image={el.image[0]}
                  transforms={["quality=value:80"]}
                  maxWidth={400}
                />
                <h3 className="youMayAlsoLike__productName">{el.name}</h3>
              </a>
            </div>
          ))}
        </Flickity>
      </Div__block_may_also_like>
    </>
  )
}

export default Block_best_seller
