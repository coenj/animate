console.log("Hello scripts");
window.onload = function () {
    //global namespace
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ratio = canvas.width / canvas.height;
    var keysUsed = "";
    playAnimation = { a: true };
    raf = "";
    window.onkeydown = function () {
        // insert a keychar to choose the letter of animation
        keyChar = String.fromCharCode(window.event.keyCode).toLowerCase();

        if (!keysUsed.includes(keyChar)) {
            // you are not allowed to load the script more then once       
            keysUsed += keyChar;
            playAnimation[keyChar] = true;
            console.log(keyChar);
            var script = document.createElement('script');
            script.src = `js/animation_${keyChar}.js`;
            document.head.appendChild(script); // insert script with the letter keyChar
        } else {
            playAnimation[keyChar] = !playAnimation[keyChar];

            if (playAnimation[keyChar]) {
                animation_a();                            
            } else {
                window.cancelAnimationFrame(raf);
            }
        }



    }

}



