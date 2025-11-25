function formatValue(
  value: string | number | boolean
): string | number | boolean {
  
  if (typeof value === "string") {
    let result = "";

    for (const char of value) {
      const code = char.charCodeAt(0);

      if (code >= 97 && code <= 122) {
        result += String.fromCharCode(code - 32);
      } else {
        result += char;
      }
    }

    return result;
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return !value;
}

// console.log(formatValue("hello")); 
// console.log(formatValue(7));       
// console.log(formatValue(true));   
// console.log(formatValue(false));   


function getLength(value: string | unknown[]): number {

  let count = 0;

 
  if (typeof value === "string") {
    for (const _ of value) {
      count++;
    }
    return count;
  }
  if (Array.isArray(value)) {
    for (const _ of value) {
      count++;
    }
    return count;
  }

  return 0; 
}
console.log(getLength("Hello"));       
console.log(getLength(["a", "b"]));    
console.log(getLength([1, 2, 3, 4])); 


class Person {
  name: string;
  age: number;

 
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}'`;
  }
}


const person1 = new Person("John Doe", 30);
console.log(person1.getDetails()); 


const person2 = new Person("Alice", 25);
console.log(person2.getDetails());


type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  const result: Item[] = []; 

  for (const item of items) {
    if (item.rating >= 4) {
      result.push(item); 
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
  const result: User[] = []; 
  for (const user of users) {
    
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
  discount?: number; 
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const total = product.price * product.quantity;
      if (product.discount !== undefined) {
        
        return total * (1 - product.discount / 100);
      }
      return total;
    })
    .reduce((sum, price) => sum + price, 0);
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },               
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 }, 
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },      
];

console.log(calculateTotalPrice(products)); 