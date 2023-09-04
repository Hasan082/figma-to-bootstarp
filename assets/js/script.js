$(document).ready(function(){
    $('#mobnavbar').hide(1);
    $('.navbar-toggler').on('click', function(e){
        e.preventDefault();
        $('#mobnavbar').removeAttr('class').slideToggle();
    });
});