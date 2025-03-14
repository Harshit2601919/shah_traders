document.addEventListener('DOMContentLoaded', function() {
  // Add active class to current navigation item
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      if(link.getAttribute('href') === window.location.pathname) {
          link.classList.add('active');
      }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});