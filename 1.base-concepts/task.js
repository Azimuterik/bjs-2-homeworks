"use strict"
function solveEquation(a, b, c) {
  let arr;
  let d = b*b-4*a*c;
  if (d < 0) {
    arr = [];
  } else if (d === 0){
    arr = [-b/(2*a)];
  } else {
    arr = [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)]
  }
  return arr; // array
}

// console.log(solveEquation(1, 5, 4));


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let arr1 = [['Проценты', percent], ['Взнос', contribution], ['Сумма', amount]];


  for (let i = 0; i < arr1.length; ++i) {
    
    correctParameter = parseFloat(arr1[i][1]);
    console.log(correctParameter)
    
    if (Number.isNaN(correctParameter) === true) {
      console.log(`Параметр ${arr1[i][0]} некорректен, значение ${arr1[i][1]}`);
    } else {
      arr1[i][1] = parseFloat(arr1[i][1]);
    }

  }
  
let creditSum =  amount - contribution;

let months;
let currentDate = new Date();
finalDate = Date.parse(date);
months = (finalDate.getFullYear() - currentDate.getFullYear()) * 12 + (finalDate.getMonth() - currentDate.getMonth());

percentMonth = (percent / 100) / 12; 
let payment = creditSum * (percentMonth + (percentMonth / (((1 + percentMonth)^months) - 1)));


totalAmount = (payment * months).toFixed(2);  
  


  return totalAmount;
}

// console.log(calculateTotalMortgage(10, 0, 50000, '2023 07 21'))





