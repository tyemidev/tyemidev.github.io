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

function switcher(close, open){
    document.getElementById(close).style.display = 'none';
    document.getElementById(open).style.display = 'block';
}