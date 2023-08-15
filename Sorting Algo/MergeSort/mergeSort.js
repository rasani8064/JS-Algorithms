function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0,mid);
    const righArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(righArr));
}


function merge(leftArr, righArr){
    const sortedArr = []
    while(leftArr.length && righArr.length){
        if(leftArr[0] <= righArr[0]){
            sortedArr.push(leftArr.shift());
        } else{
            sortedArr.push(righArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...righArr]
}

const arr = [8,20,-2,4,-6];

console.log(mergeSort(arr)) // [ -6, -2, 4, 8, 20 ]