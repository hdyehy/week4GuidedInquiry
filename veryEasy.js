
//this is my submission
function min(n0, n1) {
    if (n0 <= n1) {
        return n0
    } else {
        return n1
    }
}








// BONUS challenge I made for myself, this should work no matter how many numbers are entered
function min() {
    let result = Infinity;

    for (let i in arguments) {
        if (arguments[i] < result) {
            result = arguments[i];
        }


    }
    return result;
}
