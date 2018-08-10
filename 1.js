document.getElementById('myslide').onmousemove = function (event){
    document.getElementById('myslide').ontouchmove = function (event){
    document.getElementById('two').style.transition = 'all 0.05s';
    var x = event.offsetX;
    }
    document.getElementById('two').style.transition = 'all 0.05s';
    var x = event.offsetX; 
    console.log(x);
    document.getElementById('two').style.width = x + 'px';
}
    document.getElementById('myslide').onmouseleave = function (event){
        document.getElementById('two').style.width = '700px';
        document.getElementById('two').style.transition = 'all 0.5s';
    }
    


