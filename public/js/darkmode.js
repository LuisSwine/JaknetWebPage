// Función para alternar el modo oscuro y guardar la preferencia en el almacenamiento local
function toggleDarkMode() {
    const body = document.querySelector('body');
    const isDarkMode = body.classList.toggle('dark-mode');
  
    // Guardar la preferencia en el almacenamiento local
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
  }
  
//     // Verificar y aplicar la preferencia del modo oscuro al cargar la página
// if (localStorage.getItem('darkMode') === 'true') {
//     document.querySelector('body').classList.add('dark-mode');
//     document.getElementById('darkModeToggle').checked = true;
//   }

// Verificar y aplicar la preferencia del modo oscuro al cargar la página
function applyDarkModePreference() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isUserPreferredDarkMode = localStorage.getItem('darkMode') === 'true';

  const body = document.querySelector('body');
  body.classList.toggle('dark-mode', prefersDarkMode || isUserPreferredDarkMode);
  document.getElementById('darkModeToggle').checked = prefersDarkMode || isUserPreferredDarkMode;
}

// Aplicar la preferencia del modo oscuro al cargar la página
applyDarkModePreference();

// Agregar listener al botón de switch para alternar el modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', toggleDarkMode);