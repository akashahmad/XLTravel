
// Select one checkbox at a time
// var propertyRatings;
// document.addEventListener('input',(event)=>{
// if(event.target.getAttribute('name')=="options-property-ratings[]"){
// if(propertyRatings)
// propertyRatings.checked=false;
// }
// event.target.checked=true;
// propertyRatings=event.target;
// })

// Increment Decrement Function
function increment(value) {
    document.getElementById(value).stepUp();
  }
  function decrement(value) {
    document.getElementById(value).stepDown();
  } 

// Price Range Script
var $range = $(".js-range-slider"),
    $from = $(".from"),
    $to = $(".to"),
    range,
    min = $range.data('min'),
    max = $range.data('max'),
    from,
    to;

var updateValues = function () {
    $from.prop("value", from);
    $to.prop("value", to);
};

$range.ionRangeSlider({
    onChange: function (data) {
      from = data.from;
      to = data.to;
      updateValues();
    }
});

range = $range.data("ionRangeSlider");
var updateRange = function () {
    range.update({
        from: from,
        to: to
    });
};

$from.on("input", function () {
    from = +$(this).prop("value");
    if (from < min) {
        from = min;
    }
    if (from > to) {
        from = to;
    }
    updateValues();    
    updateRange();
});

$to.on("input", function () {
    to = +$(this).prop("value");
    if (to > max) {
        to = max;
    }
    if (to < from) {
        to = from;
    }
    updateValues();    
    updateRange();
});

// Outside click for price range
document.addEventListener('mouseup', function(e) {
    var priceRangeBox = document.getElementById('dropDown-priceRange');
    if (!priceRangeBox.contains(e.target)){
    let priceRangeModal = document.getElementById("dropDown-priceRange");
    priceRangeModal.classList.remove("display-block")
   }
  });
  function priceRnageToggle(){
  }
  // Property Facalities Outside Click
document.addEventListener('mouseup', function(e) {
    var facalitiesBox = document.getElementById('property-facalities-dropBox');
    if (!facalitiesBox.contains(e.target)){
    let facilitesModal = document.getElementById("property-facalities-dropBox");
    facilitesModal.classList.remove("display-block")
   }
  });
  // filter Popup Outside CLick
  document.addEventListener('mouseup', function(e) {
    var FilterPopUp = document.getElementById('filter-popup-inner');
    if (!FilterPopUp.contains(e.target)){
      document.getElementById('filter-button-popup').style.display ="none";
   }
  });