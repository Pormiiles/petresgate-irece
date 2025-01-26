window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('fade-in');
});

document.getElementById("year").textContent = new Date().getFullYear();