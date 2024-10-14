// Задача 1: Переменные и типы данных

const name = "Алла";
const age = 27;
const city = "Санкт-Петербург";

console.log(name);
console.log(age);
console.log(city);

console.log(typeof name);
console.log(typeof age);
console.log(typeof city);

// Задача 2: Конкатенация строк

const firstName = "Алла";
const lastName = "Постникова";

const fullName = firstName + " " + lastName;

console.log(fullName);

// Задача 3: Преобразование типов

const strNumber = "30";

const number = Number(strNumber);

const isInteger = Number.isInteger(number);

console.log(number);
console.log(isInteger);

// Задача 4: Методы строк

const text = "JavaScript is fun!";

const substring = text.substring(14, 17);

const uppercaseSubstring = substring.toUpperCase();

console.log(uppercaseSubstring);

// Задача 5: Шаблонные строки

const product = "телефон";
const price = 25000;

const message = `Цена на ${product} составляет ${price} рублей.`;

console.log(message);

// Задача 6: Работа с числами

const floatNumber = 7.56;

const roundedNumber = Math.round(floatNumber);

console.log(roundedNumber);

// Задача 7: Сравнение значений

const number1 = 15;
const number2 = 20;

const isNumber1Greater = number1 < number2;

console.log(isNumber1Greater);

// Задача 8: Написание литералов

const person = {
  name: "Алла",
  age: 27,
  favoriteColor: "синий",
};

console.log(person);

// Задача 9: Методы чисел

const floatNumber1 = 5.67891;

const roundedNumber1 = floatNumber1.toFixed(2);

console.log(roundedNumber1);

// Задача 10: Преобразование строки в массив

const fruits = "apple, orange, banana";

const fruitsArray = fruits.split(", ");

console.log(fruitsArray);

// Задача 11: Проверка на NaN

const result = "apple" / 2;

console.log(result);

const isResultNaN = isNaN(result);

console.log(isResultNaN);

// Задача 12: Многострочный текст

const multilineText = `Это первая строка
Это вторая строка
Это третья строка`;

console.log(multilineText);

// Задача 13: Преобразование данных

const booleanValue = true;

const stringValue = booleanValue.toString();

console.log(stringValue);

const valueType = typeof stringValue;

console.log(valueType);

// Задача 14: Использование Symbol

const idSymbol = Symbol("id");

const user = {
  [idSymbol]: 12345,
  name: "John",
};

console.log(user);

console.log(user[idSymbol]);

console.log(user.name);

// Задача 15: Работа с массивом

const numbers = [5, 10, 15, 20, 25, 30];
const arrayLength = numbers.length;

console.log(numbers);
console.log(arrayLength);
