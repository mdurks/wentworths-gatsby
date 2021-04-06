import React from "react"
import { useRef, useEffect } from "react"
import { gsap } from "gsap/all"

// import Layout from "../components/layout"
import { Styled_SiteContainer } from "../styles/commonStyles"

import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const GiftsPage = () => {
  let blueBox = useRef(null)

  useEffect(() => {
    gsap.from(blueBox.current, {
      opacity: 0.05,
      duration: 2,
      delay: 1,
      // scrollTrigger: blueBox,
      scrollTrigger: {
        trigger: blueBox.current,
        markers: true,
        start: "top 75%",
      },
    })

    // return function to kill timeline on dismount
    // return () => tl.kill()
  }, [])

  return (
    <>
      <Styled_SiteContainer>
        <div style="height: 100vh; margin-bottom:150px; padding-top: 200px">
          <h1>Gifts</h1>
          <p>Content for the Gifts page coming soon</p>
        </div>
        <div
          style="background:blue; color:white; padding: 50px"
          // id="blueBox"
          // ref={e => (blueBox = e)}
          ref={blueBox}
        >
          <p>blueBox that should fade in on scrollTrigger</p>
          <p>but only fades in when in the viewport on page load</p>
        </div>
      </Styled_SiteContainer>
    </>
  )
}

export default GiftsPage
