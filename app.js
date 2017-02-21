window.addEventListener('load', init, false);

function init() {
	let width = window.innerWidth,
		height = window.innerHeight,
		c = document.getElementById("myCanvas"),
		context = c.getContext("2d"),
		pool = [];

	c.width = width;
	c.height = height;


	let shinto = new Image();   // Create new img element
	shinto.src = '../img/shinto.png'; // Set source path

	shinto.addEventListener('load', function () {
		// execute drawImage statements here
		let house = House(Vector(100, 370), shinto, context);
		pool.push(house);

	}, false);

	let taoism = new Image();   // Create new img element
	taoism.src = '../img/taoism.png'; // Set source path
	taoism.addEventListener('load', function () {
		// execute drawImage statements here
		let house = House(Vector(450, 370), taoism, context);
		pool.push(house);
	}, false);

	let pagoda = new Image();   // Create new img element
	pagoda.src = '../img/pagoda.png'; // Set source path
	pagoda.addEventListener('load', function () {
		// execute drawImage statements here
		let house = House(Vector(790, 370), pagoda, context);
		pool.push(house);
	}, false);

	let forest = new Image();   // Create new img element
	forest.src = '../img/forest.png'; // Set source path
	forest.addEventListener('load', function () {
		// execute drawImage statements here
		let house = House(Vector(1100, 370), forest, context);
		pool.push(house);
	}, false);

	let forest2 = new Image();   // Create new img element
	forest2.src = '../img/forest.png'; // Set source path
	forest2.addEventListener('load', function () {
		// execute drawImage statements here
		let house = House(Vector(1300, 370), forest2, context);
		pool.push(house);
	}, false);

	let forest3 = new Image();   // Create new img element
	forest3.src = '../img/forest.png'; // Set source path
	forest3.addEventListener('load', function () {
		// execute drawImage statements here
		let house = House(Vector(1480, 370), forest3, context);
		pool.push(house);
		// imagesLoaded();
	}, false);

	let forest4 = new Image();   // Create new img element
	forest4.src = '../img/forest.png'; // Set source path
	forest4.addEventListener('load', function () {
		// execute drawImage statements here
		let house = House(Vector(290, 370), forest4, context);
		pool.push(house);
		// imagesLoaded();
	}, false);

	let forest5 = new Image();   // Create new img element
	forest5.src = '../img/forest.png'; // Set source path
	forest5.addEventListener('load', function () {
		// execute drawImage statements here
		let house = House(Vector(600, 370), forest5, context);
		pool.push(house);
		imagesLoaded();
	}, false);


	function imagesLoaded() {
		//Create object 
		let truck = Truck(Vector(120, 460), context);
		pool.push(truck);

		let xpos = 200;
		for (var i = 0; i < 13; i++) {
			let lamp = Lamp(Vector(xpos, 0), false, context);
			pool.push(lamp);
			xpos += 80;
		}

		let lastLamp = Lamp(Vector(xpos, 0), true,
			context);
		pool.push(lastLamp);

		for (var i = 0; i < 8; i++) {
			let sushi = Sushi(Vector(randomBtween(700, 800), randomBtween(0, -300)), context);
			pool.push(sushi);
			xpos += 200;
		}

		function update() {
			context.clearRect(0, 0, width, height)

			// context.scale(0.5, 0.5);

			context.fillStyle = 'gray';
			context.fillRect(0, 570, width, 300);
			

			pool.forEach(function (object) {
				object.update();
			}, this);

			requestAnimationFrame(update);
		}

		update();
	}

}

