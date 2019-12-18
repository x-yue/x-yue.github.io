// // $(document).ready(function(){
// //     $("a").on('click', function(event) {
// //         if (this.hash !== "") {
// //             event.preventDefault();
// //             var hash = this.hash;
// //             $('html, body').animate({
// //             scrollTop: $(hash).offset().top
// //             }, 1000, function(){
// //             window.location.hash = hash;
// //             });
// //         }
// //     });
// // });

// side nav start

function openNav() {
  document.getElementById("menubar").style.width = "100%";
}

function closeNav() {
  document.getElementById("menubar").style.width = "0";
}

//side nav ends


// slide start

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if ( slides[slideIndex-1] ){
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;  
  }
}

// slide ends


// loading start

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 1500);
	
});

// loading ends


// modal start

function onClick(element) {
  document.getElementById(element.id).src = element.src;
  if( element.id === 'hypertube'){
    document.getElementById("hpModal").style.display = "block";
  }
  else if( element.id === 'matcha'){
    document.getElementById("matchaModal").style.display = "block";
  }
  else if( element.id === 'gallery'){
    document.getElementById("galleryModal").style.display = "block";
  }
  else if( element.id === 'frontend'){
    document.getElementById("frontModal").style.display = "block";
  }
  else if( element.id === 'backend'){
    document.getElementById("backModal").style.display = "block";
  }
  else if( element.id === 'database'){
    document.getElementById("dataModal").style.display = "block";
  }
  else if( element.id === 'style'){
    document.getElementById("styleModal").style.display = "block";
  }
}

//modal ends
