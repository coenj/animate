console.log("Hello scripts");
window.onload = function () {
    //global namespace
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ratio = canvas.width / canvas.height;
    var keysUsed="";
    window.onkeydown = function () {
        // insert a keychar to choose the letter of animation
        keyChar = String.fromCharCode(window.event.keyCode).toLowerCase();

        if (!keysUsed.includes(keyChar)) {
            keysUsed += keyChar;
            console.log(keyChar);
            var script = document.createElement('script');
            script.src = `js/animation_${keyChar}.js`;
            document.head.appendChild(script); // insert script with the letter keyChar
        } else {
            window.cancelAnimationFrame(animation_a.raf);
        }
    }

}



