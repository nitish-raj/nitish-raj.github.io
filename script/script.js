// Custom JavaScript for Nitish Raj's personal website

document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });

  // Add scroll-to-top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
  scrollToTopBtn.style.display = 'none';
  
  // Add button styles
  scrollToTopBtn.style.position = 'fixed';
  scrollToTopBtn.style.bottom = '20px';
  scrollToTopBtn.style.right = '20px';
  scrollToTopBtn.style.width = '50px';
  scrollToTopBtn.style.height = '50px';
  scrollToTopBtn.style.borderRadius = '50%';
  scrollToTopBtn.style.backgroundColor = '#3498db';
  scrollToTopBtn.style.color = 'white';
  scrollToTopBtn.style.border = 'none';
  scrollToTopBtn.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  scrollToTopBtn.style.cursor = 'pointer';
  scrollToTopBtn.style.zIndex = '1000';
  scrollToTopBtn.style.transition = 'all 0.3s ease';
  
  // Add the button to the document
  document.body.appendChild(scrollToTopBtn);
  
  // Show/hide the button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'block';
      scrollToTopBtn.style.opacity = '1';
    } else {
      scrollToTopBtn.style.opacity = '0';
      setTimeout(() => {
        if (window.pageYOffset <= 300) {
          scrollToTopBtn.style.display = 'none';
        }
      }, 300);
    }
  });
  
  // Scroll to top when the button is clicked
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Add hover effect
  scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.backgroundColor = '#2c3e50';
  });
  
  scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.backgroundColor = '#3498db';
  });
});