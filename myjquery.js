$(document).ready(function () {
    updateQuote();
   $('#mybutton').click(function () {
       updateQuote();
    });
    $('#tweet').click(function(){
       shareTweet(); 
    });
});



