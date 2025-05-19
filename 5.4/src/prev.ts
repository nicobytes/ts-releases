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


const re = /d(b+d))/g;


// Support for New ECMAScript Set Methods

<<<<<<< HEAD
const activities = new Set(["running", "swimming", "cycling"]);
const hobbies = new Set(["reading", "swimming", "drawing"]);

activities.union(hobbies);
// Set(5) { 'running', 'swimming', 'cycling', 'reading', 'drawing' }
activities.intersection(hobbies);
// Set(1) { 'swimming' }
activities.difference(hobbies);
// Set(2) { 'running', 'cycling' }


=======
let fruits = new Set(["apples", "bananas", "pears", "oranges"]);
let oranges = new Set(["apples", "oranges", "tomatoes"]);

fruits.union(oranges);
>>>>>>> 59e8f0e47070742ab29558f123fc420154e0a174
