function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [8, 20, 6, -2, 5, -4];
insertionSort(arr);

console.log(arr); //[ -4, -2, 5, 6, 8, 20 ]
