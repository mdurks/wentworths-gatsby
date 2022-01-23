import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import GraphImg from "graphcms-image"
import { gsap, ScrollTrigger } from "gsap/all"

import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"
import Block_newsletter_signup from "../../components/blocks/block_newsletter_signup/block_newsletter_signup"
import Block_blog_latest_articles from "../../components/blocks/block_blog_latest_articles/block_blog_latest_articles"

import {
  Div__detail_hero_block,
  Styled_Img,
  Styled_BlogContent,
} from "./blog_article.styles"
import { Styled_SiteContainer } from "../../styles/commonStyles"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const BlogArticlePage = ({
  data: {
    gcms: { blog },
  },
}) => {
  const returnDateMonth = value => {
    switch (value) {
      case "01":
        return "January"
      case "02":
        return "February"
      default:
        break
    }
  }

  useEffect(() => {
    gsap.to(".Styled_Img", {
      scrollTrigger: {
        trigger: ".Styled_Img",
        start: "top top",
        toggleActions: "play none none none",
        // markers: true,
        scrub: true,
      },
      y: `+=100`,
    })
  })

  return (
    <>
      <Div__detail_hero_block>
        <Styled_Img className="Styled_Img">
          <GraphImg
            image={blog.articleImage}
            transforms={["quality=value:80"]}
            maxWidth={1920}
          />
        </Styled_Img>
      </Div__detail_hero_block>
      <Styled_SiteContainer>
        <Styled_BlogContent>
          <h1>{blog.articleTitle}</h1>
          <div className="publishPlusSocialShareWrapper">
            <p className="articlePublishDate">
              {`Published: ${blog.createdAt.slice(8, 10)} ${returnDateMonth(
                blog.createdAt.slice(5, 7)
              )} ${blog.createdAt.slice(0, 4)}`}
            </p>
          </div>
          <div
            className="blogContent"
            dangerouslySetInnerHTML={{
              __html: blog.content.html,
            }}
          ></div>
          <div className="socialShareGroup">
            <p>Share on social media: </p>
            <div>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://wentworths-gatsby.netlify.app/blog/${blog.slug}`}
                style={{ backgroundColor: "#5a32ae" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="fb"
                  role="img"
                >
                  <path
                    fill="white"
                    d="m375.14,288l14.22,-92.66l-88.91,0l0,-60.13c0,-25.35 12.42,-50.06 52.24,-50.06l40.42,0l0,-78.89s-36.68,-6.26 -71.75,-6.26c-73.22,0 -121.08,44.38 -121.08,124.72l0,70.62l-81.39,0l0,92.66l81.39,0l0,224l100.17,0l0,-224l74.69,0z"
                  ></path>
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://wentworths-gatsby.netlify.app/blog/${blog.slug}`}
                style={{ backgroundColor: "#0098F4" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="tw"
                  role="img"
                >
                  <path
                    fill="white"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
              <a
                href={`https://pinterest.com/pin/create/button/?url=https://wentworths-gatsby.netlify.app/blog/${blog.slug}`}
                style={{ backgroundColor: "#DC0000" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="pn"
                  role="img"
                >
                  <path
                    fill="white"
                    d="m511,255.99999c0,140.86694 -114.13307,255.00001 -255.00001,255.00001c-26.32258,0 -51.61694,-4.01008 -75.47178,-11.41331c10.38508,-16.96573 25.91129,-44.72782 31.66936,-66.83468c3.08468,-11.92742 15.83468,-60.66532 15.83468,-60.66532c8.32863,15.83468 32.59476,29.30444 58.40323,29.30444c76.91129,0 132.33267,-70.74194 132.33267,-158.65525c0,-84.2117 -68.78831,-147.24194 -157.21573,-147.24194c-110.02017,0 -168.52622,73.82662 -168.52622,154.3367c0,37.42742 19.94758,84.00605 51.71976,98.8125c4.83266,2.2621 7.40323,1.23387 8.53427,-3.39315c0.82258,-3.49597 5.14113,-20.87298 7.09476,-28.89315c0.61694,-2.57056 0.30847,-4.83266 -1.74798,-7.3004c-10.38508,-12.85282 -18.81653,-36.29637 -18.81653,-58.19758c0,-56.24395 42.56855,-110.6371 115.16129,-110.6371c62.61895,0 106.5242,42.67137 106.5242,103.74799c0,68.99395 -34.85686,116.80646 -80.20162,116.80646c-24.98589,0 -43.80242,-20.66734 -37.73589,-46.06452c7.19758,-30.33266 21.07863,-63.03024 21.07863,-84.93145c0,-19.53629 -10.4879,-35.88508 -32.28629,-35.88508c-25.60282,0 -46.16734,26.4254 -46.16734,61.8992c0,22.62097 7.60887,37.83871 7.60887,37.83871s-25.19153,106.72984 -29.81855,126.67742c-5.14113,22.00403 -3.08468,53.05645 -0.9254,73.20968c-94.80242,-37.11895 -162.04839,-129.45363 -162.04839,-237.52017c0,-140.86694 114.13307,-255.00001 255.00001,-255.00001s255.00001,114.13307 255.00001,255.00001z"
                  ></path>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://wentworths-gatsby.netlify.app/blog/${blog.slug}`}
                style={{ backgroundColor: "#0067B1" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="ln"
                  role="img"
                >
                  <path
                    fill="white"
                    d="m132.28,479.99501l-92.88,0l0,-299.1l92.88,0l0,299.1zm-46.49,-339.9c-29.7,0 -53.79,-24.6 -53.79,-54.3a53.79,53.79 0 0 1 107.58,0c0,29.7 -24.1,54.3 -53.79,54.3zm394.11,339.9l-92.68,0l0,-145.6c0,-34.7 -0.7,-79.2 -48.29,-79.2c-48.29,0 -55.69,37.7 -55.69,76.7l0,148.1l-92.78,0l0,-299.1l89.08,0l0,40.8l1.3,0c12.4,-23.5 42.69,-48.3 87.88,-48.3c94,0 111.28,61.9 111.28,142.3l0,164.3l-0.1,0z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </Styled_BlogContent>
      </Styled_SiteContainer>

      <Block_blog_latest_articles />

      <Block_newsletter_signup />

      <Block_bespoke_design_advert />
    </>
  )
}

export const pageQuery = graphql`
  query BlogPageQuery($id: ID!) {
    gcms {
      blog(where: { id: $id }) {
        id
        articleTitle
        slug
        createdAt
        articleImage {
          id
          url
          width
          height
          handle
        }
        content {
          html
        }
      }
    }
  }
`

export default BlogArticlePage
