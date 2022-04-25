/*
Introduction
You find a strange mirror that always shows a hand that is moving. The hand appears to be alive, and after a lot of questions of "yes" and "no" answer, you know that the hand is trying to teach you a program that is written in HPL (Hand Programming Language).

This language works with a memory of an indefinite size of bytes, with all values initialized to 0. This language haves 7 instructions:

👉 : moves the memory pointer to the next cell
👈 : moves the memory pointer to the previous cell
👆 : increment the memory cell at the current position
👇 : decreases the memory cell at the current position.
🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛
🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜
👊 : Display the current character represented by the ASCII code defined by the current position.
**/

const MIN_VALUE = 0
const MAX_VALUE = 255

function printMessage (string) {
  const memory = [0]
  const pointer = 0
  let output = ''

  const test = Array.from(string)

  for (let i = 0; i < test.length; i++) {
    console.log(test[i].codePointAt())
  }

  return output
}

module.exports = printMessage
