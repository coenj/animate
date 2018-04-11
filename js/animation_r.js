// author: CoenJanssen.net

animation["r"] = function () {

    //this part of the function uses closure, to make this functions and variables private and run once
    var shapes = [];


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

        for (x = 0; x < canvas.width; x = x + 80) {
            pos = Math.random() * canvas.width;
            array.push(new linePoint(pos, pos));
            }

        return array;
    }

    function Shape() {
        this.linePoints = initPoints();
    }

    function Shape(fill, stroke, x, y, //linePoints
    ) {
        this.fill = fill;
        this.stroke = stroke;
        // this.linePoints = this.linePoints;
        this.x = x;
        this.y = y;
        this.linePoints = initPoints();
    }

    Shape.prototype = {
        linePoints: [],
        fill: 'green',
        stroke: 'red',
        x: 10,
        y: 10,
    }


    function setup() {

        shape = new Shape(`rgba(0,0, 254, 0.5)`, 'blue', 100, 20);

        shapes.push(shape);

        shape = new Shape(`rgba(128,128, 0, 0.5)`, 'purple', 600, 400);

        shapes.push(shape);
    }

    

    function drawLines(point) {
        point.update();
        point.moveX();
        point.moveY();
        ctx.bezierCurveTo(0,100, 200, 400, point.x, point.y);
    }



    function draw(shape) {
        //  clear();
        ctx.beginPath();
        ctx.moveTo(shape.x, shape.y);
        o = shape;
        o.linePoints.forEach(drawLines);
        ctx.closePath();

        ctx.fillStyle = shape.fill; //`rgba(0,128, 128, 0.5)`;
        ctx.strokeStyle = shape.stroke;
        ctx.stroke();
        ctx.fill();
    }
  
    function drawAll() {
        shapes.forEach(draw);
    }



    setup();
    
    // below is the only public part of the function
    return function () {           
        
        drawAll(shapes);
    }
}();

animation["r"].play=true;
