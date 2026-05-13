document.addEventListener("DOMContentLoaded", function () {

    $('.yuca').click(function() {
        var i = $(this).index();
        $( '.res2, .res3, .res4, .res5, .res6, .res7, .res8, .none').fadeOut();
        $( '.res1' ).show( "slow" );
    });


    $('.ridvan').click(function() {
        var i = $(this).index();
        $( '.res1, .res3, .res4, .res5, .res6, .res7, .res8, .none').fadeOut();
        $( '.res2' ).show( "slow" );
    });


    $('.bambu').click(function() {
        var i = $(this).index();
        $( '.res2, .res1, .res4, .res5, .res6, .res7, .res8, .none').fadeOut();
        $( '.res3' ).show( "slow" );
    });


    $('.garabato').click(function() {
        var i = $(this).index();
        $( '.res2, .res3, .res1, .res5, .res6, .res7, .res8, .none').fadeOut();
        $( '.res4' ).show( "slow" );
    });

    $('.ubuntu').click(function() {
        var i = $(this).index();
        $( '.res2, .res3, .res1, .res4, .res6, .res7, .res8, .none').fadeOut();
        $( '.res5' ).show( "slow" );
    });

    $('.hotel').click(function() {
        var i = $(this).index();
        $( '.res2, .res3, .res1, .res5, .res4, .res7, .res8, .none').fadeOut();
        $( '.res6' ).show( "slow" );
    });

    $('.encanto').click(function() {
        var i = $(this).index();
        $( '.res2, .res3, .res1, .res5, .res4, .res6, .res8, .none').fadeOut();
        $( '.res7' ).show( "slow" );
    });

    $('.jocoqui').click(function() {
        var i = $(this).index();
        $( '.res2, .res3, .res1, .res5, .res4, .res6, .res7, .none').fadeOut();
        $( '.res8' ).show( "slow" );
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

    $('.bnn8').click(function() {
        $('.bnn8 img').toggleClass('img');
        $('.vvn8').toggleClass('panel-info1');
    });


    $('.bnn9').click(function() {
        $('.bnn9 img').toggleClass('img');
        $('.vvn9').toggleClass('panel-info1');
    });


    $('.bnn10').click(function() {
        $('.bnn10 img').toggleClass('img');
        $('.vvn10').toggleClass('panel-info1');
    });


    $('.bnn11').click(function() {
        $('.bnn11 img').toggleClass('img');
        $('.vvn11').toggleClass('panel-info1');
    });

    $('.bnn12').click(function() {
        $('.bnn12 img').toggleClass('img');
        $('.vvn12').toggleClass('panel-info1');
    });


    $('.bnn13').click(function() {
        $('.bnn13 img').toggleClass('img');
        $('.vvn13').toggleClass('panel-info1');
    });

    $('.bnn14').click(function() {
        $('.bnn14 img').toggleClass('img');
        $('.vvn14').toggleClass('panel-info1');
    });

    $('.bnn15').click(function() {
        $('.bnn15 img').toggleClass('img');
        $('.vvn15').toggleClass('panel-info1');
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