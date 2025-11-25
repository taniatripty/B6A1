১. TypeScript-এ Interface এবং Type-এর পার্থক্য

TypeScript-এ আমরা interface আর type দুটোই ব্যবহার করি অবজেক্টের ধরন বোঝানোর জন্য। অনেক সময় এগুলো একরকম মনে হলেও, প্রকৃতপক্ষে কিছু পার্থক্য আছে।

Interface:

সহজেই অন্য interface থেকে extend করা যায়।

একই নামের interface একাধিকবার declare করলে TypeScript তাদের merge করে।

বড় প্রজেক্টে অবজেক্ট বা ক্লাসের structure বানানোর সময় এটা খুব সুবিধাজনক।

Type:

type একটু versatile। শুধু অবজেক্ট নয়, primitive, union, intersection ইত্যাদি বানাতে পারি।

একই নামের type আবার declare করা যায় না।

তবে intersection type (&) ব্যবহার করে একাধিক type একত্র করা সম্ভব।

উদাহরণ:

// Interface ব্যবহার
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

// Type ব্যবহার
type Animal = {
  name: string;
  species: string;
};

type Dog = Animal & { breed: string }; // intersection type


বাস্তব উদাহরণ: আমরা একটি বড় প্রজেক্টে employee management system বানাচ্ছি। Employee interface ব্যবহার করলে সহজে extend করে নতুন ধরনের employee তৈরি করতে পারি। আর type ব্যবহার করলে union বা intersection type বানাতে সুবিধা হয়, যেমন “Student | Teacher” ইত্যাদি।

২. TypeScript-এ keyof কী ও তার ব্যবহার

keyof হলো এমন একটি keyword যা অবজেক্টের সব প্রোপার্টি নামকে টাইপ হিসেবে ব্যবহার করতে দেয়। সহজভাবে বলতে গেলে, এটি TypeScript-কে বলে, “এই অবজেক্টের যেকোনো প্রোপার্টি নাম valid।”

উদাহরণ:

type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = keyof Person; 
// PersonKeys: "name" | "age" | "email"

function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

const person: Person = { name: "Rafi", age: 25, email: "rafi@example.com" };
console.log(getProperty(person, "name")); // Output: "Rafi"
// console.log(getProperty(person, "phone")); // Error: 'phone' is not assignable


এখানে আমরা দেখতে পাচ্ছি, keyof ব্যবহার করলে ফাংশনে শুধু বৈধ প্রোপার্টি নাম পাঠানো সম্ভব। কেউ ভুল নাম পাঠালে TypeScript সঙ্গে সঙ্গে error দেখাবে।

বাস্তব জীবনে ব্যবহার

 আমরা একটি বড় কোম্পানিতে employee management system বানাচ্ছি।

প্রতিটি employee-এর কিছু fixed property আছে: name, age, email।

Interface ব্যবহার করলে নতুন employee type সহজে extend করা যায়।

keyof ব্যবহার করলে ফাংশনে ভুল property পাঠানোর সম্ভাবনা কমে যায়।

ফলে code safe, clean এবং maintainable হয়।