"use strict";

//переписать массив наоборот
//костыль
let array1 = [1, 2, 3, 4, 5];
function reversArray (arr){
    let resArr = [];
    for(let i = 0, j = arr.length-1; j >= 0; i++, j--){
        resArr[i] = arr[j];
    }
    return resArr;
}

console.log(reversArray(array1));

//встроенный метод объекта Array
console.log(array1.reverse());

//Вернуть перый N элементов массива

function task1 (arr, n){
    return arr.slice(0, n);
}

console.log(task1(array1, 3));

//Вернуть последние N элементов массива

function task1 (arr, n){
    return arr.slice(-n);
}

//Найти сумма элементов массива (произведение, )

const reducer = (sum, value) => sum + value;

let sumOfArray = array1.reduce(reducer);
console.log(sumOfArray);

const reducer2 = (mult, value) => mult * value;
let multOfArray = array1.reduce(reducer2);

const reducer3 = (sum, value) => sum + value**3;
let multOfArray1 = array1.reduce(reducer3);

function task3(arr, power){
    const reducer = (sum, value) => sum + value**power;
    return arr.reduce(reducer);
}

//вернуть случайный элемент массива

function task4(arr){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function task5 (arr, index1, index2){
    let secondElement = arr[index2];
    arr.splice(index2, 1, arr[index2]);
    arr.splice(index1, 1, secondElement);
    return arr;
}

function replaceElement2 (arr, index1, index2) {
    return arr.splice(index1, 0, array.splice(index2, 1)[0]);
}

//отфильтруйте массив, удалив все отрицательные и нулевые элементы

let array3 = [0, 1, -2, 0, 3, -4, 0, 5, -100, 5, 9];
console.log(array3);

function task6 (arr){
    return array3.filter(i => i > 0);
}

let result = task6(array3);
console.log(result);

//Set множество

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 5]);
let set3 = new Set([1, 1, 1, 1, 2, ,,, 3, 4,,,5, 5]);

console.log(set1);
console.log(set2);
console.log(set3);

//добавление, добавление повторное элемента игнорируется
set1.add(6);
set1.add('hello');

let set4 = new Set([{name: 'Masha'}, {name: 'Petya'}]);
set4.add({name: 'Vasya'});
const obj = {name: 'test'};
let set5 = new Set([obj, obj, obj]);

//Map - object

const map1 = new Map();
map1.set("Anna", 20);
map1.set("Tom", 23);

console.log(map1.get("Tom"));

//добовление элемента с ключом, который уже существует приводит к его перезаписи

map1.set("Anna", 10);

//delete element
//map1.delete("Ann");

//clear map
//map1.clear();


