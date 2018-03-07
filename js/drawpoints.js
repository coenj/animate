var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function linePoint(x, y){
 
}

function linePoint(x, y){
    this.x=x;
    this.y=y;
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
    moveY: function () {  this.y += this.speedY }, 
   
    draw: function () {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 10, this.y + 10);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'green';
        ctx.stroke();
        ctx.fill();
    }
}

linePoints = [new linePoint(600,50), new linePoint(300,300), new linePoint(10,10)];


function clear() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    //clear();
    
    for (i=0; i<linePoints.length; i++){

        let point = linePoints[i];  
        point.draw();     
        point.inCanvasY();
        point.inCanvasX()
        point.moveX();
        point.moveY();
    
    }
    
    raf = window.requestAnimationFrame(draw);
}

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

draw();