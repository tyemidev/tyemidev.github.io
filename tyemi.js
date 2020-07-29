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

function appgen(id, name, description, link, offline){
    //declare variables
    var div, h1, br1, h3, br2, br3, button1, br4, button2;

    //create elements
    div = document.getElementById(id);
    h1 = document.createElement('h1');
    br1 = document.createElement('br');
    h3 = document.createElement('h3');
    br2 = document.createElement('br');
    br3 = document.createElement('br');
    button1 = document.createElement('button');
    br4 = document.createElement('br');

    if(offline){
    button2 = document.createElement('button');
    }

    //content
    h1.textContent = name;
    h3.textContent = description;
    button1.textContent = 'Install';

    if(offline){
    button2.textContent = 'Install (offline)';
    }

    //attributes
    h1.setAttribute('style', 'font-size:large;');
    h3.setAttribute('style', 'font-size:large;');
    button1.setAttribute('style', 'font-size:2vw; width:4vw;');
    button1.setAttribute('onclick', 'window("open", "'+link+'");');

    if(offline){
    button2.setAttribute('style', 'font-size:2vw; width:4vw;');
    button2.setAttribute('onclick', 'window("open", "'+offline+'");');
    }

    //append
    div.appendChild(h1);
    div.appendChild(br1);
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

function window(method, url){
    if(method == 'location'){
        window.location = url;
    }else if(method == 'location_href'){
        window.location.href = url;
    }else if(method == 'open'){
        window.open(url);
    }
}