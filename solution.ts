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
 


class Person {
  name: string;
  age: number;

 
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}





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

