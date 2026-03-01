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

// Exercise 1
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

const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const hobbiesIndex = hobbies.findIndex((item) => {
    return item === "Cooking";
});
console.log(hobbiesIndex);

const hobbiesMap = hobbies.map((item) => {
    return item + "!";
});

console.log(hobbiesMap);

// Exercise 2
function transformToObjects(numberArray) {
    const mapArray = numberArray.map((item) => ({val: item}));
    return mapArray
}
const transformToObjects_map = transformToObjects([1, 2, 3]);
console.log(transformToObjects_map);


const [firstName, lastName] = ["Ariel", "Marinho"];

console.log(firstName);
console.log(lastName);

const {name: userName, age} = {
    name: "Ariel",
    age: 17
};
console.log(userName);
console.log(age);

const newHobbies = ["Work Out"]
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const extendUser = {
    isAdmin: true,
    ...user
}

console.log(extendUser);

/*const password = window.prompt("Your Password: ").toUpperCase();
if(password === "HELLO"){
    console.log("Hello works");
} else {
    console.log("Access not granted.");
}*/

for(const hobby of hobbies){
    console.log(hobby);
} // Display all elements inside array.

const list = document.querySelector('ul');
// list.remove(); // This line of code remove de oredenaid list from html.

function handleTimeOut(){
    console.log("Time Out!");
}

const handleTimeOut2 = () => {
    console.log("Time out ... again!");
};

setTimeout(handleTimeOut, 2000);
setTimeout(handleTimeOut2, 2000);
setTimeout(() => {
    console.log("More timing out...");
}, 4000);

function greeter(greetFn){
    greetFn();
}

greeter(() => console.log("Hi"));

function init(){
    function greet(){
        console.log("Hi!");
    }
    greet();
}

init();