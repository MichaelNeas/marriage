// Password Protection
function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-msg');
  
    if (input === 'wedding2024') {
      document.getElementById('password-overlay').style.display = 'none';
    } else {
      errorMsg.textContent = 'Incorrect password. Please try again.';
    }
  }
  
  // Toggle Mobile Menu
  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
    }
  }
  