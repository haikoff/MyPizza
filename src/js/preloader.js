

function closePreloader() {
    const preloader = document.querySelector('#preloader');
    const mainContent = document.querySelector('.wrapper');
    preloader.style.opacity = 0;
    mainContent.style.opacity = 1;
}

setTimeout(closePreloader, 2000);