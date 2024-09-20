console.log("hi");

let myH1 = document.querySelector("#mainH");

myH1.textContent = "IMM is a roller coaster"

let allLis = document.querySelectorAll("li");
console.log(allLis)

allLis[0].textContent = "Events";

for(let i=0; i<allLis.length; i++){
    allLis[i].textContent = "new content"
};

let myParagraph = document.querySelector("#myP")

myParagraph.remove();

let newLi = document.createElement("li");
newLi.textContent = "I am a new line";
console.log(newLi)

let myUl = document.querySelector("#mainUl");

myUl.appendChild(newLi);
