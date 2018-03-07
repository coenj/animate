var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ratio= canvas.width/canvas.height;
var linePoints = [];

function linePoint() {

}

function linePoint(x, y) {
    this.x = x;
    this.y = y;
}

linePoint.prototype = {
    x: 100,
    y: 100,
    speedX: 12,
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

function initPoints(){
    for (x=0; x<canvas.width; x=x+80){

        linePoints.push(new linePoint(x, x-x/ratio));
    }
}

function clear() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    //clear();


    ctx.beginPath();
    ctx.moveTo(linePoints[0].x, linePoints[0].y);

    for (i = 0; i < linePoints.length; i++) {

        let point = linePoints[i];
        point.inCanvasY();
        point.inCanvasX()
        point.moveX();
        point.moveY();
        ctx.lineTo(point.x, point.y);
    }

    ctx.closePath();
    ctx.fillStyle = `rgba(0,128, 128, 0.5)`;
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.fill();

    raf = window.requestAnimationFrame(draw);
}

initPoints();
draw();

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

