//update date
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Updated navbar scroll behavior
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

function updateNavbar() {
    const currentScroll = window.pageYOffset;
    const isDesktop = window.innerWidth >= 992; // Bootstrap's lg breakpoint

    if (isDesktop) {
        if (currentScroll > 50) {
            navbar.classList.remove('transparent');
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('transparent');
            navbar.classList.remove('scrolled');
        }
    } else {
        // On mobile, always remove transparent class
        navbar.classList.remove('transparent');
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
}

// Initial call
updateNavbar();

// Event listeners
window.addEventListener('scroll', updateNavbar);
window.addEventListener('resize', updateNavbar);

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

//preloader
// function hidePreloader() {
//     window.addEventListener('load', () => {
//         setTimeout(() => {
//             const preloader = document.getElementById('preloader');
//
//             if (preloader) {
//                 // Hide preloader
//                 preloader.classList.add('fade-out');
//
//                 // Remove preloader after 1 second (duration of the fade-out effect)
//                 setTimeout(() => {
//                     preloader.style.display = 'none';
//                 }, 1000);
//             }
//         }, 1000); // Delay before starting the fade-out
//     });
// }
//
// // Call the function to hide the preloader when the window is loaded
// hidePreloader();

//Toggle menu mobile view
function handleClickOutsideNavbar(e) {
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggle = document.querySelector('.navbar-toggler');

    // Check if the click is outside the navbar-collapse and the toggle button
    if (
        navbarCollapse && !navbarCollapse.contains(e.target) &&
        navbarToggle && !navbarToggle.contains(e.target)
    ) {
        // If the navbar is collapsed, remove the 'show' class to hide it
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    }
}

// Attach the event listener to the document
document.addEventListener('click', handleClickOutsideNavbar);

// Function to close the navbar menu on link click
function closeNavbarOnLinkClick() {
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the navbar is currently visible
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show'); // Hide the navbar menu
                navbarToggle.classList.add('collapsed'); // Update the toggle button
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', closeNavbarOnLinkClick);