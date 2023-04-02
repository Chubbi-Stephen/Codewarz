// 100th Kata
// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

function mirror(text) {
  const textArray = text
    .split(" ")
    .reverse()
    .map((each) => {
      return each.split("").reverse().join("")
      // console.log(each.split('').reverse().join(''));
    })
  textArray.reverse().map((element) => {
    ;`* ${element} *`
  })

  let addSpace = textArray.reduce((a, b) => (a.length > b.length ? a : b))

  let astrish = "*".repeat(addSpace.length)

//   return textArray.map((word) => {
//     console.log(`${astrish}\n${word}\n${astrish}`) 
//   })

console.log(`${astrish}\n${text}\n${astrish}`)
}

mirror("Hello world")
