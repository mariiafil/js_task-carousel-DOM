'use strict';

const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const allSlides = document.querySelectorAll('.carousel__item');
const numberOfSlides = allSlides.length;
const slideGap = 20;

const carousel = allSlides[0];
let position = 0;
const slideWidth = carousel.offsetWidth;

for (let i = 0; i < allSlides.length; i += 1) {
  allSlides[i].style.marginRight = `${slideGap}px`;
}

const handleNextButtonClick = () => {
  if (position <= (-(numberOfSlides - 1) * slideWidth)) {
    position = slideWidth + slideGap;
  }
  position -= (slideWidth + slideGap);
  carousel.style.marginLeft = `${position}px`;
  carousel.style.transition = 'margin 0.3s ease-in-out';
};

const handlePrevButtonClick = () => {
  if (position === 0) {
    position = -(numberOfSlides) * (slideWidth + slideGap);
  }
  position += slideWidth + slideGap;
  carousel.style.marginLeft = `${position}px`;
  carousel.style.transition = 'margin 0.3s ease-in-out';
};

nextButton.addEventListener('click', handleNextButtonClick);
prevButton.addEventListener('click', handlePrevButtonClick);
