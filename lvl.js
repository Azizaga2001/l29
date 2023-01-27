function addSuff(Str1, Suffix) {
    return Str1 + Suffix
}

console.log("81LVL", " | ", addSuff("home", "less"));

function arrayOfMultiples(num, length) {
    if (length == 1) {
        return num
    }
    if (length == 2) {
        return num + ", " + num * 2
    }
    if (length == 3) {
        return num + ", " + num * 2 + ", " + num * 3
    }
    if (length == 4) {
        return num + ", " + num * 2 + ", " + num * 3 + ", " + num * 4
    }
    if (length == 5) {
        return num + ", " + num * 2 + ", " + num * 3 + ", " + num * 4 + ", " + num * 5
    }
    if (length == 6) {
        return num + ", " + num * 2 + ", " + num * 3 + ", " + num * 4 + ", " + num * 5 + ", " + num * 6
    }
    if (length == 7) {
        return num + ", " + num * 2 + ", " + num * 3 + ", " + num * 4 + ", " + num * 5 + ", " + num * 6 + ", " + num * 7
    }
    if (length == 8) {
        return num + ", " + num * 2 + ", " + num * 3 + ", " + num * 4 + ", " + num * 5 + ", " + num * 6 + ", " + num * 7 + ", " + num * 8
    }
    if (length == 9) {
        return num + ", " + num * 2 + ", " + num * 3 + ", " + num * 4 + ", " + num * 5 + ", " + num * 6 + ", " + num * 7 + ", " + num * 8 + ", " + num * 9
    }
    if (length == 10) {
        return num + ", " + num * 2 + ", " + num * 3 + ", " + num * 4 + ", " + num * 5 + ", " + num * 6 + ", " + num * 7 + ", " + num * 8 + ", " + num * 9 + ", " + num * 10
    }
}

console.log("82LVL", " | ", arrayOfMultiples(7, 5));

let object = {
    a: 1,
    b: 2,
    c: 3,
}

console.log("VAL83LVL", " | ", Object.values(object));
console.log("KEY83LVL", " | ", Object.keys(object));

function fits(x, y) {
    if (Number.isInteger(y / x)) {
        return false;
    } else {
        return true;
    }
}

console.log("84LVL", " | ", fits(5, 11));

function count(num1) {
    Number.isInteger(num1)
    return num1.length
}

console.log(count(20));