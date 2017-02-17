function Lamp(position, isLast, context) {
    if (!(this instanceof Lamp)) {
        return new Lamp(position, isLast, context);
    }

    this.position = position;
    this.context = context;
    this.isLast = isLast;
    this.angle = randomBtween(-5, 5);
    this.rightMax = randomBtween(10, 15);
    this.leftMax = randomBtween(-15, 10);
    this.speed = randomBtweenFloat(0.1, 0.3);
    this.isMovingRight = true;
    this.isMovingLeft = false;

}

Lamp.prototype.update = function () {

    if (this.isMovingRight) {
        if (this.angle < this.rightMax) {
            this.angle += this.speed;
        } else {
            this.isMovingRight = false;
            this.isMovingLeft = true;
        }
    }

    if (this.isMovingLeft) {
        if (this.angle > this.leftMax) {
            this.angle -= this.speed;
        } else {
            this.isMovingRight = true;
            this.isMovingLeft = false;
        }
    }

    this.render();
}

Lamp.prototype.render = function () {

    this.context.translate(this.position.x, this.position.y);
    this.context.rotate((Math.PI / 180) * this.angle);

    // Lampara
    this.context.beginPath();
    this.context.rect(-18, 37, 36, 32);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(-18, 37, 36, 32);
    this.context.fillStyle = "#ff382e";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(0, 65, 18, 0, 2 * Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(0, 37, 18, 0, 2 * Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    // this.context.beginPath();
    // this.context.moveTo(this.position.x + 46, 18);
    // this.context.bezierCurveTo(this.position.x + 46, 0, this.position.x + 30, 0, this.position.x + 30, 18);
    // this.context.lineWidth = 2;
    // this.context.stroke();
    // this.context.closePath();

    this.context.beginPath();
    this.context.rect(-10, 18, 20, 5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(-10, 80, 20, 5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    this.context.resetTransform();

    if (!this.isLast) {
        this.context.beginPath();
        this.context.moveTo(this.position.x, 5);
        this.context.quadraticCurveTo(this.position.x + 40, 20, this.position.x + 80, 5);
        this.context.lineWidth = 2;
        this.context.stroke();
        this.context.closePath();
    }
}
