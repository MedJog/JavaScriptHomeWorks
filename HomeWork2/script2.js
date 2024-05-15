// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры.
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
console.log('Задание 1');
let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
if (num1 <= 1) {
  console.log(`Число ${num1} меньше или равно 1`);
} else console.log(`Число ${num1} больше 1`);
if (num2 >= 3) {
  console.log(`Число ${num2} больше или равно 3`);
} else console.log(`Число ${num2} меньше 3`);


// Задание 2
// Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }
console.log('Задание 2');
let test = true;
console.log(test === true ? '+++' : '---');



// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
console.log('Задание 3');
let day = +prompt('Введите число от 1 до 31 включительно');
if (day < 1 || day > 32 || Number.isFinite(day) === false) {
  console.log(`Вы ввели некорректное значение, в месяце не может быть ${day} дня.`);
}
else if (day >= 1 && day < 11) {
  console.log(`Число ${day} относится к первой декаде месяца.`);
}
else if (day >= 11 && day < 21) {
  console.log(`Число ${day} относится ко второй декаде месяца.`);
}
else {
  console.log(`Число ${day} относится к третьей декаде месяца.`);
}

// Задание 4*
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"
// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"
// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"
// Уточнение: пользователь всегда вводит корректное положительное целое число.
console.log('Задание 4*');
let number = +prompt('Введите число');
if (number < 1 || number > 10001 || Number.isFinite(number) === false) {
  console.log(`Вы ввели некорректное значение.`);
} 
else if (number === 10) {
  console.log(`В числе ${number} количество сотен: 0, десятков: 1, единиц: 0.`);
}
else if (number > 10 && number < 100) {
  let numberOfUnits = number % 10;
  let numberOfTens = Math.floor(number / 10);
  console.log(`В числе ${number} количество сотен: 0, десятков: ${numberOfTens}, единиц: ${numberOfUnits}.`);
}
else if (number >= 100 && number < 1000) {
  let numberOfUnits = number % 10; // количество единиц
  let numberOfTens = Math.floor(number / 10 % 10); // количество десятков
  let numberOfHundreds = Math.floor(number / 100); // количество сотен
  console.log(`В числе ${number} количество сотен: ${numberOfHundreds}, десятков: ${numberOfTens}, единиц: ${numberOfUnits}.`);
}
else if (number >= 1000 && number < 10001) {
  console.log(number);
  let numberOfUnits = number % 10; // количество единиц
  let numberOfTens = Math.floor(number / 10 % 10); // количество десятков
  let numberOfHundreds = Math.floor(number / 100 % 10); // количество сотен
  let numberOfThousands = Math.floor(number / 1000); // количество тысяч
  console.log(`В числе ${number} количество тысяч: ${numberOfThousands}, сотен: ${numberOfHundreds}, десятков: ${numberOfTens}, единиц: ${numberOfUnits}.`);
}