// Animate elements on scroll
const animatedElements = document.querySelectorAll('.animate');

function checkAnimations() {
  const triggerBottom = window.innerHeight * 0.85;
  animatedElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkAnimations);
window.addEventListener('load', checkAnimations);
