// author: CoenJanssen.net

animation["o"] = function () {

    //this part of the function uses closure, to make this functions and variables private and run once
    var shapes = [];
    var head =[
        408.62109,5.375,
        432,62.800046,
        426.98334,181.18878,
        428.39145,313.27397,
        411.01752,368.89834,
        383.31392999999997,394.34184000000005,
        412.32061,382.18940000000003,
        424.90269,427.56691,
        426.37305000000003,489.65039,
        403.99722,508.93424000000005,
        280.20309000000003,423.24195000000003,
        247.93945000000002,325.92188000000004,
        213.38878000000003,341.34800000000007,
        207.57215000000002,354.53773000000007,
        189.61989000000003,396.94806000000005,
        132.29967000000002,401.29513000000003,
        104.21427000000003,400.13688,
        124.40582000000003,377.77986000000004,
        211.77148000000005,295.02734000000004,
        241.61074000000005,256.17874000000006,
        228.85120000000006,223.55501000000007,
        176.27391000000006,230.79076000000006,
        138.93888000000004,223.09076000000007,
        108.98326000000004,242.17331000000007,
        101.62660000000004,277.14205000000004,
        142.87207000000004,259.10615,
        71.08475800000004,327.58358,
        23.33870800000004,408.57719,
        45.49804700000004,454.27344,
        69.87500000000004,556.53906,
        94.91627000000004,476.29070999999993,
        97.34435800000004,520.7368799999999,
        102.96473000000005,559.1607399999999,
        135.77635000000004,575.5963899999999,
        168.54350000000005,593.13802,
        210.91277000000005,539.17944,
        163.14062000000004,485.57421999999997,
        39.392885000000035,414.49555999999995,
        43.897242000000034,403.64703999999995,
        73.17578100000003,417.08593999999994,
        112.44968000000003,439.2195499999999,
        154.01160000000004,439.97410999999994,
        205.93383000000006,509.23815999999994,
        236.25172000000006,607.1603799999999,
        266.5057100000001,501.4468099999999,
        229.1835900000001,469.9980499999999,
        146.05247000000008,414.5829499999999,
        179.2425800000001,430.4749799999999,
        242.3320300000001,445.6894499999999,
        263.29883000000007,457.4453099999999,
        264.3770600000001,494.6151999999999,
        363.9082000000001,532.0195299999999,
        417.14810000000006,606.8977499999999,
        359.37715000000003,629.9470999999999,
        235.22812000000005,633.2151699999998,
        399.79347000000007,635.0112399999998,
        408.2454400000001,639.7203399999999,
        36.75464800000009,640.1241599999998,
        32.939453000000086,564.6269499999999,
        16.645982000000085,545.1380699999999,
        13.320312000000085,592.8730499999998,
        3.2992684,484.17353,
        3.9491561,267.25545,
        24.734375,206.72266,
        41.880859,201.125,
        73.203859,213.0254,
        87.49666599999999,241.33897,
        143.24746,194.31331,
        135.84335,180.78332,
        127.59655999999998,164.5906,
        160.60747999999998,155.16151,
        182.17753,182.96446,
        201.21260999999998,179.97165,
        191.65179999999998,161.44276000000002,
        192.3962,143.17638000000002,
        170.55501999999998,110.25032000000002,
        103.31054999999998,130.60156,
        92.872475,60.243873,
        49.717363,53.002535,
        49.084094,87.827514,
        51.325319,109.41591,
        73.239181,177.24265,
        21.108846,109.56872,
        10.468906,101.50985,
        22.302734,57.839844,
        5.0270957,16.175898,
        45.341755,1.1041124
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

        for (i=0; i< head.length; i+=2) {
            posX =head[i];
            posY =head[i+1]
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

        shape = new Shape(`rgba(254,0, 128, 0.9)`, 'black',10, 0, 120);

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
        clear();
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

animation["o"].play=true;

