window.onload = function () {
var photos = document.querySelectorAll(".zoom-photo");

for (var i = 0; i < photos.length; i++) {
    var photo = photos[i];

    photo.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)";
    });

    photo.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
    });
}
};
