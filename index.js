document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const signInButton = document.querySelector('.sign-in-button');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentSlide = 0;

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    signInButton.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  function showSlide(n) {
    currentSlide = (n + carouselItems.length) % carouselItems.length;

    carouselItems.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === currentSlide) {
        slide.classList.add('active');
      }
    });
  }

  function changeSlide(n) {
    showSlide(currentSlide + n);
  }

  setInterval(() => {
    changeSlide(1);
  }, 10000);
});
document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".cards");
  const leftSwipeButton = document.querySelector(".left-swipe");
  const rightSwipeButton = document.querySelector(".right-swipe");

  let currentIndex = 0;

  
  const updateCards = () => {
    const translateValue = -currentIndex * 220; 
    cardsContainer.style.transform = `translateX(${translateValue}px)`;
  };

  
  const swipeLeft = () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCards();
    }
  };

  
  const swipeRight = () => {
    const maxIndex = Math.floor(cardsContainer.clientWidth / 220); 
    if (currentIndex < maxIndex - 1) {
      currentIndex++;
      updateCards();
    }
  };

  
  leftSwipeButton.addEventListener("click", swipeLeft);
  rightSwipeButton.addEventListener("click", swipeRight);
});
  document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.querySelector('.cards-container');
    const leftSwipeButton = document.querySelector('.left-swipe');
    const rightSwipeButton = document.querySelector('.right-swipe');
  
    rightSwipeButton.addEventListener('click', function () {
      const firstCard = document.querySelector('.card:first-child');
      cardsContainer.appendChild(firstCard);
    });
  
    leftSwipeButton.addEventListener('click', function () {
      const lastCard = document.querySelector('.card:last-child');
      cardsContainer.insertBefore(lastCard, cardsContainer.firstChild);
    });
  });