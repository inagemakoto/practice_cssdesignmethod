$(function() {
	$('#gnav img, .rollover').each(function(){
		var defaultSrc = $(this).attr('src');
		$(this).hover(function(){
			$(this).attr('src', defaultSrc.replace(/^(.+)(\.[a-zA-Z]+)$/, '$1_on$2'));
		},
		function(){
			$(this).attr('src', defaultSrc);
		});
	});
});
