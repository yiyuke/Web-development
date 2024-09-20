//main.js
let library = {
    name:"Oakville Public Library",
    services:["Borrowing", "Internet", "Meeting Rooms", "Comunity"],
    address:{
        street:"120 Navy St.",
        town:"Oakville",
        province:"Ontario",
        postalCode:"L6J 2Z4"
        },
    books:[
        {
            pages:"198", 
            author:"Neil Young", 
            title:"Waging Heavy Peace"
        },
        {
            pages:"1", 
            author:"Matthew Inman", 
            title:"How to Tell If Your Cat Is Plotting to Kill You"
        },
        {
            pages:"234", 
            author:"Tyler Hamilton", 
            title:"The Secret Race"
        }
    ]
};

console.log(library.name);
console.log(library.services[1]);
console.log(library.address.postalCode);
console.log(library.books[2].pages);

let bird = {
    name: "Dovee",
    age: 4,
    talk: function(){
        console.log("woo")
    },
    move: function(){
        console.log("fly in the sky")
    }
}

bird.talk()

let numbers = [1, 2, 3, 4, 5];
  numbers.forEach(function(element) {
      if (element % 2 == 0 //? "even" : "odd"
      ) {
        console.log(element)
      }
  });