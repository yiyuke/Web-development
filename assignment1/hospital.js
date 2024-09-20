hospital = [
    {
        id: "001",
        fullName: "Bob Damon",
        dateOfBirth: "1997-03-04",
        symptoms: "flue, fever, headache"
    },
    {
        id: "002",
        fullName: "Alice Miller",
        dateOfBirth: "1950-10-23",
        symptoms: "diabetes, weak sight, inappetence"
    },
    {
        id: "003",
        fullName: "John Smith",
        dateOfBirth: "1993-05-29",
        symptoms: "insomnia, anxiety, hypoimmunity"
    },
]
console.log(hospital[0].dateOfBirth);

let addingFunction = function (a,b){
    console.log(a+b);//Q: why do not use return(a+b)
  };
  
  let multiplicationFunction = function (a,b){
    console.log(a*b);
  };
  
  //calculationFunction is a parameter that expects a function to be passed into it
  
  let calculate = function(calculationFunction, a, b) {
    calculationFunction(a,b);
  };
  //calculationFunction =? function(a,b){console.log()}
  calculate(addingFunction, 4,12);
  calculate(multiplicationFunction, 4,12);

  let addNumbers = function(a, b) {
    return(a+b);
   };
   
   //We can execute addNumbers(); because its value is a function
  let sum = addNumbers(4,7);
  console.log(sum);
// three different values: variable values, return values and property values.
//Q: what is the difference between morden targeting and traditional targeting?