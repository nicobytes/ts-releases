// Inferred Type Predicates

const nums = [1, 2, 3, null, 5];
const filterNumbers = nums.filter((num) => num !== null);
filterNumbers.push(null);


// Control Flow Narrowing for Constant Indexed Accesses

function getValue(obj: Record<string, unknown>, key: string) {
    const value = obj[key];
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return obj[key];
}

const obj = { name: 'nicolas', age: 31, notes: [1,1,12] };
const value = getValue(obj, 'name');
console.log(value); // NICOLAS

// Regular Expression Syntax Checking

let myRegex = /@robot(\s+(please|immediately)))? do some task/;

// Support for New ECMAScript Set Methods

let fruits = new Set(["apples", "bananas", "pears", "oranges"]);
let oranges = new Set(["apples", "oranges", "tomatoes"]);

fruits.union(oranges);