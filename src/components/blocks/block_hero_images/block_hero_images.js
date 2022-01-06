import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Styled_SiteContainer } from "../../../styles/commonStyles"
import { Styled_HeroImg, Section__hero } from "./block_hero_images.styles"

import GraphImg from "graphcms-image"
import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const pageQuery = graphql`
  {
    gcms {
      blockHeroImages {
        images {
          id
          url
          handle
          width
          height
        }
        imagesMobile {
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

const Block_hero_images = () => {
  const {
    gcms: { blockHeroImages },
  } = useStaticQuery(pageQuery)

  let gsap_section_hero = null
  let gsap_section_hero_img = null

  const tl = gsap.timeline()
  const tl_handwriting = gsap.timeline()

  useEffect(() => {
    let viewportWidth = window.innerWidth

    tl.from(".Section__hero__backgroundImg", {
      duration: 3,
      scale: 1.1,
      ease: "power2.out",
    })
    gsap.to(gsap_section_hero_img, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        toggleActions: "play none none none",
        // markers: true,
        scrub: true,
      },
      y: `+=${window.innerHeight / 4}`,
    })

    tl.to(
      ".Section__hero__heading",
      {
        duration: 1.25,
        opacity: 1,
        x: "10%",

        ease: "power2.out",
      },
      "-=2"
    )
    gsap.set(".Section__hero__headingText", {
      clipPath: "inset(0% 100% -50% 0%)",
    })
    tl.to(
      ".Section__hero__headingText",
      {
        duration: 1.25,
        clipPath: "inset(0% 0% -50% 0%)",
      },
      "-=2"
    )
    tl.set(".Section__hero__headingText", {
      clipPath: "none",
    })

    gsap.to(".Section__hero__heading", {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        toggleActions: "play none none none",
        // markers: true,
        scrub: true,
      },
      y: `+=${window.innerHeight / 3}`,
    })

    tl_handwriting.to(".Section__hero__heading--handwritten", {
      delay: 1,
      duration: 1.25,
      opacity: 1,
      x: viewportWidth < 768 ? "-7%" : "-7%",
      ease: "power2.out",
    })

    const paths = document
      .getElementById("signature")
      .querySelectorAll("path[clip-path]")

    for (var i = 0; i < paths.length; i++) {
      paths[i].style.strokeDasharray = paths[i].style.strokeDashoffset = paths[
        i
      ].getTotalLength()
    }

    // scale early letters for zoom in affect
    gsap.set(paths[0], { scale: 3.5 })
    gsap.set(paths[1], { scale: 3.25 })
    gsap.set(paths[2], { scale: 3 })
    gsap.set(paths[3], { scale: 2.5 })
    gsap.set(paths[4], { scale: 2 })
    gsap.set(paths[5], { scale: 1.75 })

    // M
    tl_handwriting.to(
      paths[0],
      { duration: 1.1, strokeDashoffset: 0, scale: 1 },
      "-=0.3"
    )
    // A
    tl_handwriting.to(
      paths[1],
      { duration: 1, strokeDashoffset: 0, scale: 1 },
      "-=0.5"
    )
    // K
    tl_handwriting.to(
      paths[2],
      { duration: 0.8, strokeDashoffset: 0, scale: 1 },
      "-=0.8"
    )
    // E
    tl_handwriting.to(
      paths[3],
      { duration: 0.9, strokeDashoffset: 0, scale: 1 },
      "-=0.6"
    )
    // R
    tl_handwriting.to(
      paths[4],
      { duration: 0.8, strokeDashoffset: 0, scale: 1 },
      "-=0.6"
    )
    // S
    tl_handwriting.to(
      paths[5],
      { duration: 0.8, strokeDashoffset: 0, scale: 1 },
      "-=0.6"
    )
  }, [])

  return (
    <>
      <Section__hero
        ref={e => (gsap_section_hero = e)}
        onClick={() => {
          tl.progress(0).restart()
          tl_handwriting.progress(0).restart()
        }}
      >
        <Styled_HeroImg ref={e => (gsap_section_hero_img = e)}>
          <GraphImg
            className="Section__hero__backgroundImg"
            image={
              typeof window !== "undefined" && window.innerWidth < 600
                ? blockHeroImages[0].imagesMobile[0]
                : blockHeroImages[0].images[0]
            }
            transforms={["quality=value:80"]}
            maxWidth={2000}
          />
        </Styled_HeroImg>
        <Styled_SiteContainer>
          <p class="Section__hero__heading">
            <span class="Section__hero__headingText">We are the memory </span>
            <span class="Section__hero__heading--handwritten">
              <svg id="signature" viewBox="0 0 812 616">
                <defs>
                  <clipPath id="outline_m">
                    <path
                      d="M43 141.6C43 141.2 43.2 140.8 43.2 140.4C43.2 137.4 39.2 136 34.8 136C29.8 136 24.2 138 23.6 141.8C20.8 147.6 9.6 180.4 2.2 210C0.600001 216.8 0 221.8 0 225.6C0 235.6 4.6 236.4 11.6 236.6C32.6 226.8 68 144 82 144H82.8C83.4 144.6 83.6 145.6 83.6 147.2C83.6 161.6 58.8 213.2 58.8 213.4C58.4 214.8 58.2 216 58.2 217.2C58.2 223.2 63.4 225 68.8 225C70 225 71.4 225 72.6 224.8C81.2 223.8 96.8 196 110.8 188.6C111.2 188.4 111.4 188.2 111.8 188.2C117.8 188.2 116.8 218 136.6 218C137.8 218 139 217.8 140.4 217.6C151.8 215.8 181.4 199 201.8 177.2C202 176.8 202.2 176.4 202.2 175.8C202.2 173.6 199 171 196 171C194.4 171 193 171.6 192 173.2C177 193.2 150.2 212.8 140.2 214.4C139 214.6 138.2 214.6 137.2 214.6C120 214.6 129 184.6 113.8 178.8H112.8C100.4 178.8 80 205.8 77.6 205.8L77.4 205.6C77.4 204 82.8 194.4 86.2 187.4C92.2 169 97.2 158.2 97.2 150.4C97.2 146.4 95.8 143.2 92.4 140.4C89.8 139.2 87.4 138.6 85 138.6C65.6 138.6 49.4 179.6 17.8 219.8C17.4 220.2 17 220.2 16.8 220.2C16.2 220.2 16 219.6 16 218.6C16 207.4 43 141.6 43 141.6Z"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="outline_a">
                    <path
                      d="M226.4 175.6L227 177.4C227.8 177.8 228.6 178 229.4 178C231.6 178 234 176.8 235.8 174.2V173.4C235.8 172.2 235.8 169.8 235 167.4C239.6 163 242.6 160.2 242.6 160.2V160.4C242.6 162 240 169 238.8 176.6C237.4 182.2 236.8 186.8 236.8 190.8C236.8 205.8 245.8 211.2 258.6 211.2C289.8 211.2 343.4 179.8 345.8 176.4C346.8 175.2 347.2 174 347.2 172.8C347.2 170.6 346 169 344.2 169C343 169 341.6 169.8 340.4 172.2C333.4 181 286.2 207.8 260.8 207.8C251 207.8 244.4 204 244.4 193.6C244.4 189.6 245.4 184.6 247.6 178.6C251 170 252.6 163.2 252.6 158.4C252.6 154 251.2 151.4 248.6 151C248.2 150.8 247.6 150.6 247 150.6C243.2 150.6 236.2 155.6 230.2 160.6C227.2 157.6 222.6 155.6 216.4 155.6C213.2 155.6 209.6 156 205.6 157.2C190.2 161.8 177.8 176.8 172 189.6C170 193.6 168.8 197.6 168.4 200.8C168.2 201.8 168.2 202.8 168.2 203.8C168.2 206.6 168.8 209 170.4 211C171.8 212.6 173.4 213.8 175.6 214.2C176 214.2 176.4 214.4 176.6 214.4C185.2 214.4 203.2 197.6 219 182.6C222.4 179.4 223.6 178.4 226.4 175.6ZM218.8 170.4C206.2 187.2 194.2 196.8 190.4 196.8C189.6 196.8 189.2 196.4 189.2 195.8C189.2 191.2 206 169.4 215.6 169.4C216.8 169.4 217.8 169.6 218.8 170.4Z"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="outline_k">
                    <path
                      d="M354.2 153L349.2 156.8C372.4 104.6 398.2 50.6 420.6 16.2C426 11.6 428.2 19.8 431.6 3.80001C431.6 2.39999 431.2 1.39999 430.6 0.799988C430 0.200007 429.4 0 428.8 0C426.2 0 422.2 3.80001 417.8 11C393.6 47.8 362.8 107.4 337.2 166.8C335.4 168.2 333.8 169.6 332.4 171C322.6 179.6 316.2 187.4 316.2 192.8C316.2 194 316.6 195.2 317.6 196.2C318.8 197.4 320.8 198.4 323.8 199.2C309 236 297.2 271.4 291.4 299.2L288.2 308.4C287.6 309.6 287.4 310.8 287.4 311.6C287.4 314.6 289.8 315.6 292.6 315.6C295.8 315.6 299.6 314.2 300.4 312.4C310.2 286.4 323.6 226.2 333.2 200.4C346.6 201 361.8 201.6 377.2 201.6C409.4 201.6 443.4 199.2 469 190.2C471.2 189 472.2 186.4 472.2 184.2C472.2 182 471.2 180.2 469.4 180.2C468.6 180.2 467.8 180.4 466.8 181C432 193.2 404.6 198 373.2 198C361.2 198 348.4 197.2 334.4 196C337.6 187 340 180.6 343.4 171.6C354 163.2 371.8 149.8 383 142.6C391.8 136.6 403.2 131.6 413 131.6C414.2 131.6 415.4 131.6 416.6 131.8C418.2 129.2 419 126.8 419 124.6C419 121.8 417.6 119.8 414.2 119.6C403.8 119.8 395.4 124.6 378.6 135.8C372 140.2 364.8 145.2 358 150.4L355.8 151.8C355.4 152.2 354.8 152.6 354.2 153ZM325.8 194C324.8 192.6 324.4 191 324 190.6L323.8 190.4C323.8 189.8 326.2 187.6 329.8 184.2C328.4 187.4 327 190.8 325.8 194Z"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="outline_e">
                    <path
                      d="M467 180.2C476.2 168.2 480 160.8 484 160.2C484.4 160.2 484.6 160.4 484.6 160.8C484.6 162.6 479.8 169.2 467 180.2ZM496.6 158.6C496.2 154.8 494.2 152.2 491.4 151C490.2 150.4 488.8 150.2 487.4 150.2C484.8 150.2 482.2 151 479.4 152.6C475.8 154.6 471.8 157.8 468.2 162C461.6 169.8 456 180.4 456 191.6C456 197.4 457.4 203.4 461.2 209C465.6 215.8 472.8 218.4 481.4 218.4C514.2 218.4 568 179.6 568.4 179.4C569.4 178.6 570 177.6 570 176.6C570 174.2 567.8 171.8 565.2 171.8C564.4 171.8 563.6 172 562.8 172.6C562.6 172.8 507.4 214.4 479.8 214.4C474.2 214.4 469.8 212.6 467.2 208.6C464.8 205 464 199.4 464 194.6C464 193.2 464.2 191.8 464.2 190.6C469.8 188.4 496.8 177.6 496.8 160.8C496.8 160 496.6 159.4 496.6 158.6Z"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="outline_r">
                    <path
                      d="M571.1 152.4V152C571.1 148.4 567.3 146.2 563.5 146.2C560.3 146.2 557.1 147.6 555.7 151.4L538.7 222.6C538.7 222.8 538.5 223 538.5 223.4C538.5 225.4 542.5 226.8 546.1 226.8C549.1 226.8 551.9 225.8 551.9 223.4V223C552.1 222.8 578.3 160.2 592.5 160.2C593.9 160.2 595.3 161 596.5 162.6C606.5 176.6 632.3 180.2 654.1 180.2C671.9 180.2 687.1 177.8 688.1 176.8C689.7 176.4 691.1 174.4 691.1 173C691.1 172.4 690.7 171.8 689.5 171.8C689.1 171.8 688.3 172 687.5 172.2C687.1 172.2 685.3 174 682.9 174.2C678.7 174.4 670.3 175 660.5 175C638.3 175 608.7 172 601.3 155.6C598.1 151.4 594.3 149.4 590.1 149.4C580.5 149.4 569.1 160 561.3 176.6L571.1 152.4Z"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="outline_s">
                    <path
                      d="M705.5 165.2C705.3 165.8 705.3 166.4 705.3 167C705.3 171.4 709.7 174 713.9 174C716.5 174 719.1 173.2 720.7 171C720.7 170.8 727.3 155.4 727.3 143.2C727.3 142 727.3 141 727.1 140C726.5 135.2 724.1 132.2 718.7 132.2C715.9 132.2 712.3 133 707.7 135C703.3 137.2 691.7 143.2 684.3 153.2C679.7 159.4 677.9 165.2 677.9 170.8C677.9 189.6 698.5 205.8 706.1 218.6C672.3 244 655.5 267.2 651.3 280.6C650.5 283.4 649.9 286.4 649.9 289.4C649.9 297.4 653.1 305.2 661.1 307C663.7 307.6 666.3 308 668.9 308C695.7 308 718.3 274 718.3 244C718.3 236.2 716.7 228.4 713.1 221.8C731.7 208.2 750.9 199.6 771.5 189.6C782.9 184 795.1 178.6 808.9 177C810.9 175.8 811.9 173.6 811.9 171.4C811.9 167.8 809.5 164 804.9 163.6C791.1 168.6 775.9 176 764.3 181.8C743.9 191.8 728.1 201.6 709.7 214.8C700.1 199.2 688.3 187.4 688.3 174.4C688.3 169.4 689.9 164.2 694.1 158.6C700.3 150.4 707.3 144.2 711.3 142.2C713.1 141.2 714.5 140.8 715.5 140.8C716.7 140.8 717.1 141.6 717.1 142.8C717.1 148.4 705.5 165 705.5 165.2ZM708.9 224.8C710.9 229 711.7 233.8 711.7 239C711.7 264.2 690.1 297 668.5 297C666.5 297 664.7 296.8 662.9 296.2C659.1 295.2 657.9 292.2 657.9 289C657.9 287 658.3 284.8 658.9 283C662.7 271.2 678.7 248 708.9 224.8Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>

                <path
                  clip-path="url(#outline_m)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="35"
                  d="M29.4995 126.5C21.4995 148.333 4.79953 195.1 1.99954 207.5C-1.50046 223 6.49953 228 17.9995 211.5C29.4995 195 46.5 167.5 53.5 156.5C60.5 145.5 73 129 81.5 138C90 147 67.5 190.5 61.5 204C55.5 217.5 69.5 210 75 204C80.5 198 95 182.5 98.5 180.5C102 178.5 106.35 175.069 110 181C114 187.5 115.239 211.009 130 210.5C150.229 209.802 186 176.5 194 164.5"
                />
                <path
                  clip-path="url(#outline_a)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="30"
                  d="M225.5 175C226.5 164.5 213.5 146.5 195 161C174.378 177.163 167.5 195.5 174.5 199C181.5 202.5 198.5 185.5 205 178.5C211.5 171.5 225 158 229 155C233 152 243.5 141.5 239 161C234.5 180.5 234.5 178 234 182.5C233.5 187 232.5 199 245.5 202.5C271.5 208.5 319 181 344 164.5"
                />
                <path
                  clip-path="url(#outline_k)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="30"
                  d="M427.5 1.99899C421.5 2.49899 418.604 -7.72161 399.5 26.999C342 131.5 302 227.499 284.5 317.999C312 383.499 484.5 149.999 413.5 121.499C401.188 109.487 318.009 167.59 313.5 184.499C309.5 199.499 444.5 196.5 468.5 175"
                />
                <path
                  clip-path="url(#outline_e)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="30"
                  d="M460.5 178.999C467.5 175.499 480 163 482.5 158C486.308 150.384 478.5 145 469.5 154C460.5 163 451.215 177.499 453.5 193.499C456 210.999 478 230.499 564.5 164.999"
                />
                <path
                  clip-path="url(#outline_r)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="30"
                  d="M559.5 136.5C555.9 148.1 542.333 201.333 536 226.5C545.5 196 563.5 160.5 577 151.5C580 149.667 585.571 145.163 594 156C604.5 169.5 649.5 177 686.5 167.5"
                />
                <path
                  clip-path="url(#outline_s)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="30"
                  d="M702.002 171C707.502 159.5 713.841 145.56 715.002 138C716 131.5 711.502 127.5 700.002 133.5C688.502 139.5 677.361 149.494 676.5 165C675.5 183 697.002 200 702.502 214C712.5 228.5 709 267 688.001 284C656.555 309.458 639.41 294.5 651.001 269C671.002 225 748.001 180.5 807.001 161.5"
                />
              </svg>
            </span>
          </p>
        </Styled_SiteContainer>
      </Section__hero>
    </>
  )
}

export default Block_hero_images
