var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ratio = canvas.width / canvas.height;
var linePoints = [];
var shapes = [];

function Shape() {

}

function Shape(fill, stroke, x, y, linePoints) {
    this.fill = fill;
    this.stroke = stroke;
    this.linePoints = this.linePoints;
    this.x = x;
    this.y = y;
}


Shape.prototype = {
    linePoints: [],
    fill: 'green',
    stroke: 'orange',
    x: 10,
    y: 10,
    linePoints: []
}

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
    inCanvasY: function () { if (this.y + this.speedY > canvas.height || this.y + this.speedY < 0) this.speedY = -this.speedY },
    inCanvasX: function () { if (this.x + this.speedX > canvas.width || this.x + this.speedX < 0) this.speedX = -this.speedX },

    moveX: function () {
        this.x += this.speedX
    },
    moveY: function () { this.y += this.speedY },

    /*draw: function () {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 10, this.y + 10);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'green';
        ctx.stroke();
        ctx.fill();
    }
    */
}

function initPoints() {
    var array = [];

    for (x = 0; x < canvas.width; x = x + 30) {

        //linePoints.push(new linePoint(x, x - x / ratio));
        pos = Math.random() * canvas.width;
        array.push(new linePoint(pos, pos));
        }
        return array;
}

function clear() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawLines(point) {
    point.inCanvasX();
    point.inCanvasY();
    point.moveX();
    point.moveY();
    ctx.lineTo(point.x, point.y);
}


function draw(shape) {
    //clear();

    ctx.beginPath();
    ctx.moveTo(shape.x, shape.y);
o=shape;
    o.linePoints.forEach(drawLines);
    ctx.closePath();

    ctx.fillStyle = shape.fill; //`rgba(0,128, 128, 0.5)`;
    ctx.strokeStyle = shape.stroke;
    ctx.stroke();
    ctx.fill();

    
}

function animate(){
    
    shapes.forEach(draw);    
 
    raf = window.requestAnimationFrame(animate);
}

var points = [];
points=initPoints();
shape = new Shape(`rgba(128,0, 0, 0.5)`, 'blue',0, 20);
shape.linePoints=points;
shapes.push(shape);

shape = new Shape(`rgba(0,128, 128, 0.5)`, 'green',600, 400);
points=initPoints();
points.push(new linePoint(100,800));
shape.linePoints=points;

shapes.push(shape);

animate(shapes);



/*
function drawInPlace(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 10);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'orange';
    ctx.stroke();
    ctx.fill();
}
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

