/* Pixel Engineering Co -- Custom js -- Handcrafted Code -- */
$(document).ready(function() {

  //nav-to-top arrow function
  var offset = 300;
  var duration = 400;
  $(window).scroll(function() {
  if (jQuery(this).scrollTop() > offset) {
    jQuery('.back_to_top').fadeIn(duration);
    } else {
      jQuery('.back_to_top').fadeOut(duration);
    }
  });

  $('.back_to_top').click(function(event) {
    var duration = 400;
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, duration);
    return false;
  });

  //smooth scroll fuction for hash links
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 59
        }, 1000);
        return false;
      }
    }
  });

  $('#mblmenu').click(function() {
    $('.mblnav').slideToggle();
  });

});

var today = new Date();
var year = today.getFullYear();
var el = document.getElementById('year');
el.innerHTML = year;
