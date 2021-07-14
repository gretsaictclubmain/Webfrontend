var image = document.getElementById("picha");

var img = document.getElementById("test");
var modalimage = document.getElementById("testImage");
var caption = document.getElementById("caption");

img.onclick=function(){
    image.style.display="block";
    modalimage.src=this.src;
    caption.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function(){
    image.style.display = "none";
}

