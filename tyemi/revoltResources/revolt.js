//---------------//
//               //
//    revolt     //
//               //
//---------------//

var revolt = (function(){
    'use strict';

    // Create the methods object
    var methods = {};

    //
    // Methods
    //

    methods.createTab = function(){

    };

    // Expose the public methods
    return methods;
})();


// Fullscreen nav
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the current tab
    document.getElementById(tabName).style.display = "block";

    // Hide the navigator
    closeNav();
    
}

function nyan(){
    document.getElementById('nyan').play()
}


