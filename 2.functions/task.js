// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = 0, avg;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];

  }

  avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr = [1, 2, 3]) {
  let sum = arr[0];
  for (i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  

  return sum;
}

function makeWork(arrOfArr =  [[10, 10, 11], [20, 10]], worker) {
  let max = worker(arrOfArr[0]);

  for (j = 0; j < arrOfArr.length; j++) {

    if (max < worker(arrOfArr[j])) {
      max = worker(arrOfArr[j]);
    }
  }

  // console.log(max);
  return max;
}

// Задание 3

function worker2(arr, getArrayParams) {
  let maxMin = getArrayParams(arr);
  let diffMaxMin = Math.abs(maxMin.max - maxMin.min);
  return (diffMaxMin); 
  //нужна разность между минимумо и максимумом
  
}

makeWork(arrOfArr = [[10, 10, 11], [20, 10]], worker2);
