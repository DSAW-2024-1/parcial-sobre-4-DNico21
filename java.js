document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar los botones de suscripción y de dismiss
  let subscribeButton = document.querySelector('.main .btn-dark');
  let dismissButton = document.querySelector('.confirmation .btn-dark');

  // Seleccionar los contenedores
  let container1 = document.querySelector('.main');
  let container2 = document.querySelector('.confirmation');

  // Agregar un event listener para el clic en el botón de suscripción
  subscribeButton.addEventListener('click', function() {
    // Ocultar el contenedor 1 y mostrar el contenedor 2
    container1.style.display = 'none';
    container2.style.display = 'block';
  });

  // Agregar un event listener para el clic en el botón de dismiss
  dismissButton.addEventListener('click', function() {
    // Ocultar el contenedor 2 y mostrar el contenedor 1
    container2.style.display = 'none';
    container1.style.display = 'block';
  });
});