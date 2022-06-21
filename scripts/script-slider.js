const scrollRight = document.querySelector(".scrollRight")
const element = document.querySelector(".container")

scrollRight.addEventListener("click", function (){
    element.scrollLeft+=500;
});


const scrollLeft = document.querySelector(".scrollLeft")

scrollLeft.addEventListener("click", function() {
    element.scrollLeft-=500;
})


const apercu = document.querySelector(".item_showed")

const item1 =document.querySelector(".item1")
const item2 =document.querySelector(".item2")
const item3 =document.querySelector(".item3")
const item4 =document.querySelector(".item4")
const item5 =document.querySelector(".item5")
const item6 =document.querySelector(".item6")
const item7 =document.querySelector(".item7")
const item8 =document.querySelector(".item8")
const item9 =document.querySelector(".item9")
const item10 =document.querySelector(".item10")

item1.addEventListener("click", function() {
    apercu.src=item1
})
item2.addEventListener("click", function() {
    apercu.src=item2
})
item3.addEventListener("click", function() {
    apercu.src=item3
})
item4.addEventListener("click", function() {
    apercu.src=item4
})
item5.addEventListener("click", function() {
    apercu.src=item5
})
item6.addEventListener("click", function() {
    apercu.src=item6
})
item7.addEventListener("click", function() {
    apercu.src=item7
})
item8.addEventListener("click", function() {
    apercu.src=item8
})
item9.addEventListener("click", function() {
    apercu.src=item9
})
item10.addEventListener("click", function() {
    apercu.src=item10
})