// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 80,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// frontend progress circular bar 
let frontendProgress = document.querySelector(".frontend"),
  frontendValue = document.querySelector(".frontend-progress");

let frontendStartValue = 0,
  frontendEndValue = 80,
  frontendspeed = 30;

let progressfrontend = setInterval(() => {
  frontendStartValue++;

  frontendValue.textContent = `${frontendStartValue}%`;
  frontendProgress.style.background = `conic-gradient(#20c997 ${
    frontendStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (frontendStartValue == frontendEndValue) {
    clearInterval(progressfrontend);
  }
}, frontendspeed);

// backend progress circular bar 
let backendProgress = document.querySelector(".backend"),
  backendValue = document.querySelector(".backend-progress");

let backendStartValue = 0,
  backendEndValue = 70,
  backendSpeed = 70;

let progressbackend = setInterval(() => {
  backendStartValue++;

  backendValue.textContent = `${backendStartValue}%`;
  backendProgress.style.background = `conic-gradient(#3f396d ${
    backendStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (backendStartValue == backendEndValue) {
    clearInterval(progressbackend);
  }
}, backendSpeed);

// database progress circular bar 
let databaseProgress = document.querySelector(".database"),
  databaseValue = document.querySelector(".database-progress");

let databaseStartValue = 0,
  databaseEndValue = 75,
  databaseSpeed = 30;

let progressDatabase = setInterval(() => {
  databaseStartValue++;

  databaseValue.textContent = `${databaseStartValue}%`;
  databaseProgress.style.background = `conic-gradient(#7d2ae8 ${
    databaseStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (databaseStartValue == databaseEndValue) {
    clearInterval(progressDatabase);
  }
}, databaseSpeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});