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
