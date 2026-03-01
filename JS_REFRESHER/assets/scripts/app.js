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
function createGreeting(userName, msg){
    return `Hi I'm ${userName} and this is my message: ${msg}`;
}

const greeting1 = createGreeting("Ariel", "Je t'aime!");
const greeting2 = createGreeting("Manuel", "What's Up?");

console.log(greeting1);
console.log(greeting2);

function combine(valor1, valor2, valor3){
    const calculate = (valor1 * valor2) / valor3;
    return calculate;
}

const resultado = combine(20, 20, 10);
console.log(resultado);

export default (userName, msg) => {
    console.log("Hello");
    return userName + message;
};

const user = {
    name: "Ariel",
    age: 17,
    greet(){
        console.log("Hello");
        console.log(this.age);
    }
};

console.log(user.name);
user.greet();

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hi!");
    }
}

const user1 = new User("Ariel", 17);
console.log(user1);