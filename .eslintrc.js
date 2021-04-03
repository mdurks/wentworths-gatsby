module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    "react/jsx-pascal-case": `off`, // Prevents errors with Theme-UI and Styled component
  },
}
