let Name = "Ali";
console.log(Name);

const last_name = "Shhdi";

let age = 33;

// Defining an object
let person = {
    Name : "Ali",
    age : 33,
    admin : true
}
console.log(person);
console.log(person.age);

// Array definition:
let users = ["Pedram", "Behrooz"]
console.log(users)

// function definition:
function greet(nme){
    console.log('Hello' + nme +"!!!")
}

// if conidtions:
let authenticated = true;
//ternery
let bottonText = authenticated === true ? "Dashboard" : "Login";

// switch case:

let role = "guest"

switch (role) {
    case "guest":
        console.log("Guest user");
        break;
    case "admin":
        console.log("Admin user");
        break
    default:
        console.log("Unknown user!");
}

// For:

for (let index = 0; index < 10; index++) {
    console.log(index);
}

const colors = ['red', 'green', 'blue']

for(let color of colors){
    console.log(color);
}

// Factory function

function createCircle(radius){
    return {
        radius,
        draw(){console.log('draw')}
    }
}

let circle1 = createCircle(1);
console.log(circle1)

//string primitive
const msg = "Ali";

console.log(msg.length)

let txt = "A message is written here."
console.log(txt.split(' '))

txt = `Hello ${Name} !!`;
console.log(txt)

const nums = [3,4];
nums.push(5,6)
console.log(nums)
nums.unshift(5)
console.log(nums)
nums.splice(2,0,"a")
console.log(nums)

//Find elements in arrays
console.log(nums.indexOf(4))

//Remove elements:
nums.pop()
console.log(nums)
nums.shift()
console.log(nums)

//Combine elements:
const cmb = nums.concat([1,2,3])
console.log(cmb)

let first = [1,2,3];
let sec = [4,5,6];

let res = [...first, ...sec];
console.log(res)
