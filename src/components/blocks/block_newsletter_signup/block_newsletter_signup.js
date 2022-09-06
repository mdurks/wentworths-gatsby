import React from "react"
import { useEffect } from "react"

import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"
import { gsap, ScrollTrigger } from "gsap/all"

import { globalSiteSettings } from "../../../common/globalVars.js"

import { Block_newsletter_signupWrapper } from "./block_newsletter_signup.styles.js"
import { Styled_SiteContainer } from "../../../styles/commonStyles"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const pageQuery = graphql`
  {
    gcms {
      welcomes {
        blockNewsletterSignupBackgroundImage {
          id
          url
          handle
          width
          height
        }
      }
    }
  }
`

const Block_newsletter_signup = () => {
  const {
    gcms: { welcomes },
  } = useStaticQuery(pageQuery)

  useEffect(() => {
    //

    gsap.to(".Block_newsletter_signup__img", {
      scrollTrigger: {
        // markers: true,
        id: "st_Block_newsletter_signup__img",
        trigger: ".Block_newsletter_signup",
        start: "top 90%",
        end: "bottom top",
        toggleActions: "play none none none",
        // toggleActions: "play none none reset",
        // end: `+=${viewportWidth}`,
        scrub: 1,
        // pin: true,
        // anticipatePin: 1,
      },
      y: "-250px",
    })

    // tl_gsap_Block_newsletter_signup.set(
    //   ".Block_newsletter_signup__text h2, .Block_newsletter_signup__text li",
    //   {
    //     opacity: 0,
    //     y: 20,
    //   }
    // )
    // tl_gsap_Block_newsletter_signup.fromTo(
    //   ".Block_newsletter_signup__img > div > div",
    //   {
    //     x: -100,
    //   },
    //   {
    //     x: 0,
    //     duration: 2,
    //   }
    // )

    // return function to kill timeline on dismount
    // return () =>
    //   ScrollTrigger.getById("st_Block_newsletter_signup__img").kill(true)
  }, [])

  return (
    <>
      <Block_newsletter_signupWrapper className="Block_newsletter_signup">
        <div className="Block_newsletter_signup__img">
          <GraphImg
            image={welcomes[0].blockNewsletterSignupBackgroundImage}
            transforms={["quality=value:80"]}
            maxWidth={1920}
            baseURI={globalSiteSettings.graphcmsImageBaseURI}
          />
        </div>
        <div className="Block_newsletter_signup__contentWrapper">
          <Styled_SiteContainer noPadding>
            <h2>
              <span>Join our</span> mailing list
            </h2>
            <div className="Block_newsletter_signup__formWrapper">
              <p>
                Sign up to the Wentworth Jewels mailing list to get special
                offers, giveaways, discounts and news directly to your inbox.
              </p>

              <div id="mc_embed_signup_block" className="mailChimpWrapper">
                <form
                  action="https://wentworthjewels.us20.list-manage.com/subscribe/post?u=d5846f86c03e5c2c5a3e185f8&amp;id=a98250718c"
                  method="post"
                  id="mc-embedded-subscribe-form-block"
                  name="mc-embedded-subscribe-form-block"
                  class="validate"
                  target="_blank"
                  novalidate
                >
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    class="email"
                    id="mce-EMAIL"
                    placeholder="Enter your email address here..."
                    required
                  />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_d5846f86c03e5c2c5a3e185f8_a98250718c"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div class="optionalParent">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button"
                    />
                    {/* <p class="brandingLogo">
                      <a
                        href="http://eepurl.com/hSezpL"
                        title="Mailchimp - email marketing made easy and fun"
                      >
                        <img
                          src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                          alt="mailchimp logo"
                          width="150"
                          height="28"
                        />
                      </a>
                    </p> */}
                  </div>
                </form>
              </div>

              <p>
                We won't share your email and you can unsubscribe at any time.
              </p>
            </div>
          </Styled_SiteContainer>
        </div>
      </Block_newsletter_signupWrapper>
    </>
  )
}

export default Block_newsletter_signup
