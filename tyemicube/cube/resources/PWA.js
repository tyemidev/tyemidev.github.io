//////////////////////////////////////////////
//            Tyemi CUB3 PWA.js             //
//                 V.0.0.1                  //
//  Storage and calls for compressed PWAs.  //
//                                          //
//////////////////////////////////////////////

// setting the compressed PWAs
const PWA = {
    "oldstore": "yup",
    "store": "orange",
    "manual": "test"
};

// The icon links

// main function
var CUBEPWA = (function(){
    'use strict';

    // Create the methods object
    var methods = {};

    //
    // Methods
    //

    methods.get = function(name){
        if(PWA[name]){
            return PWA[name];
        }else{
            return false;
        }
    }

    methods.display = function(){
        
    }

    // Expose the public methods
    return methods;
})();
