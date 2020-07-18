/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // Product LISTING
  const categories = [
    { engagement: "rings" },
    { weddings: "rings,earrings,necklaces" },
    { jewellery: "rings,earrings,necklaces,bracelets" },
  ]

  for (let i = 0; i < categories.length; i++) {
    let category = String(Object.keys(categories[i]))
    let category_product_types = String(Object.values(categories[i])).split(",")

    for (let i = 0; i < category_product_types.length; i++) {
      let product_type = category_product_types[i]
      createPage({
        path: `/${category}/${product_type}`,
        component: require.resolve(`./src/templates/product_listing.js`),
        context: {
          category,
          product_type,
        },
      })
    }
  }

  // Product DETAIL

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
