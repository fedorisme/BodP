// Template file
// Author: Fedor

var element = document.getElementById('navlogo');
var bodyRect = document.body.getBoundingClientRect();
    elemRect = element.getBoundingClientRect();
    offset   = elemRect.top - bodyRect.top;

document.onscroll = function(){

	if (window.pageYOffset > (offset - 8)) {
		console.log("hamster");
		document.getElementById('navlogo').classList.add("showlogo");
	} else {
		document.getElementById('navlogo').classList.remove("showlogo");
	}
};

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
      // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });