let items = [['polo', 300], ['skirt', 200], ['t-shirt', 100]];
let cart = [];

let cartButton = document.querySelectorAll('.item-button');


/* обработчики событий вызывают функцию подсчета корзины при клике на кнопку в карточке */
cartButton[0].addEventListener('click', ()=> {CountBasketPrice(0)});
cartButton[1].addEventListener('click', ()=> {CountBasketPrice(1)});
cartButton[2].addEventListener('click', ()=> {CountBasketPrice(2)});


/* переносит копирует товары из массива с ними 
и добавляет их в массив корзины */
function addToCart(id) { 
	cart.push(items[id]);
	console.log(cart);
	return cart;
}


/* вызывает функцию добавления товаров в корзину,
проводит подсчет их стоимости и выводит данные на страницу*/
function CountBasketPrice(id) {
	cartItems = document.getElementById('cartItems');
	cartPrice = document.getElementById('cartPrice');
	cart = addToCart(id);
	sum = 0;
	for (let element of cart) {
		sum += element[1];
	}
	cartItems.innerHTML = cart.length;
	cartPrice.innerHTML = sum;
}







