
// address bar hide
window.addEventListener('load', function(){
   setTimeout(scrollTo, 0, 0, 1);
}, false);

var mobileChange = false;

$(document).ready(function() {

	var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			mobileChange = true;
			break;
		}
	}
});

var swiper1;
var swiper2;

var main_swiper;
var main_swiper2;
var s_count = 0;
var s_count2 = 0;
var top_slide_length = 0;

$(function(){
	//flicking(".mainVisual");
	//flickingCont("#container.panelWrap");
	//flickingContSub ("#content.panelWrap");
	//flickingContSub (".prdDetail");
	/*
	if($("#container.panelWrap").size() > 0){
		$("#container.panelWrap").get(0).go_page(1);
		$("#container.panelWrap").get(0).go_page(0);
	}
	*/
	//$("#content.panelWrap").get(0).go_page(1);
	$("body img").imgpreload(function()
		{

			var supportsOrientationChange = "onorientationchange" in window,
	    	orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

			window.addEventListener(orientationEvent, function(e) {
			    //alert('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);

			    setTimeout(orientationFn, 500);

			}, false);

			function orientationFn()
			{
				//console.log("orientationFn : " , $(window).width());
				//$("#lnb.swiper-container .swiper-wrapper").css("width", lnb_swiper.width);
				if(window.orientation == 0) //portrait
				{
					$("#lnb.swiper-container").css("width", $(window).width() * 0.8 );
				}
				else
				{
					$("#lnb.swiper-container").css("width", $(window).width() * 0.8 );
				}
				//lnb_swiper.init();
				//$(".slider.swiper-wrapper").css("width", $(window).width() * 0.8 );
				//lnb_swiper.updateClasses();
				//lnb_swiper.updateActiveIndex();
				//lnb_swiper.slideTo(cu, 100);

				var h = $(".swiper-slide-active.panel .panel_inner").height();

				$(".panelWrap").css("height", h);
				//$(".panelWrap").css("height", $(".panelWrap .panel .panel_inner").eq(s_count).height());
			}

			orientationFn();

			var cu = 0;
			var ul_w = 0;
			if( $.contains( $("#container") , $(".flex") ) ) flexToggleEx();

			if($(".mainVisual").length > 0)
			{
				main_swiper = new Swiper('.mainVisual.swiper-container',
				{
					pagination: '.mainVisual .swiper-pagination',
		            paginationClickable: true,
			        loop:true,
			        initialSlide:0
				});

				$(".panelWrap").addClass("swiper-container");
			    $(".panelWrap .panelTrack").addClass("swiper-wrapper");
			    $(".panelWrap .panelTrack .panel").addClass("swiper-slide");

			    $(".panelWrap .panelTrack .panel").each(function(i)
			    {
			    	$(this).children().wrapAll( "<div class='panel_inner' />");

			    });

				main_swiper2 = new Swiper('#container.panelWrap.swiper-container',
				{
			        loop:true,
			        initialSlide:0,

			        onSlideChangeEnd:function(s){

							//slideActive(s_count2);

							//$(".prdDetail").css("height", arr[s_count]);
							s_count2 = (s.activeIndex - 1) % (s.slides.length - 2);
							console.log("onSlideChangeEnd : " , s_count2);
							//s_count2 = main_swiper2.activeIndex;
							$("#gnb li").removeClass("current");
							$("#gnb li").eq(s_count2).addClass("current");

							setTimeout(function(){

								var tar = $("#container.panelWrap.swiper-container .swiper-slide-active .panel_inner");
								var h = tar.height();
								console.log("h : ", h );
								$("#container").css("height", h);

								$(".panelWrap").css("height", $(".swiper-slide-active.panel .panel_inner").height());

								//var num = $("#container.panelWrap.swiper-container .swiper-slide-active").attr("data-swiper-slide-index");

							}, 200);

						}
				});
				//main_swiper2.slideTo(0);

				$("#gnb li").eq(0).addClass("current");
				$("#gnb li").on("click", function()
				{
					s_count2 = $(this).index();



					$("#gnb li").removeClass("current");
					$("#gnb li").eq(s_count2).addClass("current");
					console.log("click : " , s_count2);
					main_swiper2.slideTo(s_count2 + 1);
				});

			}








			//4개이상 일때
			if($(".tabNavi li").length > 0)
			{
				console.log("tab 3개 이상");
				isClick = false;
				s_count = 0;

				$(".tabNavi").before('<div class="tabNavi_container">');
				$(".tabNavi").addClass("swiper-container");

				if( !$(".tabNavi ul:first-child").hasClass("slider") )
				{
					$(".tabNavi ul:first-child").addClass("slider");
				}

				$(".tabNavi .slider").addClass("swiper-wrapper");
				$(".tabNavi .slider li").addClass("swiper-slide");
				$(".tabNavi_container").append($(".tabNavi"));
				$(".tabNavi_container").append('<a href="#" class="btn_swipe swiper-button-prev">left</a><a href="#" class="btn_swipe swiper-button-next">right</a>');

				top_slide_length = $(".tabNavi li").length-1;

				var view = 0;

				if( top_slide_length == 0 ) view = 1;
				else if( top_slide_length == 1 ) view = 2;
				else view = 3;

				swiper1 = new Swiper('.tabNavi.swiper-container',
					{
				        slidesPerView: view,
				        setWrapperSize: true,
				        initialSlide:0,
				        //slidesPerGroup: 3,
			        	onlyExternal: true,
			        	spaceBetween: 0
					});
				//console.log(swiper1);

				//$(".tabNavi li").eq(0).addClass("current");

				$(".tabNavi li").on("click", function()
				{
					s_count = $(this).index();
					/*if( view == 2 )
					{
						if( s_count == 1 )
						{
							slideActive(0);
							swiper2.slideTo(0);
						}
						else
						{
							slideActive(1);
							swiper2.slideTo(1);
						}
					}
					else
					{
						//slideActive(s_count);
						console.log("$(this).index() : " , $(this).index());
						$(".tabNavi li").removeClass("current");
						$(".tabNavi li").eq($(this).index()).addClass("current");
						swiper1.slideTo($(this).index());
						swiper2.slideTo($(this).index()+1);
					}*/
					//slideActive(s_count);
					console.log("$(this).index() : " , $(this).index());
					$(".tabNavi li").removeClass("current");
					$(".tabNavi li").eq($(this).index()).addClass("current");
					swiper1.slideTo($(this).index());
					swiper2.slideTo($(this).index()+1);

					if( !isLoop ) swiper2.slideTo($(this).index());
				});

				$(".tabNavi_container .swiper-button-prev").on("click", function(e)
				{
					s_count--;
					if( s_count <= 0 ) s_count = 0;
					e.preventDefault();
					swiper2.slideTo(s_count+1);
					//slideActive(s_count);
					isClick = true;
				});
				$(".tabNavi_container .swiper-button-next").on("click", function(e)
				{
					s_count++;
					if( s_count >= top_slide_length ) s_count = top_slide_length;
					e.preventDefault();
					swiper2.slideTo(s_count+1);
					//slideActive(s_count);
				});

				$(window).resize(function(){

			        var width = $(window).width() * 0.8;

			        if(top_slide_length <= 2) width = $(window).width();

			        $(".tabNavi.swiper-container").css("width", width);
			        $('.tabNavi.swiper-container .slider.swiper-wrapper').css("width", width);
			        //Add reInit, because jQuery's resize event handler may occur earlier than Swiper's one

			        swiper1.init();
			        console.log("resize : " , s_count);
			        slideActive(s_count);

			       	//$(".prdDetail").css("height", $(".prdDetail .panel .detailCont").eq(s_count).height() + 40);
			       	$(".panelWrap").css("height", $(".panelWrap.swiper-container .swiper-slide-active.panel .panel_inner").height());
			    }).resize();

			    $(".panelWrap").addClass("swiper-container");
			    $(".panelWrap .panelTrack").addClass("swiper-wrapper");
			    $(".panelWrap .panelTrack .panel").addClass("swiper-slide");

			    $(".panelWrap .panelTrack .panel").each(function()
			    {
			    	if( $("body").find(".mapArea").length <= 0 ) $(this).children().wrapAll( "<div class='panel_inner' />");
			    });

			    var isLoop = true;

			    //if( $("body").find(".mapArea").length <= 0 ) 	isLoop = true;
			    //else 											isLoop = false;

			    swiper2 = new Swiper('.panelWrap.swiper-container',
					{
						loop: isLoop ,
						onSlideChangeEnd:function(s){
							//s_count = s.activeIndex;
							//console.log("s.activeIndex: " , s.activeIndex);
							s_count = (s.activeIndex-1) % (s.slides.length - 2);
							if( !isLoop ) s_count = s.activeIndex;
							//s_count = $(".panelWrap.swiper-container .swiper-slide-active.panel").attr("data-swiper-slide-index");
							//slideActive(s_count-1);
							/*if( view == 2 )
							{
								if( s_count == 1) s_count = 0;
								else s_count = 1;
							}*/
							if( s_count < 0 ) s_count = top_slide_length;

							console.log("swiper2.onSlicdChangedEnd : " , s_count);

							$(".tabNavi li").removeClass("current");
							$(".tabNavi li").eq(s_count).addClass("current");
							swiper1.slideTo(s_count);

							arrowFn();
							//slideActive(s_count);

							//$(".panelWrap").css("height", arr[s_count]);
							setTimeout(function(){


								selectChange(".seleType", "#selectCont");
								selectChange(".seleType01", "#selectContA");
								selectChange(".seleType02", "#selectContB");
								selectChange(".seleType03", "#selectContC");
								//content_toggle();
								$(".panelWrap").css("height", $(".panelWrap.swiper-container .swiper-slide-active.panel .panel_inner").height());

								flexToggle();

							}, 200);

						}
					});
				/*
				if(view == 2) swiper2.slideTo(1);
				else swiper2.slideTo(0);
				*/
			}

		});
});
function slideActive(num)
				{
					console.log("slideActive : ", num);
					$(".tabNavi li").removeClass("current");
					$(".tabNavi li").eq(num).addClass("current");
					swiper1.slideTo(num);

					arrowFn();
				}
function arrowFn()
			    {
			    	console.log("arrow s_count : " , s_count, "top_slide_length : " , top_slide_length);

			    	if( s_count <= 0 ) {
			    		$(".tabNavi_container .swiper-button-prev").css("opacity", 0.1 );
			    		$(".tabNavi_container .swiper-button-next").css("opacity", 1 );
			    	}
			    	else if( s_count >= top_slide_length ) {
			    		$(".tabNavi_container .swiper-button-prev").css("opacity", 1 );
			    		$(".tabNavi_container .swiper-button-next").css("opacity", 0.1 );
			    	}
			    	else {
			    		$(".tabNavi_container .swiper-button-next, .tabNavi_container .swiper-button-prev").css("opacity", 1 );
			    	}
			    }
// flicking
/*
function flicking (flickOj) {

	var flickArea = $(flickOj);
	flickArea.touchSlider({
		flexible : true,
		initComplete : function (e) {
			flickArea.find(".page").empty();//.html("");
			var num = 1;
			flickArea.find(".panelTrack .panel").each(function (i, el) {
				if((i+1) % e._view == 0) {
					flickArea.find(".page").append('<span class="pageNum">page' + (num++) + '</span>');
				}
			});
			flickArea.find(".page").find(".pageNum").bind("click", function (e) {
				var i = $(this).index();
				flickArea.get(0).go_page(i);
			});
		},
		counter : function (e) {
			flickArea.find(".page").find(".pageNum").removeClass("on").eq(e.current-1).addClass("on");

			var h = flickArea.find(".panelTrack .panel").eq(e.current-1).height();
			flickArea.css({
				"height" : h + "px"
			});
		}

	});
	flickArea.find(".page").width("auto");
}*/

// flicking content
function flickingCont (flickOj) {

	var flickArea = $(flickOj);
	flickArea.touchSlider({
		flexible : true,
		initComplete : function (e) {
			$("#gnb li").bind("click", function (e) {
				var i = $(this).index();
				flickArea.get(0).go_page(i);
			});
		},
		counter : function (e) {
			flickArea.find(".page").find(".pageNum").removeClass("on").eq(e.current-1).addClass("on");
			$("#gnb").find("li").removeClass("current").eq(e.current-1).addClass("current");

			var h = flickArea.find(".panelTrack .panel").eq(e.current-1).height();
			flickArea.css({
				"height" : h + "px"
			});
		}
	});
	var thisTimer = setTimeout(function(){
		flickArea.css('height',flickArea.find('div.home').height());
	},500);
}
/*
var ctsVar = {currentVar:0, slideVar:0, insTabList:0, slideWidth:0, slideBull:false};
$(function(){
    if($('#content').find('div').hasClass('tabNavi')){
        var tabList = $('.tabNavi');
        ctsVar.insTabList = tabList.find('li').length;
        if(ctsVar.insTabList < 4){
            switch(ctsVar.insTabList) {
                case 1:
                    tabList.find('li').css('width','100%');
                break;
                case 2:
                    tabList.find('li').css('width','50%');
                break;
                case 3:
                    tabList.find('li').css('width','33.3%');
                break;
            }
        } else {
            tabList.append('<button type="button" class="slick-prev" style="display:none;">&lt;</button><button type="button" class="slick-next">&gt;</button>')
            .find('ul').css({'width':'90%','margin':'0 auto'}).andSelf().css({'position':'relative','height':42,'background-color':'#f6f6f6'})
            .find('li').css({'position':'absolute' , 'width':'33.3%'}).each(function(n){
                $(this).css('left',$(this).width()*n);
            });
        };
		contHeight();
    };
});
*/
function flickingContSub (flickOj) {
	var flickArea = $(flickOj);
	flickArea.touchSlider({
		flexible : true,
        btn_prev : $(".tabNavi").find(".slick-prev"),
		btn_next : $(".tabNavi").find(".slick-next"),
		initComplete : function (e) {
			$(".tabNavi li").bind("click", function (e) {
				var i = $(this).index();
				flickArea.get(0).go_page(i);
			});
			contHeight();
		},
		counter : function (e) {
            ctsVar.currentVar = e.current-1;
			$(".tabNavi").find("li").removeClass("current").eq(e.current-1).addClass("current");

			var h = flickArea.find(".panelTrack .panel").eq(e.current-1).height();
			flickArea.css({
				"height" : h + "px"
			});

            if(ctsVar.currentVar < 3){
                if(ctsVar.slideBull){
                    ctsVar.slideBull = false;
                    $(".tabNavi li").animate({'left':'+='+($(".tabNavi li").width()*3)},300);
                };
            } else {
                if(!ctsVar.slideBull){
                    ctsVar.slideBull = true;
                    $(".tabNavi li").animate({'left':'-='+($(".tabNavi li").width()*3)},300);
                };
            }

            if(ctsVar.currentVar > 2 && ctsVar.currentVar < $(".tabNavi li").length-1){
                $('.tabNavi button').show();
            } else if(ctsVar.currentVar == 0){
                $('.tabNavi .slick-prev').hide().next().show();
            } else if(ctsVar.currentVar == $(".tabNavi li").length-1){
                $('.tabNavi .slick-prev').show().next().hide();
            };
			contHeight();
		}
	});
}

function contHeight() {
	//tab 컨텐츠 화면 높이
	/*var flickArea = $("#content.panelWrap ");
	var currentPanelS = $(".tabNavi .current").index();


	var h = flickArea.find(".panelTrack .panel .panel_inner").eq(currentPanelS).height();
	flickArea.css({
		"height" : h + "px"
	});*/
	$(".panelWrap").css("height", $(".swiper-slide-active.panel .panel_inner").height());
}

function flickingSlick (flickOj, num1, num2, nuum3, nuum4) {

	var flickArea = $(flickOj);

	flickArea.slick({
        dots: true,
        infinite: false,
        speed: 100,
        slidesToShow: num1,
        slidesToScroll: 1,
		dots: false,
        responsive: [{
            breakpoint: 640,
            settings: {
                slidesToShow: num2,
                slidesToScroll: 1,
                infinite: false,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: nuum3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 360,
            settings: {
                slidesToShow: nuum4,
                slidesToScroll: 1
            }
        }]
    });
}



$(function(){
	//flicking(".mainVisual");
	//flickingCont("#container.panelWrap");
	//flickingContSub ("#content.panelWrap");
	//flickingContSub (".prdDetail");
	/*
	if($("#container.panelWrap").size() > 0){
		$("#container.panelWrap").get(0).go_page(1);
		$("#container.panelWrap").get(0).go_page(0);
	}
	*/
	//$("#content.panelWrap").get(0).go_page(1);
});
function flexToggleEx()
{
	console.log("flexToggleEx");

	$(".flex h2").on("click", function(e){
		var p = $(this).parent();
		if( p.hasClass("close") )
		{
			console.log("1");
			p.removeClass("close");
			p.addClass("open");
			p.find("flexCont").show();
		}
		else
		{
			console.log("2");
			p.removeClass("open");
			p.addClass("close");
			p.find("flexCont").hide();
		}

		//$(".panelWrap").css("height", $(".swiper-slide-active.panel .panel_inner").height());
	});
}
function flexToggle()
{
	console.log("flexToggle");
	/*
	$(".panel.swiper-slide-active .flex").removeClass("open").addClass("close");
	$(".panel.swiper-slide-active .flex").first().removeClass("close").addClass("open");
	$(".panel.swiper-slide-active .flex .flexCont").hide();
	$(".panel.swiper-slide-active .flex").first().find(".flexCont").show();
	*/
	$(".panelWrap.swiper-container .panel.swiper-slide-active .flex").off("click");
	$(".panelWrap.swiper-container .panel.swiper-slide-active .flex").on("click", function(e){

		if( $(this).hasClass("close") )
		{
			console.log("1");
			$(this).removeClass("close");
			$(this).addClass("open");
			$(this).find("flexCont").show();
		}
		else
		{
			console.log("2");
			$(this).removeClass("open");
			$(this).addClass("close");
			$(this).find("flexCont").hide();
		}

		$(".panelWrap").css("height", $(".swiper-slide-active.panel .panel_inner").height());
		/*
		if ($(".flex").has($(this)).find(".flexCont").css('display') == 'block') {
			$(".flex").has($(this)).removeClass("open");
			$(".flex").has($(this)).addClass("close");

		}else {
			$(".flex").has($(this)).removeClass("close");
			$(".flex").has($(this)).addClass("open");
		}
		*/
		//contHeight();
	});
}
// content toggle
$(function(){
	/*$(".flex h2").click(function(){

		if ($(".flex").has($(this)).find(".flexCont").css('display') == 'block') {
			$(".flex").has($(this)).removeClass("open");
			$(".flex").has($(this)).addClass("close");

		}else {
			$(".flex").has($(this)).removeClass("close");
			$(".flex").has($(this)).addClass("open");
		}

		//contHeight();
	});
	*/
	$(".keywordTit").addClass("open");
	$(".keywordTit").click(function(){
		$(".keywordNews").toggle();
		if ($(".keywordNews").css('display') == 'block') {
			$(".keywordTit").removeClass("close");
			$(".keywordTit").addClass("open");

		}else {
			$(".keywordTit").removeClass("open");
			$(".keywordTit").addClass("close");
		}
	});
});

// terms toggle
$(function(){
	if($('#content').find('div').hasClass('listDl')){
        $(".listDl dl").removeClass("open").addClass("close");

        $(".listDl dt").on('click' , function(){
            if($(this).parent('dl').hasClass('close')){
				$(".listDl dl").removeClass('open').addClass('close').find('dd').hide();
                $(this).next("dd").show().parent('dl').removeClass('close').addClass('open');
            } else {
				$(this).next("dd").hide().parent('dl').removeClass('open').addClass('close');
			};
			contHeight();
        });
		var dlVar = setTimeout(function(){
			contHeight();
		},1000);
    };
});

// drawer
$(function(){
	// drawer menu show hide
	var movePs = $("#naviMenu").outerWidth();
	$("#naviMenu").css('left', -1000).hide();

	function navClose() {
		$('#naviMenu').removeClass('open').css('top',0).find('>div').andSelf().css('height',$(window).height());
		//$(".headerCom").removeClass("naviOpen");
		$("html, body").css({'overflow':'auto'});
		$(window).css({'overflow':'auto'});
		$(".wrap").css({'height':'auto', 'overflow':'auto'}).stop().animate({"left": 0}, 200);
		$("#naviMenu").css('top',0).stop().animate({'top':0, "left": -1000}, 200,function(){$(this).hide();});
		$(".dmm").remove();

		if($('#container').find('div').hasClass('lnbWrap')){
			$('.lnbWrap, .prdList').css({'position':'fixed'});
		} else {
			//$('#lnb, .prdList').css({'position':'fixed'});
		}
	}

	function navOpen() {
		$('#naviMenu').css('top',0).find('>div').andSelf().css('height',$(window).height());
		//$(".headerCom").addClass("naviOpen");
		$("html, body").css({'overflow':'hidden'});
		$(window).css({'overflow':'hidden'});
		$("body").append('<div class="dmm"></div>');
		$(".wrap").css({'height':$(window).height(), 'overflow':'hidden'}).stop().animate({"left": movePs}, 200);
		$("#naviMenu").addClass('open').css('top',0).show().stop().animate({'top':0, "left": 0}, 200);

		if($('#container').find('div').hasClass('lnbWrap')){
			$('.lnbWrap, .prdList').css({'position':'absolute'});
		} else {
			//$('#lnb, .prdList').css({'position':'absolute'});
		}
		$('.dmm').click(function(){
			navClose();
		});
		setTimeout( gnbPostionSet, 200 );
	}

	function gnbPostionSet()
	{
		var arrTop = [56,133,210,287,364];
		var arrTopPos = [0,-75,-150,-225,-300];

		$(".gnb").each( function ( i ) {
			var t = arrTop[i];
			$(this).css("top", t );
			$(this).find("a").css("background-position", "0px " + arrTopPos[i] + "px");
		});
	}

	$(window).resize(function(){
		if($('#naviMenu').hasClass('open')){
			$('#naviMenu').css({'top':0, 'left':0}).find('>div').andSelf().css('height',$(window).height());
		} else {
			$('#naviMenu').css({'top':0, 'left':-1000}).find('>div').andSelf().css('height',$(window).height());
		}
	});


	$(".btnCtg").click(function() {
		navOpen();
	});
	$("#naviMenu .close").click(function() {
		navClose();
	});


	// drawer menu click

	$(".menuCtg .gnb").click(function(){
		$("li").has($(this)).siblings("li").removeClass("on");
		$("li").has($(this)).addClass("on");
	});

	$(".menuCtg .mnTit").click(function(){
		$(this).parent().siblings("li").removeClass("on");
		if ($(this).parent().find("ul").css('display') == 'block') {
			$(this).parent().removeClass("on");
		}else {
			$(this).parent().addClass("on");
		}
	});

	$(".menuCtg .subTit").click(function(){
		$(this).parent().siblings("li").removeClass("on");
		if ($(this).parent().find(".sub").css('display') == 'block') {
			$(this).parent().removeClass("on");
		}else {
			$(this).parent().addClass("on");
		}
	});

	$(".menuCtg .subTit").each(function() {
		if ($(this).parent().find(".sub").length < 1) {
			$(this).parent().addClass("subNo");
		}
	});

	$(".sideMn").addClass("mn1");
	$(".menuCtg .gnb").bind("click", function (e) {
		var i = $("li").has($(this)).index();
		$(".sideMn").attr('class', 'sideMn');
		$(".sideMn").addClass("mn" + i);
	});

});


// select
function selectChange(seleType, selectCont) {

	$(seleType).change(function() {
		var num = $(seleType).find("option").length;
		for(i=0; i<num; i++){
			$(selectCont+i).hide();
		}

		var index = $(seleType).find("option").index($(seleType).find("option:selected"));
		$(seleType).find("option").removeAttr('selected').eq(index).attr('selected','selected');
		$(selectCont+index).show();
		contHeight();
	});
}

$(function(){
	selectChange(".seleType", "#selectCont");
	selectChange(".seleType01", "#selectContA");
	selectChange(".seleType02", "#selectContB");
	selectChange(".seleType03", "#selectContC");

});

// sub tab navi num
function navNum(navObj) {
	$(navObj).each(function() {
		var num = $(this).find("li").length;
		$(this).addClass("num" + num);
	});
}

$(function() {
	navNum(".tabSub");
	navNum(".tabNavi.typeB");
});

// select num
$(function() {
	$( ".srchType" ).each(function() {
		var num = $(this).find(".selectWrap").length;
		$(this).addClass("num" + num);
	});
});

// product
$(function() {
	var buyMnNum = $(".buyMn li").length;
	$(".prdBuy").addClass("mnNum" + buyMnNum);

	// product list layer
	$('.prdList .selected').each(function() {
		$(this).bind("click", function() {
			$(".prdList").has($(this)).find("ul").toggle();
			if ($(this).parent().find("ul").css('display') == 'block') {
				$(this).css('background-position','94% -565px');
				$("body, html").css("overflow", "hidden");
				$(window).css("overflow", "hidden");
				$("body").addClass("layerOpen");
			}else {
				$(this).css('background-position','94% -20px');
				$("body, html").css("overflow", "auto");
				$(window).css("overflow", "auto");
				$("body").removeClass("layerOpen");
			}
		});
	});

	// buy layer
	$(".prdBuy .close").addClass("disabled");
	$(".btnBuy button.typeA").click(function(){
		if ($(".buyMn").css('display') == 'block') {
			$(".prdBuy").removeClass("open");
			$(".prdBuy").addClass("close");
			$(".prdBuy .dim" ).remove();
			$(".prdBuy .close").addClass("disabled");
		}else {
			$(".prdBuy").removeClass("close");
			$(".prdBuy").addClass("open");
			$(".prdBuy .close").removeClass("disabled");
			$(".prdBuy" ).prepend( "<div class='dim'></div>");
		}
	});
	$(".prdBuy .close").click(function(){
		$(".prdBuy").removeClass("open");
		$(".prdBuy").addClass("close");
		$(this).addClass("disabled");
		$( ".prdBuy .dim" ).remove();
	});
});

//percent bar
$(function() {
	$(".resultInfo .percent").each( function(){
		var percent = $(this).text();
		$(".listPoll li").has($(this)).find(".percentValue").css("width", percent);
	});
});

// image enlarge
$(function() {

	function imgClose() {
		$("body").removeClass("imgOpen");
		$(".imgPop").remove();
	}


	$(".btnEps").click(function() {
		var newSrc =  $(".imgEnlarge").has($(this)).find("img").attr("src");
		$("body").addClass("imgOpen");
		$("body").append('<div class="imgPop"><img src="' + newSrc + '" class="targetImg" alt="" /><div class="btnImgClose"></div></div>');

		$(".btnImgClose").click(function() {
			imgClose();
		});
	});

});

// footer language toggle
$(function(){
	$(".locSite .locCurrent").click(function(){
		$(".locSite ul").toggle();

		if ($(this).parent().find("ul").css('display') == 'block') {
			$(this).addClass("on");
		}else {
			$(this).removeClass("on");
		}
	});
});

function addPopOpen(){
	$("body").addClass("popOpen");
}
function removePopOpen(){
	$("body").removeClass("popOpen");
}

// gnb fixed
$(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 180) $('#gnb').addClass('fixed');
		else $('#gnb, .mainVisual').removeClass('fixed');
	});
});

// input focus top hide
$(function(){
	$( "input[type=text], input[type=password], input[type=number], textarea" ).focusin(function() {
		$(".moveTop").hide();
	}).focusout(function() {
		setTimeout(function(){
			$(".moveTop").show();
		}, 300)
	});
});


// etc
$(function(){
	if ($('.searchInfo, .headerCom .headerSele').length) {
		$(".wrap").addClass("includeSrh");
	}


	$(".serSection02").each(function() {
		if ($(this).find('.notFound').length) {
			$(this).addClass("includeNO");
		}
	});

	$('.moveTop').on('dblclick', function() {
		return false;
	});

});


$(function(){
	$('.detailCont select').change(function(){
		var selectIdx = $(this).find('option:selected').index();
		$(this).next('.table_wrap').find('table').hide().eq(selectIdx).css('display','table');
		contHeight();
	});
});


//lnb
var lnb_swiper;
$(function()
{
	if($("#lnb").length > 0)
	{
		$("#lnb").before('<div class="lnb_container">');
		$("#lnb").addClass("swiper-container");
		$("#lnb .slider").addClass("swiper-wrapper");
		$("#lnb .slider li").addClass("swiper-slide");
		$(".lnb_container").append($("#lnb"));
		$(".lnb_container").append('<a href="#" class="btn_swipe swiper-button-prev">left</a><a href="#" class="btn_swipe swiper-button-next">right</a>');
		//$("#lnb").after('</div>');
		var supportsOrientationChange = "onorientationchange" in window,
	    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function(e) {
		    //alert('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);

		    setTimeout(orientationFn, 500);

		}, false);

		function orientationFn()
		{
			console.log("2 : " , $(window).width());
			//$("#lnb.swiper-container .swiper-wrapper").css("width", lnb_swiper.width);
			if(window.orientation == 0) //portrait
			{
				$("#lnb.swiper-container").css("width", $(window).width() * 0.8 );
			}
			else
			{
				$("#lnb.swiper-container").css("width", $(window).width() * 0.8 );
			}
			//lnb_swiper.init();
			//$(".slider.swiper-wrapper").css("width", $(window).width() * 0.8 );
			//lnb_swiper.updateClasses();
			//lnb_swiper.updateActiveIndex();
			//lnb_swiper.slideTo(cu, 100);

			var h = $(".swiper-slide-active.panel .panel_inner").height();
			console.log("h : " , h );
			$(".panelWrap").css("height", h);
			//$(".panelWrap").css("height", $(".panelWrap .panel .panel_inner").eq(s_count).height());
		}
		orientationFn();
		var cu = 0;
		var ul_w = 0;

		$("#lnb li").each(function()
		{
			if($(this).hasClass("current"))
			{
				cu = $(this).index();
			}
		})
		$("#lnb.swiper-container li").each(function()
		{
			ul_w += ($(this).find('a').width() + parseInt($(this).css("padding-left")));
			//console.log("ul_w 0: " + ul_w);
		});

		lnb_swiper = new Swiper('#lnb.swiper-container',
				{
					//pagination: '.mainVisual .swiper-pagination',
		            //paginationClickable: true,
			        //loop:true,
			        //initialSlide:0

			        //grabCursor : true,
			        spaceBetween: 0,
			        freeMode: true,
			        scrollbarHide: true,
			        slidesPerView: "auto",
			        freeModeSticky:true,
				    onInit: function(s)
				    {
				    	//$("#lnb.swiper-container li a").eq(cu).addClass("on");
				    	$("#lnb.swiper-container").css("width", $(window).width() * 0.8);

				    	$("#lnb.swiper-container .swiper-wrapper").css("width", ul_w);
				    	//console.log("!!! ", $("#lnb.swiper-container .swiper-wrapper").width());
				    	//console.log("1 : " , $(window).width(), "ul_w : " , ul_w);
				    	$("#lnb.swiper-container li").css("width", "auto");


				    	//s.slideTo(top_menu_active, 500);
				    	var k = 0;
				    	$("#lnb.swiper-container li").each(function() { k += $(this).outerWidth(); });
				    	if( $(window).width() < k ) s.slideTo(cu, 500);

				    	$(".lnb_container .swiper-button-next").on("click", function()
				    	{
				    		lnb_swiper.slideNext();
				    	});

				    	$(".lnb_container .swiper-button-prev").on("click", function()
				    	{
				    		lnb_swiper.slidePrev();
				    	});
				    },
				    onProgress: function(s)
				    {
				    	if(s.isBeginning && !s.isEnd)
				    	{
				    		$(".lnb_container .swiper-button-next").css("opacity", 1);
				    		$(".lnb_container .swiper-button-prev").css("opacity", 0.1);
				    	}
				    	else if(!s.isBeginning && s.isEnd)
				    	{
				    		$(".lnb_container .swiper-button-next").css("opacity", 0.1);
				    		$(".lnb_container .swiper-button-prev").css("opacity", 1);
				    	}
				    	else if(!s.isBeginning && !s.isEnd)
				    	{
				    		$(".lnb_container .swiper-button-next").css("opacity", 1);
				    		$(".lnb_container .swiper-button-prev").css("opacity", 1);
				    	}
				    }
				});

		lnb_swiper.init();
	}
});
/*
var lnbVar = 0;
var lnbSum = 0;
var lnbPos = 0;
var lnbArray = new Array(0,0);
$(function(){
	var lnb = $('#lnb');
	var lnbLeft = 0;
	lnbSum = lnb.find('li').length-1;

	if(lnb.find('li').hasClass('current')){
		lnbVar = lnb.find('li.current').index();
		//console.log(lnbVar);
	};

	//lnb.wrap('<div class="lnbWrap"></div>');
	lnb.find('ul').wrap('<div></div>');
	lnb.append('<button type="button" class="prev">Previous</button>');
	lnb.append('<button type="button" class="next">Next</button>');

	lnb.find('li').each(function(n){
		if(n != 0){
			$(this).css('left',lnbLeft);
		} else {
			$(this).css('left',0);
		};
		lnbLeft += $(this).outerWidth();
		lnbArray[n+1] = -(lnbLeft);
	});

	$.fn.btnShow = function(){
		if(lnbVar == 0){
			lnb.find('.prev').hide().siblings('.next').show();
		} else if(lnbVar == lnbSum){
			lnb.find('.next').hide().siblings('.prev').show();
		} else if(lnbVar == lnbSum-1){
			if($(window).width() > lnb.find('li').eq(lnbVar).outerWidth()+lnb.find('li').eq(lnbVar+1).outerWidth()){
				lnb.find('.next').hide().siblings('.prev').show();
			} else if($(window).width() < lnb.find('li').eq(lnbVar).outerWidth()+lnb.find('li').eq(lnbVar+1).outerWidth()){
				lnb.find('.next').show().siblings('.prev').show();
			}
		} else if(lnbVar == lnbSum-2){
			if($(window).width() > lnb.find('li').eq(lnbVar).outerWidth()+lnb.find('li').eq(lnbVar+1).outerWidth()+lnb.find('li').eq(lnbVar+2).outerWidth()){
				lnb.find('.next').hide().siblings('.prev').show();
			} else if($(window).width() < lnb.find('li').eq(lnbVar).outerWidth()+lnb.find('li').eq(lnbVar+1).outerWidth()+lnb.find('li').eq(lnbVar+2).outerWidth()){
				lnb.find('.next').show().siblings('.prev').show();
			}
		} else {
			lnb.find('button').show();
		};
	};

	lnb.find('ul').css('width',lnbLeft+20);
	if(lnbVar == lnbSum){
		if($(window).width() > lnb.find('li').eq(lnbVar).outerWidth()+lnb.find('li').eq(lnbVar-1).outerWidth()){
			lnb.find('ul').stop().animate({'left':lnbArray[lnbVar-1]},100);
		} else {
			lnb.find('ul').stop().animate({'left':lnbArray[lnbVar]},100);
		};
	} else if(lnbVar == lnbSum-1){
		if($(window).width() > lnb.find('li').eq(lnbVar).outerWidth()+lnb.find('li').eq(lnbVar+1).outerWidth()){
			lnb.find('ul').stop().animate({'left':lnbArray[lnbVar-1]},100);
		} else if($(window).width() < lnb.find('li').eq(lnbVar).outerWidth()+lnb.find('li').eq(lnbVar+1).outerWidth()){
			lnb.find('ul').stop().animate({'left':lnbArray[lnbVar]},100);
		}
	} else {
		lnb.find('ul').stop().animate({'left':lnbArray[lnbVar]},100);
	};

	$.fn.btnShow();

	lnb.find('button').click(function(){
		lnbPos = lnb.find('ul').position();
		if($(this).hasClass('prev')){
			if(lnbVar > 0){
				lnbVar--;
				lnb.find('ul').stop().animate({'left':lnbArray[lnbVar]},100);
			};
		} else {
			if(lnbVar < lnbSum && $(window).width()-60 < (lnbLeft+lnbPos.left) ){
				lnbVar++;
				lnb.find('ul').stop().animate({'left':lnbArray[lnbVar]},100);
			};
		};
		$.fn.btnShow();
	});

	var tStr,tMove,tEnd,objStr,objMove,objEnd;
	lnb.on('touchstart', function(e){
		e.preventDefault();
		tStr =  e.originalEvent.changedTouches[0].pageX;
		objStr = lnb.find('ul').position();
	}).on('touchmove', function(e){
		tMove= e.originalEvent.changedTouches[0].pageX;
		objMove = lnb.find('ul').position();
		if(tStr > tMove){
			if($(window).width()-100 < (lnbLeft+objMove.left)){
				lnb.find('ul').css('left',objStr.left-(tStr-tMove));
			}
		} else {
			if(0 > objMove.left){
				lnb.find('ul').css('left',objStr.left+(tMove-tStr));
			}
		};
	}).on('touchend', function(e){
		e.preventDefault(false);
		tEnd =  e.originalEvent.changedTouches[0].pageX;
		objEnd = lnb.find('ul').position();

		var insLnb = 320;
		lnb.find('li').each(function(n){
			var ins = Math.abs(lnbArray[n]-objEnd.left);
			if(insLnb > ins){
				insLnb = ins;
				lnbVar = n;
			};
		});
		lnb.find('ul').stop().animate({'left':lnbArray[lnbVar]},100);
		$.fn.btnShow();
	});

	function focusInput(name){
		var fPos = name.position();
		$(window).scrollTop(fPos.top);
	};
});
*/