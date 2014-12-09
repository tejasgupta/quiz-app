
$(document).ready(function(){
	
// click event when clicking the Trivia time button.

	$('#triviaTime').click(function(){
		$('#startQuiz').hide();
		$('image1').hide();
		$('h2').hide();
		$('h3').show();
		$('#progressBar').show();
		$('#main').show();
		$('#question1').show();
		$('#bar1').hide();

	});
	
// click event when selecting the answer
	
	$('.answerBtn').click(function(){
		$('.answerBtn').removeClass('highlight');
		answer = $(this).text();
		$(this).addClass('highlight');
		console.log(answer);
	});

// click event when clicking the submit button question1	

	$('#submit1').click(function(){
		if(answer == null){
			alert('please select one of the following')
		} else if(answer == "Australia") {
			$('#question1').hide();
			$('#a1').show();
			//alert('well done');
			$('.wrongAnswer').hide();
			$('#answerBar').find('#t1').show();

		} else {
			$('#question1').hide();
			$('#a1').show();
			//alert ('wrong answer');
			$('.correctAnswer').hide();
			$('#answerBar').find('#c1').show();
		};
	});

// click even when clicking next button

	$('#next1').click(function(){
		$('.answerInfo').hide();
		$("#question2").show();
		$('#bar1').show();
	});
// ------------------------------------------------------------------------------

// click event when clicking the submit button question2

	$('#submit2').click(function(){
		if(answer == null){
			alert('please select one of the following')
		} else if(answer == "Irfan Pathan") {
			$('#question2').hide();
			$('#a2').show();
			//alert('well done');
			$('.wrongAnswer').hide();
			$('#answerBar').find('#t2').show();

		} else {
			$('#question2').hide();
			$('#a2').show();
			//alert ('wrong answer');
			$('.correctAnswer').hide();
			$('#answerBar').find('#c2').show();
		};
	});

// click even when clicking next button

	$('#next2').click(function(){
		$('.answerInfo').hide();
		$("#question3").show();
		$('#bar1').hide();
		$('#bar2').show();

	});

// ------------------------------------------------------------------------------

// click event when clicking the submit button questions3

	$('#submit3').click(function(){
		if(answer == null){
			alert('please select one of the following')
		} else if(answer == 1877) {
			$('#question3').hide();
			$('#a3').show();
			//alert('well done');
			$('.wrongAnswer').hide();
			$('#answerBar').find('#t3').show();

		} else {
			$('#question3').hide();
			$('#a3').show();
			//alert ('wrong answer');
			$('.correctAnswer').hide();
			$('#answerBar').find('#c3').show();
		};
	});

// click even when clicking next button

	$('#next3').click(function(){
		$('.answerInfo').hide();
		$("#question4").show();
		$('#bar2').hide();
		$('#bar3').show();
	});
// ------------------------------------------------------------------------------

// click event when clicking the submit button question4

	$('#submit4').click(function(){
		if(answer == null){
			alert('please select one of the following')
		} else if(answer == '20 june 1996') {
			$('#question4').hide();
			$('#a4').show();
			//alert('well done');
			$('.wrongAnswer').hide();
			$('#answerBar').find('#t4').show();

		} else {
			$('#question4').hide();
			$('#a4').show();
			//alert ('wrong answer');
			$('.correctAnswer').hide();
			$('#answerBar').find('#c4').show();
		};
	});

// click even when clicking next button

	$('#next4').click(function(){
		$('.answerInfo').hide();
		$("#question5").show();
		$('#bar3').hide();
		$('#bar4').show();
	});
// ------------------------------------------------------------------------------

// click event when clicking the submit button question5

	$('#submit5').click(function(){
		if(answer == null){
			alert('please select one of the following')
		} else if(answer == 'Sachin Tendulkar') {
			$('#question5').hide();
			$('#a5').show();
			//alert('well done');
			$('.wrongAnswer').hide();
			$('#answerBar').find('#t5').show();

		} else {
			$('#question5').hide();
			$('#a5').show();
			//alert ('wrong answer');
			$('.correctAnswer').hide();
			$('#answerBar').find('#c5').show();
		};
	});

// click even when clicking next button

	$('#next5').click(function(){
		$('.answerInfo').hide();
		$("#finalPage").show();
		$('#bar4').hide();
		$('#bar5').show();
	});

// final page and restart quiz.
	
	$('#restart').click(function(){
		$('#finalPage').hide();
		$('#t1, #t2, #t3, #t4, #t5, #c1, #c2, #c3, #c4, #c5').hide();
		$('#question1').show();
		$('#bar5').hide();
	});
});
