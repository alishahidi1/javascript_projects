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



