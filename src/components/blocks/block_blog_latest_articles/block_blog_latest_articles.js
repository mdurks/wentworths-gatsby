import React from "react"
import GraphImg from "graphcms-image"
import Link from "gatsby-plugin-transition-link"

import { globalSiteSettings } from "../../../common/globalVars.js"
import {
  Styled_BlogLatestArticles,
  Styled_BlogLatestArticlesWrapper,
} from "./block_blog_latest_articles.styles.js"
import { Styled_SiteContainer, Styled_btn } from "../../../styles/commonStyles"

import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

// this component is expecting blogs to be passed (from graphcms) as props to this component

const Block_blog_latest_articles = ({ blogs }) => {
  return (
    <Styled_BlogLatestArticles>
      <Styled_SiteContainer>
        <Styled_BlogLatestArticlesWrapper>
          <h2>News & Articles</h2>
          {blogs.map(blog => (
            <Link to={`/blog/${blog.slug}/`} className="blogLatestArticleItem">
              <div className="blogLatestArticleImg">
                <GraphImg
                  image={blog.articleImage}
                  transforms={["quality=value:80"]}
                  maxWidth={300}
                  baseURI={globalSiteSettings.graphcmsImageBaseURI}
                />
              </div>
              <h3>{blog.articleTitle}</h3>
            </Link>
          ))}
          <Styled_btn
            btn_selected
            as={Link}
            to="/blog/"
            className="blogLatestArticleReadMore"
          >
            Read more of our <span>News & Articles</span>
          </Styled_btn>
          {/* <Link to="/blog/" >
            <span>Read more of our News & Articles</span>
          </Link> */}
        </Styled_BlogLatestArticlesWrapper>
      </Styled_SiteContainer>
    </Styled_BlogLatestArticles>
  )
}

export default Block_blog_latest_articles
