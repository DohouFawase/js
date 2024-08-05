function findMax (a, b, c) {
    if (a >= b && a >= c) {
        // a est le plus grand
        return a;
    } else if (b >= a && b >= c) {
        // b est le plus grand
        return b;
    } else {
        // c est le plus grand
        return c;
    }
}

let maxNumber = findMax(0, 0, 100);
console.log(maxNumber); 