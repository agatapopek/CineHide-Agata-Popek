function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const burgerMenu = document.getElementById('burger-menu');

    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('open'); // Add/remove the "open" class to trigger the animation
}

document.getElementById("burger-menu").addEventListener("click", toggleMenu);
