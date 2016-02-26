//플래시
function flashOpen(flashSrc, flashWidth, flashHeight, flashVar){

	var stringVars = flashVar;
	document.write('<OBJECT classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115,0" WIDTH="' + flashWidth + '" HEIGHT="' + flashHeight + '" id="flashObject" swLiveConnect="true">  ');
	document.write('<PARAM NAME=flashVars VALUE="'+ stringVars + '" />');
	document.write('<PARAM NAME=movie VALUE="' + flashSrc + '" />');
	document.write('<PARAM NAME=quality VALUE=high />');
	document.write('<PARAM NAME=menu VALUE=false />');
	document.write('<PARAM NAME=allowScriptAccess VALUE=always />');
	document.write('<PARAM NAME=bgcolor VALUE=#FFFFFF />');
	document.write('<EMBED src="' + flashSrc + '" flashVars="' + stringVars + '" allowScriptAccess="always" quality="high" bgcolor="#FFFFFF"  WIDTH="' + flashWidth + '" HEIGHT="' + flashHeight + '" NAME="flashObject" TYPE = "application/x-shockwave-flash" PLUGINSPAGE = "http://www.macromedia.com/go/getflashplayer"></EMBED>');
	document.write('</OBJECT>');
}

//플래시 (투명)
function flashOpenTransparent(flashSrc, flashWidth, flashHeight, flashVar){

	var stringVars = flashVar;

	document.write('<OBJECT classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115,0" WIDTH="' + flashWidth + '" HEIGHT="' + flashHeight + '" id="flashObject" swLiveConnect="true"> ');

	document.write('<PARAM NAME=flashVars VALUE="'+ stringVars + '" />');
	document.write('<PARAM NAME=movie VALUE="' + flashSrc + '" />');
	document.write('<PARAM NAME=quality VALUE=high />');
	document.write('<PARAM NAME=menu VALUE=false />');
	document.write('<PARAM NAME=allowScriptAccess VALUE=always />');
	document.write('<PARAM NAME=bgcolor VALUE=#FFFFFF />');
	document.write('<PARAM NAME=wmode VALUE=transparent />');

	document.write('<EMBED src="' + flashSrc + '" flashVars="' + stringVars + '" wmode="transparent" allowScriptAccess="always" quality="high" bgcolor="#FFFFFF"  WIDTH="' + flashWidth + '" HEIGHT="' + flashHeight + '" NAME="flashObject" TYPE = "application/x-shockwave-flash" PLUGINSPAGE = "http://www.macromedia.com/go/getflashplayer"></EMBED>');

	document.write('</OBJECT>');
}

//플래시 (PC주치의)
function flashGuide(flashSrc, flashWidth, flashHeight){

	//var stringVars = flashVar;

	document.write('<OBJECT classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115,0" WIDTH="' + flashWidth + '" HEIGHT="' + flashHeight + '" id="flashGuide" swLiveConnect="true"> ');

	//document.write('<PARAM NAME=flashVars VALUE="'+ stringVars + '" />');
	document.write('<PARAM NAME=movie VALUE="' + flashSrc + '" />');
	document.write('<PARAM NAME=quality VALUE=high />');
	document.write('<PARAM NAME=menu VALUE=false />');
	document.write('<PARAM NAME=allowScriptAccess VALUE=always />');
	document.write('<PARAM NAME=bgcolor VALUE=#FFFFFF />');
	document.write('<PARAM NAME=wmode VALUE=transparent />');

	document.write('<EMBED src="' + flashSrc + '" wmode="transparent" allowScriptAccess="always" quality="high" bgcolor="#FFFFFF"  WIDTH="' + flashWidth + '" HEIGHT="' + flashHeight + '" NAME="flashGuide" TYPE = "application/x-shockwave-flash" PLUGINSPAGE = "http://www.macromedia.com/go/getflashplayer"></EMBED>');

	document.write('</OBJECT>');
}

//main tab
function mboard_Show(e) {
	for(var i=1;i<=3;i++){
	document.getElementById('tab_0'+i).style.display = (e==i)?"block":"none";
	}
}

// Footer  Layer
function show_layer(val) {
objPopup = document.getElementById("catelist_layer_"+val);
 objPopup.style.display = "block";
}
function hide_layer(val) {
objPopup = document.getElementById("catelist_layer_"+val);
objPopup.style.display = "none";
}

//select 박스 바로 가기
function go_page(url) {
	    if(url != "")  location.href=url;


	}
//레이어 띄우기

function popOpen (gopageURL, gopageName, gopageWidth, gopageHeight, TopPosition, LeftPosition, scroll)
{
    var pop = window.open(gopageURL, gopageName,
        'width='+ gopageWidth + ', height='+ gopageHeight +', top='+ TopPosition

        +', left='+ LeftPosition +', menubar=no, scrollbars='+ scroll +', resizable=no');
    pop.focus();
}

var linkset=new Array()

linkset[1]='<img src="../../../../image.ahnlab.com/v365/img_discount.gif">'
linkset[2]='<img src="../../../../image.ahnlab.com/v365/200808/buy_notice_card.gif">'

var ie5=document.all && !window.opera
var ns6=document.getElementById

if (ie5||ns6)
document.write('<div id="popitmenu" onMouseover="clearhidemenu();" onMouseout="dynamichide(event)"><\/div>')

function iecompattest(){
return (document.compatMode && document.compatMode.indexOf("CSS")!=-1)? document.documentElement : document.body
}

function showmenu(e, which, optWidth){
if (!document.all&&!document.getElementById)
return
clearhidemenu()
menuobj=ie5? document.all.popitmenu : document.getElementById("popitmenu")
menuobj.innerHTML=which
menuobj.style.width=(typeof optWidth!="undefined")? optWidth : defaultMenuWidth
menuobj.contentwidth=menuobj.offsetWidth
menuobj.contentheight=menuobj.offsetHeight
eventX=ie5? event.clientX : e.clientX
eventY=ie5? event.clientY : e.clientY
var rightedge=ie5? iecompattest().clientWidth-eventX : window.innerWidth-eventX
var bottomedge=ie5? iecompattest().clientHeight-eventY : window.innerHeight-eventY
if (rightedge<menuobj.contentwidth)
menuobj.style.left=ie5? iecompattest().scrollLeft+eventX-menuobj.contentwidth+"px" : window.pageXOffset+eventX-menuobj.contentwidth+"px"
else
menuobj.style.left=ie5? iecompattest().scrollLeft+eventX+"px" : window.pageXOffset+eventX+"px"
if (bottomedge<menuobj.contentheight)
menuobj.style.top=ie5? iecompattest().scrollTop+eventY-menuobj.contentheight+"px" : window.pageYOffset+eventY-menuobj.contentheight+"px"
else
menuobj.style.top=ie5? iecompattest().scrollTop+event.clientY+"px" : window.pageYOffset+eventY+"px"
menuobj.style.visibility="visible"
return false
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function hidemenu(){
if (window.menuobj)
menuobj.style.visibility="hidden"
}

function dynamichide(e){
if (ie5&&!menuobj.contains(e.toElement))
hidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
hidemenu()
}

function delayhidemenu(){
delayhide=setTimeout("hidemenu()",500)
}

function clearhidemenu(){
if (window.delayhide)
clearTimeout(delayhide)
}

if (ie5||ns6)
document.onclick=hidemenu

	function getCookie(name) {
        var Found = false
        var start, end
        var i = 0

        while(i <= document.cookie.length) {
            start = i
            end = start + name.length
            if(document.cookie.substring(start, end) == name) {
                if ( document.cookie.substring(end,end+1) != ";" ) {
                    Found = true
                    break
                }
            }
            i++
        }
        if(Found == true) {
            start = end + 1
            end = document.cookie.indexOf(";", start)
            if(end < start)
                end = document.cookie.length
                return document.cookie.substring(start, end) ;
        }

        return "";
    }



//tab 메뉴
function TabClick(menuElId,e) {
		var tabMenu = document.getElementById(menuElId).getElementsByTagName("li");
		for(var i=1;i<=tabMenu.length;i++){
			document.getElementById('cont_0'+i).style.display = (e==i)?"block":"none";
			document.getElementById('title_0'+i).className = (e==i)?"on":"";;
			if(e==i){
			tabMenu.item(e-1).getElementsByTagName("img").item(0).src = tabMenu.item(e-1).getElementsByTagName("img").item(0).src.replace("_off.html", "_on.html");
			}else{
			tabMenu.item(i-1).getElementsByTagName("img").item(0).src = tabMenu.item(i-1).getElementsByTagName("img").item(0).src.replace("_on.html", "_off.html");
			}
		}
	}

// 쿠키값 얻기.
function getCookie( name )
{
	var nameOfCookie = name + "=";
	var x = 0;
	while ( x <= document.cookie.length )
	{
		var y = (x+nameOfCookie.length);
		if ( document.cookie.substring( x, y ) == nameOfCookie ) {
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
				endOfCookie = document.cookie.length;
			return unescape( document.cookie.substring( y, endOfCookie ) );
		}
		x = document.cookie.indexOf( " ", x ) + 1;
		if ( x == 0 )
			break;
	}
	return "";
}

// 빠른 바이러스, 스파이웨어 치료.
function runV3SpyZero(num){
	if(getCookie("LOGIN")=="Y"){
		v3_spyzero.location.href="http://v3clinic.ahnlab.com/v3clinic/site/service/runV3SpyZero.do";
	}else{
		location.href="http://v3clinic.ahnlab.com/v3clinic/site/login/login.do?targetUrl=/v3clinic/site/service/quickService.do";
	}
}
document.write("<iframe src='' name='v3_spyzero', frameborder='0', width='1px' height='0' scrolling='no'></iframe>");