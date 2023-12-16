function mergeSortedArrays(arr1, arr2) {
  if (arr1.length == 0) {
    return arr2;
  } else if (arr2.length == 0) {
    return arr1;
  }
  console.log(arr1.concat(arr2).sort((a, b) => a - b));

  return;
}
function mergeSortedArrays1(arr1, arr2) {
  if (arr1.length == 0) {
    return arr2;
  } else if (arr2.length == 0) {
    return arr1;
  }
  console.log([...arr1, ...arr2].sort((a, b) => a - b));
  return;
}
mergeSortedArrays1([0, 3, 4, 31], [4, 6, 30]);
