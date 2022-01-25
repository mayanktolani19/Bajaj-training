/* console.log("test")
const a = 12
let b = 23.5
// a = a+10 // Gives error because constant variable cannot be modified
// a = String(a) - Gives error again
console.log(b)
console.log(a)
console.log(typeof a)
console.log(typeof (b))
let flag = true
console.log(flag)
console.log(typeof flag)

let s = `String ${b}`
console.log(s.charAt(0))
let s1 = "23"
console.log(s)
console.log(typeof s1)
*/

/*
let arr = [20,30,"output", true]
console.log(arr)
for(let i=0; i<arr.length; i++)
    console.log(arr[i])
*/

// Object
let obj = {
    prname:"Samsung Galaxy A52s",
    prprice:30500,
    license:"license"
}

// Array of objects
let obj2 = [
    {
        prname:"Samsung Galaxy A52s",
        prprice:30500,
        license:"license"
    },
    {
        prname:"Samsung Galaxy S20 FE",
        prprice:40000,
        license:"license"
    },
    {
        prname:"Samsung Galaxy M52",
        prprice:25000,
        license:"license"
    },
    {
        prname:"Samsung Galaxy S21 FE",
        prprice:55000,
        license:"license"
    }
]

// console.log(obj.prname)
// console.log(obj2[0].prprice)

// Don't go for loops because it makes your application slow. Go for map, filter and such inbuilt functions.

obj2.map((item)=>console.log(item.prprice))

obj2.map((i)=>{
    if(i.prprice>25000){
        console.log(i)
    }
})


// find, filter, transform, 