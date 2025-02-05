// script.js
console.log('Página cargada correctamente');

// Agregar funcionalidad para el carrusel de imágenes.
let currentIndex = 0;
const slides = document.querySelectorAll('.carrusel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Inicializar el carrusel mostrando la primera imagen
showSlide(currentIndex);

// Funcionalidad de modales
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};
