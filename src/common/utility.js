export const number_with_commas = x => {
  return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}
