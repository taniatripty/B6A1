function formatValue(
  value: string | number | boolean
): string | number | boolean {
  
  // Handle string → convert to uppercase manually
  if (typeof value === "string") {
    let result = "";

    // Using for...of so TS knows char cannot be undefined
    for (const char of value) {
      const code = char.charCodeAt(0);

      // If lowercase a-z → convert to uppercase
      if (code >= 97 && code <= 122) {
        result += String.fromCharCode(code - 32);
      } else {
        result += char;
      }
    }

    return result;
  }

  // Handle number → multiply by 10
  if (typeof value === "number") {
    return value * 10;
  }

  // Handle boolean → return opposite
  return !value;
}

// ----------- Testing -----------

// console.log(formatValue("hello")); // HELLO
// console.log(formatValue(7));       // 70
// console.log(formatValue(true));    // false
// console.log(formatValue(false));   // true


function getLength(value: string | unknown[]): number {

  let count = 0;

  // If value is a string → count characters manually
  if (typeof value === "string") {
    for (const _ of value) {
      count++;
    }
    return count;
  }

  // If value is an array → count items manually
  if (Array.isArray(value)) {
    for (const _ of value) {
      count++;
    }
    return count;
  }

  return 0; // Just a fallback
}
console.log(getLength("Hello"));       // 5
console.log(getLength(["a", "b"]));    // 2
console.log(getLength([1, 2, 3, 4]));  // 4


class Person {
  name: string;
  age: number;

  // Constructor to initialize the properties
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method that returns formatted details
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}'`;
  }
}

// ----------- Testing -----------

const person1 = new Person("John Doe", 30);
console.log(person1.getDetails()); 
// Output: "Name: John Doe, Age: 30"

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());
// Output: "Name: Alice, Age: 25"

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  const result: Item[] = []; // new array to avoid mutation

  for (const item of items) {
    if (item.rating >= 4) {
      result.push(item); // Only add items that meet the condition
    }
  }

  return result;
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  const result: User[] = []; // New array to avoid mutation

  for (const user of users) {
    // Check if user is active
    if (user.isActive === true) {
      result.push(user);
    }
  }

  return result;
}
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];

  function exists(value: string | number): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) return true;
    }
    return false;
  }

  // Use for...of to avoid undefined errors
  for (const value of arr1) {
    if (!exists(value)) {
      result.push(value);
    }
  }

  for (const value of arr2) {
    if (!exists(value)) {
      result.push(value);
    }
  }

  return result;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));


type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; // optional percentage from 0–100
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const total = product.price * product.quantity;
      if (product.discount !== undefined) {
        // Apply discount
        return total * (1 - product.discount / 100);
      }
      return total;
    })
    .reduce((sum, price) => sum + price, 0);
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },               // 10*2 = 20
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 }, // 25*3=75 -> 75*0.9=67.5
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },      // 50*1=50 -> 50*0.8=40
];

console.log(calculateTotalPrice(products)); // Output: 127.5
