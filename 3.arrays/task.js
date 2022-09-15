function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  let check = arr1.every(function(elem, index, arr1) {
    if (elem !== arr2[index]) {
      return false;
      // break;
    } else {
      return true;
    }
  })

  return check;

  }

  

function advancedFilter(arr) {
  let resultArr = arr.filter( element => ((element) % 3 === 0 && element > 0));

  resultArr =  resultArr.map(item => item * 10);

  return resultArr; // array
}
