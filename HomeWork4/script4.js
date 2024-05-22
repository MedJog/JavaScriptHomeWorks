/*Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/
console.log('Задание 1');
for (let index = 0; index <= 10; index++) {
  if (index === 0) {
    console.log(`${index} - это ноль`);
  } else if (index % 2 !== 0) {
    console.log(`${index} - это нечетное число`);
  } else {
    console.log(`${index} - это четное число`);
  }
}

/*Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/
console.log('Задание 2');
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(`Исходный массив ${arr}`);
arr.splice(3,2);
console.log(`Результат ${arr}`);

/*Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/
// сохдаём массив
function createArray(min, max, countElements) {
  const array = [];
  for (let i = 0; i < countElements; i++) {
    array.push(~~(Math.random() * (max - min) + min));
  }
  return array;
}
// находим сумму элементов
const sumArrayElements = (array) => array.reduce((acc, sum) => acc + sum);
// находим минимальный елемент массива
function findMinElement(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    } else continue;
  }
  return min;
}
// поиск элемента в массиве
function findElement(array, element) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      result = true;
      break;
    } else
      continue;
  }
  if (result === true) { console.log(`В этом массиве есть элемент ${element}.`); }
   else {
    console.log(`В этом массиве нет элемента ${element}.`);
  }
}
console.log('Задание 3');
const myArray = createArray(0, 9, 5);
console.log(myArray);
console.log(`Сумма элементов массива равна ${sumArrayElements(myArray)}.`);
console.log(`Минимальное число в массиве ${findMinElement(myArray)}.`);
findElement(myArray, 3);

/**Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx   */
console.log('*Необязательное задание.');
let element = 'x';
let pyramid = '';
for (let count = 0; count < 20; count++) {
  pyramid += element;
  console.log(pyramid);
}
// через функцию
function buildPyramid (element, countRows) {
  let myPyramid = '';
  for (let count = 0; count < countRows; count++) {
    myPyramid += element;
    console.log(myPyramid);
  }
}
buildPyramid (5, 5);
buildPyramid (':-)', 5);