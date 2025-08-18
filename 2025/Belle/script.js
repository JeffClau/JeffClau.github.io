const mediaItems = document.querySelectorAll('.gallery img, .gallery video');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

function showMedia(index) {
    const item = mediaItems[index];
    lightbox.classList.remove('hidden');

    if (item.tagName === 'IMG') {
        lightboxImg.src = item.src;
        lightboxImg.classList.remove('hidden');
        lightboxVideo.classList.add('hidden');
        lightboxVideo.pause();
    } else if (item.tagName === 'VIDEO') {
        lightboxVideo.src = item.src;
        lightboxVideo.classList.remove('hidden');
        lightboxImg.classList.add('hidden');
        lightboxVideo.play();
    }
    currentIndex = index;
}

mediaItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showMedia(index);
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxVideo.pause();
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        lightboxVideo.pause();
    }
});

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    showMedia(currentIndex);
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % mediaItems.length;
    showMedia(currentIndex);
});
