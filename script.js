"user strict"


const c = (e)=> document.querySelector(e);
const cs = (el)=> document.querySelectorAll(el);

let totalSlide = cs('.slider--item').length;
let qtSlide = 0;

let widthSlide = c('.slider--width').style.width = `calc(100vw * ${totalSlide})`;

function volta(){
    qtSlide--;
    if(qtSlide < 0){
        qtSlide = totalSlide -1
    }
    upDateMargin()
}


function proximo(){
    qtSlide++;
    if(qtSlide > totalSlide -1){
        qtSlide = 0
    }
    upDateMargin()
}

function upDateMargin(){
    let widthSlideItem = c('.slider--item').clientWidth
    let newMargin = (qtSlide * widthSlideItem);
    c('.slider--width').style.marginLeft = `-${newMargin}px`
}

setInterval(proximo, 5000)