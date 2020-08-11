//---------------//
//               //
//    disunity   //
//               //
//---------------//

function newdiscordlogin(email, password){
    var encodedemail = encodeURIComponent(email);
    var encodedpassword = encodeURIComponent(password);
    var discord = window.open('https://discord.com/login?email='+encodedemail);
}
