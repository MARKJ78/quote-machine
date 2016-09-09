
//function calls
$(document).ready(function() {
  fetch();
  preloadImages()
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
      $('#text').html('<i class="fa fa-quote-left fa-lg"></i>' + '&nbsp;&nbsp;' + response.quoteText);});
    $(".quote-author").animate({opacity: 0}, 500, function() {
      $(this).animate({opacity: 1}, 750);
      $('#author').html('~ ' + response.quoteAuthor);});
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
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg',
  'img/11.jpg',
  'img/12.jpg',
  'img/13.jpg',
  'img/14.jpg',
  'img/15.jpg',
  'img/16.jpg',
  'img/17.jpg',
  'img/18.jpg',
  'img/19.jpg',
  'img/20.jpg',
  'img/21.jpg',
  'img/22.jpg',
  'img/23.jpg',
  'img/24.jpg',
  'img/25.jpg'
];




//END