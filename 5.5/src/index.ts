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



const re = /d(b+d))/g;



// Support for New ECMAScript Set Methods

const activities = new Set(["running", "swimming", "cycling"]);
const hobbies = new Set(["reading", "swimming", "drawing"]);

activities.union(hobbies);
// Set(5) { 'running', 'swimming', 'cycling', 'reading', 'drawing' }
activities.intersection(hobbies);
// Set(1) { 'swimming' }
activities.difference(hobbies);
// Set(2) { 'running', 'cycling' }



// https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/