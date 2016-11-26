export default function parseErrors (errors) {
  var arr = []
  for (let error in errors) {
    var div = error
    var errorArr = errors[error]
    for (let err in errorArr) {
      arr.push({
        div: div,
        message: errorArr[err]
      })
    }
  }
  return arr
}