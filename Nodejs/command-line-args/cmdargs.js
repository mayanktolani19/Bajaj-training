const lodash = require("lodash")
const yargs = require("yargs")

const add = (a, b)=>{
    return a+b
}

const argv = yargs.argv
console.log(add(argv._[0], argv._[1]))

// addNote()
// title:"Complete training", deadline:21/01/2022

// viewNote()
// view a note by title