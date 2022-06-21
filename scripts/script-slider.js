const scrollRight = document.querySelector(".scrollRight")
const element = document.querySelector(".container")

scrollRight.addEventListener("click", function (){
    slider.scrollLeft+=1890;
});


const scrollLeft = document.querySelector(".scrollLeft")

scrollLeft.addEventListener("click", function() {
    slider.scrollLeft+=1890;
})