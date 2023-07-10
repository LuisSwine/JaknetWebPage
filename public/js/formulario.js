document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al formulario y a los campos
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
  
    // Escuchar el evento submit del formulario
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío por defecto del formulario
  
      // Obtener los valores de los campos
      const nombre = nameInput.value;
      const email = emailInput.value;
      const telefono = phoneInput.value;
      const mensaje = messageInput.value;
  
      // Validar los campos (puedes agregar tu propia lógica de validación aquí)
  
      // Enviar la solicitud al servidor utilizando Fetch o AJAX
      fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Nombre: nombre, email, Telefono: telefono, Mensaje: mensaje })
      })
        .then(response => response.text())
        .then(data => {
          // Manipular la respuesta del servidor
          console.log(data);
  
          // Vaciar los campos del formulario
          form.reset();
  
          // Mostrar mensaje de éxito en el HTML
          const successMessage = document.getElementById('submitSuccessMessage');
          successMessage.classList.remove('d-none');
        })
        .catch(error => {
          // Manejar errores de la solicitud
          console.error(error);
  
          // Mostrar mensaje de error en el HTML
          const errorMessage = document.getElementById('submitErrorMessage');
          errorMessage.classList.remove('d-none');
        });
    });
  });
  