// Function to update the logo source based on screen width
function updateLogo() {
    const logo = document.getElementById('logo');
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 767) {
      // Small screens (e.g., mobile)
      logo.src = 'images/mobile/logo.svg';
    } else if (screenWidth >= 768 && screenWidth <= 1024) {
      // Medium screens (e.g., tablets)
      logo.src = 'images/tablet/logo.svg';
    } else {
      // Large screens (e.g., desktops)
      logo.src = 'images/logo.svg';
    }
  }
  
  // Initial call to set the logo based on the current screen width
  updateLogo();
  
  // Update the logo when the window is resized
  window.addEventListener('resize', updateLogo);