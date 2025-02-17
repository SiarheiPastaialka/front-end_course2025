// Get the hamburger button and menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Toggle the menu and hamburger icon when the button is clicked
hamburger.addEventListener('click', () => {
  // Toggle the "active" class on the hamburger button
  hamburger.classList.toggle('active');

  // Toggle the "active" class on the menu
  menu.classList.toggle('active');
});