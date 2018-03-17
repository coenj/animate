// author: CoenJanssen.net

//local namespace

class Point {
    constructor(x, y, speedX, speedY) {
        this.x = 4;
        this.y = 4;
        this.speedX = 4;
        this.speedY = 4;
    }

    update() {
        if (this.x + this.speedX > canvas.width || this.x + this.speedX < 0) this.speedX = -this.speedX;
        if (this.y + this.speedY > canvas.height || this.y + this.speedY < 0) this.speedY = -this.speedY;
    }
    moveX() { this.x += this.speedX }
    moveY() { this.y += this.speedY }

    draw() {
        this.update();
        this.moveX();
        this.moveY();

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 20, this.y + 20);

        ctx.fillStyle = `rgba(0,128, 128, 0.5)`;
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}

function clear() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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

