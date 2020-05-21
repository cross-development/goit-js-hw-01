'use strict';

const total = 100;
const ordered = 50;

const resultOfChecking =
	ordered <= total ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно твоаров!';
console.log(resultOfChecking);
