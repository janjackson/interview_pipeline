/* --- Question Functions ---
   -------------------------------------------------- */

function next_q()
{
	if ( $('#end').hasClass('hide') == true )
	{
		/*
		if(shiftOnce == true){
			var question = q2.shift();
			shiftOnce = false;
		}
		if(displayA == true){
			var question = q2.shift();

		}*/

		var question = q2.shift();

		if (question != 'done')
		{
			$('#question').html(question.q);
			if (displayA == true){
				$('#answer').html(question.a);
				displayA = false;
			} else {
				displayA = true;
			}
			timer_restart();
			display_tip();
		} else
		{
			$('#question').addClass('hide');
			$('#answer').addClass('hide');
			$('#timer').addClass('hide');
			$('.pg').addClass('hide');

			$('#end').removeClass('hide');
		}
	}
}

// console.log(question, displayA)

/* --- Timer Functions ---
   -------------------------------------------------- */

function timer_tick()
{
	$('#timer').removeClass('warning');
	$('#timer').removeClass('fail');

	timer = timer - 1;

	$('#timer').html(timer + ' s');


	if (timer < 45)
	{
		$('#timer').addClass('warning');
	}
	if (timer < 15)
	{
		$('#timer').removeClass('warning');
		$('#timer').addClass('fail');
	}
	if (timer <= 0)
	{
		$('#timer').addClass('hide');
		$('.pg').removeClass('hide');
	}

	 setTimeout('timer_tick();', 1000);
}

function timer_restart()
{
	$('#timer').removeClass('warning');
	$('#timer').removeClass('fail');
	$('.pg').addClass('hide');
	$('#timer').removeClass('hide');

	timer = 120;

	$('#timer').html('15 s');
}



/* --- Tip Functions ---
   -------------------------------------------------- */

function display_tip()
{
	var tip = tips.shift();

	$('#tip').html(tip);

	tips.push(tip);
}
