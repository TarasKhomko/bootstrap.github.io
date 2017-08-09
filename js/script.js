
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(500);
});




$('.slick').slick({
      dots: true,
 
     
});

 $(document).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumb').hover(
        function(){
            $(this).find('.desk_slide').fadeIn(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.desk_slide').fadeOut(250); //.fadeOut(205)
        }
    ); 
 });