import $ from "jquery"
    $( "#about_button" ).on( "click", function() {
        alert('ok');
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});
    $( "#team_button" ).on( "click", function() {
        alert('ok');
    $('html, body').animate({
        scrollTop: $("#team").offset().top
    }, 1000);
});
    $( "#contact_button" ).on( "click", function() {
        alert('ok');
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});