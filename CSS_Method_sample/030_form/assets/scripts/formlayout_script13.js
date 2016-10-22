jQuery(function($) {

	// minimalect
	$('#month').minimalect({
		placeholder: ''
	});

	// ah-placeholder
	$('.add-placeholder').ahPlaceholder({
		placeholderColor: 'silver', // プレースホルダーの文字色
		placeholderAttr: 'placeholder', // プレースホルダーに使用する文字の取得属性
		likeApple: true // プレースホルダーが消えるタイミングを入力が始まってからにするか
	});
	
});