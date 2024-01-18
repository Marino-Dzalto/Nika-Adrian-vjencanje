document.addEventListener('DOMContentLoaded', function () {
    const doorImageLEFT = document.querySelector('.doorImageLEFT');
    const doorImageRIGHT = document.querySelector('.doorImageRIGHT');

    setTimeout(function () {
        doorImageLEFT.classList.toggle("doorOpenL");
        doorImageRIGHT.classList.toggle("doorOpenR");
    }, 1000); // Delay the animation by 1s after the page loads
});
