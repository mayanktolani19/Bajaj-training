/*function sample(a,b){
    return a+b
}

function sub(){
    let res = sample(5,6)
    console.log(res-10)
}

let res = sample(10,5)
console.log(res)

sub()
*/

//Arrow functions
const add = (a,b)=> {
    return a+b
}



// console.log(add(10,8))


const test1 = ()=>{
    const age = "14"
    if(age==14)  // Gives true but if(age===14) gives false
        console.log("executed")
    else
        console.log("not executed")
}


const test2 = ()=>{
    console.log("test2")
}
const test3 = ()=>{
    console.log("test3")
}

module.exports = {test1, test2}
// console.log(typeof module.exports)