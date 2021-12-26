import React from "react"
import styled from "styled-components"
import css_breakpoints from "../../common/css_breakpoints"

import { useAppContext } from "../../store/AppContext"

const Styled_Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  height: 100%;
  width: 100%;
  padding: 30px;
  background-color: white;
  transition: all ease 0.4s;
  z-index: 20;
  overflow-y: auto;

  ${css_breakpoints.min_desktop} {
    box-shadow: -4px 0px 8px 0px rgba(0, 0, 0, 0.3);
    right: -460px;
    width: 450px;
  }

  .showViewing & {
    right: 0;
  }
`

const Styled_Input = styled.input`
  display: block;
  margin: 10px 0 20px;
  width: 100%;
  padding: 10px;
  font-family: sans-serif;
`
const Styled_Textarea = styled.textarea`
  display: block;
  margin: 10px 0 20px;
  width: 100%;
  padding: 10px;
  height: 200px;
  font-family: sans-serif;
`

const Styled_close = styled.button`
  padding: 5px 10px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

const Styled_submitBtn = styled.button`
  padding: 10px 20px;
  cursor: pointer;
`

const Form_Viewing = props => {
  const appContextProduct = useAppContext()

  return (
    <>
      <Styled_Sidebar>
        <Styled_close
          onClick={() => {
            document.documentElement.classList.toggle("showViewing")
            document.documentElement.classList.remove("pageNoScrollY")
          }}
        >
          Close
        </Styled_close>
        <h2>
          Book a Viewing:
          <br />
          {appContextProduct.productName}
        </h2>
        <small>{appContextProduct.productUrl}</small>
        <form name="Viewing" method="post">
          <input type="hidden" name="form-name" value="Viewing" />
          <input type="hidden" name="Product" value={props.product} />
          <input
            type="hidden"
            name="product page"
            value={appContextProduct.productUrl}
          />
          <label>
            Name:
            <Styled_Input type="text" name="name" />
          </label>
          <label>
            Email:
            <Styled_Input type="email" name="email" />
          </label>
          <label>
            Phone:
            <Styled_Input type="tel" name="phone" />
          </label>
          <label>
            Date:
            <Styled_Input type="date" name="date" />
          </label>
          <label>
            How can we help with your viewing?:
            <Styled_Textarea name="message"></Styled_Textarea>
          </label>
          <p>Terms & Conditions notice goes here.</p>
          <Styled_submitBtn type="submit">
            Send booking request
          </Styled_submitBtn>
        </form>
      </Styled_Sidebar>
    </>
  )
}

export default Form_Viewing
