//🌙 Toggle Dark Mode
const toggleDark = document.getElementById('toggleDark');
const body = document.body;

toggleDark.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  toggleDark.textContent = body.classList.contains('light-mode') ? '☀' : '🌙';
});

// 📄 Download CV
const cvButton = document.querySelector('.cv-btn');

cvButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.open('cv.pdf', '_blank'); // replace with your actual CV file
});

// 🎬 Scroll Animation (fade-in effect)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.hero-text, .hero-img').forEach((el) => observer.observe(el));

// ⌨ Typewriter Effect
const typeTarget = document.querySelector('.hero-text p');
const originalText = "I'm a Web Developer";
let index = 0;

function typeWriter() {
  if (index < originalText.length) {
    typeTarget.textContent += originalText.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}

// Clear original text first
typeTarget.textContent = '';
typeWriter();
// Load and display portfolio projects from JSON
const projectsContainer = document.getElementById('projects-container');