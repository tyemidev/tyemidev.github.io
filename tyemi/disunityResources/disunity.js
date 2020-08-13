//---------------//
//               //
//    disunity   //
//               //
//---------------//

var disunity = (function(){
    'use strict';

    // Create the methods object
    var methods = {};

    //
    // Methods
    //

    methods.newBlank = function(type){
        switch(type){
            case '@me':
                window.open('https://discordapp.com/channels/@me');
            break;
            case 'frontpage':
                window.open('https://discord.com');
            break;
        }
    }

    // Expose the public methods
    return methods;
})();
