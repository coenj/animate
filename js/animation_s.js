// author: CoenJanssen.net

animation["s"] = function () {

    //this part of the function uses closure, to make this functions and variables private and run once
    var shapes = [];
    var path =[
        185.86807,925.08299,
363.65491999999995,925.08299,
363.65491999999995,652.3417999999999,
438.08955999999995,609.3669399999999,
438.08955999999995,519.0016699999999,
372.57776999999993,481.17841999999985,
372.57776999999993,292.72749999999985,
426.2222499999999,307.10148999999984,
500.43148999999994,349.94620999999984,
550.8157399999999,437.21428999999983,
571.4375999999999,360.2524599999998,
478.23047999999983,267.0453499999998,
409.5401099999998,198.3549799999998,
333.7786699999998,122.59353999999982,
252.5381399999998,122.59353999999982,
230.1006099999998,145.03105999999983,
235.4899299999998,165.14426999999984,
232.17213999999979,177.52643999999984,
205.1374299999998,224.35193999999984,
241.3745599999998,234.06164999999984,
211.77036999999982,251.15363999999985,
234.46369999999982,264.2556299999999,
220.17360999999983,278.5457199999999,
259.2732599999998,301.1199099999999,
316.92168999999984,285.6730599999999,
307.69883999999985,320.0931999999999,
265.8049399999999,344.2806499999999,
187.93383999999986,389.2395499999999,
170.55928999999986,419.3331499999999,
195.71002999999985,462.89551999999986,
252.53396999999984,495.70283999999987,
300.68433999999985,467.9032099999999,
288.63579999999985,512.8689899999999,
265.11440999999985,553.6092299999999,
301.83739999999983,617.2153,
270.2994899999998,734.91635,
311.1013499999998,805.58724
    ];
        
        
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

        for (i=0; i< path.length; i+=2) {
            posX =path[i];
            posY =path[i+1]
            array.push(new linePoint(posX, posY));
        }

        return array;
    }

    function Shape() {
        this.linePoints = initPoints();
    }

    function Shape(fillStyle, stroke, lineWidth, x, y, //linePoints
    ) {
        this.fillStyle = fillStyle;
        this.stroke = stroke;
        this.lineWidth= lineWidth;
        // this.linePoints = this.linePoints;
        this.x = x;
        this.y = y;
        this.linePoints = initPoints();
    }

    Shape.prototype = {
        linePoints: [],
        fillStyle: 'blue',
        stroke: 'yellow',
        x: 10,
        y: 10,
    }


    function setup() {

        shape = new Shape(`rgba(254,254, 254, 0.5)`, 'black',10, 0, 120);

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
/*
    function draw(shape) {
        clear();
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
*/

    function draw(shape) {
        
        ctx.beginPath();
        ctx.moveTo(shape.linePoints[0], shape.linePoints[1]);
        shape.linePoints.forEach(drawLines);
        ctx.closePath();

        //ctx.fillStyle = shape.fill; //`rgba(0,128, 128, 0.5)`;
        ctx.strokeStyle = shape.stroke;
        ctx.fillStyle=shape.fillStyle;
        ctx.lineWidth=shape.lineWidth;
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

animation["s"].play=true;

