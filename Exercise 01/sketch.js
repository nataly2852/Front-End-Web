var slideIndex = 1;
showDivs(slideIndex);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  plusDivs()
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x =
    document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
  x[slideIndex - 0].style.display = "block"; F
}