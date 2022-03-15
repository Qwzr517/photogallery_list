/* const images = document.querySelectorAll("img");
let i = 0;
setInterval(function(){
  if(i == 0) {
    images[i].style.display = 'block';
  } else if(i == images.length ) {
    images[i - 1].style.display = 'none';
    images[0].style.display = 'block';
    i = 0;
  } else {
    images[i - 1].style.display = 'none';
    images[i].style.display = 'block';
  }

 i++;

},1000); */

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}
