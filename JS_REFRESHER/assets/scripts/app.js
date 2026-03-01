import { apiKEY, abc as content } from "./util.js"; 

console.log(apiKEY);
console.log(content);

let userMessage = "Hello World!!!";
console.log(userMessage);

console.log(10 === 5);
console.log(10 == "10");
console.log(10 != 5);
console.log(10 > 5);
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 >= 5);

// Condicional
if(10 > 5){
    console.log("Greather than");
}else{
    console.log("less than");
}

// Function
function greetUser(userName, msg){
    console.log(`${userName}: ${msg}`);
}

greetUser("Ariel", "Je t'aime!");