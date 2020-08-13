//---------------//
//               //
//    disunity   //
//               //
//---------------//

function newdiscordlogin(email){
    // Encode email for URI
    var encodedemail = encodeURIComponent(email);

    // Create window with email in form
    var discord = window.open('https://discord.com/login?email='+ encodedemail);
}
