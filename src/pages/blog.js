import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"
import Link from "gatsby-plugin-transition-link"

import { globalSiteSettings } from "../common/globalVars"
import { returnDateMonth } from "../common/utility"

// import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import {
  BlogPageWrapper,
  Styled_BlogLatestArticlesWrapper,
} from "../styles/blog.styles"
import { Styled_SiteContainer } from "../styles/commonStyles"

const pageQuery = graphql`
  {
    gcms {
      blogs(orderBy: createdAt_DESC, stage: PUBLISHED) {
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
      }
    }
  }
`

const Blog = () => {
  const {
    gcms: { blogs },
  } = useStaticQuery(pageQuery)

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <SEO
        title="News & Articles"
        description="The latest news and articles from Wentworths."
      />

      <BlogPageWrapper>
        <Styled_SiteContainer noPaddingX>
          <h1>News & Articles</h1>
          <Styled_BlogLatestArticlesWrapper>
            {blogs.map(blog => (
              <Link
                to={`/blog/${blog.slug}/`}
                className="blogLatestArticleItem"
              >
                <div className="blogLatestArticleImg">
                  <GraphImg
                    image={blog.articleImage}
                    transforms={["quality=value:80"]}
                    maxWidth={300}
                    baseURI={globalSiteSettings.graphcmsImageBaseURI}
                  />
                </div>
                <h3>{blog.articleTitle}</h3>
                <p className="articlePublishDate">
                  {`${blog.createdAt.slice(8, 10)} ${returnDateMonth(
                    blog.createdAt.slice(5, 7)
                  )} ${blog.createdAt.slice(0, 4)}`}
                </p>
              </Link>
            ))}
          </Styled_BlogLatestArticlesWrapper>
        </Styled_SiteContainer>
      </BlogPageWrapper>
    </>
  )
}
export default Blog
