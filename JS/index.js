// $(window).on('mousewheel DOMMouseScroll', function(e) {
//   var dir,
//       amt = 100;

//   e.preventDefault();
//   if(e.type === 'mousewheel') {
//     dir = e.originalEvent.wheelDelta > 0 ? '-=' : '+=';
//   }
//   else {
//     dir = e.originalEvent.detail < 0 ? '-=' : '+=';
//   }      

//   $('html, body').stop().animate({
//     scrollTop: dir + amt
//   },500, 'linear');
// })

// $(document).on("ready", function() {
//     parallaxImgScroll();
//   }); 

//   jQuery(window).scroll(function() {
//     console.log($('.quality-right').offset().top);
//     if ($(this).scrollTop() > $('.quality-right').offset().top) {
//       $('.quality-right').stop().animate({ right: '0',opacity:1 }, 900);
//       $('.quality-left').stop().animate({ left: '0',opacity:1 }, 900);
//   } else {
//       $('.quality-right').stop().animate({ right: '-50%',opacity:0 },800);
//       $('.quality-left').stop().animate({ left: '-50%',opacity:0 }, 800);
//   }
//   //console.log(jQuery(this).scrollTop());
//     });
  


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// function test(){
//   console.log($(window).offset.top);
// }

// $(document).ready(function() {
//   var animated = false; //added variable to control the animation
//   $(window).scroll(function() {
//     console.log($('.quality-right').offset().top);
//     var wS = $('.quality-right').position().top;
//     if (animated && wS <= 1700) {
//       $(".quality-right").animate({
//         right: 0
//       }, 500);
//       animated = false; //animation ended
//     }
//     if (!animated && wS > 1710) {
//       $(".quality-right").animate({
//         //'left': $('.quality-right').width() - 0
//         right: $('.quality-right').width() - 0
//       }, 500);
//       animated = true; //it was animated
//     }
//   });
// });


