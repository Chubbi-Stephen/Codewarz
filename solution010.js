// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// 1: ${each}`

var number = function (array) {
  //your awesome code here
  const resultArr = []
  for (let i = 0, j = 1; i < array.length; i += 1) {
    if (array.length === 0) {
      return `Empty array should return empty array`
    } else {
      resultArr.push(`${j}: ${array[i]}`)
      j += 1
    }
  }
  return resultArr
}

number(["a", "b", "c"])
