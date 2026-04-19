const images = document.querySelectorAll('.reveal');

images.forEach((img, i) => {
    img.style.setProperty('--delay', `${i * 0.1}s`);
});

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
        }
    });
}, {
    threshold: 0.2 // triggers when 20% of the image is visible
});

images.forEach(img => observer.observe(img));