/* LOGIN PAGE JAVASCRIPT - Simple Frontend Validation */

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signupForm');
  const successMsg = document.getElementById('successMessage');

  if (form) {
    form.addEventListener('submit', function(e) {
      // Prevent actual form submission (no backend)
      e.preventDefault();

      // Get values
      const fullname = document.getElementById('fullname').value.trim();
      const dob = document.getElementById('dob').value;
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      // Simple validation
      if (fullname && dob && email && password) {
        // Show success message
        successMsg.classList.add('show');
        
        // Optional: Clear form after 2 seconds
        setTimeout(function() {
          form.reset();
          // In a real app, you'd redirect here
          // window.location.href = 'bakery.html';
        }, 3000);
      } else {
        alert('Please fill in all fields.');
      }
    });
  }
});

// ============================================
// HAMBURGER MENU (Only runs if elements exist)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('menuToggle');
  const dropdown = document.getElementById('navDropdown');

  // Only run menu code if BOTH elements exist
  if (toggleBtn && dropdown) {
    
    // Open/close on hamburger click
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdown.classList.toggle('active');
      toggleBtn.classList.toggle('open');
    });

    // Close when a nav link is clicked
    dropdown.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        dropdown.classList.remove('active');
        toggleBtn.classList.remove('open');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
        dropdown.classList.remove('active');
        toggleBtn.classList.remove('open');
      }
    });
    
    console.log('✅ Menu is ready!');
  }
});
