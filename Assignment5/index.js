"use strict";
// Write a program that uses filter to remove all negative numbers from an array of numbers
let neg = [1, -2, -3, 4, 5, -6];
let upDatNeg = neg.filter((h) => {
    if (h > 0) {
        return h;
    }
});
console.log(upDatNeg);
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let oddArray = [3, 6, 9, 12, 15, 18];
let upDatoddArray = oddArray.filter(r => r % 2 !== 0).map(r => r * 2);
console.log("upDateoddArray", upDatoddArray);
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.map((newArr => newArr * 2));
console.log("New Array is", arr1);
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let upDatearr2 = arr2.map(r => r * r).filter(r => r % 2 === 0);
console.log("upDatearr2", upDatearr2);
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let a = ["apple", "banana", "cherry", "date", "grape"];
let apple = a.filter((b) => {
    if (b.length > 5) {
        return b;
    }
});
console.log("upDate Array", apple);
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula(Cel sius * 9/5) + 32.
let array = [0, 10, 20, 30, 40];
let new1 = array.map(Element => Element * 9 / 5 + 32);
console.log("CELs into Fant ", new1);
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let string = ["Alice", "Bob", "Charlie", "David", "Emily"];
let upDateString = string.forEach(f => console.log(f + "!"));
