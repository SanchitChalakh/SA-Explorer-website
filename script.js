// Smooth scroll
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    });
  });
});

// Dark / Light toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('light-mode');
  themeBtn.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});

// Loader hide after page load
window.addEventListener('load', ()=>{
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});

