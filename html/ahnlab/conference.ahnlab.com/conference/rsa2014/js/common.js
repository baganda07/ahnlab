jQuery(function($){

	if($(".location").text().indexOf('AhnLab @RSA Conference') > 0) {$("nav .menu01 a").toggleClass("select");}
	if($(".location").text().indexOf('Products') > 0) {$("nav .menu02 a").toggleClass("select");}
	if($(".location").text().indexOf('News and Events') > 0) {$("nav .menu03 a").toggleClass("select");}
	if($(".location").text().indexOf('Company') > 0) {$("nav .menu04 a").toggleClass("select");}
 
	 $("#ahnlab01").click(function () {  
		$(".ahnlabImg01").show();  
		$(".ahnlabImg02").hide();  
		$(".ahnlabImg03").hide();  
		$(".ahnlabImg04").hide();  
	});
	$("#ahnlab02").click(function () {  
		$(".ahnlabImg01").hide();  
		$(".ahnlabImg02").show();  
		$(".ahnlabImg03").hide();  
		$(".ahnlabImg04").hide();  
	});
	$("#ahnlab03").click(function () {  
		$(".ahnlabImg01").hide();  
		$(".ahnlabImg02").hide();  
		$(".ahnlabImg03").show();  
		$(".ahnlabImg04").hide();  
	});
	$("#ahnlab04").click(function () {  
		$(".ahnlabImg01").hide();  
		$(".ahnlabImg02").hide();  
		$(".ahnlabImg03").hide();  
		$(".ahnlabImg04").show();  
	});

	 $(".expDetail a").click(function () {  
		$(this).parent().hide();  
	});

});
	

 





 

