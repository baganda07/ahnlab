



































<!DOCTYPE html>
<html lang="ja">

<!-- Mirrored from jp.ahnlab.com/site/support/qna/qnaAddForm2.do by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 26 Jan 2016 12:34:07 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <meta name="viewport" content="width=1280" />
    




























    
        
    
    
        
    
    
        
    
    
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <!-- SEO -->
    <meta name="Keywords" content="ウィルス対策,マルウェア対策,情報セキュリティ対策,標的型攻撃対策,アンラボ,AhnLab," />
    <meta name="Description" content="アンラボ製品やアンラボからのお知らせを掲載しています。" />
	<!-- 페이스북 -->
	<meta property="og:title"           content="Q&amp;A | AhnLab"/>
	<meta property="og:description"     content="アンラボ製品やアンラボからのお知らせを掲載しています。"/>

	<!-- 트위터 -->
	<meta name="twitter:title"          content="Q&amp;A | AhnLab">
	<meta name="twitter:description"    content="アンラボ製品やアンラボからのお知らせを掲載しています。">

    <!-- SEO -->
    <title>Q&amp;A | AhnLab</title>

    <link href="../../../css/jp/ahnlab.css" rel="stylesheet" type="text/css" />
    
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
                instance.attr("src", "//jp.ahnlab.com/image/jp/common/img_no_"+ w +"_"+ h +".gif");
            }).attr("src", instance.attr("src"));
        });
        
        //dim처리된 링크에 대체 택스트 달기
        $("a").each(function (){
	        if($(this).hasClass("dis")){
	            $(this).attr("title", "このメニューはご利用いただけません");
	        }
	    });
	        
        //선택된 탭에 대체 택스트 달기
        $("li.on > a").each(function (){
            var text = $(this).html();
            $(this).html("<span class=\"blind\">現在のページ</span>" + text);
        });
        
        //a링크 #처리
        $('a[href = "#"]').click(function(){
            return false;
        });

        //로그아웃
        $(".logoutBtn").click(function (){
            $.ajax({
                url: 'https://jp.ahnlab.com/site/login/logout.do',
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
                alert('検索キーワード入力。');
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
            <p class="logo"><a href="../../main.html"><img src="../../../image/jp/common/img_logo.gif" alt="AhnLab"></a></p>
            <!-- logo -->
            <!-- etc menu -->
            <nav id="naviUtill">
                <ul>
                    <li class="locSite"><!-- mouseover, focus 일 경우 li 태그에 on 클래스 추가, 선택되었을 때는 selected 클래스 추가 -->
                        <a href="#" class="link" title="Change Country">日本</a>
                        <!-- layer -->
                        <div class="lyUtill"><div class="lyWrap">
                            <p><a href="../../../../www.ahnlab.com/kr/site/main.html" target="_blank" rel="nofollow" title="別ウィンドウで開く">한국 (한국어)</a></p>
                            <p class=""><a href="../../../../global.ahnlab.com/site/main.html" target="_blank" rel="nofollow" title="別ウィンドウで開く">Global (English)</a></p>
                            <p class=""><a href="../../../../apac.ahnlab.com/site/main.html" target="_blank" rel="nofollow" title="別ウィンドウで開く">APAC (English)</a></p>
                            <p class="selected"><a href="../../main.html" target="_blank" rel="nofollow" class="fJapan" title="別ウィンドウで開く">日本 (日本語)</a></p>
                            <p class=""><a href="../../../../cn.ahnlab.com/site/main.html" target="_blank" rel="nofollow" class="fChina" title="別ウィンドウで開く">中国 (简体中文)</a></p>
                            <p><a href="http://us.ahnlab.com/" target="_blank" rel="nofollow" title="別ウィンドウで開く">US (English)</a></p>
                        </div></div>
                        <!-- //layer -->
                    </li>
                    




























                    
                    <li><a href="../partner/ourPartner.html" class="link">パートナー</a></li>
                </ul>
            </nav>
            <!-- //etc menu -->

            <!-- menu -->
            <nav id="naviMenu">
                <ul>
                    <li class="muProd "><!-- mouseover, focus 일 경우 li 태그에 on 클래스 추가, 선택되었을 때는 selected 클래스 추가 -->
                        
                        <a href="../../product/productSubDetail03ed.html?prodSeq=40006" class="oneLink">製品とサービス</a>
                        <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                            
                            
	                            
	                                 <div class="naviWrap clear">
	                            
	                            
                                <p class="tit"><a href="../../product/productSubDetail03ed.html?prodSeq=40006">標的型攻撃対策ソリューション</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetail03ed.html?prodSeq=40006">AhnLab MDS</a></li>
                                    
                                </ul>
                                
                            </div>
                            
	                            
	                                 <div class="naviWrap ">
	                            
	                            
                                <p class="tit"><a href="../../product/productSubDetaild881.html?prodSeq=11324">モバイルセキュリティ</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetaild881.html?prodSeq=11324">AhnLab V3 Mobile 3.0</a></li>
                                    
                                    <li><a href="../../product/productSubDetail3b0a.html?prodSeq=40001">AhnLab V3 Mobile 2.0</a></li>
                                    
                                </ul>
                                
                            </div>
                            
	                            
	                                 <div class="naviWrap ">
	                            
	                            
                                <p class="tit"><a href="../../product/productSubDetail5076.html?prodSeq=40004">ネットワークセキュリティ</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetail5076.html?prodSeq=40004">AhnLab TrusGuard</a></li>
                                    
                                </ul>
                                
                            </div>
                            
	                            
	                                 <div class="naviWrap clear">
	                            
	                            
                                <p class="tit"><a href="../../product/productSubDetail4ac1.html?prodSeq=40003">トランザクションセキュリティ</a></p>
                                
                                <ul class="thrList">
                                    
                                    <li><a href="../../product/productSubDetail4ac1.html?prodSeq=40003">AhnLab Online Security</a></li>
                                    
                                </ul>
                                
                            </div>
                            
	                            
	                                 <div class="naviWrap ">
	                            
	                            
                                <p class="tit"><a href="../../product/finishLineUp.html">サポート終了（予定）ラインアップ</a></p>
                                
                            </div>
                            
                            
                        </div></div></div>
                        
                    </li>
                    
                    
                     
                        <li class="muDown ">
                     
                     
                     
                     
                     <!-- 1depth -->
                     
                     
                     
                     
                     
                     <a href="../../download/free/freeTrial.html" class="oneLink">ダウンロード</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                                <div class="naviWrap clear">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/free/freeTrial.html">製品ダウンロード</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/engine/engineList.html">エンジン・パッチダウンロード</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/engine/engineUpdateList.html">エンジンアップデート情報</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap clear">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/removal/removalList.html">専用ワクチン</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../download/documents/documentsList.html">マニュアルとカタログ</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
                         </div>
                     
                        
                            <div class="fr">
                                <div class="pdList">
                                    




























                                    <a href="../../product/productSubDetail03ed.html?prodSeq=40006">
                                        <img src="../../../image/jp/common/img_gnb_product.jpg" class="photo" alt="" />
                                        <p class="fcBlue">AhnLab MDS</p>
                                        <p>標的型攻撃を検知してネットワーク / エンドポイントレベルで対応</p>
                                    </a>
                                </div>
                            </div>
                        
                        
                        
                        
                        </div></div></div>
                        <!-- //menu layer -->
                        </li>
                    
                     
                     
                        <li class="muSup selected">
                     
                     
                     
                     <!-- 1depth -->
                     
                     
                     
                     
                     
                     <a href="../html/supportProgram.html" class="oneLink">サポート</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                                <div class="naviWrap clear">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../html/supportProgram.html">テクニカルサポート</a></p>
                                
                                
                                
                                

                                
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../html/supportProgram.html">Support Program</a></li>
                                  
                                  
                                  </ul>
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../html/ahnReport.html">アンレポートについて</a></li>
                                  
                                  
                                  </ul>
                                  
                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../productfaq/productFaqList.html">よくある質問</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../virusfaq/virusFaqList.html">ウイルス FAQ</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap clear">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                <p class="tit"><a href="qnaAddForm2.do">カスタマーサポート</a></p>
                                
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../html/lifecycle.html">製品ライフサイクル</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                <p class="tit"><a href="../phone/phoneChangeForm.html">機種変更申請</a></p>
                                
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap clear">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../notice/noticeList.html">サポートに関するお知らせ</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
                         </div>
                     
                        
                        
                            <div class="fr">
                                <dl>
                                    <dt>AhnLab グローバルパートナープログラム</dt>
                                    <dd class="part">
                                        <p>アンラボのパートナープログラムは、全世界のパートナー様の事業拡大を<br/>実現します。</p>
                                        <a href="../partner/ourPartner.html" class="linkArr">詳細を見る</a>
                                    </dd>
                                </dl>
                            </div>
                        
                        
                        
                        </div></div></div>
                        <!-- //menu layer -->
                        </li>
                    
                     
                     
                     
                        <li class="muSecur ">
                     
                     
                     <!-- 1depth -->
                     
                     
                     
                     
                     
                     <a href="../../securitycenter/html/aboutASEC.html" class="oneLink">セキュリティセンター</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                                <div class="naviWrap clear">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/html/aboutASEC.html">ASECについて</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/asecJp/asecReportList.html">ASEC Report</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/asec/asecReportList.html">Press Ahn</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap clear">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/html/techReport.html">Tech Report</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/viruscenter/virusList.html">ウイルスセンター</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/securityinsight/securityInsightList.html">セキュリティ・インサイト</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap clear">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../securitycenter/html/securityRiskLevel.html">セキュリティ脅威レベル</a></p>
                                
                                
                                
                                

                                
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
                     
                     
                     
                     
                     
                     <a href="../../about/aboutAhnlab.html" class="oneLink">アンラボについて</a>
                     
                     
                     
                     
                     <!-- menu layer -->
                     <div class="lyMu"><div class="lyMuWrap"><div class="lyMuCont">
                     
                         <div class="fl">
                            
	                            
	                                <div class="naviWrap clear">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/aboutAhnlab.html">会社概要</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/securityPortfolio.html">AhnLab Solutions Portfolio</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/securityStrategy.html">Technology</a></p>
                                
                                
                                
                                

                                
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../../about/securityStrategy.html">セキュリティ戦略</a></li>
                                  
                                  
                                  </ul>
                                  
                                  <!-- 3depth -->
                                  <ul class="thrList">
                                     
                                  
                                  
                                  
                                        <li><a href="../../about/coreTechnology.html">コア・テクノロジー</a></li>
                                  
                                  
                                  </ul>
                                  
                                
                                 </div>
                            
	                            
	                                <div class="naviWrap clear">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/history.html">企業沿革</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/certificates.html">認証/アワード</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/pressRoomList.html">News&Topics</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap clear">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/recruit.html">採用情報</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                
                                <p class="tit"><a href="../../about/eventList.html">イベント</a></p>
                                
                                
                                
                                

                                
                                 </div>
                            
	                            
	                                <div class="naviWrap ">
	                            
	                            

                                <!-- 2depth -->
                                
                                
                                
                                
                                <p class="tit"><a href="../../etc/contactUs.do">Contact Us</a></p>
                                
                                
                                
                                
                                

                                
                                 </div>
                            
                         </div>
                     
                        
                        
                        
                        
                            <div class="fr">
                                <dl>
                                    <dt>AhnLab グローバルパートナープログラム</dt>
                                    <dd class="part">
                                        <p>アンラボのパートナープログラムは、全世界のパートナー様の事業拡大を<br/>実現します。</p>
                                        <a href="../partner/ourPartner.html" class="linkArr">詳細を見る</a>
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
    
    <div class="locWrap clfix">
    <ul>
        <li class="locLi alt">
<a href="../html/supportProgram.html" class="locTit ">サポート</a>
        </li>
        <li class="locLi LocationNavi">
            <a href="#" class="locTit locLink">カスタマーサポート</a>
            <div class="locList">
                <p><a href="../html/supportProgram.html">テクニカルサポート</a></p>
                <p><a href="../productfaq/productFaqList.html">よくある質問</a></p>
                <p><a href="../virusfaq/virusFaqList.html">ウイルス FAQ</a></p>
                <p class="on"><a href="qnaAddForm2.do">カスタマーサポート</a></p>
                <p><a href="../html/lifecycle.html">製品ライフサイクル</a></p>
                <p><a href="../phone/phoneChangeForm.html">機種変更申請</a></p>
                <p><a href="../notice/noticeList.html">サポートに関するお知らせ</a></p>
            </div>
        </li>
    </ul>
</div>

    
    
    




























		<div class="topTitWrap">
			<h1 class="topTit">カスタマーサポート</h1>
		</div>

<!-- contents -->
        <form method="post" name="QnaForm" id="QnaForm" enctype="multipart/form-data">
        <input type="hidden" name="orgSeq" id="orgSeq" value="">
		<div class="contents">

            




























<!-- 20141013 수정 -->
			<div class="tblInfo">
				<p>質問内容をご入力ください。</p>
				<div class="infoR requ">は必須入力項目です。</div>
			</div>
<!-- //20141013 수정 -->


			<div class="tForm">
				<table>
					<caption>Q&amp;A の詳細内容入力</caption>
					<colgroup>
						<col style="width:20%;" />
						<col style="width:80%;" />
					</colgroup>
					<tbody>

                        




























						<tr class="first">
							<th scope="row">
								<label for="reqName" class="requ"><span class="blind">[必須入力項目]</span>お名前</label>
							</th>
							<td>
								<input type="text" name="reqName" id="reqName" class="txtBox" value="" style="width:258px;" maxlength="80" />
							</td>
						</tr>
						<tr>
							<th scope="row">
								<label for="reqEmail" class="requ"><span class="blind">[必須入力項目]</span>メールアドレス</label>
							</th>
							<td>
								<input type="text" name="reqEmail" id="reqEmail" class="txtBox" value="" style="width:258px;" maxlength="200" />
							</td>
						</tr>
						<tr>
							<th scope="row">
								<label for="reqPhone" class="requ"><span class="blind">[必須入力項目]</span>電話番号</label>
							</th>
							<td>
								<input type="text" name="reqPhone" id="reqPhone" class="txtBox" value="" style="width:258px;" maxlength="20" numberOnly="true"/>
							</td>
						</tr>


						<tr>
							<th scope="row">
								<span class="label">製品名</span>
							</th>
							<td>
								<span class="select">
                                    
                                    
								    <select id="prodSeq" name="prodSeq" title="選んでください">
<option value="">選んでください</option><option value="40003">AhnLab Online Security</option>
<option value="40004">AhnLab TrusGuard</option>
<option value="40001">AhnLab V3 Mobile 2.0</option>
<option value="11324">AhnLab V3 Mobile 3.0</option>
<option value="40006">AhnLab MDS</option>
</select>

								</span>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<span class="label requ"><span class="blind">[必須入力項目]</span>お問い合わせの種類</span>
							</th>
							<td>
								<span class="select">
                                    
                                    
								    <select id="category" name="category" title="選んでください" style="width:258px;">
<option value="">選んでください</option><option value="10">製品購入について</option>
<option value="20">製品サポートについて</option>
<option value="30">資料請求</option>
<option value="40">見積もり請求 </option>
<option value="90">その他</option>
</select>

								</span>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<label for="reqTitle" class="requ"><span class="blind">[必須入力項目]</span>件名</label>
							</th>
							<td>
								<input type="text" name="reqTitle" id="reqTitle" class="txtBox" value="" style="width:738px;" maxlength="200" />
							</td>
						</tr>
						<tr>
							<th scope="row">
								<label for="reqContents" class="requ"><span class="blind">[必須入力項目]</span>お問い合わせ内容</label>
							</th>
							<td>
								<textarea name="reqContents" id="reqContents" cols="1" rows="5" style="width:738px;"></textarea>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<span class="label">添付ファイル</span>
							</th>
							<td>
								<div><input type="file" name="upload1" id="upload1" class="file" title="添付ファイル" style="width:738px;"></div>
								<div class="mt10"><input type="file" name="upload2" id="upload2" class="file" title="添付ファイル" style="width:738px;"></div>
								<div class="mt10"><input type="file" name="upload3" id="upload3" class="file" title="添付ファイル" style="width:738px;"></div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

            




























			<p class="mt35">弊社の<a href="../../etc/privacyPolicy.html" class="linkTxt">個人情報保護方針</a>および<a href="../../etc/aboutPrivacy.html" class="linkTxt">個人情報取扱い</a>をご覧ください。</p>
            <div class="agrBox mt10">
				<p class="agr"><input name="agree" id="agree" type="checkbox"><label for="agree">個人情報取扱いに同意します</label></p>
			</div>


			<div class="btnCenter">
				<a href="#" class="btnCm" onclick="javascript:resetForm(); return false;">登録内容を削除する</a>
				<a href="#" class="btnCmDb" onclick="javascript:insQna(); return false;">送信</a>
			</div>
		</div>
		</form>
<!-- //contents -->
	<script type="text/javascript">
	<!--
		

		function resetForm() {
		   $("#QnaForm").trigger("reset");
		}

		function insQna() {

			if (!Common.isValue($("#reqName").val())) {
				alert("お名前を入力してください。");
				$("#reqName").focus();
				return;
			}
			if (!Common.isValue($("#reqEmail").val())) {
				alert("メールアドレスを入力してください。");
				$("#reqEmail").focus();
				return;
			}
			if (!Check.email($("#reqEmail").val())) {
				alert("メールアドレスを入力してください。");
				$("#reqEmail").focus();
				return;
			}
			if (!Common.isValue($("#reqPhone").val())) {
				alert("連絡先を入力してください。");
				$("#reqPhone").focus();
				return;
			}
			if (!Common.isValue($("#category").val())) {
				alert("お問い合わせの種類を選択してください。");
				$("#category").focus();
				return;
			}

			if (!Common.isValue($("#reqTitle").val())) {
				alert(" 件名を入力してください。");
				$("#reqTitle").focus();
				return;
			}

			if (!Common.isValue($("#reqContents").val())) {
				alert("内容を入力してください。");
				$("#reqContents").focus();
				return;
			}

			if (Common.isValue($("#upload1").val())) {
				if (!Common.checkExt($("#upload1").val(), "cab|jpg|gif|arc")) {
					alert("AhnReport および画像ファイルのみ添付できます。");
					$("#upload1").focus();
					return;
				}
			}
			if (Common.isValue($("#upload2").val())) {
				if (!Common.checkExt($("#upload2").val(), "cab|jpg|gif|arc")) {
					alert("AhnReport および画像ファイルのみ添付できます。");
					$("#upload2").focus();
					return;
				}
			}
			if (Common.isValue($("#upload3").val())) {
				if (!Common.checkExt($("#upload3").val(), "cab|jpg|gif|arc")) {
					alert("AhnReport および画像ファイルのみ添付できます。");
					$("#upload3").focus();
					return;
				}
			}

			
			if (!$("#agree").is(':checked')) {
				alert("同意書にチェックしてください。");
				$("#agree").focus();
				return;
			}
			

			
	            
			$("#QnaForm").attr("action", "qnaAdd2.do");
	            
	            
			
			$("#QnaForm").attr("target", "_self");
			$("#QnaForm").submit();
		}
	//-->
	</script>

    </div>
    <!-- footer -->
    




























    <footer id="footer">
        <div class="ftWrap">
            <ul class="ftMenu">
                <li><a href="../../etc/privacyPolicy.html">個人情報保護方針</a></li>
                




























             <li><a href="../../etc/aboutPrivacy.html">個人情報の取扱い</a></li>
                <li><a href="../../etc/termsOfUse.html">利用規約</a></li>
                <li><a href="../../etc/contactUs.do">Contact Us</a></li>
                <li><a href="../../etc/sitemap.html">Sitemap</a></li>
            </ul>

            <div class="locSiteWrap globalSiteCombo">
                <p class="locSite"><a href="#" class="comboLink2" title="Change Country">日本</a></p>
                <!-- layer -->
                <div class="lyUtill" id=""><div class="lyWrap">
                    <p><a href="../../../../www.ahnlab.com/kr/site/main.html" target="_blank" rel="nofollow" class="fKr" title="別ウィンドウで開く">한국 (한국어)</a></p>
                    <p class=""><a href="../../../../global.ahnlab.com/site/main.html" target="_blank" rel="nofollow" title="別ウィンドウで開く">Global (English)</a></p>
                    <p class=""><a href="../../../../apac.ahnlab.com/site/main.html" target="_blank" rel="nofollow" title="別ウィンドウで開く">APAC (English)</a></p>
                    <p class="selected"><a href="../../main.html" target="_blank" rel="nofollow" class="fJapan" title="別ウィンドウで開く">日本 (日本語)</a></p>
                    <p class=""><a href="../../../../cn.ahnlab.com/site/main.html" target="_blank" rel="nofollow" class="fChina" title="別ウィンドウで開く">中国 (简体中文)</a></p>
                    <p><a href="http://us.ahnlab.com/" target="_blank" rel="nofollow" title="別ウィンドウで開く">US (English)</a></p>
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

	   ga('create', 'UA-17204763-14', 'auto');
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
			var _GUL = 'acounter.ahnlab.com';var _GPT='80'; var _SGPT='443';var _AIMG = new Image(); var _bn=navigator.appName; var _PR = location.protocol=="https:"?"https://"+_GUL+":"+_SGPT:"http://"+_GUL+":"+_GPT;if( _bn.indexOf("Netscape") > -1 || _bn=="Mozilla"){ setTimeout("_AIMG.src = _PR+'https://jp.ahnlab.com/?cookie';",1); } else{ _AIMG.src = _PR+'/?cookie'; };
			document.writeln("<scr"+"ipt language='javascript' src='/js/lib/acecounter/jp/acecounter_V70.js'></scr"+"ipt>");
		}
	</script>
	<noscript><img src='http://acounter.ahnlab.com/?uid=9&amp;je=n&amp;' border=0 width=0 height=0></noscript>
	<!-- AceCounter Log Gathering Script End -->






    <!-- //footer -->
</div> 
</body>


<!-- Mirrored from jp.ahnlab.com/site/support/qna/qnaAddForm2.do by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 26 Jan 2016 12:34:28 GMT -->
</html>
