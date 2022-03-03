AOS.init();

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
var speed = 60; // You can set the speed here. + is slower
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

// Video
// const startVideo = async () => {
//   const video = document.querySelector('#video_background');

//   try {
//       await video.play();

//       video.setAttribute('autoplay', true);
//       video.setAttribute('muted', true);
//   } catch (err) {
//     console.log(err, 'video play error');
//     // do stuff in case your video is unavailable to play/autoplay
//   }
// }
// setTimeout(startVideo, 500)

// const startVideoMobile = async () => {
//   const videoMobile = document.querySelector('#video_background_mobile');

//   try {
//       await videoMobile.play();

//       videoMobile.setAttribute('autoplay', true);
//       videoMobile.setAttribute('muted', true);
//   } catch (err) {
//     console.log(err, 'video play error');
//     // do stuff in case your video is unavailable to play/autoplay
//   }
// }
// setTimeout(startVideoMobile, 500)

  setTimeout(function () {
    $(".search-box-index ").show()
  }, 5000);


  // Auto complete
  
// Auto Complete suggesstion for country name
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
/*An array containing all the country names in the world:*/
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);

function summationIndex()
{
  var locationInput = document.getElementById("myInput").value;
  document.getElementById("filter-location-index").value = locationInput;
  // console.log("INNERHTML" , locationInput)
}
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

// Display Block and none function
function displayBlock(value){
  document.getElementById(value).style.display = "block";
 }
 function displayNone(value){
  document.getElementById(value).style.display = "none";
 }