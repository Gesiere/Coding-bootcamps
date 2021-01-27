
const sliders = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

nextBtn.addEventListener('click',() => {
    if(index > sliders.length - 1){
        index = 0
    }
    slideRight()
})

prevBtn.addEventListener('click', () => {
    if (index < 0) {
        index = sliders.length - 1
    }
    slideLeft()
})



let index = 0;

function reset() {
    sliders.forEach(slide => {
        slide.style.display = 'none'
    })
    sliders[index].style.display = 'flex'
}

function slideRight() {
    reset()
    sliders[index].style.display = 'flex';
    index++;
}

function slideLeft() {
    reset()
    sliders[index].style.display = 'flex';
    index--;
}


















