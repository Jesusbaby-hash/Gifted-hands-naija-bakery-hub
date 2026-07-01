document.addEventListener('DOMContentLoaded', function() { //waitsuntilbrowserloadsb4runningjavacode
  const slides = document.querySelectorAll('.hero-slide');//findsallelementunderclass'heroslide'andstorestheminalistcalled'slides'.
  let currentSlide = 0;//simplystartswiththefirstslidewithindexnumber (0)

  function nextSlide() {
    // Step 1: Remove 'active' from current slide. i.e takesthecurrentslide,removes'active'fromitsoitnaturallyfadesoutatopacity(0)
    slides[currentSlide].classList.remove('active');  
  // Step 2: Move to the next slide. it adds 1 to move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;
    // Step 3: Add 'active' to the new slide. i.e adds'active'tothenewslideandmakesitfadeinatopacity(1)
    slides[currentSlide].classList.add('active');
  }
  // Start slideshow immediately
  setInterval(nextSlide, 4000); // runs the next slide action every 4.0 seconds. MAkestheslideshowautomatic
});

//MORE EXPLANATION 🎯 THE FULL FLOW:
// Page loads → JavaScript waits for HTML to be ready ✅
// Find all 4 slides → Store in slides array 📦
// Start at slide 0 (first image) ️
// Every 3.5 seconds:
// Remove active from current slide → fades out
// Move to next slide (loop back if at end) 🔄
// Add active to new slide → fades in
// Repeat forever! ♾️
// 🧠 KEY CONCEPTS YOU LEARNED:
// addEventListener → Wait for page to load
// querySelectorAll → Grab multiple elements
// Arrays & Indexes → Store and access items (0, 1, 2, 3...)
// Functions → Reusable blocks of code
// classList.add/remove → Toggle CSS classes
// Modulo operator (%) → Loop back to start
// setInterval → Run code repeatedly

// FOR THE BREAD ICON
// Bread button click handler
document.getElementById('breadAction').addEventListener('click', function() {
  // ✅ YOUR FUTURE FEATURE GOES HERE!
  console.log('Bread button clicked!');
  // Example for later: 
  // window.location.href = 'specials.html';
  // or open a modal, play a sound, etc.
});

