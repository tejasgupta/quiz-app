
$(document).ready(function(){
	$('#triviaTime').click(function(){
		$('#startQuiz').hide();
		$('image1').hide();
		$('h2').hide();
		$('h3').show();
		$('#progressBar').show();
		$('#main').show();
		$('#question1').show();
	});

	$('#submit').click(function(){
		$('#question1').hide();
		$('.answerInfo').show();
	})
});