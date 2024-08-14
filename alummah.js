    document.addEventListener('DOMContentLoaded', () => {
        const carousels = document.querySelectorAll('.carousel');

        carousels.forEach(carousel => {
            const images = carousel.querySelectorAll('img');
            images.forEach(image => {
                const clone = image.cloneNode(true);
                carousel.appendChild(clone);
            });
        });
    });
