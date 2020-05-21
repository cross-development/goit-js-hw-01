'use strict';

const deliveryPriceToChina = 100;
const deliveryPriceToChile = 250;
const deliveryPriceToAustralia = 170;
const deliveryPriceToIndia = 80;
const deliveryPriceToJamaica = 120;

const deliveryCountries = ['Китай', 'Чили', 'Австралия', 'Индия', 'Ямайка'];

let userCountry = prompt('Укажите страну доставки!');

if (userCountry === null) {
	alert('Ничего не указано!');
} else {
	//преобразование введенной пользователем строки к стандартной (с заглавной буквы)
	userCountry = userCountry.charAt(0).toUpperCase() + userCountry.substr(1).toLowerCase();

	switch (userCountry) {
		case deliveryCountries[0]:
			alert(`Доставка в ${userCountry} будет стоить ${deliveryPriceToChina} кредитов`);
			break;
		case deliveryCountries[1]:
			alert(`Доставка в ${userCountry} будет стоить ${deliveryPriceToChile} кредитов`);
			break;
		case deliveryCountries[2]:
			alert(`Доставка в ${userCountry} будет стоить ${deliveryPriceToAustralia} кредитов`);
			break;
		case deliveryCountries[3]:
			alert(`Доставка в ${userCountry} будет стоить ${deliveryPriceToIndia} кредитов`);
			break;
		case deliveryCountries[4]:
			alert(`Доставка в ${userCountry} будет стоить ${deliveryPriceToJamaica} кредитов`);
			break;
		default:
			alert('В вашей стране доставка не доступна');
	}
}
