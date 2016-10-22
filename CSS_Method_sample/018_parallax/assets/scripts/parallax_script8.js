jQuery(function($) {

	var windowHgt = window.innerHeight; /* ブラウザの表示領域の高さ */

	/* 各スポットのページ上部からの位置 */
	var spot1S = $( '#spot1' ).offset().top;
	/* ブロックの高さ */
	var spot1H = $( '#spot1' ).height();
	/* ブロックがブラウザウィンドウへ完全に表示されてから、ページ上部までの移動距離 */
	var spot1D = spot1S - ( windowHgt - spot1H );
	/* 以下同 */
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
		var scrolled = $( this ).scrollTop();　/* スクロールした量 */

		$( 'body' ).css({
			/* body要素の背景画像をゆっくり移動させる */
			backgroundPosition: '0 ' + scrolled * 0.9 + 'px'
		});

		if( spot1S > scrolled ) {
			/* top属性を変化させ、スクロールしているように */
			$( '#spot1' ).css({ top: spot1S - scrolled });
		} else {
			/* スクロール量がブロック配置位置より大きくなったらページ上部に固定 */
			$( '#spot1' ).css({ top: 0 });
		}

		if( spot2S > scrolled ) {
			/* top属性を変化させ、スクロールしているように */
			$( '#spot2' ).css({ top: spot2S - scrolled });
		} else {
			/* スクロール量がブロック配置位置より大きくなったらページ上部に固定 */
			$( '#spot2' ).css({ top: 0 });
		}

		if( spot3S > scrolled ) {
			/* top属性を変化させ、スクロールしているように */
			$( '#spot3' ).css({ top: spot3S - scrolled });
		} else {
			/* スクロール量がブロック配置位置より大きくなったらページ上部に固定 */
			$( '#spot3' ).css({ top: 0 });
		}

		if( spot4S > scrolled ) {
			/* top属性を変化させ、スクロールしているように */
			$( '#spot4' ).css({ top: spot4S - scrolled });
		} else {
			/* スクロール量がブロック配置位置より大きくなったらページ上部に固定 */
			$( '#spot4' ).css({ top: 0 });
		}

	});
});