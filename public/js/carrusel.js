// Obtener todas las imágenes del carrusel
const carouselImages = document.querySelectorAll('#imageSlider .carousel-item img');

// Agregar evento de clic a cada imagen
carouselImages.forEach((image) => {
  image.addEventListener('click', () => {
    // Redireccionar a la ruta /servicios
    window.location.href = '/servicios';
  });
});