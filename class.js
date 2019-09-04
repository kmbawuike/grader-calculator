// let numbers = [1,2,3,4,5]
// const reduceArray = numbers.reduce((acc,val) => {
//   return acc + val;
// })

// console.log(reduceArray);

// let interns = {
//   name: "kelechi",
//   sex: "male",
//   fulldetails (){
//     console.log(`${this.name} is a ${this.sex} `);
//   }
// }

// console.log(interns["name"])
// interns.fulldetails();

let internArray = [
  {name: "Kelechi",
   sex: "male",
   age: 25,
   nationality: "Nigeria",
   fulldata (){
     console.log(`${this.name} who is from ${this.nationality} is  ${this.age} years old.`)
  }
 },
 {name: "Juliet",
   sex: "female",
   age: 23,
   nationality: "America",
   fulldata (){
     console.log(`${this.name} who is from ${this.nationality} is  ${this.age} years old.`)
  }
 },
 {name: "Emmanuel",
   sex: "male",
   age: 27,
   nationality: "England",
   fulldata (){
     console.log(`${this.name} who is from ${this.nationality} is  ${this.age} years old.`)
  }
 },
 {name: "Jude",
   sex: "male",
   age: 35,
   nationality: "Algeria",
   fulldata (){
     console.log(`${this.name} who is from ${this.nationality} is  ${this.age} years old.`)
  }
 },
 {name: "Cynthia",
   sex: "female",
   age: 18,
   nationality: "N",
   fulldata (){
     console.log(`${this.name} who is from ${this.nationality} is  ${this.age} years old.`)
  }
 }
]

let [first, second, third, fourth, fifth] = internArray;
let ages = (first.age + second.age, + third.age + fourth.age + fifth.age) - 10;
console.log(`Total number of ages minus 10 is ${ages}`);
first.fulldata();

let scores = [20,30,60,100]
let doublescores = scores.map((score)=>{
  return score * 2
})
console.log(doublescores);
let scoresSum = doublescores.reduce((acc,value)=>{
  return acc + value;
})
console.log(`Double of sccores: ${scoresSum}`);