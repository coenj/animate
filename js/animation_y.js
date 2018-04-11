// author: CoenJanssen.net

animation["y"] = function () {

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

        for (x = 0; x < canvas.width; x = x + 30) {
            pos = Math.random() * canvas.width*ratio;
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
        fill: 'blue',
        stroke: 'yellow',
        x: 10,
        y: 10,
    }


    function setup() {

        shape = new Shape(`rgba(254,0, 128, 0.5)`, 'blue', 0, 120);

        shapes.push(shape);
        
    }

    

    function drawLines(point) {
        point.update();
        point.moveX();
        point.moveY();
        ctx.lineTo(point.x, point.y);
    }

    function drawBeziers(cp1, cp2, point) {
        point.update();
        point.moveX();
        point.moveY();
        ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, point.x, point.y);
    }

    function draw(shape) {
        
        ctx.beginPath();
        ctx.moveTo(shape.linePoints[0].x, shape.linePoints[0].y);
        o = shape;

        for(var i=0; i< o.linePoints.length-2; i+=3){

            drawBeziers(o.linePoints[i], o.linePoints[i+1], o.linePoints[i+2]);
        }
        
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

animation["y"].play=true;

