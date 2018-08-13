	let summMonth,
	nameShop,
	time,
	price = 100;



function start() {
	summMonth = prompt('Ваш бюджет на месяц?', '');

	while (isNaN(summMonth) || summMonth =='' || summMonth == null) {
		summMonth = prompt('Ваш бюджет на месяц?', '');
	}

	nameShop = prompt('Название вашего магазина?', '');
	while(nameShop == '' || nameShop == null) {
		nameShop = prompt('Название вашего магазина?', '');
	}
	nameShop = nameShop.toUpperCase();

	time = 32;
}
// start();

mainList = {
		summMonth: summMonth,
		nameShop: nameShop,
		shopGoods: [],
		employers: {},
		open: false,
		discount: true,
		shopItems: [],
		hireEmployers: function hireEmployers () {
			for(let i = 1; i < 5; i++) {

				
				let a = prompt('Введите ваше имя', '');
				
					if ((typeof(a))  === 'string' && (typeof(a))  != null && a != '' && a.length < 50) {
						console.log('Все верно!');
						mainList.employers[i] = a;

					} else {
						console.log('Вы ввели неправильное имя');
						i--;
				}
			}
		},
		chooseGood:function chooseGood () {
				let i = 0;
				do {
					let a = prompt('Какой тип товаров будем продавать?', '');
					
					if ((typeof(a))  === 'string' && (typeof(a))  != null && a != '' && a.length < 50) {
						console.log('Все верно!');
						mainList.shopGoods[i] = a;
						i++;
					} else {
						console.log('Вы ввели неправильное название товара');
						
					}
				} while (i < 5);
			
		},
		workTime: function workTime (time) {
				if (time < 0) {
				console.log('Такого не может быть');
				} else if (time > 0 && time < 20) {
					console.log('Время работать');
					mainList.open = true;
				} else if (time < 24) {
					console.log('Уже поздно');
				} else {
					console.log('В сутках только 24 часа');
				}
		},
		dailySum: function dailySum () {
			alert('Бюджет за 1 день = '+ mainList.summMonth/30);
		},
		discountPrice: function discountPrice () {
			if (mainList.discount) {
				console.log('Цена со скидкой ' + price*0.8);
			} else console.log(price);
			
		},
		chooseShopItems: function chooseShopItems () {
			let items = prompt('Перечислите через звпятую ваши товары', '');
				
				for(let i = 0; i < 2; ++i)	{

					if ( (typeof(items))  === null || (typeof(items)) === ''){
						--i;
					} else {
						mainList.shopItems = items.split(",");
						mainList.shopItems.push(prompt('Подождите еще', ''));
						mainList.shopItems.sort();
					}

				}
	
		},
		printItems: function printItems () {
			mainList.shopItems.forEach (function(item, i) {
				console.log('У нас вы можете купить: ' + i + '' + item);
			})
		},

		includeShop: function includeShop () {
			for (key in mainList.shopItems) {
				console.log('Наш сагазин включает в себя:' + mainList.shopItems[key])
			}	
		}

};





// hireEmployers();



// chooseGood ();


// workTime(time);



// dailySum();


// discountPrice(mainList.discount);

console.log(mainList);