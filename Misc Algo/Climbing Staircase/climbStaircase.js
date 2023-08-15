function climbingStaircase(n){
    const noofWays = [1, 2]
    for (let i = 2; i <= n; i++) {
        noofWays[i] = noofWays[i-1] + noofWays[i-2]
    }
    return noofWays[n - 1]
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

// Big-O = O(n)