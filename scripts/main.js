// Template file
// Author: Fedor

document.onscroll = function(){

	if (window.pageYOffset > 499) {
		console.log("hamster");
		document.getElementById('navlogo').classList.add("showlogo");
	};
};
