/**********************
 *      Tyemi.js      *
 * What Tyemi runs on *
 *                    *
 **********************/

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

function appgen(id, name, description, link, offline){
    //declare variables
    var h1, br1, h3, br2, br3, button1, br4, button2;

    //create elements
    h1 = document.createElement('h1');
    br1 = document.createElement('br/');
    h3 = document.createElement('h3');
    br2 = document.createElement('br/');
    br3 = document.createElement('br/');
    button1 = document.createElement('button');
    br4 = document.createElement('br/');
    button2 = document.createElement('button');
}

function switcher(close, open){
    document.getElementById(close).style.display = 'none';
    document.getElementById(open).style.display = 'block';
}

function window(method, url){
    if(method == 'location'){
        window.location = url;
    }else if(method == 'location_href'){
        window.location.href = url;
    }else if(method == 'open'){
        window.open(url);
    }
}