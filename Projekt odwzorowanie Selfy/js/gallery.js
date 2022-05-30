const img1 = document.querySelector('#z1');
img1.addEventListener('click', () => openLightbox('img/mock.jpg'));

const img2 = document.querySelector('#z2');
img2.addEventListener('click', () => openLightbox('img/mock2.jpg'));

const img3 = document.querySelector('#z3');
img3.addEventListener('click', () => openLightbox('img/mock3.jpg'));

const img4 = document.querySelector('#z4');
img4.addEventListener('click', () => openLightbox('img/mock4.jpg'));

const img5 = document.querySelector('#z5');
img5.addEventListener('click', () => openLightbox('img/mock5.jpg'));

const img6 = document.querySelector('#z6');
img6.addEventListener('click', () => openLightbox('img/mock6.jpg'));

const img7 = document.querySelector('#z7');
img7.addEventListener('click', () => openLightbox('img/mock7.jpg'));

const img8 = document.querySelector('#z8');
img8.addEventListener('click', () => openLightbox('img/mock.jpg'));

const img9 = document.querySelector('#z9');
img9.addEventListener('click', () => openLightbox('img/mock3.jpg'));

const img10 = document.querySelector('#z10');
img10.addEventListener('click', () => openLightbox('img/mock2.jpg'));

const img11 = document.querySelector('#z11');
img11.addEventListener('click', () => openLightbox('img/mock6.jpg'));

function openLightbox(imgSource) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('#lightbox-image');
    lightbox.classList.add('lightbox-visible');
    lightboxImage.src = imgSource;
}

const zamknijLightbox = document.querySelector('.lightbox');
zamknijLightbox.addEventListener('click', closeLightbox);

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.remove('lightbox-visible');
}