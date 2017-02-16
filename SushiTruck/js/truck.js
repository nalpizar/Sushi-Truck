/**
 * Truck
 * Creates small food truck
 * @constructor
 * @param {Vector} position - Defines the position of the circle.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */


 
function Truck(position, context) {

    if (!(this instanceof Truck)) {
        return new Truck(position, context);
    }

    this.topColor = '#ff7c76';
    this.bottomColor = '#d32054';
    this.windowColor = '#81b6c9';
    this.color1 = '#cfe2e2';
    this.context = context;
    this.position = position;
    this.truckWidth = 230;
    this.angle = 0;

    //Wheel Left
    this.wheell = Wheel(Vector(this.position.x + 60, this.position.y + 170), this.context);

    //Wheel Right
    this.wheelr = Wheel(Vector(this.position.x + 215, this.position.y + 170), this.context);
}

Truck.prototype.update = function () {
    this.render();
    this.wheell.update();
    this.wheelr.update();
}

Truck.prototype.render = function () {
    //Sushi
    // this.context.beginPath();
    // this.context.ellipse(240, 105, 45, 75, 90 * Math.PI/180, 0, 2 * Math.PI);
    // this.context.fillStyle = '#fff';
    // this.context.fill();

    //Sushi dots
    // this.context.beginPath();
    // this.context.ellipse(240, 105, 10, 5, 90 * Math.PI/180, 0, 2 * Math.PI);
    // this.context.fillStyle = '#dbd2d5';
    // this.context.fill();

    // Lampara
    this.context.beginPath();
    this.context.rect(20,37,36,32);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(20,37,36,32);
    this.context.fillStyle = "#ff382e";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(38, 65,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(38, 37,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(28,18,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.moveTo(46,18);
    this.context.bezierCurveTo(46, 0, 30, 0, 30, 18);
    this.context.lineWidth = 2;
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(28,80,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    // Lampara 2
    this.context.beginPath();
    this.context.rect(100,37,36,32);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(100,37,36,32);
    this.context.fillStyle = "#ff382e";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(118, 65,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(118, 37,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(108,18,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.moveTo(126,18);
    this.context.bezierCurveTo(126, 0, 110, 0, 110, 18);
    this.context.lineWidth = 2;
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(108,80,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    // Lampara 3
    this.context.beginPath();
    this.context.rect(180,37,36,32);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(180,37,36,32);
    this.context.fillStyle = "#ff382e";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(198, 65,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(198, 37,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(188,18,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.moveTo(206,18);
    this.context.bezierCurveTo(206, 0, 190, 0, 190, 18);
    this.context.lineWidth = 2;
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(188,80,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    // Lampara 4
    this.context.beginPath();
    this.context.rect(260,37,36,32);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(260,37,36,32);
    this.context.fillStyle = "#ff382e";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(278, 65,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(278, 37,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(268,18,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.moveTo(286,18);
    this.context.bezierCurveTo(286, 0, 270, 0, 270, 18);
    this.context.lineWidth = 2;
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(268,80,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();   

    // Lampara 5
    this.context.beginPath();
    this.context.rect(340,37,36,32);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(340,37,36,32);
    this.context.fillStyle = "#ff382e";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(358, 65,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(358, 37,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(348,18,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.moveTo(366,18);
    this.context.bezierCurveTo(366, 0, 350, 0, 350, 18);
    this.context.lineWidth = 2;
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(348,80,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath(); 

    // Lampara 6
    this.context.beginPath();
    this.context.rect(420,37,36,32);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(420,37,36,32);
    this.context.fillStyle = "#ff382e";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(438, 65,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(438, 37,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(428,18,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.moveTo(446,18);
    this.context.bezierCurveTo(446, 0, 430, 0, 430, 18);
    this.context.lineWidth = 2;
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(428,80,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath(); 

    // Lampara 7
    this.context.beginPath();
    this.context.rect(500,37,36,32);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(500,37,36,32);
    this.context.fillStyle = "#ff382e";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(518, 65,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(518, 37,18,0,2*Math.PI);
    this.context.fillStyle = "#de2f1b";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(508,18,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.moveTo(526,18);
    this.context.bezierCurveTo(526, 0, 510, 0, 510, 18);
    this.context.lineWidth = 2;
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(508,80,20,5);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    // Palito 1 - Izquierda
    this.context.beginPath();
    this.context.lineCap="round";
    this.context.lineWidth = 5;
    this.context.moveTo(40,110);
    this.context.lineTo(230,150);  
    this.context.strokeStyle = "#fbd490";
    this.context.stroke();
    this.context.closePath();

    // Palito 2 - Izquierda
    this.context.beginPath();
    this.context.lineCap="round";
    this.context.lineWidth = 5;
    this.context.moveTo(40,120);
    this.context.lineTo(230,120);
    this.context.strokeStyle = "#eeaf4b";
    this.context.stroke();
    this.context.closePath();

     // Palito 1 - Derecha
    this.context.beginPath();
    this.context.lineCap="round";
    this.context.lineWidth = 5;
    this.context.moveTo(510,130);
    this.context.lineTo(340,115); 
    this.context.strokeStyle = "#eeaf4b";
    this.context.stroke();
    this.context.closePath();

     // Palito 2 - Derecha
    this.context.beginPath();
    this.context.lineCap="round";
    this.context.lineWidth = 5;
    this.context.moveTo(510,120);
    this.context.lineTo(340,150); 
    this.context.strokeStyle = "#fbd490";
    this.context.stroke();
    this.context.closePath();

    //Sushi 1
    // Sushi - Alga
    this.context.beginPath();
    this.context.fillStyle = "#455560";
    this.context.arc(300, 150, 25, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    // Sushi - Arroz
    this.context.beginPath();
    this.context.fillStyle = "#e6e6e6";
    this.context.arc(300, 150, 20, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    // Sushi - Pescado
    this.context.beginPath();
    this.context.fillStyle = "#d75a4a";
    this.context.arc(300, 150, 10, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    //Sushi 2
    // Sushi - Alga
    this.context.beginPath();
    this.context.fillStyle = "#455560";
    this.context.arc(350, 305, 25, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    // Sushi - Arroz
    this.context.beginPath();
    this.context.fillStyle = "#e6e6e6";
    this.context.arc(350, 305, 20, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    // Sushi - Pescado
    this.context.beginPath();
    this.context.fillStyle = "#d75a4a";
    this.context.arc(350, 305, 10, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    //Sushi 3
    // Sushi - Alga
    this.context.beginPath();
    this.context.fillStyle = "#455560";
    this.context.arc(230, 235, 15, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    // Sushi - Arroz
    this.context.beginPath();
    this.context.fillStyle = "#e6e6e6";
    this.context.arc(230, 235, 10, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    // Sushi - Pescado
    this.context.beginPath();
    this.context.fillStyle = "#d75a4a";
    this.context.arc(230, 235, 5, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    //Sushi 4
    // Sushi - Alga
    this.context.beginPath();
    this.context.fillStyle = "#455560";
    this.context.arc(300, 325, 15, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    // Sushi - Arroz
    this.context.beginPath();
    this.context.fillStyle = "#e6e6e6";
    this.context.arc(300, 325, 10, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    // Sushi - Pescado
    this.context.beginPath();
    this.context.fillStyle = "#d75a4a";
    this.context.arc(300, 325, 5, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.closePath();

    //Lucesita de la parte de atras.
    let stop = Ball(Vector(this.position.x - 5, this.position.y + 15), 4, 'red', this.context);
    let stopBg = Line(Vector(this.position.x, this.position.y + 12), Vector(this.position.x, this.position.y + 20), 8, 'round', '#1b2d3d', this.context);

    //Calentador de arriba.
    // let hline = Line(Vector(this.position.x + 33, this.position.y), Vector(this.position.x + 65, this.position.y), 34, 'round', this.color1, this.context);
    // hline = Line(Vector(this.position.x + 30, this.position.y - 10), Vector(this.position.x + 32, this.position.y - 5), 4, 'round', '#355065', this.context);
    // hline = Line(Vector(this.position.x + 36, this.position.y - 10), Vector(this.position.x + 38, this.position.y - 5), 4, 'round', '#355065', this.context);
    // hline = Line(Vector(this.position.x + 42, this.position.y - 10), Vector(this.position.x + 44, this.position.y - 5), 4, 'round', '#355065', this.context);

    //Llanta o covertor de la llanta trasera
    let backTire = Line(Vector(this.position.x, this.position.y + 95), Vector(this.position.x, this.position.y + 130), 25, 'round', '#203547', this.context);

    //Parte de la carroseria superior
    this.context.fillStyle = this.topColor;
    this.context.beginPath();
    this.context.moveTo(this.position.x + 10, this.position.y);
    this.context.lineTo(this.position.x + this.truckWidth - 10, this.position.y);
    this.context.quadraticCurveTo(this.position.x + this.truckWidth, this.position.y, this.position.x + this.truckWidth, this.position.y + 10);
    this.context.lineTo(this.position.x + this.truckWidth + 10, this.position.y + 80);
    this.context.lineTo(this.position.x, this.position.y + 80);
    this.context.lineTo(this.position.x, this.position.y + 10);
    this.context.quadraticCurveTo(this.position.x, this.position.y, this.position.x + 10, this.position.y);
    this.context.fill();
    this.context.closePath();

    //Parte de la carroseria inferior
    this.context.fillStyle = this.bottomColor;
    this.context.beginPath();
    this.context.moveTo(this.position.x + this.truckWidth + 10, this.position.y + 80);
    this.context.lineTo(this.position.x + this.truckWidth + 30, this.position.y + 100);
    this.context.lineTo(this.position.x + this.truckWidth + 35, this.position.y + 160);
    this.context.quadraticCurveTo(this.position.x + this.truckWidth + 35, this.position.y + 170, this.position.x + this.truckWidth + 25, this.position.y + 170);
    this.context.lineTo(this.position.x + 10, this.position.y + 170);
    this.context.quadraticCurveTo(this.position.x, this.position.y + 170, this.position.x, this.position.y + 160);
    this.context.lineTo(this.position.x, this.position.y + 80);
    this.context.fill();
    this.context.closePath();


    //Ventana de ventas
    let salesWindow = RoundRect(Vector(this.position.x + 20, this.position.y + 20), 100, 80, 5, this.windowColor, this.context);

    //Base de la ventana de ventas
    let salesWindowBottom = RoundRect(Vector(this.position.x + 15, this.position.y + 85), 110, 15, 5, this.color1, this.context);

    //Lineas de adorno
    let line = Line(Vector(this.position.x, this.position.y + 170), Vector(this.position.x + 265, this.position.y + 170), 8, 'round', 'black', this.context);

    line = Line(Vector(this.position.x + 10, this.position.y + 110), Vector(this.position.x + 125, this.position.y + 110), 6, 'round', 'rgba(0,0,0,0.25)', this.context);

    line = Line(Vector(this.position.x + 10, this.position.y + 122), Vector(this.position.x + 125, this.position.y + 122), 6, 'round', 'rgba(0,0,0,0.25)', this.context);

    //Luz direccional
    let lightBg = Line(Vector(this.position.x + 10, this.position.y + 140), Vector(this.position.x + 20, this.position.y + 140), 12, 'round', 'white', this.context);

    let lightft = Line(Vector(this.position.x + 10, this.position.y + 140), Vector(this.position.x + 20, this.position.y + 140), 4, 'round', 'orange', this.context);

    //Ventan del chofer
    let points = [];
    points.push(ShapePoint(Vector(this.position.x + 220, this.position.y + 10), 10));
    points.push(ShapePoint(Vector(this.position.x + 230, this.position.y + 90), 10));
    points.push(ShapePoint(Vector(this.position.x + 190, this.position.y + 90), 10));
    points.push(ShapePoint(Vector(this.position.x + 190, this.position.y + 10), 10));
    this.context.fillStyle = this.windowColor;
    this.context.beginPath();
    this.context.moveTo(points[0].p.x - points[0].cr, points[0].p.y);
    this.context.quadraticCurveTo(points[0].p.x, points[0].p.y, points[0].p.x, points[0].p.y + points[0].cr);
    this.context.lineTo(points[1].p.x, points[1].p.y - points[1].cr);
    this.context.quadraticCurveTo(points[1].p.x, points[1].p.y, points[1].p.x - points[1].cr, points[1].p.y);
    this.context.lineTo(points[2].p.x + points[2].cr, points[2].p.y);
    this.context.quadraticCurveTo(points[2].p.x, points[2].p.y, points[2].p.x, points[2].p.y - points[2].cr);
    this.context.lineTo(points[3].p.x, points[3].p.y + points[3].cr);
    this.context.quadraticCurveTo(points[3].p.x, points[3].p.y, points[3].p.x + points[3].cr, points[3].p.y);
    this.context.closePath();
    this.context.fill();

    //Puerta
    points = [];
    points.push(ShapePoint(Vector(this.position.x + 180, this.position.y + 10), 10));
    points.push(ShapePoint(Vector(this.position.x + 180, this.position.y + 160), 10));
    points.push(ShapePoint(Vector(this.position.x + 140, this.position.y + 160), 10));
    points.push(ShapePoint(Vector(this.position.x + 140, this.position.y + 10), 10));
    this.context.strokeStyle = 'rgba(0,0,0,0.25)';
    this.context.lineWidth = 3;
    this.context.beginPath();
    this.context.moveTo(points[0].p.x - points[0].cr, points[0].p.y);
    this.context.quadraticCurveTo(points[0].p.x, points[0].p.y, points[0].p.x, points[0].p.y + points[0].cr);
    this.context.lineTo(points[1].p.x, points[1].p.y - points[1].cr);
    this.context.quadraticCurveTo(points[1].p.x, points[1].p.y, points[1].p.x - points[1].cr, points[1].p.y);
    this.context.lineTo(points[2].p.x + points[2].cr, points[2].p.y);
    this.context.quadraticCurveTo(points[2].p.x, points[2].p.y, points[2].p.x, points[2].p.y - points[2].cr);
    this.context.lineTo(points[3].p.x, points[3].p.y + points[3].cr);
    this.context.quadraticCurveTo(points[3].p.x, points[3].p.y, points[3].p.x + points[3].cr, points[3].p.y);
    this.context.closePath();
    this.context.stroke();

    //Manilla de puerta
    line = Line(Vector(this.position.x + 148, this.position.y + 100), Vector(this.position.x + 155, this.position.y + 100), 6, 'round', 'rgba(0,0,0,0.25)', this.context);

    //Ventanas de puerta
    this.context.beginPath();
    this.context.fillStyle = this.windowColor;
    this.context.strokeStyle = 'rgba(0,0,0,0.25)';
    this.context.lineWidth = 3;
    this.context.rect(this.position.x + 146, this.position.y + 18, 12, 70);
    this.context.rect(this.position.x + 162, this.position.y + 18, 12, 70);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();

    //Light
    let light1 = Ball(Vector(this.position.x + 245, this.position.y + 110), 10, 'white', this.context);
    let light2 = Ball(Vector(this.position.x + 245, this.position.y + 110), 6, '#f5c132', this.context);

    //Bumper frontal
    let bumperFrontSh = Line(Vector(this.position.x + 259, this.position.y + 159), Vector(this.position.x + 258, this.position.y + 157), 17, 'round', 'rgba(0,0,0,0.25)', this.context);

    let bumperFront = Line(Vector(this.position.x + 260, this.position.y + 155), Vector(this.position.x + 265, this.position.y + 156), 15, 'round', '#203547', this.context);

    //Bumper trasero
    let bumperBackSh = Line(Vector(this.position.x + 5, this.position.y + 158), Vector(this.position.x + 8, this.position.y + 158), 17, 'round', 'rgba(0,0,0,0.25)', this.context);

    let bumperBack = Line(Vector(this.position.x, this.position.y + 157), Vector(this.position.x + 5, this.position.y + 156), 15, 'round', '#203547', this.context);

    //Guarda barro izquierdo
    this.context.fillStyle = 'black';
    this.context.beginPath();
    this.context.arc(this.position.x + 60, this.position.y + 170, 35, Math.PI, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();

    //Guarda barro derecho 
    this.context.fillStyle = 'black';
    this.context.beginPath();
    this.context.arc(this.position.x + 215, this.position.y + 170, 35, Math.PI, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();
}

function ShapePoint(p, cr) {
    if (!(this instanceof ShapePoint)) {
        return new ShapePoint(p, cr);
    }

    this.p = p;
    this.cr = cr;
}
