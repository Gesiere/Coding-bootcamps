let slides = document.querySelectorAll('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;
startSlide(index)



nextBtn.addEventListener('click', () => {
    if(index > slides.length - 1){
        index = 0
    }
    nextSlide()
})
prevBtn.addEventListener('click', () => {
    if (index < 0) {
        index = slides.length -1
    }
    prevSlide()
})





function reset(index) {
    slides.forEach(slide => {
        slide.style.display = 'none'
    })
}


function startSlide(index) {
    reset();
    slides[index].style.display = 'flex';
}



function nextSlide() {
    reset();
    slides[index].style.display = 'flex';
    index++
}

function prevSlide() {
    reset();
    slides[index].style.display = 'flex';
    index--
}






