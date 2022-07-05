// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let name = Tanya;
let age = 10;
let a = 5;
const b = 10;
let c = a + b;

console.log(c);

function sayHey() {
    console.log("hey!");
}
sayHey()
function conversation() {
    sayHey();
    console.log("how are you?");
    console.log("Goodbye");
}
conversation()

function futureAge(x, y) {
    const age = x + y;
    return "Hi Mary you will be" + age + " years old in 5 years";

}
console.log(futureAge(17, 5));
