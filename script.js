$(document).ready(function() {
  showQuote();
  $("#new-quote").on('click', function() {
    showQuote();
  });
  $("#tweet-quote").on('click', function(){
    postTweet();
  })
});

function showQuote() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
    $(".quote-text").html("\" " + data.quoteText + " \"");
    $(".author").html("- " + data.quoteAuthor);
  });
}

function postTweet(){
  var quote = $(".quote-text").html();
  var author = $(".author").html();
  var tweet = quote + " " + author;
  if(tweet.length > 140){
    alert("This quote can't be tweeted, because it's longer than 140 characters");
  }else{
    var tweetedLink = window.location.href;
    window.open("http://twitter.com/intent/tweet?text=" + tweet, "twitterwindow", "height=450, width=550");
  }
}
