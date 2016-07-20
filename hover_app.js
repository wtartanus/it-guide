

var $first = $('#company')
var $firstText = $('#company').html();
var $gergo = $('.ger').html();
var $wojtek = $('.woj').html();





// When photo is on hover event
$('#about img').mouseenter(function() {

	if( $(this).hasClass('gergo')) {
	 $first.html($gergo);
	} else {
   $first.html($wojtek);
	}
});

$('#about img').mouseleave(function() {
  
 $first.html($firstText);
});

  // Change text in about paragraph to text about person wich is on hover

  
  
  
  
 