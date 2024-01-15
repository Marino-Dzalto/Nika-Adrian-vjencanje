document.addEventListener('DOMContentLoaded', function () {
    const doorImageLEFT = document.querySelector('.doorImageLEFT');
    const doorImageRIGHT = document.querySelector('.doorImageRIGHT');

    setTimeout(function () {
        doorImageLEFT.classList.toggle("doorOpenL");
        doorImageRIGHT.classList.toggle("doorOpenR");
    }, 500); // Delay the animation by 0.5s after the page loads
});
