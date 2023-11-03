
function moverSlide(direccion) {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    slides.forEach((slide, i) => {
        if (slide.style.transform === 'translateX(0%)') {
            currentIndex = i;
        }
    });

    let newIndex = currentIndex + direccion;

    if (newIndex < 0) {
        newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
        newIndex = 0;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - newIndex) * 100}%)`;
    });
}
