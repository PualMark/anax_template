//Start Page on #home
var url = document.URL,
	index = url.indexOf("#"),
	hash = index != -1 ? url.substring(index+1) : "";

	if(hash === ""){
		location.hash = "#home";
    }

//
var homeId = document.getElementById('home-nav')
var servicesId = document.getElementById('services-nav')
var portfolioId = document.getElementById('portfolio-nav')
var contactId = document.getElementById('contact-nav')

	if(hash === "#home"){
		homeId.style.backgroundColor = 'rgb(255, 255, 255, 0.1)'
	}


// Toggle Button Function to Show Navigation Bar Mobile
function showNavbar() {
	//input
	var checkBox = document.getElementById('show-nav')
	//navigation bar
	var content = document.getElementById('navbar')
	//Toggle Lines
	//line 1
	var line1 = document.getElementById('toggle-line1')
	//line 2
	var line2 = document.getElementById('toggle-line2')

	if(checkBox.checked == true){
		content.style.display = 'block'
		content.style.animation = 'nav-display .4s'
		//lines
		line1.style.animation = 'toggle-line-1 .4s forwards'
		line2.style.animation = 'toggle-line-2 .4s forwards'
	}else{
		content.style.animation = 'nav-nodisplay .4s forwards'
		line1.style.animation = 'toggle-line-out-1 .4s forwards'
		line2.style.animation = 'toggle-line-out-2 .4s forwards'
	}
}

// Services Slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("s-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length){
  	slideIndex = 1
	}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500);
}
