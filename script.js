
function calc(){
 let maths = Number(document.getElementById('maths').value);
 let english = Number(document.getElementById('english').value);
 let chemistry = Number(document.getElementById('chemistry').value);
 let physics = Number(document.getElementById('physics').value);
 let biology = Number(document.getElementById('biology').value);
 let igbo = Number(document.getElementById('igbo').value);
 let furtherMath = Number(document.getElementById('furtherMath').value);
 let geography = Number(document.getElementById('geography').value);
 let economics = Number(document.getElementById('economics').value);


 let total = maths + english + chemistry + physics + biology + igbo + furtherMath + geography + economics;
 let average = Math.floor(total / 9);

 if(average >= 70){
   grade = 'A';
 }else if(average >= 60 && average <= 69){
    grade = 'B';
 }else if(average >= 50 && average <= 59){
    grade = 'C';
 }else if(average >= 45 && average <= 49){
   grade = 'D'
 }else if(average < 45){
   grade = 'F';
 }

 document.getElementById('total').innerHTML = total;
 document.getElementById('average').innerHTML = average + '%';
 document.getElementById('grade').innerHTML = grade;
}

let record = {};
let arr = [];

function submit(){
  let name = document.querySelector(".name").value;
  let maths = Number(document.getElementById('maths').value);
  let english = Number(document.getElementById('english').value);
  let chemistry = Number(document.getElementById('chemistry').value);
  let physics = Number(document.getElementById('physics').value);
  let biology = Number(document.getElementById('biology').value);
  let igbo = Number(document.getElementById('igbo').value);
  let furtherMath = Number(document.getElementById('furtherMath').value);
  let geography = Number(document.getElementById('geography').value);
  let economics = Number(document.getElementById('economics').value);

  let total = maths + english + chemistry + physics + biology + igbo + furtherMath + geography + economics;
  let average = Math.floor(total / 9);

  if(average >= 70){
    grade = 'A';
  }else if(average >= 60 && average <= 69){
      grade = 'B';
  }else if(average >= 50 && average <= 59){
      grade = 'C';
  }else if(average >= 45 && average <= 49){
    grade = 'D'
  }else if(average < 45){
    grade = 'F';
  }


  record = {
    name: name, maths: maths, english: english, physics: physics, chemistry: chemistry,
    biology: biology, geography: geography, igbo: igbo, furtherMath: furtherMath,
    economics: economics, total: total, average: average, grade: grade
  }
  arr.push(record);
  let count = arr.length;
  let postion = count - 1;
  const container = document.createElement("ul");
  const child1 = document.createElement("li");
  const child2 = document.createElement("li");
  const child3 = document.createElement("li");
  const child4 = document.createElement("li");
  const child5 = document.createElement("li");
  const child6 = document.createElement("li");
  const child7 = document.createElement("li");
  const child8 = document.createElement("li");
  const child9 = document.createElement("li");
  const child10 = document.createElement("li");
  const child11 = document.createElement("li");
  const child12 = document.createElement("li");
  const child13 = document.createElement("li");
  const child14 = document.createElement("li");

  container.className = "container";
  child1.className = "child";
  child2.className = "child";
  child3.className = "child";
  child4.className = "child";
  child5.className = "child";
  child6.className = "child";
  child7.className = "child";
  child8.className = "child";
  child9.className = "child";
  child10.className = "child";
  child11.className = "child";
  child12.className = "child";
  child13.className = "child";
  child14.className = "child";

  container.appendChild(child1);
  container.appendChild(child2);
  container.appendChild(child3);
  container.appendChild(child4);
  container.appendChild(child5);
  container.appendChild(child6);
  container.appendChild(child7);
  container.appendChild(child8);
  container.appendChild(child9);
  container.appendChild(child10);
  container.appendChild(child11);
  container.appendChild(child12);
  container.appendChild(child13);
  container.appendChild(child14);

  child1.appendChild(document.createTextNode(count + "."));
  child2.appendChild(document.createTextNode(arr[postion].name));
  child3.appendChild(document.createTextNode(arr[postion].maths));
  child4.appendChild(document.createTextNode(arr[postion].english));
  child5.appendChild(document.createTextNode(arr[postion].physics));
  child6.appendChild(document.createTextNode(arr[postion].chemistry));
  child7.appendChild(document.createTextNode(arr[postion].biology));
  child8.appendChild(document.createTextNode(arr[postion].igbo));
  child9.appendChild(document.createTextNode(arr[postion].furtherMath));
  child10.appendChild(document.createTextNode(arr[postion].geography));
  child11.appendChild(document.createTextNode(arr[postion].economics));
  child12.appendChild(document.createTextNode(arr[postion].total));
  child13.appendChild(document.createTextNode(arr[postion].average + "%"));
  child14.appendChild(document.createTextNode(arr[postion].grade));

  document.querySelector(".grade-display").appendChild(container);

}




















class Person{
  constructor(name, complexion, isCostly){
    this.name = name || 'Kelechi'
    this.complexion = complexion
    this.isCostly = isCostly
  }

  personDetails(){
    return `{this.name} is ${this.complexion}`
  }
  isCostly(){
    return `${this.name} is ${this.complexion} and is it costly? ${this.costly}`
  }
}

const first = new Person("", "fair", "yes");

console.log(first.isCostly())
