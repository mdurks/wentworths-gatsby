import React from "react"

const Product_filter_checkbox = props => {
  // create a css custom property to store the index
  // count e.g. '1' of the instance of this component.
  // this value is used to stagger the animations of these components
  const animation_timing = "--animation-order: " + props.index + ";"

  return (
    <label
      style={animation_timing}
      for={`filter_chkbx_` + props.filterCategory + `_` + props.filterName}
    >
      <input
        type="checkbox"
        id={`filter_chkbx_` + props.filterCategory + `_` + props.filterName}
        name={`filter_chkbx_` + props.filterCategory + `_` + props.filterName}
      />
      {props.filterName?.replace(/_/g, " ")} &nbsp;
      <span className="filter_item_amount">{props.filterAmount}</span>
    </label>
  )
}

export default Product_filter_checkbox
