/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const replaceAll = (string, findValue, replaceValue) => {
  return string.split(findValue).join(replaceValue)
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  //
  //
  // Static method to create "Product Listing" pages:
  //
  // Manualy define categories and their product types myself
  // Could maybe do this dynamicaly and query graph cms
  //
  const categories = [
    { engagement: "rings" },
    { weddings: "rings" },
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
        component: require.resolve(
          `./src/templates/product_listing/product_listing.js`
        ),
        // use context to pass variables to the created page to use via 'pageContext':
        context: {
          category,
          product_type,
        },
      })
    }
  }

  // Static method to create "Product Listing by Attribute" pages:

  const productListingByAttributeCategories = [
    { engagement: "rings" },
    { weddings: "rings" },
  ]

  const productAttributes = [
    { filter_metal: "Platinum,Silver,Gold,White_Gold,Rose_Gold" },
    { filter_stoneColour: "White,Clear,Yellow,Blue,Pink,Amber,Default" },
    {
      filter_gemstone:
        "Morganite,Diamond,Sapphire,Ruby,Emerald,Pearl,Coloured_Diamond,Aquamarine",
    },
    {
      filter_stoneCut:
        "Princess,Emerald,Round,Ashoka,Cushion,Oval,Radiant,Heart,Assher,Pear,Natural",
    },
  ]

  // loop over each category: 'engagement'
  for (let i = 0; i < productListingByAttributeCategories.length; i++) {
    //
    let category = String(Object.keys(productListingByAttributeCategories[i])) // 'engagement'
    let category_product_types = String(
      Object.values(productListingByAttributeCategories[i])
    ).split(",") // 'rings'
    //
    // loop over product types: 'rings'
    for (let i = 0; i < category_product_types.length; i++) {
      const product_type = category_product_types[i] // 'rings'

      // loop over attributes: 'filter_metal'
      for (let i = 0; i < productAttributes.length; i++) {
        const product_attribute = String(Object.keys(productAttributes[i])) // 'filter_metal'
        const product_attributeValues = String(
          Object.values(productAttributes[i])
        ).split(",") // 'Platinum', etc

        // Loop over attribute values: 'Platinum', etc
        for (let i = 0; i < product_attributeValues.length; i++) {
          const product_attributeValue = product_attributeValues[i] // 'Platinum'
          const path = `/${category}/${product_attributeValue}-${category}-${product_type}`
          // '/engagement/Silver-engagement-rings'

          createPage({
            path: replaceAll(path.toLowerCase(), "_", "-"),
            component: require.resolve(
              `./src/templates/product_listing/by_attribute/${product_attribute}.js`
            ),
            // use context to pass variables to the created page to use via 'pageContext':
            context: {
              category, // engagement
              product_type, // rings
              // product_attribute, // filter_metal
              product_attributeValue, // Silver
            },
          }) // end createPage
        } // end attribute value for loop
      } // end attribute for loop
    } // end product for loop
  } // end category for loop

  //
  // Dynamic Query to generate pages and blogs
  //
  const {
    data: {
      gcms: { products, blogs },
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
        blogs(stage: PUBLISHED) {
          id
          articleTitle
          slug
          createdAt
          articleImage {
            id
            url
            width
            height
          }
          content {
            html
          }
        }
      }
    }
  `)

  // Product DETAIL:
  //
  // Get all products that are published

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
        component: require.resolve(
          `./src/templates/product_detail/product_detail.js`
        ),
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

  //
  // Blogs:
  //
  // Dynamicaly create all the blog pages from query above
  // Pass the ID to find that blog article when doing the gcms query on that page for its content

  blogs.forEach(blog => {
    const id = blog.id

    createPage({
      path: `/blog/${blog.slug}`,
      component: require.resolve(`./src/templates/blog/blog_article.js`),
      context: {
        id,
      },
    })
  })
}
