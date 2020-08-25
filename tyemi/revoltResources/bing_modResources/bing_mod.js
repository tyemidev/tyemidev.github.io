function bingsearch(){
    // Declare variables
    var searchcontent, searchencoded, uri;

    // Get content
    searchcontent = document.forms["sb_form"]["q"].value;

    // URI encode
    searchencoded = encodeURI(searchcontent);

    // Combine URI and set window location
    uri = 'https://bing.com/search?q='+ searchencoded;
    window.location.href = uri;
}