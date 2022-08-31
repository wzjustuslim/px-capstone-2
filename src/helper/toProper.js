
const toProper = (word) => {
  return (
    (word.charAt(0).toUpperCase()+word.slice(1)).replaceAll("-", " ")
  )
}

export default toProper