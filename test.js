//1) 
//выведите в консоли каждый элемент из строки ниже с помощью for
let str = 'My name is Samuil';

for (let x of str) {
    console.log(x);
}

//2)
//выведите в консоли каждый элемент из массива ниже с помощью for
let arr = [1, 2, 3, 4, 5];

for (let x of arr) {
    console.log(x);
}

//3)
//создайте набор с помощью new Set()

let nabor = new Set()

//4)
//добавьте в созданный ранее набор, элементы 'a', 'b', 'c' с помощью add()

nabor.add("a")
nabor.add("b")
nabor.add("c")

//5)
//выведите в консоли слово 'Element' для каждого элемента из массива с помощью forEach()
let arr1 = [1, 2, 3, 4, 5];

arr1.forEach(function (value) {
    arr += value
})

//6)
//выведите все значения из набора
let fruits = new Set(['apple', 'banana', 'mango']);
let myit = fruits.values()
for (let x of myit) {
    fruits += x
}

//7)
//выведите все ключи из набора
let fruits1 = new Set(['apple', 'banana', 'mango']);

let myit1 = fruits1.entries()
for (let x of myit1) {
    fruits2 += x
}

//8)
//выведите все ключи из набора
let fruits2 = new Set(['apple', 'banana', 'mango']);

let myit2 = fruits2.entries()
for (let x of myit2) {
    fruits2 += x
}

//9)
//создайте обьект с помощью new Map()

let obj1 = new Map()

//10)
//добавьте в созданный ранее обьект, с помощью set()
let apple = 500;
let banana = 300;
let orange = 100;

obj1.set(apple)
obj1.set(banana)
obj1.set(orange)

//11)
//выведите в консоли значение apple с помощью get() из обьекта ниже
let fruits3 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

console.log(get(fruits3[0]));

//12)
//выведите в консоли количество элементов в мапе ниже
let fruits4 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

console.log(size(fruits4));

//13)
//удалите элемент 'apple' из мапа ниже
let fruits5 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

delete(fruits5)

//14)
//очистите мап ниже
let fruits6 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

fruits6.clear()

//15)
//проверьте находится ли 'apple' в мапе ниже
let fruits7 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

fruits7.has("apple")

//16)
//выведите все значения из обьекта ниже
let fruits8 = new Set(['apple', 'banana', 'mango']);

fruits8.values()

//17)
//выведите все ключи из обьекта ниже
let fruits9 = new Set(['apple', 'banana', 'mango']);

fruits9.keys()

//18)
//выведите все ключи/значения из обьекта ниже
let fruits0 = new Set(['apple', 'banana', 'mango']);

fruits0.entries()