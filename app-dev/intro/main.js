console.log("Console are NOT a trap")

let firstname = "Wasim";
firstname = "Dan";

console.log(firstname);

let a = "Solid";
let b = "Snake";
console.log(`Hello, I am ${a} ${b}`);

let isRainging = true;
if(isRainging == true){
    console.log("carry umbrella");
}else{
    console.log("wear sunglasses");
}

for(let i=0; i<10; i++){
console.log(i);
}

let zoo = ["lion", "tiger", "bear", "giraffe", "penguin", "panda"];
console.log(zoo);
for(let i=0; i<zoo.length; i++){
    console.log(zoo[i]);
    while(zoo.length < 5){
        if(i > 3 == true){
            break;
        }
    }
}

while (isRainging == true) {

    console.log("it is raining");
    break;
}

function sum(a, b){
    let result = a + b;
    return result;
}
let y = sum(10, 20);
console.log(y);

let flooredNumber = Math.floor(12.3);
console.log(flooredNumber);

let randomNumber = Math.random()*6;
console.log(randomNumber);

let randomInteger = Math.floor(randomNumber);
console.log(randomInteger);
