/*
var words = ['inspired', 'enlightened', 'courageous', 'confident', 'amazing', 'galant', 'intelligent', 'hard working', 'goals', 'growth', 'empowered', 'imaginative', 'humorous', 'humble'];
document.write(words[2]);
*/

var time = 500;

$('div').hide();
$('.instruction').show();
$('.one').fadeIn(time);


$('.one').on('click', function(){
	 $('.one').fadeOut(time);
	 $('.two').delay(time).fadeIn(time);
});
 
$('.two').on('click', function(){
	 $('.two').fadeOut(time);
	 $('.three').delay(time).fadeIn(time);
});

$('.three').on('click', function(){
	 $('.three').fadeOut(time);
	 $('.four').delay(time).fadeIn(time);
});
$('.four').on('click', function(){
	 $('.four').fadeOut(time);
	 $('.five').delay(time).fadeIn(time);
});


$('.five').on('click', function(){
	 $('.five').fadeOut(time);
	 $('.six').delay(time).fadeIn(time);
});

$('.six').on('click', function(){
	 $('.six').fadeOut(time);
	 $('.seven').delay(time).fadeIn(time);
});

$('.seven').on('click', function(){
	 $('.seven').fadeOut(time);
	 $('.eight').delay(time).fadeIn(time);
});

$('.eight').on('click', function(){
	 $('.eight').fadeOut(time);
	 $('.nine').delay(time).fadeIn(time);
});


$('.nine').on('click', function(){
	 $('.nine').fadeOut(time);
	 $('.ten').delay(time).fadeIn(time);
});


$('.ten').on('click', function(){
	 $('.ten').fadeOut(time);
	 $('.eleven').delay(time).fadeIn(time);
});


$('.eleven').on('click', function(){
	 $('.eleven').fadeOut(time);
	 $('.twelve').delay(time).fadeIn(time);
});

$('.twelve').on('click', function(){
	 $('.twelve').fadeOut(time);
	 $('.thirteen').delay(time).fadeIn(time);
});


$('.thirteen').on('click', function(){
	 $('.thirteen').fadeOut(time);
	 $('.fourteen').delay(time).fadeIn(time);
});


$('.fourteen').on('click', function(){
	 $('.fourteen').fadeOut(time);
	 $('.fifteen').delay(time).fadeIn(time);
});

$('.fifteen').on('click', function(){
	 $('.fifteen').fadeOut(time);
	 $('.one').delay(time).fadeIn(time);
});

/*
for (words[0], words.length - 1  ,i++) {
		$('words[0]').fadeIn(500);
		$(this).on('click', function () {
			
		});
}
*/