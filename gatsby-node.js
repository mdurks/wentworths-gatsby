/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  //
  //
  // Product LISTING:
  // Define categories and their product types, could maybe do this dynamicaly by querying gcms first
  //
  const categories = [
    { engagement: "rings" },
    { weddings: "rings,earrings,necklaces" },
    { jewellery: "rings,earrings,necklaces,bracelets" },
  ]

  // loop over each category: 'engagement, weddings, jewellery'
  for (let i = 0; i < categories.length; i++) {
    //
    let category = String(Object.keys(categories[i])) // 'engagement'
    let category_product_types = String(Object.values(categories[i])).split(",") // 'rings'
    //
    // loop over product types: 'rings'
    for (let i = 0; i < category_product_types.length; i++) {
      let product_type = category_product_types[i] // 'rings'
      createPage({
        path: `/${category}/${product_type}`, // '/engagement/rings'
        component: require.resolve(`./src/templates/product_listing.js`),
        // use context to pass variables to the created page to use via 'pageContext':
        context: {
          category,
          product_type,
        },
      })
    }
  }
  //
  // Product DETAIL:
  // Get all products that are published
  //
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
  A single product would look like:
  {
    "id": "ckcgmzkm807170104uoi40tru",
    "slug": "1ct-princess-cut-platinum-diamond-ring",
    "categoryType": [
      "jewellery",
      "engagement"
    ],
    "productType": "rings"
  },

  So we need to create multiple pages for this product since it appars in multiple categories at these paths:
  /jewellery/rings/slug
  /engagement/rings/slug

  We do this by looping over 'categoryType', adding the 'productType' and 'slug' to make the URL
  Pass the ID to the 'product_detail' template for its 'page query' so it can query for that product
*/

  // loop over each product in products query from above
  //
  for (let i = 0; i < products.length; i++) {
    //
    let category = String(Object.values(products[i].categoryType)).split(",") // ["engagement", "jewellery"]
    let productType = products[i].productType // "rings"
    let slug = products[i].slug // "1ct-princess-cut-platinum-diamond-ring"
    let id = products[i].id // "ckcgmzkm807170104uoi40tru"
    //
    // loop over each category type: ["engagement", "jewellery"]
    for (let i = 0; i < category.length; i++) {
      let thisCategory = category[i]
      let pageURL = `/${thisCategory}/${productType}/${slug}`
      createPage({
        path: pageURL,
        component: require.resolve(`./src/templates/product_detail.js`),
        // use context to pass variables to the created page to use via 'pageContext':
        context: {
          id, // used in the pagequery to find this product
          pageURL, // used for snipcarts 'data-item-url' and the enquire & booking form to identify this page
          thisCategory, // used in breadcrumb and 'may also like' component
          productType, // used in breadcrumb and 'may also like' component
        },
      })
    }
  }
}
