/* RECIPES JAVASCRIPT - Handles Modal Popups for Category Pages */

document.addEventListener('DOMContentLoaded', function() {
  
  const recipeCards = document.querySelectorAll('.recipe-card');
  const modals = document.querySelectorAll('.modal-overlay');
  const closeButtons = document.querySelectorAll('.close-modal');

  // Open modal when a card is clicked
  recipeCards.forEach(card => {
    card.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.add('active');
      }
    });
  });

  // Close modal when 'X' is clicked
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal-overlay').classList.remove('active');
    });
  });

  // Close modal when clicking outside the box
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
      }
    });
  });

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
