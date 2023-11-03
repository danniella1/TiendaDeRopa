let currentSlide = 0;
const slides = document.querySelectorAll('.diapositiva');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Establece un intervalo para cambiar automáticamente de diapositiva cada 3 segundos (3000 milisegundos)
setInterval(nextSlide, 3000);

// Opcional: Pausar el carrusel cuando el mouse pasa sobre él
const carrusel = document.querySelector('.carrusel');
carrusel.addEventListener('mouseenter', () => clearInterval(interval));
carrusel.addEventListener('mouseleave', () => setInterval(nextSlide, 3000));

