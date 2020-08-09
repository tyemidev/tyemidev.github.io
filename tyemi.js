/**********************
 *      Tyemi.js      *
 * What Tyemi runs on *
 *                    *
 **********************/


// Generation functions
function listgen(ulid, display, switcheroffid, switcheronid){
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
    button.setAttribute('onclick', 'switcher("'+switcheroffid+'", "'+switcheronid+'");')

    //append
    li.appendChild(button);
    ul.appendChild(li);
}

function appgen(id, name, description, backid, link, offline){
    //declare variables
    var div, back, h1, h3, br2, br3, button1, br4, button2;

    //create elements
    div = document.getElementById(id);
    back = document.createElement('button');
    h1 = document.createElement('h1');
    h3 = document.createElement('h3');
    br2 = document.createElement('br');
    br3 = document.createElement('br');
    button1 = document.createElement('button');
    br4 = document.createElement('br');

    if(offline){
    button2 = document.createElement('button');
    }

    //content
    back.textContent = 'Back';
    h1.textContent = name;
    h3.textContent = description;
    button1.textContent = 'Install';

    if(offline){
    button2.textContent = 'Install (offline)';
    }

    //attributes
    back.setAttribute('onclick', 'switcher("'+id+'", "'+backid+'");');
    button1.setAttribute('style', 'font-size:100%;');
    button1.setAttribute('onclick', 'tyemiwindow("open", "'+link+'");');

    if(offline){
    button2.setAttribute('style', 'font-size:1vw;');
    button2.setAttribute('onclick', 'tyemiwindow("open_data", "'+offline+'");');
    }

    //append
    div.appendChild(back);
    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(br2);
    div.appendChild(br3);
    div.appendChild(button1);
    div.appendChild(br4);
    if(offline){
    div.appendChild(button2);
    }
}

///////////////////////////////////////////////////////
// Viewing functions
function switcher(close, open){
    document.getElementById(close).style.display = 'none';
    document.getElementById(open).style.display = 'block';
}

function tyemiwindow(method, url){
    if(method == 'location'){
        window.location = url;
    }else if(method == 'location_href'){
        window.location.href = url;
    }else if(method == 'open'){
        window.open(url);
    }else if(method == 'open_data'){
        var win = window.open();
        win.document.write('<iframe src="' + url  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    }
}

//===================//
//                   //
//    The new shit   //
//                   //
//===================//

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

    // Expose the public methods
    return methods;
})();