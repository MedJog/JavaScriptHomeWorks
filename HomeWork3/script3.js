/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени*/
const power = (num) => num ** 3;
console.log(power(2));
console.log(power(3));

/*Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно. Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"*/
const calculateTax = (salary) => salary - salary * 0.13;
let mySalary = +prompt('Введите число');
if (isNaN(mySalary) === false) {
 console.log(`Размер заработной платы за вычетом налогов равен ${calculateTax(mySalary)}.` );
} else console.log("Вы ввели неверное значение.");

// все в одной функции
function calculateSalary () {
  let salary = +prompt('Введите число');
  if (isNaN(salary) === false) {
    let result = salary - salary * 0.13;
    console.log(`Размер заработной платы за вычетом налогов равен ${result}.` );
   } else console.log("Вы ввели неверное значение.");
}
calculateSalary ();

/*Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/
function maxNumber(num1, num2, num3) {
  let max = num1;
  if (num2 > max) max = num2;
  if (num3 > max) max = num3;
  return max;
}
let number1 = +prompt('Введите число');
let number2 = +prompt('Введите число');
let number3 = +prompt('Введите число');
console.log(maxNumber(number1, number2, number3));

/*Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.*/
const sum = (num1, num2) => num1 + num2; // сложение
function quotient (num1, num2) { // вычитание
  if (num1 > num2) return num1 - num2;
  if (num1 < num2) return num2 - num1;
  else return 0;
}
const multiplication = (num1, num2) => num1 * num2; // умножение
const division = (num1, num2) => num1 / num2; //деление

console.log(sum(2,6));
console.log(quotient(-12,32));
console.log(multiplication(2,5));
console.log(division(14,2));