// author: CoenJanssen.net

animation["i"] = function () {

    //this part of the function uses closure, to make this functions and variables private and run once
    var shapes = [];
    var head = [10, 10, 20, 20, 30, 30, 40, 40];
    var imagePath = "m 300,172.3622 -191.42857,220 c 0,0 28.57143,262.85715 168.57143,205.71429 140,-57.14286 231.42857,-8.57143 231.42857,-8.57143 L 500,360.93363 l 91.42857,-100 z"
    var vectors = imagePath.split(" ");

    var svgTemplate = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg
       xmlns:dc="http://purl.org/dc/elements/1.1/"
       xmlns:cc="http://creativecommons.org/ns#"
       xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
       xmlns:svg="http://www.w3.org/2000/svg"
       xmlns="http://www.w3.org/2000/svg"
       version="1.1"
       id="svg2"
       viewBox="0 0 744.09448819 1052.3622047"
       height="297mm"
       width="210mm">
      <defs
         id="defs4" />
      <metadata
         id="metadata7">
        <rdf:RDF>
          <cc:Work
             rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type
               rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title></dc:title>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g
         id="layer1">
        <path
           id="path4136"
           d="${imagePath}"
           style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      </g>
    </svg>
    `;
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

        for (i = 0; i < head.length; i += 2) {
            posX = head[i];
            posY = head[i + 1]
            array.push(new linePoint(posX, posY));
        }

        return array;
    }


   var init= function initVectors() {
        var vectorPoint= new linePoint;
        for (i = 0; i < vectors.length; i++) {
            if (vectors[i] == "l") {
                
                v = vectors[i+1].split(",");
               linePoint(v[0],v[1]);

            }

        }
    }();

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

    function drawBeziers(cp1, cp2, point) {
        point.update();
        point.moveX();
        point.moveY();
        ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, point.x, point.y);
    }

    function draw(shape) {
        clear();
        document.body.innerHTML = svgTemplate;
        ctx.beginPath();
        ctx.moveTo(shape.linePoints[0].x, shape.linePoints[0].y);
        o = shape;

        for (var i = 0; i < o.linePoints.length - 2; i += 3) {

            drawBeziers(o.linePoints[i], o.linePoints[i + 1], o.linePoints[i + 2]);
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

animation["i"].play = true;

