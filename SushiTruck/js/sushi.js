function Sushi(position, context) {
    if (!(this instanceof Sushi)) {
        return new Sushi(position, context);
    }
    this.velocity = Vector(0, 1);
    this.position = position;
    this.context = context;
    this.angle = randomBtween(-5, 5);
    this.rightMax = randomBtween(10, 15);
    this.leftMax = randomBtween(-15, 10);
    this.speed = randomBtween(1, 5);
    this.isMovingRight = true;
    this.isMovingLeft = false;
}

Sushi.prototype.update = function () {

    this.angle += this.speed;
    this.position.add(this.velocity);

    this.checkBounderies();
    this.render();

}

Sushi.prototype.render = function () {
    //Sushi 1
    // Sushi - Alga
    this.context.translate(this.position.x, this.position.y);
    this.context.rotate(toRadians(this.angle));
    this.context.beginPath();
    this.context.fillStyle = "#455560";
    this.context.arc(0, 0, 25, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    // Sushi - Arroz
    this.context.beginPath();
    this.context.fillStyle = "#e6e6e6";
    this.context.arc(0, 0, 20, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    // Sushi - Pescado
    this.context.beginPath();
    this.context.fillStyle = "#d75a4a";
    this.context.arc(8, 0, 5, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.fillStyle = "#d75a4a";
    this.context.arc(-4, 0, 5, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    this.context.resetTransform();
}

Sushi.prototype.checkBounderies = function () {
    if (this.position.y > window.innerHeight) {
        this.position.y = -50;
    }
}