// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    // wait until page loaded before doing anything
    window.addEventListener('load', function() {

        // sign in flow
        var signInButton = document.getElementById('sign-in-button');
        signInButton.addEventListener('click', function() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);

            console.log("signInWithPopup")
        });

        // sign out
        var signOutButton = document.getElementById('sign-out-button');
        signOutButton.addEventListener('click', function() {
            firebase.auth().signOut();

            console.log("signOut")
        });

        // do things when a user signs in or out

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                // ...
                var overlay = document.getElementById('overlay');
                overlay.style.visibility = 'hidden';
                var base = document.getElementById('base');
                base.style.visibility = 'visible';
                console.log(user.displayName);
            } else {
                // User is signed out.
                // ...
        
                base.style.visibility = 'hidden';
                console.log('User logged out');
            }
        });


        var firebaseOutput = document.getElementById('firebase-output');
        var dbRef = firebase.database().ref().child('text');
        dbRef.on('value', snap => firebaseOutput.innerText = snap.key + ': ' + snap.val());


    });
});
