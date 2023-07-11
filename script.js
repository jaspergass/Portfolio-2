// let cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//   let x = e.clientX;
//   let y = e.clientY;
//   cursor.style.left = x + "px";
//   cursor.style.top = y + "px";
  
//   // cursor.style.animation = "cursor-scale 2s ease-out"
// });

//back to top button, from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Cursor
document.addEventListener("DOMContentLoaded", function(event) {
  var cursor = document.querySelector(".cursor");
  var links = document.querySelectorAll("a");
  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
    });
  }

  window.onmousemove = function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      // cursor.style.opacity = 1;
      TweenLite.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.onmouseout = function(e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  };
});

// Collapsed menu
function showMenu() {
  var menucontent = document.getElementById("menu-content");
  var title = document.getElementById("header-title");
  var button = document.getElementById("menu-button");
  if (menucontent.style.display === "none") {
    menucontent.style.display = "block";
    title.style.display = "none";
    button.innerHTML = "Close";
  } else {
    menucontent.style.display = "none";
    title.style.display = "block";
    button.innerHTML = "Menu";
  }
}

//adapted from https://codepen.io/Pennedweb/pen/LYNpoZb
function showHide(ele) {
  var srcElement = document.getElementById(ele);
  var lightswitch = document.getElementById("lightswitch");
  var page = document.getElementsByClassName("tohide");
  if (srcElement != null) {
      if (srcElement.style.display == "block") {
          srcElement.style.display = 'none';
          lightswitch.style.backgroundImage = "url(../img/switch.jpg)";
          for(i=0; i<page.length; i++){
            page[i].style.display = 'block';
          }
      }
      else {
          srcElement.style.display = 'block';
          lightswitch.style.backgroundImage = "url(../img/switch2.jpg)";
          for(i=0; i<page.length; i++){
            page[i].style.display = 'none';
          }
      }
      return false;
  }
}

//scroll
const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
