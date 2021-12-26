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

  .showEnquire & {
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

const Form_Enquire = props => {
  const appContextProduct = useAppContext()

  return (
    <>
      <Styled_Sidebar>
        <Styled_close
          onClick={() => {
            document.documentElement.classList.toggle("showEnquire")
            document.documentElement.classList.remove("pageNoScrollY")
          }}
        >
          Close
        </Styled_close>
        <h2>
          Enquire:
          <br />
          {appContextProduct.productName}
          <br />
        </h2>
        <small>{appContextProduct.productUrl}</small>
        <form name="Enquire" method="post">
          <input type="hidden" name="form-name" value="Enquire" />
          <input type="hidden" name="Product" value={props.product} />
          <input
            type="hidden"
            name="product page"
            value={appContextProduct.productUrl}
          />

          <label id="Label_Name" htmlFor="form_enquire_Name">
            Name:
            <Styled_Input type="text" id="form_enquire_Name" name="name" />
          </label>
          <label id="Label_Email" htmlFor="form_enquire_Email">
            Email:
            <Styled_Input type="email" id="form_enquire_Email" name="email" />
          </label>
          <label id="Label_Phone" htmlFor="form_enquire_Phone">
            Phone:
            <Styled_Input type="tel" id="form_enquire_Phone" name="phone" />
          </label>
          <label id="Label_Message" htmlFor="form_enquire_Message">
            Message:
            <Styled_Textarea
              id="form_enquire_Message"
              name="message"
            ></Styled_Textarea>
          </label>
          <p>Terms & Conditions notice goes here.</p>
          <Styled_submitBtn type="submit">Send enquiry</Styled_submitBtn>
        </form>
      </Styled_Sidebar>
    </>
  )
}

export default Form_Enquire
