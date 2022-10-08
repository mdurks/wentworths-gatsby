/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOMContentLoaded, adding scripts")
  setTimeout(addScript, 6000)
})

function addScript() {
  const mailChimpscript = document.createElement("script")
  mailChimpscript.type = "text/javascript"
  mailChimpscript.async = true
  mailChimpscript.onload = function () {
    console.log("Added Mailchimp")
  }
  mailChimpscript.src =
    "https://chimpstatic.com/mcjs-connected/js/users/d5846f86c03e5c2c5a3e185f8/02028c8b0af713f275541bbbb.js"
  document.getElementsByTagName("head")[0].appendChild(mailChimpscript)
}
