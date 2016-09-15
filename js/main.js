
//function calls
$(document).ready(function() {
  fetch();
});
$(".refresh").click(function() {
  fetch();
});
//reuseable function for page load and refresh button
function fetch() {
  //get quote and auther and place in html (animated)
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(response) {
    $(".quote-text").animate({opacity: 0}, 500, function() {
      $(this).animate({opacity: 1}, 750);
      $('#text').html('<i class="fa fa-quote-left fa-lg"></i>' + '&nbsp;&nbsp;' + response.quoteText);
    });
    $(".quote-author").animate({opacity: 0}, 500, function() {
      $(this).animate({opacity: 1}, 750);
      $('#author').html('~ ' + response.quoteAuthor);
    });
    //configure tweet button with quote and author info
    $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '"' + response.quoteText + '"' + '  ~' + response.quoteAuthor);
    $('.twitter-share-button').attr('target', '_blank'); 
    //configure Auther Wiki button
    if (response.quoteAuthor.length > 0){
      $('#wikibox').css({'display': 'inline-block'});
      $('.wiki-search-button').attr('href', 'https://en.wikipedia.org/wiki/' + response.quoteAuthor);
    $('.wiki-search-button').attr('target', '_blank');
    };
    if (response.quoteAuthor.length == 0){
      $('#wikibox').css({'display': 'none'});
    };
  });
  //choose a random background
  $('#quoteMachine').css({'background': 'url(' + images[Math.floor(Math.random() * images.length)] + ')' + 'no-repeat center center fixed'});
}

//Animation for rotating refresh button
$("#refresh").on('click', function() {
  $(this).toggleClass('rotate');
});

//background image array - to be replaced by API version sometime
var images = [
  'https://markj78.github.io/quote-machine/img/1.jpg',
  'https://markj78.github.io/quote-machine/img/2.jpg',
  'https://markj78.github.io/quote-machine/img/3.jpg',
  'https://markj78.github.io/quote-machine/img/4.jpg',
  'https://markj78.github.io/quote-machine/img/5.jpg',
  'https://markj78.github.io/quote-machine/img/6.jpg',
  'https://markj78.github.io/quote-machine/img/7.jpg',
  'https://markj78.github.io/quote-machine/img/8.jpg',
  'https://markj78.github.io/quote-machine/img/9.jpg',
  'https://markj78.github.io/quote-machine/img/10.jpg',
  'https://markj78.github.io/quote-machine/img/11.jpg',
  'https://markj78.github.io/quote-machine/img/12.jpg',
  'https://markj78.github.io/quote-machine/img/13.jpg',
  'https://markj78.github.io/quote-machine/img/14.jpg',
  'https://markj78.github.io/quote-machine/img/15.jpg',
  'https://markj78.github.io/quote-machine/img/16.jpg',
  'https://markj78.github.io/quote-machine/img/17.jpg',
  'https://markj78.github.io/quote-machine/img/18.jpg',
  'https://markj78.github.io/quote-machine/img/19.jpg',
  'https://markj78.github.io/quote-machine/img/20.jpg',
  'https://markj78.github.io/quote-machine/img/21.jpg',
  'https://markj78.github.io/quote-machine/img/22.jpg',
  'https://markj78.github.io/quote-machine/img/23.jpg',
  'https://markj78.github.io/quote-machine/img/24.jpg',
  'https://markj78.github.io/quote-machine/img/25.jpg'
];

//ALLOWS CROSS ORIGIN HTTP API VIA HTTPS SITE (Thanks stack overflow)


jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
    options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});


//END