document.addEventListener("DOMContentLoaded", function () {
    

    var EDICION2025 = $('.res1, .res2, .res3, .res4, .res5, .res6, .res7, .res8, .res9, .res10, .res11, .res12, .res13, .res14');
    var EDICION2026 = $('.res15, .res16, .res17, .res18, .res19, .res20, .res21, .res22, .res23');

    // Evento para la edición 2025
    $('.EDICION2025').click(function() {
        $('.none').fadeOut();// Ocultamos el mensaje de "vacío"
        EDICION2026.fadeOut(); // Ocultamos lo de 2026 por si estaba abierto
        EDICION2025.show("slow"); // Mostramos 2025
    });

    // Evento para la edición 2026
    $('.EDICION2026').click(function() {
        $('.none').fadeOut();// Ocultamos el mensaje de "vacío"
        EDICION2025.fadeOut(); // Ocultamos lo de 2025
        EDICION2026.show("slow"); // Mostramos 2026
    });




    // external js: flickity.pkgd.js, flickity-fade.js
    $('.icon-wrapper').on('click', function() {
      console.log('testing');
      $(this).toggleClass('selected');
    });

    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mnuOptions');
    const icon = toggle.querySelector('i');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');

      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    });
});