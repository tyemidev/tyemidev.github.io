//---------------//
//               //
//    revolt     //
//               //
//---------------//

window.onload = function(){

    var hamburger = document.getElementById('hamburger');
    hamburger.onclick = function(){
        alert('e')
    }
    
}


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

