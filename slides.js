let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Remove active class from all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Reset to first slide if at the end

    // Add active class to the current slide
    slides[slideIndex - 1].classList.add("active");

    // Set timeout for the next slide
    setTimeout(showSlides, 9000); // Adjust timing as needed
}

// Call the function to start the slideshow
showSlides();

      document.getElementById('showContactBtn').addEventListener('click', function() {
          var contactSection = document.getElementById('contact');
          if (contactSection.style.display === 'none' || contactSection.style.display === '') {
              contactSection.style.display = 'block'; // Shfaq seksionin
          } else {
              contactSection.style.display = 'none'; // Fshi seksionin
          }
      });
 