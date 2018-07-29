const a = {a: 'hello', c: 'hii', b: 'hi'};
const b = {a: 'hello', b: 'hi'};

const areObjectsSame = (a, b) => {
    for (let key in a) {
        if (a[key] === b[key]) {
            continue;
        } else {
            return false
        }
    }

    return true;
}

console.log(areObjectsSame(a, b));