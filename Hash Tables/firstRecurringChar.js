// [2,5,5,2,3,5,1,2,4]
function firstRecurringChar(arr) {
  for (let i = 1; i < arr.length; i++) {
    let elementToCompareTo = arr.shift();
    if (arr.includes(elementToCompareTo)) {
      return elementToCompareTo;
    }
  }
}
function firstRecurringChar1(arr) {
  let elementToCompareTo = arr.shift();
  while (arr.length) {
    if (arr.includes(elementToCompareTo)) {
      return elementToCompareTo;
    }
    elementToCompareTo = arr.shift();
  }
}

function firstRecurringChar2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let elementToCompareTo = arr[i];
    for (let j = 1; j < arr.length; j++) {
      const element = arr[j];
      if (elementToCompareTo === element) {
        return element;
      }
    }
  }
}
function firstRecurringChar3(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = arr[i];
    } else {
      return arr[i];
    }
  }
  return undefined;
}
function firstRecurringChar4(arr) {
  for (let i = 0; i < arr.length; i++) {
    let elementToCompareTo = arr[i];
    for (let j = 1; j < arr.length; j++) {
      const element = arr[j];
      if (elementToCompareTo === element) {
        return element;
      }
    }
  }
}

firstRecurringChar2([2, 5, 5, 2, 3, 5, 1, 2, 4]);
