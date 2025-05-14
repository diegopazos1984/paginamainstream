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

// Carrusel de herramientas en bucle
const logosSlide = document.querySelector(".carousel-slide");
const logosContainer = document.querySelector(".carousel-container.logos");

// Clonar los elementos para el efecto de bucle
const logosClone = logosSlide.cloneNode(true);
logosSlide.parentElement.appendChild(logosClone);

// Funcionalidad de modales
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

function triggerAnimation() {
    const shapes = document.querySelectorAll('.geometric-shapes > div');
    shapes.forEach(shape => {
        shape.style.animation = 'none';
        shape.offsetHeight; // Trigger reflow
        shape.style.animation = null;
    });
    
    // Smooth scroll to servicios section
    document.getElementById('servicios').scrollIntoView({
        behavior: 'smooth'
    });
}

// Añadir clase active al hacer scroll
window.addEventListener('scroll', () => {
    const banner = document.querySelector('.animated-banner');
    const rect = banner.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
        banner.classList.add('active');
    }
});

function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    const tabBtns = document.getElementsByClassName('tab-btn');
    
    Array.from(tabContents).forEach(tab => {
        tab.classList.remove('active');
    });
    
    Array.from(tabBtns).forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

function showProcesoDetails(index) {
    const details = document.querySelectorAll('.proceso-details');
    const currentDetail = document.getElementById(`proceso-details-${index}`);
    
    details.forEach(detail => {
        detail.classList.remove('active');
    });
    
    currentDetail.classList.add('active');
}

// Animación al hacer scroll para proceso-cards
document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.proceso-card');
    cards.forEach((card, index) => {
        if (isElementInViewport(card)) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
});

function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Cerrar menú móvil si está abierto
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Resaltar enlace activo al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scroll = window.pageYOffset;
        
        if (scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});