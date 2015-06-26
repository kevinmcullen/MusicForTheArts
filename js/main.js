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
    var iScrollPos = 0;

$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
      $(".mainNav").slideUp("slow");
        //Scrolling Down

    } else {
      $(".mainNav").slideDown("slow");
       //Scrolling Up

    }

    iScrollPos = iCurScrollPos;

});

  
});