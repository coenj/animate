// author: CoenJanssen.net

animation["z"] = function () {
 
    function clear() {
        ctx.fillStyle = `rgba(254,254, 254, 0.6)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    return function(){
    clear();
    
    }
}();
console.log("clear z");
animation["z"].play=true;

