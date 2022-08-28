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
  //
  // Static method to create "Product Listing" pages:
  // ------------------------------------------------------------------------------------
  //
  // Manualy define categories and their product types myself
  // Could maybe do this dynamicaly and query graph cms
  //
  const categories = [
    {
      engagement: "rings",
    },
    {
      weddings: "rings",
    },
    {
      jewellery: "rings,earrings,necklaces,bracelets",
    },
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

  //
  //
  //
  // Static method to create "Product Listing by Attribute" pages:
  // ------------------------------------------------------------------------------------

  const catalogue = {
    engagement: {
      rings: {
        filter_stoneCut:
          "Princess,Emerald,Round,Ashoka,Cushion,Oval,Radiant,Heart,Assher,Pear,Natural",
        filter_stoneColour: "White,Clear,Yellow,Blue,Pink,Amber,Default",
        filter_gemstone:
          "Morganite,Diamond,Sapphire,Ruby,Emerald,Pearl,Coloured_Diamond,Aquamarine",
        filter_metal: "Platinum,Silver,Gold,White_Gold,Rose_Gold",
      },
    },
    weddings: {
      rings: {
        filter_metal: "Platinum,Silver,Gold,White_Gold,Rose_Gold",
        filter_gender: "Mens,Womens",
        filter_itemStyle: "Anniversary,Eternity",
      },
    },
    jewellery: {
      rings: {
        filter_gemstone: "Diamond,Pearl",
        filter_gender: "Mens",
        filterNotDiamond_gemstone: null,
      },
      earrings: {
        filter_gemstone: "Diamond,Pearl",
        filterNotDiamond_gemstone: null,
        filter_itemStyle: "Stud",
      },
      necklaces: {
        filter_gemstone: "Diamond,Pearl",
        filterNotDiamond_gemstone: null,
        filter_itemStyle: "Pendant,Chain",
      },
      bracelets: {
        filter_gemstone: "Diamond,Pearl",
        filter_gender: "Mens",
        filterNotDiamond_gemstone: null,
      },
    },
  }

  const filterCategories = Object.keys(catalogue) // engagement, jewellery
  const values = Object.values(catalogue) // {engagement values}, {jewellery values}

  for (let i = 0; i < filterCategories.length; i++) {
    const currentCategory = filterCategories[i]
    //console.log(`\n\n--- ${currentCategory.toUpperCase()} -----------------\n`)
    const products = Object.keys(values[i]) // [ 'rings', 'necklaces' ]
    const productValues = Object.values(values[i])
    //console.log(productValues)

    for (let i = 0; i < products.length; i++) {
      const currentProduct = products[i]
      //console.log(`		--- ${currentProduct.toUpperCase()} ---------`)
      const productKeys = Object.keys(productValues[i])
      //console.log('productKeys:', productKeys)

      for (let i = 0; i < productKeys.length; i++) {
        const currentProductKey = productKeys[i]
        //console.log(`\n				--- ${currentProductKey.toUpperCase()} ---\n`)

        const filterValues =
          catalogue[currentCategory][currentProduct][currentProductKey]
        //console.log(`						${filterValues}`)

        // check filter values in case it's a null value like 'filterNotDiamond_gemstone'
        let filterArray
        if (filterValues) {
          filterArray = filterValues.split(",")
        } else {
          filterArray = 0
        }
        //console.log(`${filterArray}`)

        // too lazy just now to update the names passed in context to the templates
        let category = currentCategory
        let product_type = currentProduct

        // createPage for filter values:
        for (let i = 0; i < filterArray.length; i++) {
          const currentFilter = filterArray[i]
          //console.log(`						${currentCategory} ${currentProduct} ${currentFilter}`)
          const path = replaceAll(
            `/${currentCategory}/${currentFilter}-${currentCategory}-${currentProduct}`.toLowerCase(),
            "_",
            "-"
          )
          console.log("path", path)
          // '/engagement/Silver-engagement-rings'

          let product_attributeValue = currentFilter

          createPage({
            path: path,
            component: require.resolve(
              `./src/templates/product_listing/by_attribute/${currentProductKey}.js`
            ),
            // use context to pass variables to the created page to use via 'pageContext':
            context: {
              category, // engagement
              product_type, // rings
              // product_attribute, // filter_metal
              product_attributeValue, // Silver
            },
          }) // end createPage
        } // end for filterArray

        // if no filter values e.g. 'filterNotDiamond_gemstone' then createPage differently:
        if (!filterArray) {
          let customerFilterName = currentProductKey.slice(
            currentProductKey.indexOf("_") + 1
          )
          let path = replaceAll(
            `/${currentCategory}/${customerFilterName}-${currentCategory}-${currentProduct}`.toLowerCase(),
            "_",
            "-"
          )
          console.log("path", path)
          createPage({
            path: path,
            component: require.resolve(
              `./src/templates/product_listing/by_attribute/${currentProductKey}.js`
            ),
            // use context to pass variables to the created page to use via 'pageContext':
            context: {
              category, // engagement
              product_type, // rings
            },
          }) // end createPage
        } // end if !filterArray
        //
        //
      } // end for productKeys
    } // end for products
  } // end for filterCategories

  //
  //
  //
  //
  // Dynamic Query for pages and blogs
  // ------------------------------------------------------------------------------------
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

  //
  //
  //
  // Dynamic Query to generate Product DETAIL
  // ------------------------------------------------------------------------------------
  //
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
  //
  //
  //
  // Dynamic Query to generate Blogs
  // ------------------------------------------------------------------------------------
  //
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
