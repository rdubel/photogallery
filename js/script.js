var imgArray = [];
var gallery = document.getElementById("gallery");
var prvBtn = document.getElementById("prev")
var nxtBtn = document.getElementById("next")

for (var i = 0; i < 10; i++) {
    imgArray[i] = new Image(800, 640);
    imgArray[i].src = "./img/img" + (i+1) + ".jpg";
    imgArray[i].alt = "Photo" + (i+1);
    var listElement = document.createElement("li")
    gallery.appendChild(listElement)
    listElement.appendChild(imgArray[i]);
    imgArray[i].className = "hidden";
}
var current = 0;
imgArray[current].className = "shown";


nxtBtn.addEventListener("click", function() {
    imgArray[current].className = "hidden";
    current = (current +1) % imgArray.length;
    imgArray[current].className = "shown";
});

prvBtn.addEventListener("click", function() {
    imgArray[current].className = "hidden";
    current--;
    if (current < 0) {
        current = imgArray.length - 1;
        console.log(current);
    }
    imgArray[current].className = "shown";

});
