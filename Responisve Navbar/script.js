const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle between bars and cross icon
    if (hamburger.classList.contains('fa-bars')) {
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-xmark'); // Change to cross icon
    } else {
        hamburger.classList.remove('fa-xmark');
        hamburger.classList.add('fa-bars'); // Change back to bars icon
    }
});