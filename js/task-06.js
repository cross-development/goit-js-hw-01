'use strict';

let input;
let total = 0;
let regularExp = /\s/;

// do {
//     input = prompt("Введите число!");
//     total += Number(input);
// } while (input !== null);

do {
	input = prompt('Введите целое число:');
	//проверка действия пользователя на ввод строки / нажания "ОК" / пробелов
	if (isNaN(input) || input === '' || regularExp.test(input)) {
		alert('Было введено не число, попробуйте еще раз!');
	} else {
		total += Number(input);
	}
} while (input !== null);

alert(`Общая сумма чисел равна: ${total}`);
