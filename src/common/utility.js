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

export const returnDateMonth = value => {
  switch (value) {
    case "01":
      return "January"
    case "02":
      return "February"
    case "03":
      return "March"
    case "04":
      return "April"
    case "05":
      return "May"
    case "06":
      return "June"
    case "07":
      return "July"
    case "08":
      return "August"
    case "09":
      return "September"
    case "10":
      return "October"
    case "11":
      return "November"
    case "12":
      return "December"
    default:
      break
  }
}

export const calculatedViewportHeight = () => {
  return document.querySelector(".heightCheck").offsetHeight
}

export const replaceAll = (string, findValue, replaceValue) => {
  return string.split(findValue).join(replaceValue)
}

export const capitalizeWords = string => {
  const words = string.split(" ")
  let capitalisedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  const joinedBackUp = capitalisedWords.join(" ")
  return joinedBackUp
}
