//slider
$(document).ready(function (){
	$('#header ul li a').click(function(){
		var integer = $(this).attr('rel');
		$('#tabArea').animate({left:-960*(parseInt(integer)-1)})
		$('#header ul li a').each(function(){
		$(this).removeClass('active');
			if($(this).hasClass('button'+integer)){
				$(this).addClass('active')}
		});
	});	
});