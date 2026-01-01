document.addEventListener('DOMContentLoaded', () => {
    // JS Enhancements for interactivity
    const ctaButton = document.getElementById('cta');

    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.backgroundColor = 'purple';
        ctaButton.style.color = 'white';
    });

    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.backgroundColor = 'white';
        ctaButton.style.color = 'purple';
    });

    ctaButton.addEventListener('click', () => {
        alert('Welcome to the Gen Z AI Learning experience!');
    });
});