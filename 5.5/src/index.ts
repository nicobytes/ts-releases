// Inferred Type Predicates

const nums = [1, 2, 3, null, 5];
const filterNumbers = nums.filter((num) => num !== null);
filterNumbers.push(null);

// Control Flow Narrowing for Constant Indexed Accesses

function getValue(obj: Record<string, unknown>, key: string) {
    if (typeof obj[key] === 'string') {
        return obj[key].toUpperCase();
    }
    return obj[key];
}

const obj = { name: 'nicolas', age: 31 };
const value = getValue(obj, 'name');
console.log(value); // nicolas

// Regular Expression Syntax Checking

let myRegex = /@robot(\s+(please|immediately)))? do some task/;

// Support for New ECMAScript Set Methods

let fruits = new Set(["apples", "bananas", "pears", "oranges"]);
let oranges = new Set(["apples", "oranges"]);

console.log(fruits.union(oranges)); // Set { 'apples', 'bananas', 'pears', 'oranges' }

// https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/