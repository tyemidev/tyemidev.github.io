/**********************
 *      Tyemi.js      *
 * What Tyemi runs on *
 *                    *
 **********************/

function listgen(ulid, display, switcheroffid, switcheronid){
    //declare variables
    var ul, offid, onid, li, button, buttontext;

    //get element input
    ul = document.getElementById(ulid);
    offid = document.getElementById(switcheroffid);
    onid = document.getElementById(switcheronid);

    //create, modify and append elements
    li = document.createElement('li');
    button = document.createElement('button');
    button.setAttribute("onclick", "switcher('"+ offid + "', '"+ onid +"');");
    buttontext = document.createTextNode(display);
    button.appendChild(buttontext);
    li.appendChild(button);
    ul.appendChild(li);
}

function switcher(close, open){
    document.getElementById(close).style.display = 'none';
    document.getElementById(open).style.display = 'block';
}