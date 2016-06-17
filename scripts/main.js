// $(document).ready(function(){
//    $("a").hover(function() {
//       console.log($(this).id);
//       $(this).find("img").attr("src","./assets/images/LinkedIn-hover.png");},
//       function() {
//         $(this).find("img").attr("src","./assets/images/"+this.id+".png");
// 		});
// });
$(document).ready(function(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.hero-content').css({
      'transform' : 'translateX('+ wScroll /6+'%)'
    });
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
