import React from "react"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const Styled_footer = styled.footer`
  .footerContainer {
    ${bp_min_desktop} {
      display: flex;
      flex-direction: row;
      padding: 70px 0 100px;

      > div {
        flex: 1 1 20%;
        padding: 0 21.666px;

        &:first-of-type {
          flex: 1 1 35%;
          padding-left: 0;

          h3 {
            margin-left: 0;
            padding-left: 0;
            text-transform: uppercase;
          }
        }
        &:last-of-type {
          padding-right: 0;

          h3 {
            margin-right: 0;
            padding-right: 0;
          }
        }
      }

      h3 {
        margin: 0 -20px 40px -20px;
        padding: 0 0 20px 20px;
        font-size: 25px;
        border-bottom: 1px solid #e5e5e5;
      }

      ul a {
        display: block;
        padding: 8px 0;
      }
    }
  }
`

const Footer = () => (
  <Styled_footer>
    <Styled_SiteContainer>
      <div className="footerContainer">
        <div>
          <h3>Wentworth Jewels</h3>
          <p>Wentworth Jewels are based in Perth Australia</p>
          <p>
            <strong>TEL:</strong> 01234 567 8910
          </p>
          <p>
            <strong>MON-SAT</strong> - 10am - 5pm
          </p>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li>
              <a href="/">Valutions</a>
            </li>
            <li>
              <a href="/">Cleaning & Repairs</a>
            </li>
            <li>
              <a href="/">Gift Cards</a>
            </li>
            <li>
              <a href="/">Price Match & Guarantee</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Customer Care</h3>
          <ul>
            <li>
              <a href="/">Book an Appointment</a>
            </li>
            <li>
              <a href="/">Visit Our Shop</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Newsletter</h3>
          <p>Keep up to date with news, events and special offers.</p>
          <form action="">
            <input type="text" />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div>
        <small>© Wentworth Jewels {new Date().getFullYear()}</small>
      </div>
    </Styled_SiteContainer>
  </Styled_footer>
)

export default Footer
