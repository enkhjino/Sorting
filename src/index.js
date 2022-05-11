//merge sort
function mergeSort(arr1, arr2) {
  var result = [...arr1, ...arr2];
  for (var i = 0; i < result.length; i++) {
    for (var j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        var temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }
  return result;
}

function mergeRecursion(arr) {
  if (arr.length <= 1) return arr;
  var firstHalf = mergeRecursion(arr.slice(0, arr.length / 2));
  var secondHalf = mergeRecursion(arr.slice(arr.length / 2));
  return mergeSort(firstHalf, secondHalf);
}

//console.log(mergeRecursion([4,2,3,5]))

//quick sort
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      console.log(pivot, arr[i]);
      swapIdx++;
      console.log("swapId:", swapIdx);
      swap(arr, swapIdx, i);
      console.log(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
