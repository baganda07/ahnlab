// category click
// by yongsung,lee (2012.01)
function prod(playlistId){
	//alert(playlistId);
/*	$("#playlistId").val( playlistId);
	$("#playerVideoId").val( 'noid');*/
	$("#tvMainForm").attr("action", "/kr/tv/product.do?playlistId="+playlistId+"&playerVideoId=noid");
	$("#tvMainForm").submit();
}

function conf(playlistId){
	//alert(playlistId);
/*	$("#playlistId").val( playlistId);
	$("#playerVideoId").val( 'noid');*/
	$("#tvMainForm").attr("action", "/kr/tv/conference.do?playlistId="+playlistId+"&playerVideoId=noid");
	$("#tvMainForm").submit();
}

function news(playlistId){
	//alert(playlistId);
	/*$("#playlistId").val( playlistId);
	$("#playerVideoId").val( 'noid');*/
	$("#tvMainForm").attr("action", "/kr/tv/news.do?playlistId="+playlistId+"&playerVideoId=noid");
	$("#tvMainForm").submit();
}

function about(playlistId){
	//alert(playlistId);
	/*$("#playlistId").val( playlistId);
	$("#playerVideoId").val('noid');*/
	$("#tvMainForm").attr("action", "/kr/tv/about.do?playlistId="+playlistId+"&playerVideoId=noid");
	$("#tvMainForm").submit();
}
//category click

var prodId  = '1416245863001'; // 제품/솔루션
var confId  = '1391880063001'; // 컨퍼런스
var newsId  = '1416245862001'; // 뉴스/이슈
var aboutId = '1416245864001'; // 안랩소식

// Media Click
//by yongsung,lee (2012.02)
function prodMediaClick(playlistId,videoId, slideShowType){
	$("#playerVideoId").val( videoId);
	$("#playlistId").val( playlistId)
	$("#slideShowType").val(slideShowType);       //화면에 보여질 리스트 형태
	$("#tvMainForm").attr("action", "/kr/tv/product.do");
	$("#tvMainForm").submit();
}
function confMediaClick(playlistId,videoId, slideShowType){
	$("#playerVideoId").val( videoId);
	$("#playlistId").val( playlistId);
	$("#slideShowType").val(slideShowType);       //화면에 보여질 리스트 형태
	$("#tvMainForm").attr("action", "/kr/tv/conference.do");
	$("#tvMainForm").submit();
}
function newsMediaClick(playlistId,videoId, slideShowType){

	$("#playerVideoId").val( videoId);
	$("#playlistId").val( playlistId);
	$("#slideShowType").val(slideShowType);       //화면에 보여질 리스트 형태
	$("#tvMainForm").attr("action", "/kr/tv/news.do");
	$("#tvMainForm").submit();

}
function aboutMediaClick(playlistId,videoId, slideShowType){

	$("#playerVideoId").val( videoId);
	$("#playlistId").val( playlistId);
	$("#slideShowType").val(slideShowType);       //화면에 보여질 리스트 형태
	$("#tvMainForm").attr("action", "/kr/tv/about.do");
	$("#tvMainForm").submit();
}
//Media Click

var shortenURL = escape("http://goo.gl/kvAgx");   // http://goo.gl/ 에서 실제 url이 생성되면 할 것
var title = encodeURIComponent("[AhnLab TV] ");
var twitTitle = encodeURIComponent("[#AhnLabTV] ");;
var tag = encodeURIComponent("AhnLab TV");
var me2tag = "";
var title_twit = '[AhnLab TV] 안철수연구소 동영상';
var twitConts = encodeURIComponent(title_twit+' #AhnLabTV');

var facebookCont = encodeURIComponent(title);

// 트위터
function postTwitter(videoIdforSns,shortDsforSns){
	var longUrl = escape("http://link.brightcove.com/services/player/bcpid1392189846001?bckey=AQ~~,AAABQ7vJFJE~,YUe9mtKqvkTJ6LPNpcv0hLzeWs1gEpiM&bctid="+videoIdforSns);
	var ds = twitTitle+encodeURIComponent(shortDsforSns);
	var resultUrl = "";
	$.ajax({
	    type: 'GET',
	    url: "http://durl.me/api/Create.do?type=json&longurl=" + longUrl +"&callback=?",
	    dataType: 'json',
	    timeout: 6000,
	    success: function(data, status) {
		    if ( data.status == "ok" ) {
		    	resultUrl = 'http://twitter.com/home/?status='+ds+" : "+encodeURIComponent(data.shortUrl);
		    	window.open(resultUrl, 'AhnLabTVTwitter', 'width= 1024, height= 600, scroll=yes,resizable=yes');
		    }
	    },
	    error: function (request, status, error) {
	    	alert("error!!!");
	    }
	});
}
//페이스북
function postFacebook(videoIdforSns,shortDsforSns){
	var longUrl = escape("http://link.brightcove.com/services/player/bcpid1392189846001?bckey=AQ~~,AAABQ7vJFJE~,YUe9mtKqvkTJ6LPNpcv0hLzeWs1gEpiM&bctid="+videoIdforSns);
	var ds = encodeURIComponent(shortDsforSns);
	var resultUrl = "";
	resultUrl="http://www.facebook.com/sharer.php?u="+escape(longUrl)+"&t="+title;
	window.open(resultUrl, 'AhnLabTVFacebook', 'width= 1024, height= 600, scroll=yes,resizable=yes');
}