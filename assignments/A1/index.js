//Part 1: Create a data structure that describes a "hospital".
let hospital = {
  name : "Hospital",
  patients :[
    {
      id: "001",
      fullName: "Bob Damon",
      dateOfBirth: "1997-03-04",
      symptoms: ["flue", "fever", "headache"]
    },
    {
      id: "002",
      fullName: "Alice Miller",
      dateOfBirth: "1950-10-23",
      symptoms: ["diabetes", "weak sight", "inappetence"]
    },
    {
      id: "003",
      fullName: "John Smith",
      dateOfBirth: "1993-05-29",
      symptoms: ["insomnia", "anxiety", "hypoimmunity"]
    }
  ]
}

//Part 2: Create a function "showPatients"
function showPatients(hospital){
  let output = `<h1>${hospital.name}</h1>` + "\n"
  
  for(let i=0; i<hospital.patients.length; i++){
    output += `<h2>${hospital.patients[i].fullName}, ${hospital.patients[i].dateOfBirth}</h2>` + "\n"
    output += `<ul>` + "\n"

    hospital.patients[i].symptoms.forEach(symptom=>{
      output += " " + `<li>${symptom}</li>` + "\n"
    })
    
    output += `</ul>` + "\n"
  }
    return output
}

console.log(showPatients(hospital));

//Part 3: Create another function "getPatient" 
let patientsArray = hospital.patients

function getPatient(patientsArray){
  let randomIndex = Math.floor(Math.random() * patientsArray.length)
  return hospital.patients[randomIndex].id
}

console.log(getPatient(patientsArray))