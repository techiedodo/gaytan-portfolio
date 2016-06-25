$(document).ready(function(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.hero-content').css({
      'transform' : 'translateX('+ wScroll /6+'%)'
    });

    if(wScroll > $('.top-row').offset().top - ($(window).height() / 2.5) ) {
      $('.services-section p').each(function(i){
        setTimeout(function(){
          $('.services-section p').eq(i).addClass('is-showing');
        }, 350 * (i+1));
      });
    };
  });

  var message = "";

  $("#sendMessage").on("click", function() {
    message = $("#contactForm").serializeArray();
    $.ajax({
        url: "//formspree.io/agaytan@techiedodo.com",
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    $("#contactForm")[0].reset();
    return false;
  });
});
