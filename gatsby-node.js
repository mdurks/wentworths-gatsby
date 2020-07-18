/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      gcms: { products },
    },
  } = await graphql(`
    {
      gcms {
        products(stage: PUBLISHED) {
          id
          slug
        }
      }
    }
  `)

  products.forEach(({ id, slug }) =>
    createPage({
      path: `/products/${slug}`,
      component: require.resolve(`./src/templates/product_detail.js`),
      context: {
        id,
      },
    })
  )
}
