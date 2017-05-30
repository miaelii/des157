// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

  var tip1 = document.getElementById('tip1');
  var des1 = document.getElementById('des1');
  var tip2 = document.getElementById('tip2');
  var des2 = document.getElementById('des2');

//clicking on tip1
  tip1.addEventListener('click', function() {
      des1.style.visibility = 'visible';
  });
  tip1.addEventListener('click', function() {
      des2.style.visibility = 'hidden';
  });
  tip1.addEventListener('click', function() {
      des3.style.visibility = 'hidden';
  });
  tip1.addEventListener('click', function() {
      des4.style.visibility = 'hidden';
  });
  tip1.addEventListener('click', function() {
      des5.style.visibility = 'hidden';
  });
  //clicking on tip2
    tip2.addEventListener('click', function() {
        des1.style.visibility = 'hidden';
    });
    tip2.addEventListener('click', function() {
        des2.style.visibility = 'visible';
    });
    tip2.addEventListener('click', function() {
        des3.style.visibility = 'hidden';
    });
    tip2.addEventListener('click', function() {
        des4.style.visibility = 'hidden';
    });
    tip2.addEventListener('click', function() {
        des5.style.visibility = 'hidden';
    });
