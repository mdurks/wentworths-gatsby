export const number_with_commas = x => {
  return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}

export const return_array_center_out = a => {
  var o = [],
    s = a.length,
    l = Math.floor(s / 2),
    c
  for (c = 0; c < s; c++)
    o.push(a[(l += s % 2 ? (c % 2 ? +c : -c) : c % 2 ? -c : +c)])
  return o
}

export const return_unique_values_in_araray = (value, index, self) => {
  return self.indexOf(value) === index
}
