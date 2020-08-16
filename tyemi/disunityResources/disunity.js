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

    methods.new = function(type){
        switch(type){
            case '@me':
                window.open('https://discordapp.com/channels/@me');
            break;
            case 'homepage':
                window.open('https://discord.com');
            break;
            case 'login':
                window.open('https://discord.com/login');
            break;
            case 'register':
                window.open('https://discord.com/register');
            break;
        }
    }

    // Expose the public methods
    return methods;
})();
