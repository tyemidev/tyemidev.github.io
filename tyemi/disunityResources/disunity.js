//---------------//
//               //
//    disunity   //
//               //
//---------------//

function newdiscordlogin(email, password){
    // Encode email and password for URI
    var encodedemail = encodeURIComponent(email);
    var encodedpassword = encodeURIComponent(password);

    // Create window with email in form
    var discord = window.open('https://discord.com/login?email='+ encodedemail);

    discord.onload = function(){
    // Inject 'I have injected'
    win.document.body.innerHTML = '<body>I have injected</body>';
    }
}
