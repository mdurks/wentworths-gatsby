import React from "react"

const Product_filter_checkbox = props => (
  <label for={`filter_chkbx_` + props.filterCategory + `_` + props.filterName}>
    <input
      type="checkbox"
      id={`filter_chkbx_` + props.filterCategory + `_` + props.filterName}
      name={`filter_chkbx_` + props.filterCategory + `_` + props.filterName}
    />
    {props.filterName.replace(/_/g, " ")} &nbsp;
    <span style={{ fontFamily: "Arial, sans-serif" }}>
      ({props.filterAmount})
    </span>
  </label>
)

export default Product_filter_checkbox
