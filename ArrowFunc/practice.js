// 1
// 3 different ways to write a function - 
// simple function
function sum (a, b)
{
    return a + b
}
// simple arrow function
let sum2 = (a, b) =>
{
    return a + b
}
// simple and shorter arrow function 
let sum3 = (a, b) => a + b

// 2
// simple function
function isNegative(num)
{
    return num <= 0 
}
// arrow function alternative
let isNegative2 = (num) => num<=0

// 3
// normal function
function ranNum ()
{
    return Math.random()
}
// arrow function
let ranNum2 = () => Math.random()

// 4
// normal function
document.addEventListener("click", function(){
    console.log("Clicked")
})
// arrow function alternative
document.addEventListener("click", ()=> {
    console.log("Clicked")
})
// shorter arrow function alternative
document.addEventListener("click", () => console.log("Clicked"))
