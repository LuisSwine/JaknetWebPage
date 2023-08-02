// Función para alternar el modo oscuro y guardar la preferencia en el almacenamiento local
function toggleDarkMode() {
    const body = document.querySelector('body');
    const isDarkMode = body.classList.toggle('dark-mode');
  
    // Guardar la preferencia en el almacenamiento local
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
  
    // Actualizar el texto del botón según el modo actual
    const darkModeButton = document.getElementById('darkModeButton');
    darkModeButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
  }
  
    // Verificar y aplicar la preferencia del modo oscuro al cargar la página
if (localStorage.getItem('darkMode') === 'true') {
    document.querySelector('body').classList.add('dark-mode');
    document.getElementById('darkModeToggle').checked = true;
  }