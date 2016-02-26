
var mobileChange = false;

$(document).ready(function() {

	var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			mobileChange = true;
			break;
		}
	}

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
		draggable: false,
		swipe: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: false,
                dots: true,
				draggable: false,
				swipe: false
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
				draggable: false,
				infinite: false,
                dots: false,
				arrows: false,
				swipe: false
            }
        }]
    });
    $('.responsive01').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
		draggable: false,
		swipe: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true,
				draggable: false,
				swipe: false
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
				draggable: false,
				infinite: false,
                dots: false,
				arrows: false,
				swipe: false
            }
        }]
    });
	$('.panelList01 > a').click(function(){
		$('.panelList01 > a').removeClass("slideSelect");
		$(this).addClass("slideSelect");
		changeImg();
		if('.panelList01 > a:has(.slideSelect)'){
			var onImg = $(this).find('img').attr('src').replace("_off.","_on.")
			$(this).find('img.imgThum').attr('src', onImg);
		 }

		 function changeImg(){
		 $('.panelList01 > a').each(function(){
			var offImg = $(this).find('img').attr('src').replace('_on.','_off.')
			$(this).find('img.imgThum').attr('src', offImg);
		 });
		 }
	});
	$('.panelList02 > a').click(function(){
		$('.panelList02 > a').removeClass("slideSelect");
		$(this).addClass("slideSelect");
		changeImg();
		if('.panelList02 > a:has(.slideSelect)'){
			var onImg = $(this).find('img').attr('src').replace("_off.","_on.")
			$(this).find('img.imgThum').attr('src', onImg);
		 }

		 function changeImg(){
		 $('.panelList02 > a').each(function(){
			var offImg = $(this).find('img').attr('src').replace('_on.','_off.')
			$(this).find('img.imgThum').attr('src', offImg);
		 });
		 }
	});

	$(".familyWrap").mouseenter(function(){
		$(this).addClass("on");
	});

	$(".familyWrap").focus(function(){
		$(this).addClass("on");
	});
	$(".familyWrap").mouseleave(function(){
		$(this).removeClass("on");
	});
	var naviOffset = $('.htop').offset();
	$(window).scroll(function() {
	  if ( $( document ).scrollTop() > naviOffset.top ) {
		$('.htop').addClass('naviFixed');
	  }
	  else {
		$('.htop').removeClass('naviFixed');
	  }
	});


});


$(function(){
	var $sideDim = $('.sideDim');
	// menu close
	function navClose() {
		$("span.sideDim").remove();
		$(".mLeftMenu").animate({left:"-66.6%"},100);
		$(".wrap.tv").animate({left:"0"},100).css({position:"relative"});
	}
	// menu open
	function navOpen() {
		$(".wrap.tv").append('<span class="sideDim">&nbsp;</span>');
		$(".mLeftMenu").animate({left:"0"},100);
		$(".wrap.tv").animate({left:"66.6%"},100).css({position:"fixed"});
		$('.sideDim, .btn_close').click(function(){
			navClose();
		});
	}
	$(window).bind("orientationchange, resize", function(){
		if ($(window).width() > 720 ){
			navClose();
		}
	});
	$(".btnMenu").click(function(){
		navOpen();
	});
});
// 2015-05-12 아래 js 추가 수정 --------------------------------------------------------------------------------------------------------------
// 720 이하 movie txt
$(function(){
	// text open
	function txtOpen() {
		if ($(".tvCmt").hasClass("open")) {
			$(".tvCmt").removeClass("open");
			$(".tvCmt").css('height', '45px');
			$(".tvCmtBtn .more").text('더보기');
			$(".tvCmtBtn .more").removeClass("moreClose");
		}else {
			$(".tvCmt").addClass("open");
			$(".tvCmt").css('height', 'auto');
			$(".tvCmtBtn .more").text('닫기');
			$(".tvCmtBtn .more").addClass("moreClose");
		}
	}
	function txtClose() {
		$(".tvCmt").css('height', '45px');
	}

	if ($(window).width() <= 720 ){
		$(".tvCmtBtn .more").click(function(){
			txtOpen();
		});
	}
	$(window).bind("orientationchange, resize", function(){
		if ($(window).width() > 720 ){
			txtClose();
			$(".tvCmtBtn .more").text('더보기');
			$(".tvCmtBtn .more").removeClass("moreClose");
		}
	});
});
//-------------------------------------------------------------------------------------------------------------------------------------------------

// 720 이하 Search popup
$(function(){
	var searchPop = $(".searchPop");
	function popClose() {
		searchPop.css({"display":"none"});
	}
	function popOpen(){
		searchPop.css({"display":"block"});
	}
	if ($(window).width() <= 720 ){
		$(".htopWrap .searthBox a").click(function(){
			popOpen();
			$("body").animate({scrollTop:0}, 300);
		});
		$("span.closePop, .panelList01 a").click(function(){
			popClose();
		});
	}else{
		$(".btnSearch").click(function(){
			popClose();
		});
	}
	$(window).bind("orientationchange, resize", function(){
		$(".htopWrap .searthBox a").click(function(){
			popOpen();
		});
		$("span.closePop, .panelList01 a").click(function(){
			popClose();
		});
		if ($(window).width() > 720 ){
			$(".btnSearch").click(function(){
				popClose();
			});
		}
	});
});

/* 모바일 동영상 높이값 체크 */
	function reHeight(){
		$('.movWrap').css({'width':$(window).width(), 'height':Math.floor(($(window).width()/16)*9)});
		$('.movWrap #myExperience03').attr({'width':$(window).width(), 'height':Math.floor(($(window).width()/16)*9)});
		$('.movWrap #myExperience03').css({'width':$(window).width(), 'height':Math.floor(($(window).width()/16)*9)});
	};

var ffID;
var ffVar = 0;
$(function(){

	$.fn.ffFunction = function(){
		if($(window).width() < 721){
			ffID = setInterval(function(){
				ffVar++;
				if(ffVar < 50){
					reHeight();
				} else {
					ffVar = 0;
					clearInterval(ffID);
				}
			},50);
		};
	}

	if(mobileChange){
		$.fn.ffFunction();
	} else {
		if($(window).width() < 721){
			reHeight();
		}
	}

	$(window).resize(function() {
		if(mobileChange){
			$.fn.ffFunction();
		} else {
			if($(window).width() < 721){
				reHeight();
			}
		}
	});

	$('.loadThumCmt').click(function() {
		$('.loadThum, .loadThumCmt').fadeOut(200);
	});

});

