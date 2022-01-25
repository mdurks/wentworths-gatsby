import React from "react"
import GraphImg from "graphcms-image"

import {
  Styled_BlogLatestArticles,
  Styled_BlogLatestArticlesWrapper,
} from "./block_blog_latest_articles.styles.js"
import { Styled_SiteContainer } from "../../../styles/commonStyles"

import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

// this component is expecting blogs to be passed (from graphcms) as props to this component

const Block_blog_latest_articles = ({ blogs }) => {
  return (
    <Styled_BlogLatestArticles>
      <Styled_SiteContainer>
        <Styled_BlogLatestArticlesWrapper>
          <h2>Latest Blog Articles</h2>
          {blogs.map(blog => (
            <a href={`/blog/${blog.slug}`} className="blogLatestArticleItem">
              <div className="blogLatestArticleImg">
                <GraphImg
                  image={blog.articleImage}
                  transforms={["quality=value:80"]}
                  maxWidth={300}
                />
              </div>
              <h3>{blog.articleTitle}</h3>
            </a>
          ))}
          <a href="/blog/" className="blogLatestArticleReadMore">
            <span>Read more of our blog articles</span>
          </a>
        </Styled_BlogLatestArticlesWrapper>
      </Styled_SiteContainer>
    </Styled_BlogLatestArticles>
  )
}

export default Block_blog_latest_articles
