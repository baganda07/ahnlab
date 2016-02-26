var PageNum= "";
var subNum="";
var urlStr = "http";
var loc = document.location.href;
var loc_protocal = document.URL. substring (0,5).toUpperCase();
if ( loc_protocal == "HTTPS" ) { urlStr = "https"; }

//메뉴 on
if(loc.indexOf("v3clinic/site/main/main.do") > 0){ PageNum= "1";subNum="0";}
else if(loc.indexOf("jspintro_svc") > 0){ PageNum= "1";subNum="1";}
else if(loc.indexOf("jspintro_guide") > 0){ PageNum= "1";subNum="2";}
else if(loc.indexOf("freeSvc.do") > 0){ PageNum= "1";subNum="3";}

else if(loc.indexOf("jspintro_merit") > 0){ PageNum= "2";subNum="1";}
else if(loc.indexOf("installPcInfo.do") > 0 ){ PageNum= "2";subNum="3";}
else if(loc.indexOf("recoveryInfo") > 0 ){ PageNum= "2";subNum="4";}
else if(loc.indexOf("quickService.do") > 0 ){ PageNum= "2";subNum="5";}
else if(loc.indexOf("freeExchangeInfo") > 0 ){ PageNum= "2";subNum="6";}

else if(loc.indexOf("jspserviceNotice.do") > 0 || loc.indexOf("jspserviceNotice02.do") > 0  || loc.indexOf("/serviceNotice03.do") > 0  || loc.indexOf("/jspserviceNotice04.do") > 0){ PageNum= "3";subNum="1";}
else if(loc.indexOf("remoteStart.do") > 0 || loc.indexOf("/reserv/nbFront_View") > 0 ){ PageNum= "3";subNum="2";}
else if(loc.indexOf("reserveForm.do") > 0){ PageNum= "3";subNum="3";}
else if(loc.indexOf("remoteHistory.do") > 0){ PageNum= "3";subNum="4";}
else if(loc.indexOf("experienceList.do") > 0 || loc.indexOf("experienceInfoView") > 0 || loc.indexOf("experienceEdit") > 0 ){ PageNum= "3";subNum="5";}
//else if(loc.indexOf("jspstory_mrgo_") > 0){ PageNum= "3";subNum="6";}
else if(loc.indexOf("jspfaqList.do") > 0){ PageNum= "3";subNum="7";}

else if(loc.indexOf("join.credit.co.kr/ib20/mnu/BAWAHNNSA01") > 0 || loc.indexOf("join.credit.co.kr/ib20/mnu/BAWAHNNSA99") > 0 || loc.indexOf("/reserv/nbFront_View") > 0  || loc.indexOf("nameService.do") > 0 ){ PageNum= "4";subNum="1";}
else if(loc.indexOf("join.credit.co.kr/ib20/mnu/BAWAHNNSB11") > 0){ PageNum= "4";subNum="2";}
else if(loc.indexOf("join.credit.co.kr/ib20/mnu/BAWAHNNSB02") > 0){ PageNum= "4";subNum="3";}
else if(loc.indexOf("join.credit.co.kr/ib20/mnu/BAWAHNNSB05") > 0){ PageNum= "4";subNum="4";}
else if(loc.indexOf("join.credit.co.kr/ib20/mnu/BAWAHNNSB04") > 0){ PageNum= "4";subNum="5";}
else if(loc.indexOf("join.credit.co.kr/ib20/mnu/BAWAHNNSC01") > 0){ PageNum= "4";subNum="6";}
else if(loc.indexOf("join.credit.co.kr/ib20/mnu/BAWAHNNSD01") > 0){ PageNum= "4";subNum="7";}

else if(loc.indexOf("xkeeper.ahnlab.com/function/index.html") > 0){ PageNum= "5";subNum="2";}
else if(loc.indexOf("xkeeper.ahnlab.com/install") > 0){ PageNum= "5";subNum="4";}
else if(loc.indexOf("xkeeper.ahnlab.com/report") > 0){ PageNum= "5";subNum="5";}
else if(loc.indexOf("http://xkeeper.ahnlab.com/setting/")  == 0){ PageNum= "5";subNum="6";}
else if(loc.indexOf("xkeeper.ahnlab.com/trial") > 0){ PageNum= "5";}
else if(loc.indexOf("http://xkeeper.ahnlab.com/") == 0){ PageNum= "5";subNum="1";}

else if(loc.indexOf("recoveryMerit.do") > 0){PageNum= "6";subNum="1";}
else if(loc.indexOf("recoveryFunc.do") > 0 || loc.indexOf("recoveryFunc02.do") > 0 || loc.indexOf("recoveryFunc03.do") > 0 || loc.indexOf("recoveryFunc04.do") > 0 || loc.indexOf("recoveryFunc05.do") > 0 ){PageNum= "6";subNum="2";}
else if(loc.indexOf("recoveryFaq.do") > 0){PageNum= "6";subNum="4";}
else if(loc.indexOf("recoveryNoti.do") > 0){PageNum= "6";subNum="0";}

else{
	PageNum= "0";subNum="0";
}

document.write('	<div class="topMenu">');
document.write('        <div class="content">');
document.write('            <h1><a href="/v3clinic/site/main/main.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/h1_365.gif" alt="V3 365 클리닉" /></a></h1>');
document.write('				<form name="fromUrl" id="fromUrl"><input type="hidden" id="targetUrl" name="targetUrl"/></form>');
document.write('            <ul class="globalMenu">');
document.write('            <li><a href="http://www.ahnlab.com" target="_blank"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/top_ahnlab.gif" alt="AhnLab" /></a></li>');
document.write('            <li class="last"><a href="http://shop.ahnlab.com" target="_blank"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/top_mall.gif" alt="AhnLab Mall" /></a></li>');
document.write('            </ul>');
//document.write('            <p class="bn"><a href="http://v3clinic.ahnlab.com/v3clinic/site/event/renewalEventReply.do"><img src="'+urlStr+'://image.ahnlab.com/v365/event/2014/1001/top_bn_01.gif" alt="V3 365 클리닉에게 한 마디 남겨주세요!" /></a></p>');
document.write('            <ul class="menuList">');
if(getCookie("LOGIN")=="Y"){
document.write(' 			<li><a href="/v3clinic/site/login/logout.do">로그아웃</a></li>');
}else{
document.write('				<li><a href="javascript:fromUrlLogin();">로그인</a></li>');
document.write('             <li><a href="https://www.ahnlab.com/kr/site/customer/userEntry.do" target="_blank">회원가입</a></li>');
}
document.write('            <li><a href="http://www.ahnlab.com/kr/site/support/supportMain.do" target="_blank">고객지원</a></li>');
document.write('            <li><a href="https://www.ahnlab.com//kr/site/mypage/mypageMain.do" target="_blank">My 보안센터</a></li>');
document.write('            <li><a href="/v3clinic/site/register/prodRegisterForm.do">제품/쿠폰등록</a></li>');
document.write('            <li class="last"><a href="/v3clinic/site/download/jspdownload.do">다운로드</a></li>');
document.write('            </ul>');
document.write('       </div>');
document.write('    </div><hr />');

document.write('<div class="gnb">');
document.write('<div class="content">');
document.write('<ul>');
document.write('	<li id="navi01"><a href="/v3clinic/site/service/jspintro_svc.do" class="navi">V3 365 클리닉 서비스 소개</a>');
document.write('		<ul id="sub01" class="hidden">');
document.write('			<li id="navi01_01" class="first"><a href="/v3clinic/site/service/jspintro_svc.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_01_01_off.gif" alt="서비스 소개" class="rollover"/></a></li>');
document.write('			<li id="navi01_02"><a href="/v3clinic/site/service/jspintro_guide.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_01_02_off.gif" alt="상품/서비스 안내" class="rollover"/></a></li>');
document.write('			<li id="navi01_03"><a href="/v3clinic/site/service/freeSvc.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201509/common/gnb_01_03_off.gif" alt="무료 서비스" class="rollover"/></a></li>');
document.write('		</ul>');
document.write('	</li>');
document.write('	<li id="navi02"><a href="/v3clinic/site/service/jspintro_merit.do" class="navi">V3 365</a>');
document.write('		<ul id="sub02" class="hidden">');
document.write('			<li id="navi02_01" class="first"><a href="/v3clinic/site/service/jspintro_merit.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_02_01_off.gif" alt="서비스 안내" class="rollover"/></a></li>');
document.write('			<li id="navi02_02"><a href="/v3clinic/site/download/jspdownload.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_02_02_off.gif" alt="다운로드" class="rollover"/></a></li>');
document.write('			<li id="navi02_03"><a href="/v3clinic/site/download/installPcInfo.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_02_03_off.gif" alt="설치 PC관리" class="rollover"/></a></li>');
document.write('			<li id="navi02_04"><a href="/v3clinic/site/recovery/recoveryInfo.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_02_04_off.gif" alt="PC복구 서비스 안내" class="rollover"/></a></li>');
document.write('			<li id="navi02_05"><a href="/v3clinic/site/service/quickService.do?qs_dist=1"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_02_06_off.gif" alt="온라인 바이러스 검사" class="rollover"/></a></li>');
document.write('			<li id="navi02_06"><a href="/v3clinic/site/service/freeExchangeInfo.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_02_07_off.gif" alt="무료제품교환" class="rollover"/></a></li>');
document.write('		</ul>');
document.write('	</li>');
document.write('	<li id="navi03"><a href="/v3clinic/site/remote/jspserviceNotice.do" class="navi">PC주치의</a>');
document.write('		<ul id="sub03" class="hidden">');
document.write('			<li id="navi03_01" class="first"><a href="/v3clinic/site/remote/jspserviceNotice.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_03_01_off.gif" alt="서비스 안내" class="rollover"/></a></li>');
document.write('			<li id="navi03_02"><a href="/v3clinic/site/remote/remoteStart.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_03_02_off.gif" alt="원격지원 시작 및 예약변경" class="rollover"/></a></li>');
document.write('			<li id="navi03_03"><a href="/v3clinic/site/remote/reserveForm.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_03_03_off.gif" alt="원격지원 예약" class="rollover"/></a></li>');
document.write('			<li id="navi03_04"><a href="/v3clinic/site/remote/remoteHistory.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_03_04_off.gif" alt="원격지원 내역" class="rollover"/></a></li>');
document.write('			<li id="navi03_05"><a href="/v3clinic/site/story/experienceList.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_03_05_off.gif" alt="PC주치의 사용기" class="rollover"/></a></li>');
//document.write('			<li id="navi03_06"><a href="/v3clinic/site/service/jspstory_mrgo_17.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_03_06_off.gif" alt="해결사 고팀장" class="rollover"/></a></li>');
document.write('			<li id="navi03_07"><a href="/v3clinic/site/notice/jspfaqList.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_03_07_off.gif" alt="FAQ모음" class="rollover"/></a></li>');
document.write('		</ul>');
document.write('	</li>');
document.write('	<li id="navi04"><a href="/v3clinic/site/nameservice/nameService.do?service_code=00" class="navi">명의도용차단</a>');
document.write('		<ul id="sub04" class="hidden">');
document.write('			<li id="navi04_01" class="first"><a href="/v3clinic/site/nameservice/nameService.do?service_code=00"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_04_01_off.gif" alt="서비스 안내" class="rollover"/></a></li>');
document.write('			<li id="navi04_02"><a href="/v3clinic/site/nameservice/nameService.do?service_code=01"><img src="'+urlStr+'://image.ahnlab.com/v365/201509/common/gnb_04_02_off.gif" alt="명의도용 요약" class="rollover"/></a></li>');
document.write('			<li id="navi04_03"><a href="/v3clinic/site/nameservice/nameService.do?service_code=02"><img src="'+urlStr+'://image.ahnlab.com/v365/201509/common/gnb_04_03_off.gif" alt="명의도용차단 설정" class="rollover"/></a></li>');
document.write('			<li id="navi04_04"><a href="/v3clinic/site/nameservice/nameService.do?service_code=03"><img src="'+urlStr+'://image.ahnlab.com/v365/201509/common/gnb_04_04_off.gif" alt="차단내역조회" class="rollover"/></a></li>');
document.write('			<li id="navi04_05"><a href="/v3clinic/site/nameservice/nameService.do?service_code=04"><img src="'+urlStr+'://image.ahnlab.com/v365/201509/common/gnb_04_05_off.gif" alt="인증내역조회" class="rollover"/></a></li>');
document.write('			<li id="navi04_06"><a href="/v3clinic/site/nameservice/nameService.do?service_code=05"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_04_06_off.gif" alt="명의보호 10계명" class="rollover"/></a></li>');
document.write('			<li id="navi04_07"><a href="/v3clinic/site/nameservice/nameService.do?service_code=06"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_04_07_off.gif" alt="신고센터" class="rollover"/></a></li>');
document.write('		</ul>');
document.write('	</li>');
document.write('	<li id="navi05"><a href="http://xkeeper.ahnlab.com" class="navi">자녀 PC 보호</a>');
document.write('		<ul id="sub05" class="hidden">');
document.write('			<li id="navi05_01" class="first"><a href="http://xkeeper.ahnlab.com/"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_05_01_off.gif" alt="서비스 소개" class="rollover"/></a></li>');
document.write('			<li id="navi05_02"><a href="http://xkeeper.ahnlab.com/function/"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_05_02_off.gif" alt="기능 설명" class="rollover"/></a></li>');
document.write('			<li id="navi05_03"><a href="/v3clinic/site/service/jspbuy_xkeeper.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_05_03_off.gif" alt="서비스 신청" class="rollover"/></a></li>');
document.write('			<li id="navi05_04"><a href="http://xkeeper.ahnlab.com/install/"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_05_04_off.gif" alt="프로그램 설치" class="rollover"/></a></li>');
document.write('			<li id="navi05_05"><a href="http://xkeeper.ahnlab.com/report/"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_05_05_off.gif" alt="사용 보고서" class="rollover"/></a></li>');
document.write('			<li id="navi05_06"><a href="http://xkeeper.ahnlab.com/setting/"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/gnb_05_06_off.gif" alt="엑스키퍼 설정" class="rollover"/></a></li>');
document.write('		</ul>');
document.write('	</li>');
document.write('	<li id="navi06"><a href="/v3clinic/site/recovery/recoveryMerit.do" class="navi">PC복구 Plus</a>');
document.write('		<ul id="sub06" class="hidden">');
document.write('			<li id="navi06_01" class="first"><a href="/v3clinic/site/recovery/recoveryMerit.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201511/common/gnb_06_01_off.gif" alt="서비스 안내" class="rollover"/></a></li>');
document.write('			<li id="navi06_02"><a href="/v3clinic/site/recovery/recoveryFunc.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201511/common/gnb_06_02_off.gif" alt="이용안내" class="rollover"/></a></li>');
document.write('			<li id="navi06_03"><a href="/v3clinic/site/download/jspdownload_recovery.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201511/common/gnb_06_03_off.gif" alt="프로그램 설치" class="rollover"/></a></li>');
document.write('			<li id="navi06_04"><a href="/v3clinic/site/recovery/recoveryFaq.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201511/common/gnb_06_04_off.gif" alt="FAQ" class="rollover"/></a></li>');
document.write('		</ul>');
document.write('	</li>');
document.write('</ul>');
document.write('</div>');
document.write('</div>');

document.write('    <div class="quickMenu open slidemenu">');
document.write('        <h2 class="blind">Quick  Menu </h2>');
document.write('        <p class="btn"><span class="hidden">Quick  Menu 접기</span></p>');
document.write('        <div class="quickContent mCustomScrollbar">');
document.write('            <p class="buy"><a href="/v3clinic/site/service/jspbuy_index.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/quick_svc.gif" alt="서비스 구매하기" /></a></p>');
document.write('            <p class="quickTit"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/quick_tit.gif" alt="Quick Menu" /></p>');
document.write('            <ul>');
document.write('            <li><a href="/v3clinic/site/download/jspdownload.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/quick_menu_01_off.gif" alt="프로그램 설치" class="rollover" /></a></li>');
document.write('            <li><a href="/v3clinic/site/download/installPcInfo.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/quick_menu_02_off.gif" alt="설치 PC 관리" class="rollover" /></a></li>');
document.write('            <li><a href="/v3clinic/site/remote/reserveForm.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/quick_menu_03_off.gif" alt="원격지원 예약" class="rollover" /></a></li>');
document.write('            <li><a href="/v3clinic/site/service/quickService.do?qs_dist=1"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/quick_menu_04_off.gif" alt="바이러스 치료" class="rollover" /></a></li>');
document.write('            <li><a href="/v3clinic/site/register/prodRegisterForm.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/quick_menu_05_off.gif" alt="제품등록" class="rollover" /></a></li>');
document.write('            <li><a href="/v3clinic/site/remote/jspserviceNotice.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/quick_menu_06.gif" alt="추천서비스" /></a></li>');
document.write('            <li><a href="/v3clinic/site/service/jspbuy_index.do"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/quick_menu_07.gif" alt="내게 맞는 서비스 찾기" /></a></li>');
document.write('            </ul>');
document.write('            <p class="top"><a href="#"><img src="'+urlStr+'://image.ahnlab.com/v365/201408/common/quick_top.gif" alt="Top" /></a></p>');
document.write('        </div>');
document.write('    </div><hr />');

jQuery(function($){
	var gnbMenu = $("div.gnb .content").find('>ul');
	var sItem = gnbMenu.find('>li');
	var ready = gnbMenu.find('ul[id=sub0'+PageNum+']').find('li[id=navi0'+PageNum+'_0'+subNum+']').find("img");
	var lastEvent = null;
	$(document).ready(function() {
			var page = $("#sub0" + PageNum);

			if(PageNum != '0') {
				page.removeClass("hidden");
				$('#navi0'+PageNum + ' a').addClass("select");
				
				if(loc.indexOf("v3clinic/site/main/main.do") <= 0){
					ready[0].src = ready[0].src.replace("_off","_on");
					ready.removeClass("rollover")
				}
			}

			gnbMenu.find('>li>a').bind("mouseover focusin", function(e){
				var t = $(this);

				if (this == lastEvent) return false;
				lastEvent = this;
				setTimeout(function(){ lastEvent=null }, 200);

				if (t.next('ul').is(':hidden')) {
					sItem.find('>ul').hide();
					gnbMenu.find('>li>a').removeClass("select");
					t.addClass("select");
					t.next('ul').show();
				} else if(!t.next('ul').length) {
					sItem.find('>ul').hide();
				} else{
					sItem.find('>ul[id=sub0'+PageNum+']').removeClass('hidden');
				}
			});
			gnbMenu.hover(
				function(){
				},
				function(){
					gnbMenu.find('>li>a').removeClass("select");
					sItem.find('>ul').hide();
					sItem.find('>ul[id=sub0'+PageNum+']').show();
					if(PageNum != '0') {
						$('#navi0'+PageNum + ' a').addClass("select");
					}
				});
			$("img.rollover").hover(
				function(){this.src = this.src.replace("_off","_on");},
				function(){this.src = this.src.replace("_on","_off");});
	});
});

function fromUrlLogin() {
	var targetUrl = window.location.href;
	if ( targetUrl == null || ( targetUrl.indexOf("/v3clinic/site/login") > -1) ) targetUrl = "";
	$("#targetUrl").attr("value", targetUrl);
	$("#fromUrl").attr("action", "/v3clinic/site/login/login.do");
	$("#fromUrl").attr("target", "_self");
	$("#fromUrl").submit();
}

//Main - Quick Menu
$(function(){
	$(".quickMenu.open .btn").click(function() {
		$(".quickMenu.open").toggleClass("close");
	});

	$(".quickMenu.close .btn").click(function() {
		$(".quickMenu.open close").removeClass("close");
	});

	$(".main .contList li:last-child").addClass("last")
});

$(function() {
	$(".main #navi01 > a").attr("href", "#intro");
	$(".main #navi02 > a").attr("href", "#v3365");
	$(".main #navi03 > a").attr("href", "#doctor");
	$(".main #navi04 > a").attr("href", "#nameProtect");
	$(".main #navi05 > a").attr("href", "#pcProtect");
	$(".main #navi06 > a").attr("href", "#recoveryPlus");

	$(".main  #navi01").bind("click focusin", function() {
		PageNum="1";
		$(".main #navi01 a").addClass("select", 0);
		$(".content .v3365, .content .doctor, .content .nameProtect, .content .pcProtect, .content .recoveryPlus").addClass("hidden");
		$(".gnb #sub01, .mainContArea .intro").removeClass("hidden");
	});

	$(".main #navi02").bind("click focusin", function() {
		PageNum="2";
		$(".main #navi02 a").addClass("select", 0);
		$(".content .intro, .content .doctor, .content .nameProtect, .content .pcProtect, .content .recoveryPlus").addClass("hidden");
		$(".gnb #sub02, .mainContArea .v3365").removeClass("hidden");
	});
	$(".main #navi03").bind( "click focusin", function() {
		PageNum="3";
		$(".main #navi03 a").addClass("select", 0);
		$(".content .intro, .content .v3365, .content .nameProtect, .content .pcProtect, .content .recoveryPlus").addClass("hidden");
		$(".gnb #sub03, .mainContArea .doctor").removeClass("hidden");
	});
	$(".main #navi04").bind( "click focusin", function() {
		PageNum="4";
		$(".main #navi04 a").addClass("select", 0);
		$(".content .intro, .content .v3365, .content .doctor, .content .pcProtect, .content .recoveryPlus").addClass("hidden");
		$(".gnb #sub04, .mainContArea .nameProtect").removeClass("hidden");
	});
	$(".main #navi05").bind( "click focusin", function() {
		PageNum="5";
		$(".main #navi05 a").addClass("select", 0);
		$(".content .intro, .content .v3365, .content .doctor, .content .nameProtect, .content .recoveryPlus").addClass("hidden");
		$(".gnb #sub05, .mainContArea .pcProtect").removeClass("hidden");
	});
	$(".main #navi06").bind( "click focusin", function() {
		PageNum="6"
		$(".main #navi06 a").addClass("select", 0);
		$(".content .intro, .content .v3365, .content .doctor, .content .pcProtect, .content .recoveryPlus").addClass("hidden");
		$(".gnb #sub06, .mainContArea .recoveryPlus").removeClass("hidden");
	});

	if(loc.indexOf("v3clinic/site/main/main.do#intro") > 0){
		PageNum="1";
		$(".main #navi01 a").addClass("select", 0);
		$(".content .v3365, .content .doctor, .content .nameProtect, .content .pcProtect, .content .recoveryPlus").addClass("hidden");
		$(".gnb #sub01, .mainContArea .intro").removeClass("hidden");
	}else if(loc.indexOf("v3clinic/site/main/main.do#v3365") > 0){
		PageNum="2";
		$(".main #navi02 a").addClass("select", 0);
		$(".content .intro, .content .doctor, .content .nameProtect, .content .pcProtect, .content .recoveryPlus").addClass("hidden");
		$(".gnb #sub02, .mainContArea .v3365").removeClass("hidden");
	}else if(loc.indexOf("v3clinic/site/main/main.do#doctor") > 0){
		PageNum="3";
		$(".main #navi03 a").addClass("select", 0);
		$(".content .intro, .content .v3365, .content .nameProtect, .content .pcProtect, .content .recoveryPlus").addClass("hidden");
		$(".gnb #sub03, .mainContArea .doctor").removeClass("hidden");
	}else if(loc.indexOf("v3clinic/site/main/main.do#nameProtect") > 0){
		PageNum="4";
		$(".main #navi04 a").addClass("select", 0);
		$(".content .intro, .content .v3365, .content .doctor, .content .pcProtect, .content .recoveryPlus").addClass("hidden");
		$(".gnb #sub04, .mainContArea .nameProtect").removeClass("hidden");
	}else if(loc.indexOf("v3clinic/site/main/main.do#pcProtect") > 0){
		PageNum="5";
		$(".main #navi05 a").addClass("select", 0);
		$(".content .intro, .content .v3365, .content .doctor, .content .nameProtect, .content .recoveryPlus").addClass("hidden");
		$(".gnb #sub05, .mainContArea .pcProtect").removeClass("hidden");
	}else if(loc.indexOf("v3clinic/site/main/main.do#recoveryPlus") > 0){
		PageNum="6"
		$(".main #navi06 a").addClass("select", 0);
		$(".content .intro, .content .v3365, .content .doctor, .content .pcProtect, .content .nameProtect").addClass("hidden");
		$(".gnb #sub06, .mainContArea .recoveryPlus").removeClass("hidden");
	}
});


$(document).ready(function(){  //오른쪽 스크롤바 따라다니는 스크립트
	if(loc.indexOf("v3clinic/site/main/main.do") > 0){
		$(".quickMenu").removeClass("slidemenu");
	}
	var currentPosition = parseInt($(".slidemenu").css("top"));
	$(window).scroll(function() {
		var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
		$(".slidemenu").stop().animate({"top":position+currentPosition+"px"},1000);
	});
});


(function init_mobile() {
	var domain = location.href,
		browsers = new Array(/Mobile/, /Windows CE/, /POLARIS/, /Android/, /Phone/),
		browsers_except = "iPad",
		mobile_yn = "N";   
	
	for (var key in browsers) {
	    if (navigator.userAgent.match(browsers[key]) != null) {
		    if ( navigator.userAgent.match(browsers_except) != null ) {
		    	mobile_yn = "iPad";	
		    } else {
	    		mobile_yn = "Y";
		    }
	    }
	}
	
	if (mobile_yn=="Y") {
		if(domain.indexOf("remote") > -1 || domain.indexOf("bizremote") > -1) {
			location.href="http://v3clinic.ahnlab.com/v3clinic/site/mremote/main/main.do";
		} 	
	}
})();