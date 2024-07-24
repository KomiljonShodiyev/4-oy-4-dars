


// Masalar javobi

// 1-masala start

// let number = 345;

// let firstDigit = Math.floor(number / 100);
// let secondDigit = Math.floor((number % 100) / 10);
// let thirdDigit = number % 10;

// let sumOfFirstAndSecond = firstDigit + secondDigit;

// let difference = sumOfFirstAndSecond - secondDigit;

// console.log(`1- va 2-xonadagi sonlarning yig'indisi: ${sumOfFirstAndSecond}`);
// console.log(`2-xonadagi sondan qanchaga katta: ${difference}`);

// 1-masala end


// 2-masala start

// let number = +prompt("Ixtiyoriy son kirirting");

// let sumOfDivisors = 0;
// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         sumOfDivisors += i;
//     }
// }

// console.log(`1 dan ${number} gacha bo'lgan sonlar ichida ${number} ning bo'luvchilarining yig'indisi: ${sumOfDivisors}`);


// 2-masala end


// 3-masala start

// let arr = [true, "Salom", 23, undefined];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         arr[i] = null;
//     }
// }

// console.log(arr); 


// 3-masala end

// 4-masala start

// let arr = [2, 3, 4, 52, 2, 3, 4, 53, 2, 23, 43, 2];

// let maxValue = Math.max(...arr);

// let maxValues = arr.filter(value => value === maxValue);

// console.log(`Arraydagi eng katta qiymat: ${maxValue}`);


// 4-masala end

// 5-masala start

// let arr = [54, 32, 76, 12, 22];

// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(`Arrayning qiymatlari yig'indisi: ${sum}`);


// 5-masala end


// 6-masala start

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         arr[i] = 0;
//     }
// }

// console.log(arr); // [1, 0, 3, 0, 5, 0, 7, 0, 9, 0]


//  6-masala end

// 7-masala start

//  let firstNum = prompt ("Birinchi sonni kiriting!")-0
//  let action = prompt ("Action (+ - / *)") 
//  let secondNum = prompt ("Ikkinchi sonni kiriting!")-0
//  switch(action){
//      case"+":
//      console.log(firstNum + secondNum);
//      break;
//      case"-":
//      console.log(firstNum - secondNum);
//      break;
//      case"*":
//      console.log(firstNum * secondNum);
//      break;
//      case"/":
//      console.log(firstNum / secondNum);
//      break;
//  }

// 7-masala end

// 8-masala start

// let names = ["Nuriddin", "Shaxboz", "Adham", "Suxrob"];

// let inputName = prompt("Ismingizni kiriting:");

// if (names.includes(inputName)) {
//     console.log("Ism mavjud");
// } else {
//     console.log("Ism mavjud emas");
// }

// 8-masala end


// 9-masala start

// let people = [
//     {
//         Id: 1,
//         age: 20,
//         name: "Nuriddin",
//         gmail: "nuriddin@gmail.com"
//     },
//     {
//         Id: 2,
//         age: 15,
//         name: "Komiljon",
//         gmail: "komiljon@gmail.com"
//     },
//     {
//         Id: 3,
//         age: 25,
//         name: "Izzatbek",
//         gmail: "izzatbek@gmail.com"
//     }
// ];

// let inputName = prompt("Ismingizni kiriting:");

// let person = people.find(person => person.name === inputName);

// if (person) {
//     console.log("Ma'lumotlar:");
//     console.log(`Id: ${person.Id}`);
//     console.log(`Age: ${person.age}`);
//     console.log(`Name: ${person.name}`);
//     console.log(`Gmail: ${person.gmail}`);
// } else {
//     console.log("Ism mavjud emas");
// }

// 9-masala end

// 10-masala start

// Berilgan array
// let people = [
//     {
//         Id: 1,
//         age: 20,
//         name: "Nuriddin",
//         gmail: "nuriddin@gmail.com"
//     },
//     {
//         Id: 2,
//         age: 15,
//         name: "Komiljon",
//         gmail: "komiljon@gmail.com"
//     },
//     {
//         Id: 3,
//         age: 25,
//         name: "Izzatbek",
//         gmail: "izzatbek@gmail.com"
//     }
// ];

// let oldestPerson = people.reduce((max, person) => {
//     return (person.age > max.age) ? person : max;
// }, people[0]);

// console.log("Eng katta yoshdagi ob'ekt:");
// console.log(`Id: ${oldestPerson.Id}`);
// console.log(`Age: ${oldestPerson.age}`);
// console.log(`Name: ${oldestPerson.name}`);
// console.log(`Gmail: ${oldestPerson.gmail}`);

// 10-masala end

// 11-masala start

// let people = [
//     {
//         Id: 1,
//         age: 20,
//         name: "Nuriddin",
//         gmail: "nuriddin@gmail.com"
//     },
//     {
//         Id: 2,
//         age: 15,
//         name: "Komiljon",
//         gmail: "komijon@gmail.com"
//     },
//     {
//         Id: 3,
//         age: 25,
//         name: "Izzatbek",
//         gmail: "izzatbek@gmail.com"
//     }
// ];

// let totalAge = people.reduce((sum, person) => sum + person.age, 0);

// let averageAge = totalAge / people.length;

// console.log(`Yoshlarning o'rtacha arifmetik qiymati: ${averageAge}`);

// 11-masala end

// 12-masala start

// let arr = [23, 54, 21, 76, 23, 87];

// let sum = arr[0] + arr[arr.length - 1];

// if (sum % 2 === 0) {
//     arr.unshift(sum);
// } else {
//     arr.push(sum); 
// }

// console.log(arr);

// 12-masala end

// 13-masala start

// Berilgan array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Juft va toq sonlar uchun alohida arraylar
// let evenNumbers = [];
// let oddNumbers = [];

// // Juft va toq sonlarni ajratish
// arr.forEach(num => {
//     if (num % 2 === 0) {
//         evenNumbers.push(num);
//     } else {
//         oddNumbers.push(num);
//     }
// });

// // Natijani konsolga chiqarish
// console.log("Juft sonlar: ", evenNumbers);
// console.log("Toq sonlar: ", oddNumbers);

// 13-masala end

// 14-masala start

// let arr = [8, 7, 6, 5, 4];

// let reversedArr = [];

// for (let num of arr) {
//     reversedArr.unshift(num);
// }

// console.log(reversedArr); 

// 14-masala end