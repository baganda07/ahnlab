



































<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from global.ahnlab.com/site/support/assistance/idpwAssistanceB.do by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 26 Jan 2016 13:22:14 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <meta name="viewport" content="width=1280" />
    




























    
    
    
    
        
    
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <!-- SEO -->
    <meta name="Keywords" content="" />
    <meta name="Description" content="" />
	<!-- 페이스북 -->
	<meta property="og:title"           content="AhnLab - Antivirus Software and Security Solutions Provider"/>
	<meta property="og:description"     content=""/>

	<!-- 트위터 -->
	<meta name="twitter:title"          content="AhnLab - Antivirus Software and Security Solutions Provider">
	<meta name="twitter:description"    content="">

    <!-- SEO -->
    <title>AhnLab - Antivirus Software and Security Solutions Provider</title>

    <link href="../../../css/en/ahnlab.css" rel="stylesheet" type="text/css" />
    
    <script type="text/javascript" src="../../../js/lib/jquery/jquery-1.11.1.js"></script>
    <script type="text/javascript" src="../../../js/lib/jquery/jquery.ui.js"></script>
    <script type="text/javascript" src="../../../js/common.js"></script>
    <script type="text/javascript" src="../../../js/site.js"></script>
    <script type="text/javascript" src="../../../js/jquery.js"></script>
    <script type="text/javascript" src="../../../js/lib/jquery/jquery.placeholder.js"></script>
    <script type="text/javascript">
    document.domain = "ahnlab.com";
    </script>
    <script type="text/javascript">
    <!--
    $(document).ready(function (){

    	$("input, textarea").placeholder();

        //이미지 에러처리
        $("img").each(function() {
            var instance = $(this);
            var w = $(this).parent().width();
            var h = $(this).parent().height();
            if($(this).parent().get(0).tagName == "A"){
            	w = $(this).width();
                h = $(this).height();
            }
            var img = new Image();
            $(img).error(function() {
                instance.attr("src", "//global.ahnlab.com/image/en/common/img_no_"+ w +"_"+ h +".gif");
            }).attr("src", instance.attr("src"));
        });
        
        //dim처리된 링크에 대체 택스트 달기
        $("a").each(function (){
	        if($(this).hasClass("dis")){
	            $(this).attr("title", "This service is currently not available.");
	        }
	    });
	        
        //선택된 탭에 대체 택스트 달기
        $("li.on > a").each(function (){
            var text = $(this).html();
            $(this).html("<span class=\"blind\">Current page</span>" + text);
        });
        
        //a링크 #처리
        $('a[href = "#"]').click(function(){
            return false;
        });

        //로그아웃
        $(".logoutBtn").click(function (){
            $.ajax({
                url: 'https://global.ahnlab.com/site/login/logout.do',
                dataType: 'json',
                method : 'POST',
                success: function(json) {
                    if (json.isSuccess) {
                        location.reload();
                    } else {
                        alert(json.resultMessage);
                    }
                },
                error: function(x, o, e){
                    alert("Network Error!");
                }
            });
        });
        
        //input box에 숫자만 허용 - ex: numberonly="true" 속성을 붙임
        $(document).on("keyup", "input:text[numberOnly]", function() {
            $(this).val( $(this).val().replace(/[^0-9]/gi,"") );
        });

        //닫기 버튼
        $(".btnClose").click(function(){
            self.close();
        });
    });

    //로그인
    function fnLoginCheck(url){
        if("" != "Y"){
            if(confirm("로그인 후 서비스 이용이 가능한 페이지입니다.\n로그인 페이지로 이동하시겠습니까?")){
                Common.login('/site/login/loginForm.do', url);
                return;
            }else{
                return;
            }
        }
        location.href = url;
    }
    -->
    </script>
</head>
<body>
<div class="wrap">
    <nav id="skipNavi">skip navigation
        <ul>
            <li><a href="#naviMenu">menu</a></li>
            <li><a href="#naviUtill">member</a></li>
            <li><a href="#container">container</a></li>
            <li><a href="#footer">footer menu</a></li>
        </ul>
    </nav>
    <!-- gnb -->
    





























<script type="text/javascript">


    $(document).ready(function() {

        $('.serWrap').mouseover(function(){
             $(this).attr("class","serWrap on");
       });

        $('.serWrap').mouseout(function(){
            $(this).attr("class","serWrap");
      });

    });

    function dqTopSearch() {
            if ($("#topSearchText").val() == "") {
                alert('Please enter search keyword.');
                $("#topSearchText").focus();
                return;
            }

            $("#dqTopSearch").attr("target", "");
            $("#dqTopSearch").attr("action", "../../search/searchResultAll.html");
            $("#dqTopSearch").submit();
        }

 // 입력체크
    function dqTopHandleEnter(event)
    {
        var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;

        if(keyCode == 13)
        {
                dqTopSearch();
            return false;
        }
        else
        {
            return true;
        }
    }
        </script>

    <header class="htop">
        <div class="htopWrap">
            <!-- logo -->
            <p class="logo"><a href="../../main.html"><img src="../../../image/en/common/img_logo.gif" alt="AhnLab"></a></p>
            <!-- logo -->
            <!-- etc menu -->
            <nav id="naviUtill">
                <ul>
                    <li class="locSite"><!-- mouseover, focus 일 경우 li 태그에 on 클래스 추가, 선택되었을 때는 selected 클래스 추가 -->
                        <a href="#" class="link" title="Change Country">GLOBAL</a>
                        <!-- layer -->
                        <div class="lyUtill"><div class="lyWrap">
                            <p><a href="../../../../www.ahnlab.com/kr/site/main.html" target="_blank" rel="nofollow" title="New Window">한국 (한국어)</a></p>
                            <p class="selected"><a href="../../main.html" target="_blank" rel="nofollow" title="New Window">Global (English)</a></p>
                            <p class=""><a href="../../../../apac.ahnlab.com/site/main.html" target="_blank" rel="nofollow" title="New Window">APAC (English)</a></p>
                            <p class=""><a href="../../../../jp.ahnlab.com/site/main.html" target="_blank" rel="nofollow" class="fJapan" title="New Window">日本 (日本語)</a></p>
                            <p class=""><a href="../../../../cn.ahnlab.com/site/main.html" target="_blank" rel="nofollow" class="fChina" title="New Window">中国 (简体中文)</a></p>
                            <p><a href="http://us.ahnlab.com/" target="_blank" rel="nofollow" title="New Window">US (English)</a></p>
                        </div></div>
                        <!-- //layer -->
                    </li>
                    




























                    
                    
                    <li><a href="../../login/loginForm.html" class="link">Log in</a></li>
                    
                    <li><a href="../../login/loginForm6cea.html" class="link">My Account</a></li>
                    <li><a href="../partner/ourPartner.html" class="link">Partner</a></li>
                </ul>
            </nav>
            <!-- //etc menu -->

            <!-- menu -->
            <nav id="naviMenu">
                <ul>
                    <li class="muProd "><!-- mouseover, focus 일 경우 li 태그에 on 클래스 추가, 선택되었을 때는 selected 클래스 추가 -->
                        
                        <a href="../../product/productSubDetail5d8e.html?prodSeq=15231" class="oneLink">Products &amp; Services</a>
                        <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                            
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            
                                <p class="tit"><a href="../../product/productSubDetail5d8e.html?prodSeq=15231">Advanced Threat Defense</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetail5d8e.html?prodSeq=15231">AhnLab MDS</a></li>
                                    
                                    <li><a href="../../product/productSubDetailea32.html?prodSeq=1112">AhnLab MDSE</a></li>
                                    
                                </ul>
                                
                            </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            
                                <p class="tit"><a href="../../product/productSubDetail95eb.html?prodSeq=5805">Endpoint Security</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetail95eb.html?prodSeq=5805">V3 Internet Security</a></li>
                                    
                                    <li><a href="../../product/productSubDetail5bc8.html?prodSeq=1">AhnLab Policy Center</a></li>
                                    
                                    <li><a href="../../product/productSubDetail03e4.html?prodSeq=5738">V3 Net for Windows Server</a></li>
                                    
                                    <li><a href="../../product/productSubDetail3295.html?prodSeq=9008">AhnLab Online Security </a></li>
                                    
                                    <li><a href="../../product/productSubDetail7a8d.html?prodSeq=9002">AhnLab TS Engine</a></li>
                                    
                                    <li><a href="../../product/productSubDetail2616.html?prodSeq=11227">AhnLab Mobile Smart Defense</a></li>
                                    
                                    <li><a href="../../product/productSubDetail656f.html?prodSeq=11325">V3 Mobile Security </a></li>
                                    
                                    <li><a href="../../product/productSubDetaile828.html?prodSeq=10003">AhnLab EPS</a></li>
                                    
                                </ul>
                                
                            </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            
                                <p class="tit"><a href="../../product/productSubDetaila6a5.html?prodSeq=10082">Network Security</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetaila6a5.html?prodSeq=10082">AhnLab DPS</a></li>
                                    
                                    <li><a href="../../product/productSubDetail7ac7.html?prodSeq=5690">AhnLab TrusGuard</a></li>
                                    
                                </ul>
                                
                            </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            
                                <p class="tit"><a href="../../product/productSubDetail3c3b.html?prodSeq=1000">Service</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetail3c3b.html?prodSeq=1000">Managed Security Services</a></li>
                                    
                                    <li><a href="../../product/productSubDetail6f51.html?prodSeq=1113">IT Security Consulting Services</a></li>
                                    
                                    <li><a href="../../product/productSubDetail79c9.html?prodSeq=1114">Forensic Services</a></li>
                                    
                                </ul>
                                
                            </div>
                            
                            
                        </div></div></div>
                        
                    </li>
                    
                    
                     
                        <li class="muDown ">
                     
                     
                     
                     
                     <!-- 1depth -->
                     
                     
                     
                     
                     
                     <a href="../../download/free/freeTrial.html" class="oneLink">Downloads</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/free/freeTrial.html">Free Trial</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/engine/engineList.html">Engine/Patch File Downloads</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/removal/removalList.html">Removal Tools</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/documents/documentsList.html">Document Downloads</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
                         </div>
                     
                        
                            <div class="fr">
                                <div class="pdList">
                                    




























                                    <a href="../../product/productSubDetail5d8e.html?prodSeq=15231">
                                        <img src="../../../image/en/common/img_gnb_product.jpg" class="photo" alt="">
                                        <p class="fcBlue">AhnLab MDS</p>
                                        <p>A Complete Defense Strategy against Next-Generation Threats.</p>
                                    </a>
                                </div>
                            </div>
                        
                        
                        
                        
                        </div></div></div>
                        <!-- //menu layer -->
                        </li>
                    
                     
                     
                        <li class="muSup ">
                     
                     
                     
                     <!-- 1depth -->
                     
                     
                     
                     
                     
                     <a href="../supportMain.html" class="oneLink">Support</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../html/supportProgram.html">Technical Support</a></p>
                                
                                
                                
                                

                                
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../html/supportProgram.html">Support Program</a></li>
                                  
                                  
                                  </ul>
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../html/ahnReport.html">AhnReport</a></li>
                                  
                                  
                                  </ul>
                                  
                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../virusreport/virusReport.html">Submit <br />Suspicious Files</a></p>
                                
                                
                                
                                

                                
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../../login/loginFormac54.html?tab=1">If you are reporting from the PC with the problems</a></li>
                                  
                                  
                                  </ul>
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../../login/loginFormdb20.html?tab=2">If you "cannot" report from <br />the PC with the problems</a></li>
                                  
                                  
                                  </ul>
                                  
                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../productfaq/productFaqList.html">Product FAQ</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../virusfaq/virusFaqList.html">Virus FAQ</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                <p class="tit"><a href="../../login/loginForm1222.html">Q&A</a></p>
                                
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../notice/noticeList.html">Notice</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
                         </div>
                     
                        
                        
                            <div class="fr">
                                <dl>
                                    <dt>AhnLab Global Partner Program</dt>
                                    <dd class="part">
                                        <p>Expand Your Business through AhnLab Partner Program.</p>
                                        <a href="../partner/ourPartner.html" class="linkArr">Read More</a>
                                    </dd>
                                </dl>
                            </div>
                        
                        
                        
                        </div></div></div>
                        <!-- //menu layer -->
                        </li>
                    
                     
                     
                     
                        <li class="muSecur ">
                     
                     
                     <!-- 1depth -->
                     
                     
                     
                     
                     
                     <a href="../../securitycenter/securitycenterMain.html" class="oneLink">Security Center</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/html/aboutASEC.html">About ASEC</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/asec/asecReportList.html">ASEC Report</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/html/techReport.html">Tech Report</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/securityinsight/securityInsightList.html">Security Insight</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/viruscenter/virusList.html">Virus Center</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/html/securityRiskLevel.html">Security Risk Level</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
                         </div>
                     
                        
                        
                        
                            <div class="fr">
                                <a href="http://www.gartner.com/technology/media-products/pdfindex.jsp?g=ahnlab-1-2JFY8YE" target="_blank" class="bann mds" title="View in PDF">
                                    <p class="fcBlue">AhnLab V3 Mobile, A Smart Choice for a Mobile-Only Era</p>
                                    <p>AhnLab Newsletter<br>featuring Gartner research</p>
                                </a>
                            </div>
                        
                        
                        </div></div></div>
                        <!-- //menu layer -->
                        </li>
                    
                     
                     
                     
                     
                        <li class="muAL ">
                     
                     <!-- 1depth -->
                     
                     
                     
                     
                     
                     <a href="../../about/aboutAhnlab.html" class="oneLink">About AhnLab</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/aboutAhnlab.html">About Us</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/securityPortfolio.html">AhnLab Solutions Portfolio</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/pressRoomList.html">Press Releases</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/eventList.html">Event</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/securityStrategy.html">Technology</a></p>
                                
                                
                                
                                

                                
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../../about/securityStrategy.html">Security Strategy</a></li>
                                  
                                  
                                  </ul>
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../../about/coreTechnology.html">Core Technology</a></li>
                                  
                                  
                                  </ul>
                                  
                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/certificates.html">Certificates</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                <p class="tit"><a href="../../etc/contactUs.html">Contact Us</a></p>
                                
                                
                                
                                
                                

                                
                                 </div>
                            
                         </div>
                     
                        
                        
                        
                        
                            <div class="fr">
                                <dl>
                                    <dt>AhnLab Global Partner Program</dt>
                                    <dd class="part">
                                        <p>Expand Your Business through AhnLab Partner Program.</p>
                                        <a href="../partner/ourPartner.html" class="linkArr">Read More</a>
                                    </dd>
                                </dl>
                            </div>
                        
                        </div></div></div>
                        <!-- //menu layer -->
                        </li>
                    
                </ul>
            </nav>
            <!-- //menu -->

            
            




























            <form method="post" name="dqTopSearch" id="dqTopSearch">
            <!-- 상단 검색 -->
            <div class="topSerch">
                <div class="serWrap"><!-- mouseover, focus 일 경우 on 클래스 추가 -->
                    <input type="text" name="searchText" id="topSearchText" title="Enter Search Keyword" value="" onkeypress="return dqTopHandleEnter(event);">
                    <a href="#" onclick="javascript:dqTopSearch2(); return false;"><span class="blind">Search</span></a>
                </div>
            </div>
            <!-- //상단 검색 -->
            </form>
<script type="text/javascript"> 
function dqTopSearch2() {
    if ($("#topSearchText").val() == "") {
    	alert('Please enter search keyword.');
        $("#topSearchText").focus();
        return;
    }

    $("#dqTopSearch").attr("target", "");
    $("#dqTopSearch").attr("action", "../../search/searchResultAll.html");
    $("#dqTopSearch").submit();
}
</script>
        </div>
    </header>


    <!-- //gnb -->
    <div id="container">
    
    
    

























































    
	    <div class="errWrap">
		    <p class="tit">Cannot open the requested webpage.</p>
		    <p>You have accessed via invalid path or this is an invalid website address.<p>
		    <p>Sorry for the inconvinience.</p>
		            
		    <!-- button -->
		    <div class="btnCenter errorPageBtnDiv">
		        <a href="#" onclick="return goBack();" class="btnCm"><span class="btnTxt">Back</span></a>
		        <a href="../../main.html" class="btnCmDb darkBlue" title="AhnLab Move to the main page"><span class="btnTxt">Move to the main page</span></a>
		    </div>
		    <!-- //button -->
		</div>
		<script type="text/javascript">
		<!--
		function goBack(){
	        history.go(-1);
	        return false;
	    }
		//-->
		</script>

    </div>
    <!-- footer -->
    




























    <footer id="footer">
        <div class="ftWrap">
            <ul class="ftMenu">
                <li><a href="../../etc/privacyPolicy.html">Privacy &amp; Security</a></li>
                
                <li><a href="../../etc/termsOfUse.html">Terms of Use</a></li>
                <li><a href="../../etc/contactUs.html">Contact Us</a></li>
                <li><a href="../../etc/sitemap.html">Sitemap</a></li>
            </ul>

            <div class="locSiteWrap globalSiteCombo">
                <p class="locSite"><a href="#" class="comboLink2" title="Change Country">GLOBAL</a></p>
                <!-- layer -->
                <div class="lyUtill" id=""><div class="lyWrap">
                    <p><a href="../../../../www.ahnlab.com/kr/site/main.html" target="_blank" rel="nofollow" class="fKr" title="New Window">한국 (한국어)</a></p>
                    <p class="selected"><a href="../../main.html" target="_blank" rel="nofollow" title="New Window">Global (English)</a></p>
                    <p class=""><a href="../../../../apac.ahnlab.com/site/main.html" target="_blank" rel="nofollow" title="New Window">APAC (English)</a></p>
                    <p class=""><a href="../../../../jp.ahnlab.com/site/main.html" target="_blank" rel="nofollow" class="fJapan" title="New Window">日本 (日本語)</a></p>
                    <p class=""><a href="../../../../cn.ahnlab.com/site/main.html" target="_blank" rel="nofollow" class="fChina" title="New Window">中国 (简体中文)</a></p>
                    <p><a href="http://us.ahnlab.com/" target="_blank" rel="nofollow" title="New Window">US (English)</a></p>
                </div></div>
                <!-- //layer -->
            </div>

            <p class="copyright">&copy; AhnLab, Inc. All rights reserved.</p>
        </div>
    </footer>
    
<script type="text/javascript">
$(document).ready(function() {
	/*
	$(".globalSiteCombo").focusin(function(){
		$(".globalSiteCombo").addClass("on");
		$(".footer .locSite").addClass("on");
	});
	$(".globalSiteCombo").focusout(function(){
		$(".globalSiteCombo").removeClass("on");
		$(".footer .locSite").removeClass("on");
	});
	*/
});
function getCookie( cname ) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0)==' ') c = c.substring(1);
       if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}
function closeWin(winName, expiredays) {
   if($("input:checkbox[id='chkToday']").is(":checked") == true){
      setCookie( winName, "done" , expiredays);
   }
   $("#mainLayer").hide();
}

function setCookie( name, value, expiredays ) {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}


</script>

	<script>
	   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	   })(window,document,'script','../../../../www.google-analytics.com/analytics.js','ga');

	   ga('create', 'UA-17204763-7', 'auto');
	   ga('send', 'pageview');

	 </script>


































<script language='javascript'>


var _mk   = '';
var _od   = 0 ;
var _gd   = '';
var _ud1 = '' ;
var _skey = '' ;

var cur_url = location.href;
var url_index = cur_url.indexOf("event");

if(url_index > -1){
    _skey = cur_url;
}

</script>
<!-- AceCounter END --> 



	<!-- AceCounter Log Gathering Script V.71.2010011401 -->
	<script language='javascript'>
		if(typeof _GUL == 'undefined'){
			var _GUL = 'acounter.ahnlab.com';var _GPT='80'; var _SGPT='443';var _AIMG = new Image(); var _bn=navigator.appName; var _PR = location.protocol=="https:"?"https://"+_GUL+":"+_SGPT:"http://"+_GUL+":"+_GPT;if( _bn.indexOf("Netscape") > -1 || _bn=="Mozilla"){ setTimeout("_AIMG.src = _PR+'https://global.ahnlab.com/?cookie';",1); } else{ _AIMG.src = _PR+'/?cookie'; };
			document.writeln("<scr"+"ipt language='javascript' src='/js/lib/acecounter/en/acecounter_V70.js'></scr"+"ipt>");
		}
	</script>
	<noscript><img src='http://acounter.ahnlab.com/?uid=6&amp;je=n&amp;' border=0 width=0 height=0></noscript>
	<!-- AceCounter Log Gathering Script End -->









    <!-- //footer -->
</div> 
</body>


<!-- Mirrored from global.ahnlab.com/site/support/assistance/idpwAssistanceB.do by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 26 Jan 2016 13:22:14 GMT -->
</html>
