let items = [{ 'polo': 300 }, { 'skirt': 200 }, { 't-shirt': 100 }];
let cart = [];

let cartButton = document.querySelectorAll('.item-button');
let clearButton = document.getElementById('clearButton');


/* обработчики событий вызывают функцию подсчета корзины при клике на кнопку в карточке */
cartButton[0].addEventListener('click', () => { CountBasketPrice(0) });
cartButton[1].addEventListener('click', () => { CountBasketPrice(1) });
cartButton[2].addEventListener('click', () => { CountBasketPrice(2) });


/* переносит копирует товары из массива с ними 
и добавляет их в массив корзины */
function addToCart(id) {
	cart.push(items[id]);
	return cart;
}


/* вызывает функцию добавления товаров в корзину,
проводит подсчет их стоимости и выводит данные на страницу*/
function CountBasketPrice(id) {
	cartItems = document.getElementById('cartItems');
	cartPrice = document.getElementById('cartPrice');
	nameItems = document.getElementById('nameItems');
	clearButton = document.getElementById('clearButton');
	// корзина после добавления товаров
	cart = addToCart(id);
	// общая сумма
	sum = 0;
	// строка наименования товаров
	string = '';
	// обход корзины
	for (let element of cart) {
		// обход ключей в объектах товаров корзины
		for (let key in (element)) {
			/* формирование наименований товаров с ценами и общей цены корзины */
			string += ` ${key} ${element[key]}, `;
			sum += element[key];
		}
	}
	/*обработчик очищает корзину путем внесения
	изменений в HTML и очищения массива корзины */
	clearButton.addEventListener('click', clear);
	function clear() {
		cartItems.innerHTML = 0;
		nameItems.innerText = 'Корзина пуста';
		cartPrice.innerHTML = 0;
		cart = [];
	}

	// внесение изменений в HTML корзины
	cartItems.innerHTML = cart.length;
	nameItems.innerText = string;
	cartPrice.innerHTML = sum;


}







