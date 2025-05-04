// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
      // Update active class
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// Contact form validation (if form added later)
function validateContactForm() {
  const email = document.getElementById('email');
  const name = document.getElementById('name');
  const message = document.getElementById('message');
  let valid = true;
  let errorMsg = '';

  if (!name.value.trim()) {
    errorMsg += 'Name is required.\n';
    valid = false;
  }
  if (!email.value.trim() || !email.value.includes('@')) {
    errorMsg += 'Valid email is required.\n';
    valid = false;
  }
  if (!message.value.trim()) {
    errorMsg += 'Message cannot be empty.\n';
    valid = false;
  }
  if (!valid) {
    alert(errorMsg);
  }
  return valid;
}
