// Toggle Menu on Small Screens
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const closeBtn = document.getElementById('closeBtn');

// Show the navigation menu and hide the menu button, show close button
menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active');     // Show navigation links
    menuToggle.classList.add('active');   // Hide menu icon
    closeBtn.classList.add('active');     // Show close icon
});

// Hide the navigation menu and show the menu button again
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');  // Hide navigation links
    menuToggle.classList.remove('active');// Show menu icon
    closeBtn.classList.remove('active');  // Hide close icon
});
