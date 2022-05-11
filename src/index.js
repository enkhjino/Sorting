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
