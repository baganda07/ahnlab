



































<!DOCTYPE html>
<html lang="zh-cn">

<!-- Mirrored from cn.ahnlab.com/site/login/popAosMain.do by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 26 Jan 2016 13:11:57 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    




























    
    
    
    
        
    
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <!-- SEO -->
    <meta name="Keywords" content="" />
    <meta name="Description" content="" />
	<!-- 페이스북 -->
	<meta property="og:title"           content="AhnLab - 网络安全综合解决方案提供商|您身边的网络安全专家"/>
	<meta property="og:description"     content=""/>

	<!-- 트위터 -->
	<meta name="twitter:title"          content="AhnLab - 网络安全综合解决方案提供商|您身边的网络安全专家">
	<meta name="twitter:description"    content="">

    <!-- SEO -->
    <title>AhnLab - 网络安全综合解决方案提供商|您身边的网络安全专家</title>

    <link href="../../css/cn/ahnlab.css" rel="stylesheet" type="text/css" />
    
    <script type="text/javascript" src="../../js/lib/jquery/jquery-1.11.1.js"></script>
    <script type="text/javascript" src="../../js/lib/jquery/jquery.ui.js"></script>
    <script type="text/javascript" src="../../js/common.js"></script>
    <script type="text/javascript" src="../../js/site.js"></script>
    <script type="text/javascript" src="../../js/jquery.js"></script>
    <script type="text/javascript" src="../../js/lib/jquery/jquery.placeholder.js"></script>
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

<body class="pop">
  <div class="popWrap">
     




























        <!-- popup 타이틀 -->
        <div class="contTitWrap">
            <h2 class="contTit">AhnLab Online Security</h2>
        </div>
        <!-- //popup 타이틀 -->

        <!-- popup Contents -->
        <div class="popCont">
            <p>为了每一个顾客使用安全的互联网，安博士提供您的计算机自动安装 AhnLab Online Security（防火墙和键盘安全）程序。通过安装该程序，安全保护您的个人信息。</p>

            <h3 class="contSubTit mt20">服务介绍</h3>
            <p>AhnLab Online Security（AOS）是安博士提供的网上安全服务。</p>
            <dl>
                <dt class="fcBlue mt20">1. AOS Firewall（网上个人防火墙）</dt>
                <dd class="mt5">不仅可以实时检测和拦截“黑客工具”，还可以监控/警告/拦截“网络通信（TCP/IP)”，“控制共享文件夹”等个人计算机的网络安全。</dd>
                <dt class="fcBlue mt20">2. AOS Anti-Keylogger（键盘安全解决方案）</dt>
                <dd class="mt5">从截取用户的键盘记录信息的黑客工具保护您重要的信息，并支持键盘安全和扩大E2E联动。</dd>
            </dl>

            <h3 class="contSubTit mt20">使用指南</h3>
            <p>在访问本网站的期间运行AhnLab Online Security(AOS)，如果移动到其他网站或关闭浏览器，将结束AOS运行。</p>
        </div>
        <!-- //popup Contents -->

        <!-- popup Button -->
        <div class="btnCenter">
            <a href="#" class="btnCommon darkBlue"><span class="btnTxt"><spirng:message code="com.button.html"/></span></a>
        </div>
    
    <script type="text/javascript" src="../../js/lib/aos/aosmgr_common.js"></script>
    <script type="text/javascript">
    $(function() {
	    $(".btnCommon").click(function (){
	    	self.close();
	    });
    });
    
    document.domain = "ahnlab.com"; 
    function on_aosmgr_event( event_name, event_param1, event_param2 ) 
    {
        // AOS가 설치되어 있고 업데이트가 끝났음(기준은 mkd2.5)
        if( event_name == "update_complete" ) 
        {
            // opener는 daum.net(js- loginui_2009.js)
            if( opener )
            {
                
                // mkd의 업데이트가 필요함 또는 mkd가 설치되지 않음
                if( g_bInstalled == true )
                {
                    var chk = opener.startMK(); 
                    
                    // chr이 true면 해킹 차단실행 ON으로 표시됨
                    if( chk == true )
                    {
                    	
                    }
                }
    
                // mkd의 업데이트가 필요하지 않음
                else
                {
                    var chk = opener.startMK();
                    if( chk == true )
                    {
                        // 팝업창이 스스로 닫힘
                        //self.close();
                    }
                }
            }
        }
    }
    </script>     
    <script type="text/javascript">
        //aos_set_auth_server("http://ahnlabnotice.nefficient.co.kr"); //인증서버 설정
        aos_set_authinfo( "aosmgr_v3webhard3.html" );               // 인증파일 설정
        aos_set_subclsid("40","59B0298B-A7B5-4045-A34E-377EDF7BCB8E");  // 키보드보안 subclass id 설정
        aos_set_submimetype("40","application/ahnlab/asp/npmkd25aos");  // 키보드보안 mime type 설정
        aos_set_option( "aos_event_handler", on_aosmgr_event );     // event handler 등록
        aos_set_option( "uimode", true );               // 설정하지 않으면, ui를 보이게 함
        aos_set_option( "asyncmode", false );               // 설정하지 않으면, async로 동작함
    //  aos_set_option( "authrooturl", "http://ahnlabnotice.nefficient.co.kr/Authentication/SUpdatei/");
        aos_write_object();                     // activex 등록
        
        // mkd2.5의 업데이트가 필요하지 않음
        if( _aos_checkupdate("40") == 0 )
        {
            g_bInstalled = false;
        }
        // mkd2.5의 업데이트가 필요함, mkd가 설치되있지 않음
        else
        {
            g_bInstalled = true;
        }
        
        function aos_safe_start()
        {
            // OBject가 등록되면
            if(aos_loaded() == true)
            {  
                var mkdrunning = aos_isrunning('40');       // mkd의 실행여부 
                var mfrunning = aos_isrunning('e5');        // mfw의 실행여부
                
                // mkd와 mf가 모두 실행 중이면
                if( mkdrunning == true && mfrunning == true)
                {
                    // AOS가 구동되어 있으므로 이전 페이지로 이동하거나 팝업창을 닫으시면 됩니다.
                    on_aosmgr_event('update_complete'); //added by daum
                    //self.close();   
                }
    
                else
                {
                    // mkd실행X, mfw 실행
                    if(mkdrunning == false && mfrunning == true)
                    {
                        aos_start('40');
                    }
                    
                    // mkd 실행X, mfw 실행 X
                    else
                    {
                        aos_start('40|e5'); // AOS 실행
                    }
                }
            }
            // OBject가 등록않으면
            else
            {
                window.setTimeout(aos_safe_start, 100);     //잠시 타임
            }
        }
    
        aos_safe_start();
    </script>

  </div>
</body>

<!-- Mirrored from cn.ahnlab.com/site/login/popAosMain.do by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 26 Jan 2016 13:12:29 GMT -->
</html>