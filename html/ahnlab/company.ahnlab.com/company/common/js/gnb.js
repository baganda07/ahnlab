jQuery(function($){	
	var leftMenu = $('.leftMenu');		
	var gnbMenu = $('.menu');		
	var sItem = gnbMenu.find('>li');
	var ready = $("ul.menu").find('ul[id='+textD3+']').find('li[id='+numD2+']').find("img");
	var lastEvent = null;	
	var chImg = "";	
	if(gubun == 'kor'){chImg = "<img src='https://image.ahnlab.com/img_upload/company/site/kor2/common/tmenu_0";
	}else if(gubun == 'eng'){chImg = "<img src='https://image.ahnlab.com/img_upload/company/site/eng2/common/tmenu_0";}

	$(document).ready(function(){			
		if(textD3 != 'sub0' || textD3 != '') {		
			$("#"+textD3).removeClass("hidden");
			$("#"+textD4 + "> a").html(chImg + textD4.replaceAll('m','') + "_on.gif'>");					
			$(function(){
				ready.hover(
					function(){this.src = this.src.replace("_off","_on");},
					function(){	});		
			});	
			ready.trigger('mouseover');
		}

		$(function(){
			$("img.rollover").hover(
				function(){this.src = this.src.replace("_off","_on");},
				function(){this.src = this.src.replace("_on","_off");});

		});			

		$(function(){
			$("ul.menu").find('>li>a').hover(
				function(){
					var t = $(this);
			
					if (this == lastEvent) return false;
					lastEvent = this;
					setTimeout(function(){ lastEvent=null }, 200);
					
					if (t.next('ul').is(':hidden')) {			
						sItem.find('>ul').hide();		
						t.next('ul').show();								
					} else if(!t.next('ul').length) {			
						sItem.find('>ul').hide();								
					} else{
						sItem.find('>ul[id='+textD3+']').removeClass('hidden');
					}			
				},
				function(){	});
		});

		$(function(){
			$("ul.menu").hover(
				function(){				
				},
				function(){	
					sItem.find('>ul').hide();	
					sItem.find('>ul[id='+textD3+']').show();
					if(textD3 != 'sub0' || textD3 != '') {
						$("#"+textD4 + "> a").html(chImg + textD4.replaceAll('m','') + "_on.gif'>");	
						$(function(){
							ready.hover(
								function(){this.src = this.src.replace("_off","_on");},
								function(){	});		
						});				
						ready.trigger('mouseover');
					}
				});
		});
		
	});				
		
});
