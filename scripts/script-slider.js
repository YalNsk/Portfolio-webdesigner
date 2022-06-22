const scrollRight = document.querySelector(".scrollRight")
const element = document.querySelector(".container")

scrollRight.addEventListener("click", function (){
    element.scrollLeft+=500;
});


const scrollLeft = document.querySelector(".scrollLeft")

scrollLeft.addEventListener("click", function() {
    element.scrollLeft-=500;
})

var apercu = document.getElementsByClassName("item_show").getAttribute("src");
var item1 = document.getElementsByClassName("item1");
var item1_src = document.getElementsByClassName("item1").getAttribute("src");

function change_image(){
    
    apercu.setAttribute("src", item1_src) 
    
}

