let currentSelected = null;
let currentChildSelected = null;
function onRadioCheckChange(element, isChild = false) {
    const currentId = element.dataset.id
    if (currentSelected && !isChild) {
        document.getElementById(currentSelected).style.display = "none"
    }
    else if(isChild) {
        if(currentId === '' && currentChildSelected)
        document.getElementById(currentChildSelected).style.display = "none"

        if (currentChildSelected) {
            document.getElementById(currentChildSelected).style.display = "none"
        }
        if(element.checked && currentId){
            currentChildSelected = currentId
            document.getElementById(currentId).style.display = "block"
        }
        return;
    }

    if (element.checked) {
        currentSelected = currentId
        document.getElementById(currentId).style.display = "block"
    }
}

function topFunction(event) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    event.preventDefault()
  }
//   Upload Image
function readURLFront(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#fronSide').css('background-image', 'url('+e.target.result +')');
            $('#fronSide').hide();
            $('#fronSide').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#frontUpload").change(function() {
    readURLFront(this);
});
function readURLBack(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#backSide').css('background-image', 'url('+e.target.result +')');
            $('#backSide').hide();
            $('#backSide').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#backUpload").change(function() {
    readURLBack(this);
});
function readURLChange(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#changeImage').css('background-image', 'url('+e.target.result +')');
            $('#changeImage').hide();
            $('#changeImage').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#changeImageButton").change(function() {
    readURLChange(this);
});
function readURLChange(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#uploadSelife').css('background-image', 'url('+e.target.result +')');
            $('#uploadSelife').hide();
            $('#uploadSelife').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#uploadSelifeButton").change(function() {
    readURLChange(this);
});