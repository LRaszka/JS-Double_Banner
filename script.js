const containerSlider = document.querySelector(".container-slider");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const slidesLength = slideRight.querySelectorAll("div").length; //vybere všechny divy - počet

let numberActiveSlide = 0;

slideLeft.style.top = `-${(slidesLength-1) * 100}vh`; // ` alt + 7 ... posunutí levého sloupce

arrowUp.addEventListener("click", function(){
    changeSlide("up");
});

arrowDown.addEventListener("click", function(){
    changeSlide("down");
});

function changeSlide(direction){
    const sliderHeight = containerSlider.clientHeight; //výška prohlížeče
    
    if (direction === "up"){
        numberActiveSlide++;
        if(numberActiveSlide > slidesLength - 1){
            numberActiveSlide = 0;
        }
    } else {
        numberActiveSlide--;
        if(numberActiveSlide < 0){
            numberActiveSlide = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${numberActiveSlide * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${numberActiveSlide * sliderHeight}px)`;
}