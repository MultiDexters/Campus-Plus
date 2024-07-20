let slideIndex = 0;
showSlides(slideIndex);
autoSlide();

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("testimonial-slide");
    let indicators = document.getElementsByClassName("slide-indicator");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "prev-slide", "next-slide");
        slides[i].style.display = "none";
    }

    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove("active");
    }

    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("active");
    indicators[slideIndex].classList.add("active");

    let prevIndex = slideIndex - 1 >= 0 ? slideIndex - 1 : slides.length - 1;
    let nextIndex = slideIndex + 1 < slides.length ? slideIndex + 1 : 0;

    slides[prevIndex].style.display = "block";
    slides[prevIndex].classList.add("prev-slide");

    slides[nextIndex].style.display = "block";
    slides[nextIndex].classList.add("next-slide");
}

function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlide, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', function () {
    let prevButton = document.querySelector('.prev-slide');
    let nextButton = document.querySelector('.next-slide');

    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));

    let indicators = document.getElementsByClassName("slide-indicator");
    for (let i = 0; i < indicators.length; i++) {
        // Use an immediately invoked function expression (IIFE) to capture the correct index
        (function (index) {
            indicators[index].addEventListener('click', function () {
                changeSlide(index - slideIndex);
            });
        })(i);
    }
});
