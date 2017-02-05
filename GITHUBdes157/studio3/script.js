// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //definining mountain, rooms, and descriptions
    var mountain1 = document.getElementById('mountain1');
    var mountain2 = document.getElementById('mountain2');
    var mountain3 = document.getElementById('mountain3');
    var mountain4 = document.getElementById('mountain4');
    var mountain5 = document.getElementById('mountain5');
    var mountain6 = document.getElementById('mountain6');
    var mountain7 = document.getElementById('mountain7');
    var mountain8 = document.getElementById('mountain8');

    var sun = document.getElementById('sun');
    var bird = document.getElementById('bird');
    var space = document.getElementById('space');
    var disney = document.getElementById('disney');
    var hawaii = document.getElementById('hawaii');
    var fall = document.getElementById('fall');
    var lake = document.getElementById('lake');
    var pea = document.getElementById('pea');

    var sundes = document.getElementById('sundes');
    var birddes = document.getElementById('birddes');
    var spacedes = document.getElementById('spacedes');
    var disneydes = document.getElementById('disneydes');
    var hawaiides = document.getElementById('hawaiides');
    var falldes = document.getElementById('falldes');
    var lakedes = document.getElementById('lakedes');
    var peades = document.getElementById('peades');

    var close = document.getElementsByClassName('close');


    //mountain1
    mountain1.addEventListener('click', function() {
        sun.style.visibility = 'hidden';
        mountain1.style.visibility = 'hidden';
        sundes.style.visibility = 'visible';
    });

    close[0].addEventListener('click', function() {
        sundes.style.visibility = 'hidden';
        sun.style.visibility = 'visible';
        mountain1.style.visibility = 'visible';

    });

    //mountain2
    mountain2.addEventListener('click', function() {
        bird.style.visibility = 'hidden';
        mountain2.style.visibility = 'hidden';
        birddes.style.visibility = 'visible';
    });

    close[1].addEventListener('click', function() {
        birddes.style.visibility = 'hidden';
        bird.style.visibility = 'visible';
        mountain2.style.visibility = 'visible';
    });

    //mountain3
    mountain3.addEventListener('click', function() {
        space.style.visibility = 'hidden';
        mountain3.style.visibility = 'hidden';
        spacedes.style.visibility = 'visible';
    });

    close[2].addEventListener('click', function() {
        spacedes.style.visibility = 'hidden';
        space.style.visibility = 'visible';
        mountain3.style.visibility = 'visible';
    });
    //mountain4
    mountain4.addEventListener('click', function() {
        disney.style.visibility = 'hidden';
        mountain4.style.visibility = 'hidden';
        disneydes.style.visibility = 'visible';
    });

    close[3].addEventListener('click', function() {
        disneydes.style.visibility = 'hidden';
        disney.style.visibility = 'visible';
        mountain4.style.visibility = 'visible';
    });
    //mountain5
    mountain5.addEventListener('click', function() {
        hawaii.style.visibility = 'hidden';
        mountain5.style.visibility = 'hidden';
        hawaiides.style.visibility = 'visible';
    });

    close[4].addEventListener('click', function() {
        hawaiides.style.visibility = 'hidden';
        hawaii.style.visibility = 'visible';
        mountain5.style.visibility = 'visible';
    });
    //mountain6
    mountain6.addEventListener('click', function() {
        fall.style.visibility = 'hidden';
        mountain6.style.visibility = 'hidden';
        falldes.style.visibility = 'visible';
    });

    close[5].addEventListener('click', function() {
        falldes.style.visibility = 'hidden';
        fall.style.visibility = 'visible';
        mountain6.style.visibility = 'visible';
    });
    //mountain7
    mountain7.addEventListener('click', function() {
        lake.style.visibility = 'hidden';
        mountain7.style.visibility = 'hidden';
        lakedes.style.visibility = 'visible';
    });

    close[6].addEventListener('click', function() {
        lakedes.style.visibility = 'hidden';
        lake.style.visibility = 'visible';
        mountain7.style.visibility = 'visible';
    });
    //mountain8
    mountain8.addEventListener('click', function() {
        pea.style.visibility = 'hidden';
        mountain8.style.visibility = 'hidden';
        peades.style.visibility = 'visible';
    });

    close[7].addEventListener('click', function() {
        peades.style.visibility = 'hidden';
        pea.style.visibility = 'visible';
        mountain8.style.visibility = 'visible';
    });



});
