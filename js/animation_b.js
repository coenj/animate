// author: CoenJanssen.net
//global namespace
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ratio = canvas.width / canvas.height;

//local namespace
function linePoint() {

}

function linePoint(x, y) {
    this.x = x;
    this.y = y;
}

linePoint.prototype = {
    x: 10,
    y: 10,
    speedX: 4,
    speedY: 4,
    update: function () {
        if (this.x + this.speedX > canvas.width || this.x + this.speedX < 0) this.speedX = -this.speedX
        if (this.y + this.speedY > canvas.height || this.y + this.speedY < 0) this.speedY = -this.speedY
    },
    moveX: function () { this.x += this.speedX },
    moveY: function () { this.y += this.speedY },
}

function initPoints() {
    var array = [];

    for (x = 0; x < canvas.width; x = x + 30) {
        pos = Math.random() * canvas.width;
        array.push(new linePoint(pos, pos));
    }

    return array;
}

function Shape() {

}

function Shape(fill, stroke, x, y, //linePoints
) {
    this.fill = fill;
    this.stroke = stroke;
    // this.linePoints = this.linePoints;
    this.x = x;
    this.y = y;
}

Shape.prototype = {
    linePoints: [] = initPoints(),
    fill: 'yellow',
    stroke: 'blue',
    x: 10,
    y: 10,
}





var figure = {
    raf: {},
    shapes: [],
    running: false,
    drawLines: function (point) {
        point.update();
        point.moveX();
        point.moveY();
        ctx.lineTo(point.x, point.y);
    },
    draw: function (shape) {
        
        ctx.beginPath();
        ctx.moveTo(shape.x, shape.y);

        shape.linePoints.forEach(this.drawLines);
        ctx.closePath();

        ctx.fillStyle = shape.fill; //`rgba(0,128, 128, 0.5)`;
        ctx.strokeStyle = shape.stroke;
        ctx.stroke();
        ctx.fill();
    },
    drawShapes: function(){
        this.shapes.forEach(this.draw);
    }
    
}

var animation_a = function () {
    figure.drawShapes();
    raf = window.requestAnimationFrame(this.animate);
}



shape = new Shape(`rgba(0,128, 0, 0.5)`, 'purple', 0, 20);

figure.shapes.push(shape);

shape = new Shape(`rgba(0,0, 254, 0.5)`, 'grey', 600, 400);

figure.shapes.push(shape);

animation_a();

    /*
    canvas.addEventListener('mousemove', function (e) {
        if (!running) {
            clear();
            point.x = e.clientX;
            point.y = e.clientY;
            point.draw();
        }
    });
    
    canvas.addEventListener('click', function (e) {
        if (!running) {
            raf = window.requestAnimationFrame(draw);
            running = true;
        }
    });
    
    canvas.addEventListener('mouseout', function (e) {
        window.cancelAnimationFrame(raf);
        running = false;
    });
    
    */

