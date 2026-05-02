const targets = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -10% 0px',
  }
);

targets.forEach((el) => observer.observe(el));
