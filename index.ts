import * as _ from 'lodash'

console.log("Typescript")

async function hello(){
  return 'Typescript'
}

async function bye(){
  return 'Good bye ...'
}
// const fileReader = new FileReader()
let lucky = 23
//error
// lucky = false
//any in dangerous ways lol!
let luckyAny: any = 23
luckyAny = false
// Redundant ...
let num: number = 40
// Better than before
let numDos = 40
// Redundant
// type Style = string
// let stilo: Style
// Better
type Style = 'bold' | 'italic' | true
let stilo2: Style 
stilo2 = 'italic'