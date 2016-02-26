
//
$(function(){
	flickingSlick("#lnb.prdNavi .slider", 4, 3, 2, 2);
	flickingSlick(".purNavi .slider", 4, 3, 2, 2);
	flickingSlick(".servNavi .slider", 5, 4, 3, 2);
	flickingSlick(".supNavi .slider", 5, 4, 3, 2);
	flickingSlick(".secuNavi .slider", 5, 4, 2, 2);
	//flickingSlick(".tabNavi.typeB .slider", 4, 3, 3, 2);
	flickingSlick(".partNavi .slider", 3, 3, 2, 2);

	$('#lnb').show();
	setTimeout(function(){
		$('#lnb .slider').slick("slickGoTo",$("#lnb .slider li.current").index());	
	}, 300)


	//recommend product
	flickingSlick(".prdRecom .slider", 4, 3, 2, 2);
});