// задача 21 автопроверка, модуль 2(JS)

// function findLongestWord(string) {
//   let words = string.split(" ");
//   let longerWord = words[0];

//   for (const word of words) {
//     if (word.length > longerWord.length) {
//       longerWord = word;
//     }
//   }
//   console.log(longerWord);
//   // return longerWord;
// }
// findLongestWord("ffsfsd grgdg dgdf sgfsgfsgsh");

// задача 22 автопроверка, модуль 2(JS)

// const min = 3;
// const max = 9;
// //  вариант №1
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   const during = max - min;
//   for (let i = 0; i <= during; i += 1) {
//     numbers.push(min);
//     min += 1;
//   }
//   // Change code above this line
//   console.log(numbers);
//   // return numbers;
// }
// createArrayOfNumbers(min, max);

// //  вариант №2
// function createArrayOfNumbers2(min, max) {
//   const numbers = [];
//   // Change code below this line
//   numbers.push(min);
//   for (let i = 0; i < max - min; i += 1) {
//     numbers.push(numbers[i] + 1);
//   }
//   // Change code above this line
//   console.log(numbers);
//   // return numbers;
// }
// createArrayOfNumbers2(min, max);

// //  вариант №3(верное решение)
// function createArrayOfNumbers3(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change
//   // Change code above this line
//   console.log(numbers);
//   // return numbers;
// }
// createArrayOfNumbers3(min, max);

// задача 23 автопроверка, модуль 2(JS)
// непрвильный вариант
// function filterArray(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < value) {
//       numbers.splice(i, 1);
//     }
//   }
//   console.log(numbers);
// }
// filterArray([12, 10, 21, 15, 76], 20);

// ВЕРНОЕ решение
// function filterArray(numbers, value) {
//   let massive = [];
//   for (let number of numbers) {
//     if (number > value) {
//       massive.push(number);
//     }
//   }
//   console.log(massive);
// }
// filterArray([1, 2, 3, 4, 5], 3);

// let numbers = [12, 24, 8, 41, 76];
// let value = 20;
// function filterArray(numbers, value) {
//   for (const number of numbers) {
//     if (number < value) {
//       numbers.slice(numbers.indexOf(number), 1);
//     }
//   }
//   console.log(numbers);
// }
// filterArray(numbers, value);

// задача 25 автопроверка, модуль 2(JS)
// function getCommonElements(array1, array2) {
//   let massiv = [];
//   for (let number of array1) {
//     if (array2.includes(number)) {
//       massiv.push(number);
//     }
//   }
//   console.log(massiv);
// }

// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// задача 27 автопроверка, модуль 2(JS)
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);
// }

// filterArray([12, 24, 8, 41, 76], 20);

// задача 29 автопроверка, модуль 2(JS)
// function createArrayOfNumbers3(start, end) {
//   const numbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }

//   console.log(numbers);
// }
// createArrayOfNumbers3(3, 11);

// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       console.log(true);
//     }
//     console.log(false);
//   }
//   // Change code above this line
// }

// includes(["apple", "plum", "pear", "orange"], "kiwi");

// var o = new Number("1");
// console.log(typeof o);

// // var g = "dasd";
// // console.log(this.g);

// let groceries = ["apples", "orange"];
// console.log(typeof groceries);

// тест
// var msgArray = [];
// msgArray[0] = "Привет";
// msgArray[99] = "мир";

// if (msgArray.length === 100) {
//   console.log("Длина равна 100.");
// } else {
//   console.log("Длина равна:" + msgArray.indexOf("мир"));
// }

// function hello() {
//   console.log("Hello", this);
// }

// var person = {
//   name: "Vlad",
//   age: 25,
//   sayHell: hello,
// };

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third);

// const fourth = { ...second, ...first };
// console.log(fourth);

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }

// getSubstring("Hello world", 0);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location.city = "Jamaica";
// // apartment.location.city = "Kingston";

// console.log(apartment);

// переименовать ключи обьекта

// let qwer = {
//   0: {
//     matches: 3,
//     team_id: "115",
//   },
//   1: {
//     matches: 3,
//     team_id: "116",
//   },
//   2: {
//     matches: 3,
//     team_id: "117",
//   },
//   3: {
//     matches: 3,
//     team_id: "119",
//   },
// };

// for (let key in qwer) {
//   qwer[qwer[key].team_id] = qwer[key];
//   delete qwer[key];
// }

// console.log(qwer.0);
// console.log(qwer);

// let team_id = [3312, 312, 3121];
// let qwer = {
//   "perviy", "vtoroy", "tretiy"};

// for (let key of qwer) {
//   qwer[key] = key++;
//   delete qwer[key];
// }

// console.log(qwer.perviy);

// let country = {
//   name: "Швейцария",
//   languages: ["немецкий", "французский", "итальянский"],
//   capital: { name: "Берн", population: 126598 },
//   cities: [
//     { name: "Цюрих", population: 378884 },
//     { name: "Женева", population: 188634 },
//     { name: "Базель", population: 164937 },
//   ],
// };

// // вывод всех элементов из country.languages
// console.log("Официальные языки Швейцарии");
// for (let i = 0; i < country.languages.length; i++)
//   console.log(country.languages[i]);

// // вывод всех элементов из country.cities
// console.log("Города Швейцарии");
// for (let i = 0; i < country.cities.length; i++)
//   console.log(country.cities[i].name);

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (value === array[i]) {
//       return true;
//     }
//     return false;
//   }
// }
// includes(["apple", "plum", "pear", "orange"], "kiwi");

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// let obj = null;
// console.log(typeof obj);

// let str = null;
// console.log(typeof str);
// alert(str);
// console.log(typeof str);

// let value = true;
// alert(typeof value);
// console.log(typeof value);

// value = String(value);
// console.log(typeof value);

// let undeclaredVariable;
// console.log(undeclaredVariable === undefined);
// console.log(typeof undeclaredVariable === "undefined");

// console.log(typeof ReferenceError);

// for (let key in ReferenceError) {
//   console.log(key);
//   console.log(typeof key);
// }

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// var mycar = new Car("Honda", "Accord", 1998);
// var a = mycar instanceof Car; // возвращает true
// var b = mycar instanceof Object; // возвращает true

// console.log(a);
// console.log(b);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(values);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       console.log(product.price);
//     } else {
//       return null;
//     }
//   }
//   // Change code above this line
// }

// getProductPrice("Scanner");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total;
//   for (const product of products) {
//     if (product.name === productName) {
//       total = product.quantity * product.price;
//     }
//   }
//   console.log(total);
// }

// calculateTotalPrice("Scanner");

// const string = "Welcome to the future";

// console.log(string.split("").reverse().join(""));

// задача 33 автопроверка, модуль 3(JS)

// function findMatches(array, ...arg) {
//   const matches = [];
//   for (let number of arg) {
//     if (array.includes(number)) {
//       matches.push(number);
//     }
//   }
//   //   return matches;
//   console.log(matches);
// }

// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);

// const numbers = [];
// console.log(numbers);
// numbers.push(52, 45);
// console.log(numbers);
// // numbers = 10;
// console.log(numbers);

// const rawObj = {
//   name: "Moonlight",
//   radius: 4564,
// };

// console.log(rawObj);
// console.log((rawObj.color = "milk"));
// console.log(rawObj);

// const logicE10 =
//   "C1-6-D, C1-6VN-D, C2-6b-D, C2-9-D, C2-9VN-D, C2-7-D, C2-7VN-D, C3-10-D, IC5-9-D, L2-9-D, L2-9VN-D, L3-9i-D, L3-12-D, M5Sc-D, ML6-15-D, RAB6-D, RIC5-9-D";
// const logiqE10s =
//   "C1-6-D, C1-6VN-D, C2-9-D, C2-9VN-D, C2-7-D, C2-7VN-D, C3-10-D, IC5-9-D, L2-9-D, L2-9VN-D, L3-12-D, M5Sc-D, ML6-15-D, RAB6-D, RIC5-9-D";

// searchProbes(logicE10, logiqE10s);

// const qw1 =
//   "C1-6VN-D, C2-9VN-D, C2-7VN-D, C3-10-D, L2-9VN-D, ML6-15-D, IC5-9-D, L8-18i-D, C2-6b-D, M5Sc-D";
// const qw2 =
//   "C1-6VN-D, C2-9VN-D, C2-7VN-D, C3-10-D, L2-9VN-D, ML6-15-D, IC5-9-D, L8-18i-D, M5Sc-D";

// searchProbes(qw1, qw2);

// function searchProbes(lineOne, lineTwo) {
//   let finalLine = [];
//   lineOne = lineOne.split(", ");
//   lineTwo = lineTwo.split(", ");
//   for (let string of lineOne) {
//     if (!lineTwo.includes(string)) {
//       finalLine.push(string);
//     }
//   }
//   console.log(finalLine);
// }

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     oldName = this.books.indexOf(oldName);
//     this.books.splice(oldName, 1, newName);
//     console.log(oldName);
//   },
// };

// console.log(bookShelf);

// bookShelf.updateBook("Haze", "Dungeon chronicles");

// const array = ["The last kingdom", "Haze", "The guardian of dreams"];
// console.log(array);
// let oldName = array.indexOf("Haze");
// array.splice(oldName, 1, "Dungeon chronicles");

// console.log(array);

// задача с транзакциями по счету
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,
//   transactions: [],
//   _currentId: 0,
//   createTransaction(amount, type) {
//     return {
//       id: this._currentId++,
//       amount,
//       type,
//     };
//   },
//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance += amount;
//     return transaction;
//   },
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('no money no honey');
//       return;
//     }
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//     return transaction;
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     console.log('no transaction with such id');
//   },
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }
//     return sum;
//   },
// };

// console.log(account.deposit(100));
// console.log(account.deposit(200));
// console.log(account.withdraw(100));
// console.log(account.withdraw(300));

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(1));
// console.log(account.getTransactionDetails(100));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third);

// const fourth = { ...second, ...first };
// console.log(fourth);

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     // return this.potions;
//     for (const pos of this.potions) {
//       console.log(pos);
//     }
//   },

//   addPotion(newPotion) {
//     for (const pot of this.potions) {
//       if (pot.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potion.name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const pot of this.potions) {
//       if (pot.name === oldName) {
//         pot.name = newName;
//       }
//     }

//   },
// };

// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.table(atTheOldToad.getPotions());

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (firstArray) {
//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray);
//     }
//   });

//   // return commonElements ;
//   console.log(commonElements);
//   // Change code above this line
// }

// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push((element += value));
//     } else {
//       newArray.push(element);
//     }
//   });
//   console.log(newArray);
//   // Change code above this line
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   console.log(numbers);
//   // Change code above this line
// }

// changeEven([44, 13, 81, 92, 36, 54], 100);

// Mod4 task 35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajaz", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, time) => {
//   return total + time.playtime / time.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operetion) {
//   operetion(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   const uniqFriends = allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   return uniqFriends;
// };

// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   const uniqFriends = allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   return uniqFriends;
// };

// const user = {
//   tag: "Mango",
//   method(value) {
//     console.log(`It is work! ${value}`, this);
//   },
// };

// const fn2 = function () {
//   console.log("It is work!", this);
// };
// user.method2 = fn2;

// const testOn = user.method();
// console.log(testOn);

// const testOff = user.method;
// console.log(testOff());

// console.log(user.method(25), "why undefined?");
// user.method();

// const user = {
//   tag: 'Mango',
//   showTag() {
//     // console.log('showTag -> this', this);
//     // console.log('showTag -> this', this.tag);
//     return 555;
//   },
// };
// // user.showTag();

// const outerShowTag = user.showTag();

// // outerShowTag();

// console.log(outerShowTag);

// const adder = {
//   futureTotal: 9,
//   base: 30,
//   // add: function (a) {
//   //   var f = v => v + this.base;
//   //   return f(a);
//   // },

//   addThruCall(a) {
//     // var f = v => v + this.futureTotal;
//     // var f = v => a + this.base;

//     const f = v => v + this.base;
//     // function fnB(v) {
//     //   v + this.base;
//     // }

//     const b = {
//       base: 10,
//     };
//     const df = addThruCall.bind(b, a);
//     return f.call(b, a); // выводит 33

//     // return fnB.call(b, a);// выводит undefind
//     // return f(b);         // выводит [object Object]30
//     // return f(this.base); // выводит 60
//     // return adder.base;   // выводит 30
//     // return f(b.base);    // выводит 40
//     // return f();          // выводит NaN;
//     // return f(a);         // выводит 33;
//   },
// };

// // console.log(adder.add(4)); // Выводит
// console.log(adder.addThruCall(3));

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const customer2 = {
//   firstName: 'Alex',
//   lastName: 'Petrov',
// };
// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }
// makeMessage(customer.getFullName.bind(customer2));
// // makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// let result = 0;
// for (let i = 0; i < 5; i++) {
//   result += i;
//   console.log(`${result} + ${i}`);
// }
// console.log(result);