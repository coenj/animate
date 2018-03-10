// author: CoenJanssen.net
//global namespace
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ratio = canvas.width / canvas.height;

//local namespace
var animation_a = (function () {

    //var linePoints = [];
    var raf;
    var shapes = [];
    var running = false;

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


    function clear() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawLines(point) {
        point.update();
        point.moveX();
        point.moveY();
        ctx.lineTo(point.x, point.y);
    }

    function draw(shape) {
        clear();
        ctx.beginPath();
        ctx.moveTo(shape.x, shape.y);
        
        shape.linePoints.forEach(drawLines);
        ctx.closePath();

        ctx.fillStyle = shape.fill; //`rgba(0,128, 128, 0.5)`;
        ctx.strokeStyle = shape.stroke;
        ctx.stroke();
        ctx.fill();
    }

    function animate() {
        shapes.forEach(draw);
        raf = window.requestAnimationFrame(animate);
    }


    shape = new Shape(`rgba(0,128, 0, 0.5)`, 'purple', 0, 20);

    shapes.push(shape);

    shape = new Shape(`rgba(0,0, 254, 0.5)`, 'grey', 600, 400);

    shapes.push(shape);

    animate(shapes);

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
})();
