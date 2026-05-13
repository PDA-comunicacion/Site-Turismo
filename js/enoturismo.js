document.addEventListener("DOMContentLoaded", function () {

   $('.plata').click(function() {
        var i = $(this).index();
        $( '.res2, .res3, .res4, .res5, .res6, .res7, .none').fadeOut();
        $( '.res1' ).show( "slow" );
    });


    $('.letras').click(function() {
        var i = $(this).index();
        $( '.res1, .res3, .res4, .res5, .res6, .res7, .none').fadeOut();
        $( '.res2' ).show( "slow" );
    });


    $('.origen').click(function() {
        var i = $(this).index();
        $( '.res2, .res1, .res4, .res5, .res6, .res7, .none').fadeOut();
        $( '.res3' ).show( "slow" );
    });


    $('.santa-elena').click(function() {
        var i = $(this).index();
        $( '.res2, .res3, .res1, .res5, .res6, .res7, .none').fadeOut();
        $( '.res4' ).show( "slow" );
    });

    $('.aguaje').click(function() {
        var i = $(this).index();
        $( '.res2, .res3, .res1, .res4, .res6, .res7, .none').fadeOut();
        $( '.res5' ).show( "slow" );
    });

    $('.cruces').click(function() {
        var i = $(this).index();
        $( '.res2, .res3, .res1, .res5, .res4, .res7, .none').fadeOut();
        $( '.res6' ).show( "slow" );
    });


    $('.sarmiento').click(function() {
        var i = $(this).index();
        $( '.res2, .res3, .res1, .res5, .res4, .res6, .none').fadeOut();
        $( '.res7' ).show( "slow" );
    });


    $('.todo').click(function() {
        var i = $(this).index();
        $( '').fadeOut();
        $( '.res1, .res2, .res3, .res1, .res5, .res6, res7, .none' ).show( "slow" );
    });




    $('.bnn1').click(function() {
        $('.bnn1 img').toggleClass('img');
        $('.vvn1').toggleClass('panel-info1');
    });

    $('.bnn2').click(function() {
        $('.bnn2 img').toggleClass('img');
        $('.vvn2').toggleClass('panel-info1');
    });

    $('.bnn3').click(function() {
        $('.bnn3 img').toggleClass('img');
        $('.vvn3').toggleClass('panel-info1');
    });

    $('.bnn4').click(function() {
        $('.bnn4 img').toggleClass('img');
        $('.vvn4').toggleClass('panel-info1');
    });

    $('.bnn5').click(function() {
        $('.bnn5 img').toggleClass('img');
        $('.vvn5').toggleClass('panel-info1');
    });

    $('.bnn6').click(function() {
        $('.bnn6 img').toggleClass('img');
        $('.vvn6').toggleClass('panel-info1');
    });


    $('.bnn7').click(function() {
        $('.bnn7 img').toggleClass('img');
        $('.vvn7').toggleClass('panel-info1');
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