//====================//
//      Tyemi.js      //
// What tyemi runs on //
//                    //
//====================//

var tyemijs = (function(){
    'use strict';

    // Create the methods object
    var methods = {};

    //
    // Methods
    //

    methods.createListButton = function(ulid, display, switcheroffid, appid){
        //declare variables
        var ul, li, button;

        //get element input
        ul = document.getElementById(ulid);

        //create elements
        li = document.createElement('li');
        button = document.createElement('button');

        //content
        button.textContent = display;

        //attributes
        button.setAttribute('onclick', 'switcher("'+switcheroffid+'", "'+appid+'");')

        //append
        li.appendChild(button);
        ul.appendChild(li);
    };

    methods.createListTitle = function(ulid, text){
        //declare variables
        var h1, ul;

        //h1
        h1 = document.createElement('h1');
        h1.textContent = text;

        //appending to ul
        ul = document.getElementById(ulid);
        ul.appendChild(h1);
    };

    methods.createAppPage = function(id, name, description, backid, link){
        //declare variables
        var div, back, h1, h3, br2, br3, button;

        //create elements
        div = document.getElementById(id);
        back = document.createElement('button');
        h1 = document.createElement('h1');
        h3 = document.createElement('h3');
        br2 = document.createElement('br');
        br3 = document.createElement('br');
        button = document.createElement('button');

        //content
        back.textContent = 'Back';
        h1.textContent = name;
        h3.textContent = description;
        button.textContent = 'Install';

        //attributes
        back.setAttribute('onclick', 'switcher("'+id+'", "'+backid+'");');
        button.setAttribute('style', 'font-size:100%;');
        button.setAttribute('onclick', 'tyemiopen("'+link+'");');

        //append
        div.appendChild(back);
        div.appendChild(h1);
        div.appendChild(h3);
        div.appendChild(br2);
        div.appendChild(br3);
        div.appendChild(button);
    }

    // Expose the public methods
    return methods;
})();

function switcher(offid, onid){
    var off, on;
    off = document.getElementById(offid);
    on = document.getElementById(onid);

    off.style.display = 'none';
    on.style.display = 'block';
}

function tyemiopen(url){
    window.open(url);
}