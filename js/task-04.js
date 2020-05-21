'use strict';

let credits = 23580;
const pricePerDroid = 3000;

let quantityOfDroid = prompt('Количество дроидов которые Вы хотите купить?');
let totalPrice;

if (quantityOfDroid === null) {
	console.log('Отменено пользователем!');
} else {
	totalPrice = Number(quantityOfDroid) * pricePerDroid;

	if (totalPrice > credits) {
		console.log('Недостаточно средств на счету!');
	} else {
		credits -= totalPrice;
		console.log(`Вы купили ${quantityOfDroid} дроидов, на счету осталось ${credits} кредитов.`);
	}
}
