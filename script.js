const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
// console.log(slides);

const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// slides next to each other
// slides[0].style.left = slideWidth * 0 'px';
// slides[1].style.left = slideWidth * 1 'px';
// slides[2].style.left = slideWidth * 2 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * 'index' + 'px';
}

slides.forEach(setSlidePosition);



// when click left or right, slide move to 
// respective direction
// when click the nav indicators , move to that slide