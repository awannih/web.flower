//menu
var tombolMenu = $(".hamburger");
var menu = $("nav .menu ul");

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}

function myFunction(x) {
  x.classList.toggle("change");
}

$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});
// transform hamburger
function myFunction(x) {
  x.classList.toggle("change");
}

//check lebar
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");

    //display:block
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});

// jam
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;

  document.getElementById("DisplayClock").innerText = time;
  document.getElementById("DisplayClock").textContent = time;

  setTimeout(showTime, 1000);
}
showTime();

// Sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//  slider image
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function sendwhatsapp() {
  var phonenumber = "+6285893758285";

  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;
  var country = document.querySelector(".country").value;
  var message = document.querySelector(".message").value;

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "*Name :* " +
    name +
    "%0a" +
    "*Email :* " +
    email +
    "%0a" +
    "*Delivery Date:* " +
    country +
    "%0a" +
    "*Message :* " +
    message +
    "%0a%0a" +
    "Halo Admin, Berikut custom order yang saya inginkan, terimakasih";

  window.open(url, "_blank").focus();
}
