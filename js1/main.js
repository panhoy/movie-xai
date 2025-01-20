// Menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  alert('Menu toggle clicked!');
});

// Add interactivity for episodes
document.querySelectorAll('.episode').forEach((episode) => {
  episode.addEventListener('click', () => {
    alert(`You clicked on ${episode.querySelector('h3').innerText}`);
  });
});