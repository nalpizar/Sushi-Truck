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
		let house = House(Vector(300, 380), taoism, context);
		pool.push(house);
		imagesLoaded();
	}, false);


	function imagesLoaded() {
		//Create object 
		let truck = Truck(Vector(120, 460), context);
		pool.push(truck);

		let xpos = 200;
		for (var i = 0; i < 8; i++) {
			let lamp = Lamp(Vector(xpos, 0), false, context);
			pool.push(lamp);
			xpos += 80;
		}

		let lastLamp = Lamp(Vector(xpos, 0), true,
			context);
		pool.push(lastLamp);

		for (var i = 0; i < 10; i++) {
			let sushi = Sushi(Vector(randomBtween(100, width - 100), randomBtween(0, -300)), context);
			pool.push(sushi);
			xpos += 80;
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

