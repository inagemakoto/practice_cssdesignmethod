jQuery(function($) {

	var windowHgt = window.innerHeight;

	var spot1S = $( '#spot1' ).offset().top;
	var spot1H = $( '#spot1' ).height();
	var spot1D = spot1S - ( windowHgt - spot1H );
	var spot2S = $( '#spot2' ).offset().top;
	var spot2H = $( '#spot2' ).height();
	var spot2D = spot2S - ( windowHgt - spot2H );
	var spot3S = $( '#spot3' ).offset().top;
	var spot3H = $( '#spot3' ).height();
	var spot3D = spot3S - ( windowHgt - spot3H );
	var spot4S = $( '#spot4' ).offset().top;
	var spot4H = $( '#spot4' ).height();
	var spot4D = spot4S - ( windowHgt - spot4H );

	$( window ).scroll( function() {
		var scrolled = $( this ).scrollTop();

		$( 'body' ).css({
			backgroundPosition: '0 ' + scrolled * 0.9 + 'px'
		});

		if( spot1S > scrolled ) {
			$( '#spot1' ).css({ top: spot1S - scrolled });
		} else {
			$( '#spot1' ).css({ top: 0 });
		}
		if( spot1D < scrolled && spot1S > scrolled ) {
			var pos = ( scrolled - spot1D ) / ( windowHgt - spot1H );
			$( '#spot1-2' ).css({ top: pos *  20 + 'px' });
			$( '#spot1-3' ).css({ top: pos *  60 + 40 + 'px' });
			$( '#spot1-4' ).css({ top: pos * 136 + 60 + 'px' });
		}

		if( spot2S > scrolled ) {
			$( '#spot2' ).css({ top: spot2S - scrolled });
		} else {
			$( '#spot2' ).css({ top: 0 });
		}
		if( spot2D < scrolled && spot2S > scrolled ) {
			var pos = ( scrolled - spot2D ) / ( windowHgt - spot2H );
			/* 横方向へ移動させるためleft属性を指定 */
			$( '#spot2-2' ).css({ left: pos * 168 +  20 + 'px' });
			$( '#spot2-3' ).css({ left: pos * 312 + 199 + 'px' });
		} else if( spot2S < scrolled ) {
			/* スクロール量が開始位置を超えたら最大移動距離に設定 */
			$( '#spot2-3').css({ left: '512px' });
		}

		if( spot3S > scrolled ) {
			$( '#spot3' ).css({ top: spot3S - scrolled });
		} else {
			$( '#spot3' ).css({ top: 0 });
		}
		if( spot3D < scrolled && spot3S > scrolled ) {
			var pos = ( scrolled - spot3D ) / ( windowHgt - spot3H );
			$( '#spot3-2' ).css({ top: pos * 100 + 210 + 'px' });
		}

		if( spot4S > scrolled ) {
			$( '#spot4' ).css({ top: spot4S - scrolled });
		} else {
			$( '#spot4' ).css({ top: 0 });
		}
		if( spot4D < scrolled && spot4S > scrolled ) {
			var pos = ( scrolled - spot4D ) / ( windowHgt - spot4H );
			$( '#spot4-2' ).css({ top: pos * 56 + 20 + 'px' });
			$( '#spot4-3' ).css({ top: pos * 116 + 40 + 'px' });
		}

	});
});