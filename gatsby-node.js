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
        path: `/${category}/${product_type}`, // path: /engagement/rings
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
          categoryType
          productType
        }
      }
    }
  `)

  /*

  For a product that looks like:

      {
        "id": "ckcgmzkm807170104uoi40tru",
        "slug": "1ct-princess-cut-platinum-diamond-ring",
        "categoryType": [
          "jewellery",
          "engagement"
        ],
        "productType": "rings"
      },

  Create pages for these addresses:

      /jewellery/rings/slug
      /engagement/rings/slug

  Iterate over 'categoryType', adding the 'productType' and 'slug' to make the URL
  Pass the ID to the 'product_detail' template for its 'page query'

*/

  for (let i = 0; i < products.length; i++) {
    let category = String(Object.values(products[i].categoryType)).split(",")
    let productType = products[i].productType
    let slug = products[i].slug
    let id = products[i].id

    for (let i = 0; i < category.length; i++) {
      let pageURL = `/${category[i]}/${productType}/${slug}`
      createPage({
        path: pageURL,
        component: require.resolve(`./src/templates/product_detail.js`),
        context: {
          id,
          pageURL,
        },
      })
    }
  }

  // products.forEach(({ id, slug }) =>
  //   createPage({
  //     path: `/products/${slug}`,
  //     component: require.resolve(`./src/templates/product_detail.js`),
  //     context: {
  //       id,
  //     },
  //   })
  // )
}
