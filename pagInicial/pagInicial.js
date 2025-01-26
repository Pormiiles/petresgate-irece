window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('fade-in');
});

document.getElementById("year").textContent = new Date().getFullYear();

/*Carrossel*/

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides side by side
const setSlidePosition = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
};

// Click next
nextButton.addEventListener('click', () => {
  moveSlide('next');
});

// Click prev
prevButton.addEventListener('click', () => {
  moveSlide('prev');
});

// Click nav indicators
dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);

  resetAutoPlay(); // Reset autoplay timer when user interacts
});

// Function to move slide (common for buttons and autoplay)
const moveSlide = direction => {
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  let targetSlide, targetDot;

  if (direction === 'next') {
    targetSlide = currentSlide.nextElementSibling || slides[0]; // Loop to first slide
    targetDot = currentDot.nextElementSibling || dots[0];
  } else {
    targetSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; // Loop to last slide
    targetDot = currentDot.previousElementSibling || dots[dots.length - 1];
  }

  const targetIndex = slides.findIndex(slide => slide === targetSlide);
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);

  resetAutoPlay(); // Reset autoplay timer when user interacts
};

// Auto-play functionality
let autoPlayInterval = setInterval(() => moveSlide('next'), 3000); // Change every 3 seconds

const resetAutoPlay = () => {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => moveSlide('next'), 3000); // Restart auto-play
};