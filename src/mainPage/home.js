// Animate elements on scroll
const animItems = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

animItems.forEach(item => observer.observe(item));
