const scrollRight = document.querySelector(".scrollRight");
const element = document.querySelector(".container");

scrollRight.addEventListener("click", function () {
  element.scrollLeft += 500;
});

const scrollLeft = document.querySelector(".scrollLeft");

scrollLeft.addEventListener("click", function () {
  element.scrollLeft -= 500;
});

var container = document.getElementById("sliderImg");
var imgs = container.getElementsByTagName("img");
var apercu = document.getElementById("apercu");
var counter = 0;

for (let i = 0; i < imgs.length; i++) {
  let img = imgs[i];

  img.addEventListener("click", function () {
    console.log(this);
    console.log(this.src);
    apercu.src = this.src;
  });
}
