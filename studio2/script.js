// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    console.log('reading');


    //capture the submit event
    document.f.onsubmit = processForm;

    //define process function
    function processForm() {

        //store user name in a variable
        var userFood = document.f.userFood.value;
        //store color in a variable called color
        var userBody = document.f.userBody.value;
        //store color in a variable called adj
        var userPerson = document.f.userPerson.value;
        //store color in a variable called color
        var userColor = document.f.userColor.value;

        //store color in a variable called adj
        var userAdj1 = document.f.userAdj1.value;
        //store color in a variable called adj
        var userAdj2 = document.f.userAdj2.value;
        //store color in a variable called adj
        var userAdj3 = document.f.userAdj3.value;
        //store color in a variable called adj
        var userAdj4 = document.f.userAdj4.value;
        //store color in a variable called adj
        var userAdj5 = document.f.userAdj5.value;
        //store color in a variable called adj
        var userAdj6 = document.f.userAdj6.value;
        //store color in a variable called adj
        var userAdj7 = document.f.userAdj7.value;
        //store color in a variable called adj
        var userAdj8 = document.f.userAdj8.value;
        //store color in a variable called adj
        var userFruit1 = document.f.userFruit1.value;
        //store color in a variable called adj
        var userFruit2 = document.f.userFruit2.value;
        //store color in a variable called adj
        var userVeg = document.f.userVeg.value;
        //store color in a variable called adj
        var userCon = document.f.userCon.value;
        //store color in a variable called adj
        var userFruit = document.f.userFruit.value;
        //store color in a variable called adj
        var userColor = document.f.userColor.value;
        //store color in a variable called adj
        var userColor1 = document.f.userColor1.value;
        //store color in a variable called adj
        var userVeg1 = document.f.userVeg1.value;
        //store color in a variable called adj
        var userEth = document.f.userEth.value;
        //store color in a variable called num
        var userNum = document.f.userNum.value;
        //store color in a variable called num
        var userNum1 = document.f.userNum1.value;
        //store color in a variable called num
        var userNum2 = document.f.userNum2.value;
        //store color in a variable called num
        var userNum3 = document.f.userNum3.value;
        //store color in a variable called num
        var userNum4 = document.f.userNum4.value;
        //store color in a variable called num
        var userNum5 = document.f.userNum5.value;
        //store color in a variable called num
        var userNum6 = document.f.userNum6.value;
        //store color in a variable called num
        var userNum7 = document.f.userNum7.value;
        //store color in a variable called num
        var userNum8 = document.f.userNum8.value;
        //store color in a variable called num
        var userNum9 = document.f.userNum9.value;
        //store color in a variable called num
        var userAn = document.f.userAn.value;


        //console.log(userColor);
        var myMsg = document.getElementById('myMsg');
        //use the alert() to concatenate a message
        myMsg.innerHTML = ('How to Make ' + userEth + ' ' + userFood);

        var myQuote = document.getElementById('myQuote');
        //use the alert() to concatenate a message
        myQuote.innerHTML = ('"This is a(n) ' + userAdj7 + ' soup! Perfect for an upset ' + userBody + '! Leftovers freeze ' + userAdj8 + '." --' + userPerson);

        var myIngredients = document.getElementById('myIngredients');
        //use the alert() to concatenate a message
        myIngredients.innerHTML = ('<strong>Ingredients:</strong> <br>' + userNum + ' cup(s) of ' + userAn + ' stock <br>' + userNum1 + ' tablespoon(s) of grated ' + userFruit1 + ' zest <br>' + userNum2 + ' tablespoon(s) of grated ' + userFruit2 + ' zest <br>' + userNum3 + ' can(s) of whole ' + userVeg + ', drained <br> ' + userNum4 + ' lb(s) of fully cooked frozen ' + userAn + ' salad, thawed <br>' + userNum5 + ' tablespoon(s) of ' + userCon + '<br>' + userNum6 + ' cup(s) of fresh ' + userFruit + ' juice <br>' + userNum7 + ' ' + userColor + ' onions, chopped <br>' + userNum8 + ' tablespoon(s) of ' + userAdj6 + ' ' + userVeg1 + ', chopped <br>' + userNum9 + ' ' + userColor1 + ' chili peppers, seeded and chopped <br>' + 'Salt and pepper to taste');

        var myDirections = document.getElementById('myDirections');
        //use the alert() to concatenate a message
        myDirections.innerHTML = ('<strong>Directions:</strong> <br>Combine the ' + userAn + ' stock, ' + userFruit1 + ' zest, and ' + userFruit2 + ' zest in a ' + userAdj1 + ' pot and bring to a boil. Reduce heat to medium and simmer for about 5 minutes. Add ' + userVeg + ' and ' + userAn + ' and cook until ' + userAn + ' have fully heated through. Stir in the ' + userCon + ', ' + userFruit + ' juice, ' + userColor + ' onion, ' + userVeg1 + ' and ' + userColor1 + ' chili peppers. Taste and adjust salt and pepper if needed. Soup should be ' + userAdj2 + ', ' + userAdj3 + ', ' + userAdj4 + ', and ' + userAdj5 + '.');

        //prevent page from reloading
        return false;

    }

})
