const name = prompt("Hi! Before the game starts, may I have your name: ")

console.log(`\n Welcome to my game, ${name}`)
console.log("\n This game will compare your number to the computer. \n")

let numUser = parseFloat(prompt("Enter a number: "))

let numComp = Math.floor(Math.random() * 101)

if (numUser < numComp) {
  console.log(`\n The number from the computer is ${numComp}`)
  console.log("Your number is smaller than the computer. ")
} else if (numUser == numComp) {
  console.log(`\n The number from the computer is ${numComp}`)
  console.log("Your number is equal to the computer. ")
} else if (numUser > numComp) {
  console.log(`\n The number from the computer is ${numComp}`)
  console.log("Your number is bigger than the computer. ")
}