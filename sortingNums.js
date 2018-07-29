var arr = [2, 5, 1, 50, 32, 41];

console.log(arr.sort(compare));

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}