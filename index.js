function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    let x = 100;
    function plusTen(x) {
        return x + 10;
    }
    return plusTen;
}

function returnsAnAnonymousFunction() {
    return (num1, num2) => num1 * num2;
}