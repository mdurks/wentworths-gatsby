import React from "react"

import GraphImg from "graphcms-image"
import { gsap, ScrollTrigger } from "gsap/all"
import Flickity from "react-flickity-component"

import { number_with_commas } from "../../../common/utility"
import { globalSiteSettings } from "../../../common/globalVars"

import { Styled_SiteContainer } from "../../../styles/commonStyles"
import { Div__block_may_also_like } from "./block_may_also_like.styles"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const Block_may_also_like = props => {
  const flickityOptions = {
    prevNextButtons: true,
    setGallerySize: false,
    pageDots: true,
    // initialIndex: window.innerWidth < 1024 ? 0 : 1,
    groupCells: true,
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
          {props.products.map(el => (
            <div>
              <a
                href={`/${props.categoryType}/${props.productType}/${el.slug}/`}
                className="youMayAlsoLike__itemLink"
              >
                <GraphImg
                  image={el.image[0]}
                  transforms={["quality=value:80"]}
                  maxWidth={400}
                  baseURI={globalSiteSettings.graphcmsImageBaseURI}
                />
                <h3 className="youMayAlsoLike__productTitle">
                  <span>{el.name} </span>
                  <span className="youMayAlsoLike__productPrice">
                    £{number_with_commas(el.price)}
                  </span>
                </h3>
              </a>
            </div>
          ))}
        </Flickity>
      </Div__block_may_also_like>
    </>
  )
}

export default Block_may_also_like
