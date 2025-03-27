
document.getElementById('backToTop')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link3 = document.getElementById("link3");

link3.addEventListener('click', (e) => {
    e.preventDefault(); // Añade esto para evitar el "saltito" del href
    scrollToElement('.skills-section'); // Usa el selector de tu sección de habilidades
});
