document.addEventListener("DOMContentLoaded", function () {
    $('.GyMI').click(function() {
        $( '.res2, .res3, .res4, .res5, .res6, .res7, .res8, .res9, .res10, .res11, .res12, .res13, .res14, .none').fadeOut();
        $( '.res1' ).show( "slow" );
    });

    $('.GT').click(function() {
        $( '.res1, .res3, .res4, .res5, .res6, .res7, .res8, .res9, .res10, .res11, .res12, .res13, .res14, .none').fadeOut();
        $( '.res2' ).show( "slow" );
    });

    $('.LS').click(function() {
        $( '.res1, .res2, .res4, .res5, .res6, .res7, .res8, .res9, .res10, .res11, .res12, .res13, .res14, .none').fadeOut();
        $( '.res3' ).show( "slow" );
    });

    $('.MC').click(function() {
        $( '.res1, .res2, .res3, .res5, .res6, .res7, .res8, .res9, .res10, .res11, .res12, .res13, .res14, .none').fadeOut();
        $( '.res4' ).show( "slow" );
    });

    $('.GA').click(function() {
        $( '.res1, .res2, .res3, .res4, .res6, .res7, .res8, .res9, .res10, .res11, .res12, .res13, .res14, .none').fadeOut();
        $( '.res5' ).show( "slow" );
    });

    $('.AC').click(function() {
        $( '.res1, .res2, .res3, .res4, .res5, .res7, .res8, .res9, .res10, .res11, .res12, .res13, .res14, .none').fadeOut();
        $( '.res6' ).show( "slow" );
    });

    $('.CL').click(function() {
        $( '.res1, .res2, .res3, .res4, .res5, .res6, .res8, .res9, .res10, .res11, .res12, .res13, .res14, .none').fadeOut();
        $( '.res7' ).show( "slow" );
    });

    $('.CH').click(function() {
        $( '.res1, .res2, .res3, .res4, .res5, .res6, .res7, .res9, .res10, .res11, .res12, .res13, .res14, .none').fadeOut();
        $( '.res8' ).show( "slow" );
    });

    $('.GM').click(function() {
        $( '.res1, .res2, .res3, .res4, .res5, .res6, .res7, .res8, .res10, .res11, .res12, .res13, .res14, .none').fadeOut();
        $( '.res9' ).show( "slow" );
    });

    $('.TY').click(function() {
        $( '.res1, .res2, .res3, .res4, .res5, .res6, .res7, .res8, .res9, .res11, .res12, .res13, .res14, .none').fadeOut();
        $( '.res10' ).show( "slow" );
    });
    $('.LC').click(function() {
        $( '.res1, .res2, .res3, .res4, .res5, .res6, .res7, .res8, .res9, .res10, .res12, .res13, .res14, .none').fadeOut();
        $( '.res11' ).show( "slow" );
    });
    $('.RP').click(function() {
        $( '.res1, .res2, .res3, .res4, .res5, .res6, .res7, .res8, .res9, .res10, .res11, .res13, .res14, .none').fadeOut();
        $( '.res12' ).show( "slow" );
    });
    $('.CN').click(function() {
        $( '.res1, .res2, .res3, .res4, .res5, .res6, .res7, .res8, .res9, .res10, .res11, .res12, .res14, .none').fadeOut();
        $( '.res13' ).show( "slow" );
    });
    $('.RC').click(function() {
        $( '.res1, .res2, .res3, .res4, .res5, .res6, .res7, .res8, .res9, .res10, .res11, .res12, .res13, .none').fadeOut();
        $( '.res14' ).show( "slow" );
    });
    $('.todo').click(function() {
        $( '.none' ).fadeOut(); // Ocultamos el mensaje de "vacío" si existe
        $( '.res1, .res2, .res3, .res4, .res5, .res6, .res7, .res8, .res9, .res10, .res11, .res12, .res13, .res14' ).show( "slow" );
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