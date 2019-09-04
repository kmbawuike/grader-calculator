function grader(studentScore, totalPossibleScore){
  let studentPercentage = (studentScore/totalPossibleScore) * 100;
  let grade;
  if(studentPercentage >= 90 && studentPercentage <= 100){
    grade = 'A'
  }else if(studentPercentage >= 80 && studentPercentage <= 89){
    grade = 'B'
  }else if(studentPercentage >= 70 && studentPercentage <= 79){
    grade = 'C'
  }else if(studentPercentage >= 60 && studentPercentage <= 69){
    grade = 'D'
  }else if(studentPercentage >= 0 && studentPercentage <= 59){
    grade = 'F'
  }else{
    console.log("Invalid Student Score or Total Possible Score");
  }
  console.log(`You had ${studentPercentage}% and your grade is ${grade}`)
}clearInterval

grader(10,20);

// Objects

convertFahrenhiet = function(value){
  return{
    fahrenhiet: value + 'F',
    kelvin: (value + 459.67) * (5 / 9),
    celcius: (value - 32) * (5 / 9)
  }
}

let num = convertFahrenhiet(74);
console.log(num.kelvin);