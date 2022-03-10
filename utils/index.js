
// Search Button Box show and hide functions
$(document).scroll(function() {

  searchHeader = document.getElementById("header-search-mobile");
  myID = document.getElementById("search-button-mobile-view");

  var myScrollFunc = function () {
      var y = window.scrollY;
      if (y >= 390) {
          myID.className = "search-mobile-index hide"
          searchHeader.className = "header-search-mobile show"
      } else {
          myID.className = "search-mobile-index show"
          searchHeader.className = "header-search-mobile hide"
      }
  };

  window.addEventListener("scroll", myScrollFunc);
});

// Typing Animation
$(document).ready(function() {
  $(".title").lettering();
  $(".button").lettering();
});

$(document).ready(function() {
  animation();
}, 100);
function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
}

// Typing Animation Mobile
// Create the array with the text you want to write
var txt2write = new Array(
  "<h1>Find Your</h1>",
  "<h2 >Next Stay</h2>",
  "<p>Your tavel partner for</p>",
  "<p>unforgettable trips at</p>",
  "<p>the best price.</p>"
);

// Variables
var speed = 20; // You can set the speed here. + is slower
var index = 0;
text_pos = 0;
var str_length = txt2write[0].length;
var contents, row;

// Function
function type_text() {
  // Init the content with blank
  contents = "";
  row = Math.max(0, index - 9);
  while (row < index) {
    // Each sentence will end with a <br />
    contents += txt2write[row++] + "\r<br />";
  }

  // Write the text
  $("div.writeit").html(
    contents +
      txt2write[index].substring(0, text_pos) +
      "<span class='after'>_</span>"
  );

  if (text_pos++ == str_length) {
    text_pos = 0;
    index++;
    if (index != txt2write.length) {
      str_length = txt2write[index].length;
      setTimeout("type_text()", 800);
    }
  } else {
    setTimeout("type_text()", speed);
  }
}

type_text();

// Swiper*********************
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoHeight: false,
    centeredSlides: true,
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination"
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

    // And if we need scrollbar
    /*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
});

// Carousel swipe fuction for mobile
$('.carousel').on('touchstart', function(event){
  const xClick = event.originalEvent.touches[0].pageX;
  $(this).one('touchmove', function(event){
      const xMove = event.originalEvent.touches[0].pageX;
      const sensitivityInPx = 5;

      if( Math.floor(xClick - xMove) > sensitivityInPx ){
          $(this).carousel('next');
      }
      else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
          $(this).carousel('prev');
      }
  });
  $(this).on('touchend', function(){
      $(this).off('touchmove');
  });
});
