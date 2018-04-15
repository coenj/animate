console.log("Hello scripts");
//global namespace
var canvas = {};
var ctx = {};
var ratio = 1;
var animation = {};

window.onload = function () {

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ratio = canvas.width / canvas.height;
    var keysUsed = "";
    var raf;
    dropPoints=1;
    window.onkeydown = function () {
        // insert a keychar to choose the letter of animation
        keyChar = String.fromCharCode(window.event.keyCode).toLowerCase();
        if (keyChar == "n") {
            dropPoints += 1;
            checkPoints();
            return;
        } else if (keyChar == "m") {
            dropPoints -= 1;
            checkPoints();
            return;
        }
       


        if (!keysUsed.includes(keyChar)) {
            keysUsed += keyChar;
            console.log(keyChar);
            var script = document.createElement('script');
            script.src = `js/animation_${keyChar}.js`;
            document.head.appendChild(script); // insert script with the letter keyChar
        } else {
            animation[keyChar].play = !animation[keyChar].play;
        }

    }


    function animate() {

        for (key of keysUsed) {
            if (animation[key] && animation[key].play) {
                animation[key]();
            }
        }

        raf = window.requestAnimationFrame(animate);
    }

    animate();

function checkPoints(){
   // console.log(dropPoints);
    if (dropPoints > 18) {dropPoints = 18} 
    else if (dropPoints < 1) {dropPoints = 1 }

}


}
