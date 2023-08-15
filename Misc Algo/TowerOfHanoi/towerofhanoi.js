function towerOfHanoi(n, fromRod, toRod, usingRod){
    if(n===1){
        console.log(`move disk 1 from ${fromRod} to ${toRod}`)
        return
    }

    towerOfHanoi(n-1, fromRod, usingRod, toRod);

    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)

    towerOfHanoi(n-1, usingRod, toRod, fromRod)
}


towerOfHanoi(3, 'A', 'C', 'B');

// Big-O = O(2^n)

// move disk 1 from A to C
// Move disk 2 from A to B
// move disk 1 from C to B
// Move disk 3 from A to C
// move disk 1 from B to A
// Move disk 2 from B to C
// move disk 1 from A to C