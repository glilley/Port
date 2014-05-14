$(document).ready(function(){
  $('.scrollTop').hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1000){
        $('.scrollTop').fadeIn(250);
    }
    else {
        $('.scrollTop').fadeOut(250);
    }
  });
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
$(".hire").hover(
    function(){
        $(this).attr('src', 'assets/images/hire-hover.svg');
    }, function() {
        $(this).attr('src', 'assets/images/hire.svg');
    }
);


$('.toggle').on('click', function(){
  $(this).next('p').slideToggle();
})

});