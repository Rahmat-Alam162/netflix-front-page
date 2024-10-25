let currentIndex = 0;

function slideLeft() {
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel-image');
  const imageWidth = images[0].clientWidth + 10; // 10px for margin
  if (currentIndex > 0) {
    currentIndex--;
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }
}

function slideRight() {
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel-image');
  const imageWidth = images[0].clientWidth + 10; // 10px for margin
  if (currentIndex < images.length - 6) { // 6 images visible at a time
    currentIndex++;
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }
}

// let currentIndex = 0;

// function slideLeft() {
//   const pho = document.querySelector('.pho');
//   const qho = document.querySelectorAll('.pho-qho');
//   const imageWidth = qho[0].clientWidth; // 10px for margin
//   if (currentIndex > 0) {
//     currentIndex--;
//     pho.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
//   }
// }

// function slideRight() {
//   const pho = document.querySelector('.pho');
//   const qho = document.querySelectorAll('.pho-qho');
//   const imageWidth = qho[0].clientWidth; // 10px for margin
//   if (currentIndex < qho.length - 6) { // 6 images visible at a time
//     currentIndex++;
//     pho.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    
//   }
// }






// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n){
//    showSlides(slideIndex += n);
// }

// function currentSlide(n){
//     showSlides(slideIndex = n);
// }
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("pho");
//     if (n > slides.length) {slideIndex = n}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }
//       slides[slideIndex-1].style.display = "block";

//     }

