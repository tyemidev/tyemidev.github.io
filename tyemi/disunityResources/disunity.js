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

    // Inject 'I have injected'
    var inject = document.createElement('h1');
    inject.textContent = 'I have injected'
    discord.document.body.appendChild(inject);
}
