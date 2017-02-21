// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    console.log('reading');

    //capture the submit event
    document.workout.onsubmit = processForm;

    //define process function
    function processForm() {

        var myMsg = document.getElementById('myMsg');
        var check = document.querySelector('check');

        //store user name in a variable


        myMsg.innerHTML = ('Congratulations! You have completed Day 1!');

        document.getElementById(‘check’).setAttribute(‘class’, ‘active’);



        //prevent page from reloading
        return false;

    }
});
