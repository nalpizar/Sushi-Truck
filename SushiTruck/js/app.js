window.addEventListener('load', init, false);

function init() {
	let	width = window.innerWidth,
		height = window.innerHeight,
		c = document.getElementById("myCanvas"),
		context = c.getContext("2d"),
		truck = Truck(Vector(120,460), context);

	function update() {
		context.clearRect(0,0, width, height)
		// context.scale(0.5, 0.5);
		truck.update();
		requestAnimationFrame(update);
	}

	update();	

}

