



































<!DOCTYPE html>
<html lang="zh-cn">

<!-- Mirrored from cn.ahnlab.com/site/support/assistance/idpwAssistance.do by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 26 Jan 2016 13:11:55 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <meta name="viewport" content="width=1280" />
    




























    
    
    
        
    
    
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <!-- SEO -->
    <meta name="Keywords" content="" />
    <meta name="Description" content="" />
	<!-- 페이스북 -->
	<meta property="og:title"           content="查找密码 | AhnLab"/>
	<meta property="og:description"     content=""/>

	<!-- 트위터 -->
	<meta name="twitter:title"          content="查找密码 | AhnLab">
	<meta name="twitter:description"    content="">

    <!-- SEO -->
    <title>查找密码 | AhnLab</title>

    <link href="../../../css/cn/ahnlab.css" rel="stylesheet" type="text/css" />
    
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
                instance.attr("src", "//cn.ahnlab.com/image/cn/common/img_no_"+ w +"_"+ h +".gif");
            }).attr("src", instance.attr("src"));
        });
        
        //dim처리된 링크에 대체 택스트 달기
        $("a").each(function (){
	        if($(this).hasClass("dis")){
	            $(this).attr("title", "不提供该服务。");
	        }
	    });
	        
        //선택된 탭에 대체 택스트 달기
        $("li.on > a").each(function (){
            var text = $(this).html();
            $(this).html("<span class=\"blind\">当前页面</span>" + text);
        });
        
        //a링크 #처리
        $('a[href = "#"]').click(function(){
            return false;
        });

        //로그아웃
        $(".logoutBtn").click(function (){
            $.ajax({
                url: 'https://cn.ahnlab.com/site/login/logout.do',
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
                alert('请输入搜索关键词。');
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
            <p class="logo"><a href="../../main.html"><img src="../../../image/cn/common/img_logo.gif" alt="AhnLab"></a></p>
            <!-- logo -->
            <!-- etc menu -->
            <nav id="naviUtill">
                <ul>
                    <li class="locSite"><!-- mouseover, focus 일 경우 li 태그에 on 클래스 추가, 선택되었을 때는 selected 클래스 추가 -->
                        <a href="#" class="link" title="Change Country">中国</a>
                        <!-- layer -->
                        <div class="lyUtill"><div class="lyWrap">
                            <p><a href="../../../../www.ahnlab.com/kr/site/main.html" target="_blank" rel="nofollow" title="在新窗口打开">한국 (한국어)</a></p>
                            <p class=""><a href="../../../../global.ahnlab.com/site/main.html" target="_blank" rel="nofollow" title="在新窗口打开">Global (English)</a></p>
                            <p class=""><a href="../../../../apac.ahnlab.com/site/main.html" target="_blank" rel="nofollow" title="在新窗口打开">APAC (English)</a></p>
                            <p class=""><a href="../../../../jp.ahnlab.com/site/main.html" target="_blank" rel="nofollow" class="fJapan" title="在新窗口打开">日本 (日本語)</a></p>
                            <p class="selected"><a href="../../main.html" target="_blank" rel="nofollow" class="fChina" title="在新窗口打开">中国 (简体中文)</a></p>
                            <p><a href="http://us.ahnlab.com/" target="_blank" rel="nofollow" title="在新窗口打开">US (English)</a></p>
                        </div></div>
                        <!-- //layer -->
                    </li>
                    




























                    
                    
                    <li><a href="../../login/loginForm.do" class="link">登录</a></li>
                    
                    <li><a href="../../mypage/product/myProductList.do" class="link">我的页面</a></li>
                    <li><a href="../partner/ourPartner.html" class="link">合作伙伴</a></li>
                </ul>
            </nav>
            <!-- //etc menu -->

            <!-- menu -->
            <nav id="naviMenu">
                <ul>
                    <li class="muProd "><!-- mouseover, focus 일 경우 li 태그에 on 클래스 추가, 선택되었을 때는 selected 클래스 추가 -->
                        
                        <a href="../../product/productSubDetaildb8a.html?prodSeq=30005" class="oneLink">产品与服务</a>
                        <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                            
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            
                                <p class="tit"><a href="../../product/productSubDetaildb8a.html?prodSeq=30005">威胁检测</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetaildb8a.html?prodSeq=30005">AhnLab MDS</a></li>
                                    
                                </ul>
                                
                            </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            
                                <p class="tit"><a href="../../product/productSubDetail8169.html?prodSeq=221">端点安全</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetail8169.html?prodSeq=221">V3 Internet Security 8.0</a></li>
                                    
                                    <li><a href="../../product/productSubDetail7940.html?prodSeq=30007">V3 Internet Security 7.0 Platinum Enterprise</a></li>
                                    
                                    <li><a href="../../product/productSubDetail07ae.html?prodSeq=504">AhnLab Policy Center 4.0</a></li>
                                    
                                    <li><a href="../../product/productSubDetaila102.html?prodSeq=30003">引擎开发工具包</a></li>
                                    
                                    <li><a href="../../product/productSubDetail3cab.html?prodSeq=30004">防外挂产品</a></li>
                                    
                                </ul>
                                
                            </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            
                                <p class="tit"><a href="../../product/productSubDetaila14c.html?prodSeq=30001">产业安全</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetaila14c.html?prodSeq=30001">AhnLab EPS</a></li>
                                    
                                </ul>
                                
                            </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            
                                <p class="tit"><a href="../../product/productSubDetailcd49.html?prodSeq=30006">网络安全</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetailcd49.html?prodSeq=30006">AhnLab TrusGuard UTM</a></li>
                                    
                                </ul>
                                
                            </div>
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            
                                <p class="tit"><a href="../../product/productSubDetail5c0e.html?prodSeq=30008">安全咨询</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetail5c0e.html?prodSeq=30008">安全咨询</a></li>
                                    
                                </ul>
                                
                            </div>
                            
                            
                        </div></div></div>
                        
                    </li>
                    
                    
                     
                        <li class="muDown ">
                     
                     
                     
                     
                     <!-- 1depth -->
                     
                     
                     
                     
                     
                     <a href="../../download/free/freeTrial.html" class="oneLink">下载中心</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/free/freeTrial.html">免费试用版</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/engine/engineList.html">引擎/补丁文件</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/renewal/renewalList.html">升级续费</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/removal/removalList.html">病毒专杀工具</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/documents/documentsList.html">文档中心</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
                         </div>
                     
                        
                            <div class="fr">
                                <div class="pdList">
                                    




























                                    <a href="../../product/productSubDetaildb8a.html?prodSeq=30005">
                                        <img src="../../../image/cn/common/img_gnb_product.jpg" class="photo" alt="">
                                        <p class="fcBlue">AhnLab MDS</p>
                                        <p>一个完整的防</br>御策略响应下</br>一代安全威胁</p>
                                    </a>
                                </div>
                            </div>
                        
                        
                        
                        
                        </div></div></div>
                        <!-- //menu layer -->
                        </li>
                    
                     
                     
                        <li class="muSup ">
                     
                     
                     
                     <!-- 1depth -->
                     
                     
                     
                     
                     
                     <a href="../html/supportProgram.html" class="oneLink">客户支持</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../html/supportProgram.html">技术支持</a></p>
                                
                                
                                
                                

                                
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../html/supportProgram.html">技术支持</a></li>
                                  
                                  
                                  </ul>
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../html/ahnReport.html">AhnReport</a></li>
                                  
                                  
                                  </ul>
                                  
                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../productfaq/productFaqList.html">常见问题解答(FAQ)</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                <p class="tit"><a href="../../login/loginForm259a.html">在线问答(Q&A)</a></p>
                                
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                <p class="tit"><a href="../prodregit/prodregitArticle.html">产品注册</a></p>
                                
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../notice/noticeList.html">公告</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
                         </div>
                     
                        
                        
                            <div class="fr">
                                <dl>
                                    <dt>AhnLab 全球合作伙伴计划</dt>
                                    <dd class="part">
                                        <p>通过 AhnLab 合作伙伴计划<br />拓展您的业务</p>
                                        <a href="../partner/ourPartner.html" class="linkArr">查看全文</a>
                                    </dd>
                                </dl>
                            </div>
                        
                        
                        
                        </div></div></div>
                        <!-- //menu layer -->
                        </li>
                    
                     
                     
                     
                        <li class="muSecur ">
                     
                     
                     <!-- 1depth -->
                     
                     
                     
                     
                     
                     <a href="../../securitycenter/html/aboutASEC.html" class="oneLink">安全中心</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/html/aboutASEC.html">关于ASEC</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/asecCn/asecReportList.html">ASEC Report</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/asec/asecReportList.html">AhnLab安全月刊</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/html/techReport.html">Tech Report</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/securityinsight/securityInsightList.html">安全透视</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/viruscenter/virusList.html">病毒中心</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/html/securityRiskLevel.html">安全风险等级</a></p>
                                
                                
                                
                                

                                
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
                     
                     
                     
                     
                     
                     <a href="../../about/aboutAhnlab.html" class="oneLink">关于AhnLab</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/aboutAhnlab.html">公司介绍</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/securityPortfolio.html">事业领域</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/pressRoomList.html">新闻发布室</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/eventList.html">活动</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap clear">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/certificates.html">认证及奖项</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                            
	                                <div class="naviWrap ">
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                <p class="tit"><a href="../../etc/contactUs.html">联系我们</a></p>
                                
                                
                                
                                
                                

                                
                                 </div>
                            
                         </div>
                     
                        
                        
                        
                        
                            <div class="fr">
                                <dl>
                                    <dt>AhnLab 全球合作伙伴计划</dt>
                                    <dd class="part">
                                        <p>通过 AhnLab 合作伙伴计划<br />拓展您的业务</p>
                                        <a href="../partner/ourPartner.html" class="linkArr">查看全文</a>
                                    </dd>
                                </dl>
                            </div>
                        
                        </div></div></div>
                        <!-- //menu layer -->
                        </li>
                    
                </ul>
            </nav>
            <!-- //menu -->

            
            




























        </div>
    </header>


    <!-- //gnb -->
    <div id="container">
    
    
    




























        <div class="topTitWrap">
            <h2 class="topTit">查找密码</h2>
        </div>
        <form method="post" name="assistanceForm" id="assistanceForm">
        <input type="hidden" name="type"    id="type" value="EMAIL"/>
        <div class="contents">
            <div class="tabComm">
                <ul>
                    <li class="on"><a href="#" class="emialBtn tabType1">利用电子邮件查找密码</a></li>
                    <li class=""><a href="#" class="serialBtn tabType2">利用产品编号查找密码</a></li>
                </ul>
            </div>
            <h1 class="blind">利用电子邮件查找密码</h1>
            <div class="boxTBlue mt35">
                <div class="formWrap">
                    <ul>
                        <li class="emialLi" style="display:;">
                            <label for="custId">电子邮件地址</label>
                            <div class="formInput">
                                <input type="text" id="custId" name="custId" class="txtBox" value="" style="width:254px;" onkeypress="javascript:if(event.keyCode == 13){ chkIdpwAssistance(); return false;}">
                            </div>
                        </li>
                        
                        <li class="serialLi" style="display:none;">
                            <label for="orgLicense">产品编号</label>
                            <div class="formInput">
                                <input type="text" id="orgLicense" name="orgLicense" maxlength="17" class="txtBox" value="" style="width:254px;" onkeypress="javascript:if(event.keyCode == 13){ chkIdpwAssistance(); return false;}">
                            </div>
                        </li>
                        
                        <li>
                            <label for="custName">姓名</label>
                            <div class="formInput">
                                <input type="text" id="custName" name="custName" class="txtBox" value="" style="width:254px;" onkeypress="javascript:if(event.keyCode == 13){ chkIdpwAssistance(); return false;}">
                            </div>
                        </li>
                        
                    </ul>

                    <!-- 이메일 이름이 둘다 틀릴 경우 -->
                    <div class="wrong msgNoMember" style="display:none;">
                        <p>请输入正确的电子邮件地址和姓名！</p>
                    </div>
                    
                    <!-- 이름 안 적을 경우 -->
                    <div class="wrong msgWrong" style="display:none;">
                        <p>请输入正确的序列号和姓名！</p>
                    </div>
                    <div class="btnCenter">
                        <a href="#" class="btnCmDb submitBtn">确定</a>
                    </div>
                </div>
            </div>
        </div>
        </form>
    <script type="text/javascript">
    <!--
    $(document).ready(function() {
        $("#custId").focus();
        
        $(".emialBtn, .serialBtn").click(function (){
        	$(".emialBtn").parent().removeClass("on");
            $(".serialBtn").parent().removeClass("on");
            $(this).parent().addClass("on");
            
            $(".msgNoMember").hide();
            $(".msgWrong").hide();
            
            if($(this).hasClass("emialBtn")){
	            $(".emialLi").show();
	            $(".serialLi").hide();
	            $("#type").val("EMAIL");
	            $("#custId").focus();
            }else{
	            $(".emialLi").hide();
	            $(".serialLi").show();
	            $("#type").val("SERIAL");
	            $("#orgLicense").focus();
            }
        });
        
        $(".submitBtn").click(function (){
        	chkIdpwAssistance();
        });
    });
    
    var projectLocale = "cn";
    
    function chkIdpwAssistance() {

        if($("#type").val() == "EMAIL" && !Common.isValue($("#custId").val())) {
            alert("请输入您的电子邮件地址。");
            $("#custId").focus();
            return;
        }
        
        if($("#type").val() == "EMAIL" && !Check.email($("#custId").val())) {
            alert("请输入正确的电子邮件地址形式。");
            $("#custId").focus();
            return;
        }

        
        if($("#type").val() == "SERIAL" && !Common.isValue($("#orgLicense").val())) {
            alert("请输入您购买的产品编号。");
            $("#orgLicense").focus();
            return;
        }

        if(!Common.isValue($("#custName").val())) {
            alert("请输入姓名。");
            $("#custName").focus();
            return;
        }
        if("cn" != "cn" && "cn" != "jp" ){
	        if(!Common.isValue($("#lastName").val())) {
	            alert("Please enter your last name.");
	            $("#lastName").focus();
	            return;
	        }
        }
        
        $.ajax({
            url: 'https://cn.ahnlab.com/site/support/assistance/idpwAssistanceCheck.do',
            dataType: 'json',
            method: 'POST',
            data: $("#assistanceForm").serialize(),
            success: function(json) {
                if (json.isSuccess) {
                	
                	if(json.resultData == "success"){
                        $(".msgWrong").hide();
                        $(".msgNoMember").hide();
                        
	                	$("#assistanceForm").attr("action","idpwAssistanceB.html");
	                    $("#assistanceForm").attr("target", "_self");
	                    $("#assistanceForm").submit();
                    }else if(json.resultData == "no_member"){
                        $(".msgWrong").hide();
                        $(".msgNoMember").show();
                    }else{
                        $(".msgNoMember").hide();
                        $(".msgWrong").show();
                    }
                } else {
                    alert(json.resultMessage);
                }
            },
            error: function(x, o, e){
                alert("Network Error!");
            }
        });
    }
    -->
    </script>
    </div>
    <!-- footer -->
    




























    <footer id="footer">
        <div class="ftWrap">
            <ul class="ftMenu">
                <li><a href="../../etc/privacyPolicy.html">个人信息保护策略</a></li>
                
                <li><a href="../../etc/termsOfUse.html">法律声明</a></li>
                <li><a href="../../etc/contactUs.html">联系我们</a></li>
                <li><a href="../../etc/sitemap.html">网站地图</a></li>
            </ul>

            <div class="locSiteWrap globalSiteCombo">
                <p class="locSite"><a href="#" class="comboLink2" title="Change Country">中国</a></p>
                <!-- layer -->
                <div class="lyUtill" id=""><div class="lyWrap">
                    <p><a href="../../../../www.ahnlab.com/kr/site/main.html" target="_blank" rel="nofollow" class="fKr" title="在新窗口打开">한국 (한국어)</a></p>
                    <p class=""><a href="../../../../global.ahnlab.com/site/main.html" target="_blank" rel="nofollow" title="在新窗口打开">Global (English)</a></p>
                    <p class=""><a href="../../../../apac.ahnlab.com/site/main.html" target="_blank" rel="nofollow" title="在新窗口打开">APAC (English)</a></p>
                    <p class=""><a href="../../../../jp.ahnlab.com/site/main.html" target="_blank" rel="nofollow" class="fJapan" title="在新窗口打开">日本 (日本語)</a></p>
                    <p class="selected"><a href="../../main.html" target="_blank" rel="nofollow" class="fChina" title="在新窗口打开">中国 (简体中文)</a></p>
                    <p><a href="http://us.ahnlab.com/" target="_blank" rel="nofollow" title="在新窗口打开">US (English)</a></p>
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

	   ga('create', 'UA-17204763-12', 'auto');
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
		var _GUL = 'acounter.ahnlab.com';var _GPT='80'; var _SGPT='443';var _AIMG = new Image(); var _bn=navigator.appName; var _PR = location.protocol=="https:"?"https://"+_GUL+":"+_SGPT:"http://"+_GUL+":"+_GPT;if( _bn.indexOf("Netscape") > -1 || _bn=="Mozilla"){ setTimeout("_AIMG.src = _PR+'https://cn.ahnlab.com/?cookie';",1); } else{ _AIMG.src = _PR+'/?cookie'; };
		document.writeln("<scr"+"ipt language='javascript' src='/js/lib/acecounter/cn/acecounter_V70.js'></scr"+"ipt>");
	}
	</script>
	<noscript><img src='http://acounter.ahnlab.com/?uid=10&amp;je=n&amp;' border=0 width=0 height=0></noscript>
<!-- AceCounter Log Gathering Script End -->




    <!-- //footer -->
</div> 
</body>


<!-- Mirrored from cn.ahnlab.com/site/support/assistance/idpwAssistance.do by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 26 Jan 2016 13:11:57 GMT -->
</html>
