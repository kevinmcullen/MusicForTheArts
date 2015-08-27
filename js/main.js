/*$(document).ready(function () {
    
    var hideNav = function () {
        $.find(".mainNav").animate({left: "15px", opacity: "1"}, "fast"); };
    var showNav = function () {
        $.find(".mainNav").animate({right: "15px", opacity: "0"}, "fast");        
    };
   // jQuery methods go here...
    $(".contactForm").on("focusin", "input", showError);
    $(".contactForm").on("focusout", "input", hideError);    
    $(".contactForm").on("focusin", "textarea", showError);
    $(".contactForm").on("focusout", "textarea", hideError
  
});
  */
  


  


$(document).ready(function () {   
  
  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
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
    
  $(window).scroll(function() {

    if ($(this).scrollTop()>200)
     {
        $('.scrollArrowGroup').fadeOut(500);
     }
    else
     {
      $('.scrollArrowGroup').fadeIn(500);
     }
 });
    
  $('.single-item').slick({
//    setting-name: setting-value;
      dots: true,  
    
  });
});

function initialize() {
  var mapOptions = {
    scrollwheel: false
  }
  var map = new google.maps.Map(document.getElementById("map"),
       mapOptions);
};
  
/*function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    scrollwheel: false
  });
}*/
  
  
//    var iScrollPos = 0;
//
//  $(window).scroll(function () {
//    var iCurScrollPos = $(this).scrollTop();
//    if (iCurScrollPos > iScrollPos) {
//      //Scrolling Down
//      $(".mainNav").slideUp("slow"); 
//    } else {
//      //Scrolling Up
//        $(".mainNav").slideDown("slow");
//        }
//    iScrollPos = iCurScrollPos;
//});  
});