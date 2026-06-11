document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     MOBILE HAMBURGER MENU TOGGLER
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDropdown = document.getElementById('mobile-dropdown-menu');

  if (hamburgerBtn && mobileDropdown) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = hamburgerBtn.classList.toggle('open');
      mobileDropdown.classList.toggle('open', isOpen);
    });
  }

  // Close mobile dropdown when a link is clicked
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('open');
      mobileDropdown.classList.remove('open');
    });
  });

  /* ==========================================================================
     SMOOTH SCROLLING WITH OFFSET FOR FIXED NAVBAR (80px height)
     ========================================================================== */
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navbarHeight = 80;
        const targetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ==========================================================================
     DYNAMIC NAVBAR HIGHLIGHT ON SCROLL (IntersectionObserver)
     ========================================================================== */
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-dropdown a');

  const observerOptions = {
    root: null, // viewport
    rootMargin: '-80px 0px -50% 0px', // checks active region offsetting fixed navbar
    threshold: 0.1
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => sectionObserver.observe(section));

  /* ==========================================================================
     COPY EMAIL TO CLIPBOARD
     ========================================================================== */
  const copyBtn = document.getElementById('btn-copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'bhanuyadav0017@gmail.com';
      
      navigator.clipboard.writeText(email).then(() => {
        // Toggle visual states and text indicator
        copyBtn.textContent = 'Copied ✓';
        copyBtn.classList.add('copied');

        // Reset state after 2 seconds
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }

});
