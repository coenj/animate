// author: CoenJanssen.net

animation["z"] = function () {
 
    function clear() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    return function(){
    clear();
    console.log("clear z");
    }
}();

animation["z"].play=true;

