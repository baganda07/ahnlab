	function getUserEntry(){
		location.href = "../customer/userEntry.html";
	}

	function getLoginForm(){
		location.href = "loginForm.html";
	}
	
	function login(){
		if(!Common.isValue($("#userid").val())){
			alert('ID를 입력해 주세요.');
			$("#userid").focus();
			return;
		}

		if(!Common.isValue($("#passwd").val())){
			alert('비밀번호를 입력해 주세요.');
			$("#passwd").focus();
			return;
		}
		appname = navigator.appName;
		if( appname == "Microsoft Internet Explorer" || appname == "Netscape" || appname == "Opera" ) appname = "IE";
		
		if(appname=="IE") {
			try { 
				if ( typeof(aosak_loaded()) == "undefined" ) {
					$("#passwd").val(jQuery.trim($("#passwd").val()));
				} else {
					if(aosak_loaded() == true) {
						aos_copy_to_form(document.loginForm);
					}else{
						$("#passwd").val(jQuery.trim($("#passwd").val()));
					}
				}
			} catch (exception) {
				$("#passwd").val(jQuery.trim($("#passwd").val()));
			}
		}else{
			$("#passwd").val(jQuery.trim($("#passwd").val()));
		}
		
		$("#userid").val(jQuery.trim($("#userid").val()));

		var from_url = $("#from_url").val();
		if ( from_url == null || ( from_url.indexOf("index.html") > -1) ) from_url = "../../../index.html";	
		
		$("#from_url").val(from_url);

		$("#loginForm").attr("action", "https://sso.ahnlab.com/kr/site/login/login.do");
		$("#loginForm").attr("target", "_self");

		$("#loginForm").submit();
	} 
	function login_main(){
		
		
		if(!Common.isValue($("#main_userid").val())){
			alert('ID를 입력해 주세요.');
			$("#main_userid").focus();
			return;
		}

		if(!Common.isValue($("#main_passwd").val())){
			alert('비밀번호를 입력해 주세요.');
			$("#main_passwd").focus();
			return;
		}
		appname = navigator.appName;
		if( appname == "Microsoft Internet Explorer" || appname == "Netscape" || appname == "Opera" ) appname = "IE";
		
		if(appname=="IE") {
			try {
				if ( typeof(aosak_loaded()) == "undefined"  ) {
					document.loginMainForm.passwd.value = jQuery.trim(document.loginMainForm.passwd.value);
				} else {
					if(aosak_loaded() == true) {
						aos_copy_to_form(document.loginMainForm);
					}else{
						document.loginMainForm.passwd.value = jQuery.trim(document.loginMainForm.passwd.value);
					}				
				}
			} catch(exception) {
				document.loginMainForm.passwd.value = jQuery.trim(document.loginMainForm.passwd.value);
			}
		}else{
			$("#main_passwd").val(jQuery.trim($("#main_passwd").val()));
		}
		
		$("#main_userid").val(jQuery.trim($("#main_userid").val()));
		
		var from_url = window.location.href;
		if ( from_url == null || ( from_url.indexOf("index.html") > -1) ) from_url = "../../../index.html";

		$("#from_url").val(from_url);
		$("#loginMainForm").attr("action", "https://sso.ahnlab.com/kr/site/login/login.do");
		$("#loginMainForm").attr("target", "_self");
		$("#loginMainForm").submit();
	}	

	function failLogin(){
		if(!Common.isValue($("#userid").val())){
			alert('ID를 입력해 주세요.');
			$("#userid").focus();
			return;
		}

		if(!Common.isValue($("#passwd").val())){
			alert('비밀번호를 입력해 주세요.');
			$("#passwd").focus();
			return;
		}
		
		appname = navigator.appName;
		if( appname == "Microsoft Internet Explorer" || appname == "Netscape" || appname == "Opera" ) appname = "IE";
		
		if(appname=="IE") {
			try {
				if ( typeof(aosak_loaded()) == "undefined"  ) {
					document.loginForm.passwd.value = document.loginForm.passwd.value;
				} else {
					if(aosak_loaded() == true) {
						aos_copy_to_form(document.loginForm);
					}else{
						document.loginForm.passwd.value = document.loginForm.passwd.value;
					}
				}
			} catch(exception) {
				document.loginForm.passwd.value = document.loginForm.passwd.value;
			}
		}
		if(!Common.isValue($("#j_captcha_response").val())){
			alert('그림에 보이는 숫자와 문자를  입력해 주세요.');
			$("#j_captcha_response").focus();
			return;
		}
		
		var from_url = window.location.href;
		if ( from_url == null || ( from_url.indexOf("index.html") > -1) ) from_url = "../../../index.html";

		$("#from_url").val(from_url);		
		
		//$("#loginForm").attr("action", "/kr/site/login/loginFail.do");
		$("#loginForm").attr("action", "https://sso.ahnlab.com/kr/site/login/login.do");
		$("#loginForm").attr("target", "_self");

		$("#loginForm").submit();
	}

	function getFindIdForm(){
		location.href = "findIdForm.html";
	}

	function getFindId(type){
		if(type == 'EM'){
			if(!Common.isValue($("#cust_name1").val())){
				alert('이름을 입력해 주세요.');
				$("#cust_name1").focus();
				return;
			}

			if($("#birthday_year option:selected").val() == ""){
				alert('생년월일 년도를 선택해 주세요.');
				$("#birthday_year").focus();
				return;
			}

			if(!Common.isValue($("#email1").val())){
				alert('이메일을 입력하세요.');
				$("#email1").focus();
				return;
			}

			if(!Common.isValue($("#email2").val())){
				alert('이메일을 입력하세요.');
				$("#email2").focus();
				return;
			}

			var email = $("#email1").val() +"@"+ $("#email2").val();

			if(!Check.email(email)){
				alert('올바른 이메일을 입력하세요.');
				$("#email2").focus();
				return;
			}

			var birthday = $("#birthday_year").val() + "-" + $("#birthday_month").val() + "-" + $("#birthday_day").val();

			$("#birthday").val(birthday);
			$("#email").val(email);
			$("#cust_name").val($("#cust_name1").val());
		}else if(type == 'BN'){
			if(!Common.isValue($("#prod_num1").val())){
				alert('제품번호를 입력해 주세요.');
				$("#prod_num1").focus();
				return;
			}

			if (isNaN($("#prod_num1").val())){
				alert("제품번호는 숫자로만 입력해 주십시오.");
				$("#prod_num1").focus();
				return;
			}

			if(!Common.isValue($("#prod_num2").val())){
				alert('제품번호를 입력해 주세요.');
				$("#prod_num2").focus();
				return;
			}

			if (isNaN($("#prod_num2").val())){
				alert("제품번호는 숫자로만 입력해 주십시오.");
				$("#prod_num2").focus();
				return;
			}

			if(!Common.isValue($("#cust_name2").val())){
				alert('이름을 입력해 주세요.');
				$("#cust_name2").focus();
				return;
			}

			$("#org_license").val($("#prod_num1").val() +"-"+ $("#prod_num2").val());
			$("#cust_name").val($("#cust_name2").val());

		}

		$("#type").val(type);

		$("#loginForm").attr("action", "/kr/site/login/findId.do");
		$("#loginForm").attr("target", "_self");

		$("#loginForm").ajaxSubmit({success: function(json) {
			var mstCustUnionVoList = json['mstCustUnionVoList'];
			var isExistId = mstCustUnionVoList.length;
			
			if( isExistId <= 0 ){
				alert("입력한 내용과 일치하는 정보가 없습니다.\n아이디/비밀번호를 찾지 못한 경우, \n고객만족센터 [전화 : 1588-3096, 이메일 : customer@ahnlab.com]를 \n통해 문의해 주시기 바랍니다.");
			}else{
				if ( isExistId == 1 ) {
					$("#cust_id").val(mstCustUnionVoList[0].cust_id);
				} else {
					var cust_id = "";
					for (var i=0; i<mstCustUnionVoList.length ; i++ ) {
						if ( i == 0 ) {
							cust_id = mstCustUnionVoList[i].cust_id;
						} else {
							cust_id = cust_id + ",  " + mstCustUnionVoList[i].cust_id;
						}
					}	
					$("#cust_id").val(cust_id);
					$("#type").val("dup");
				}
				$("#loginForm").attr("action", "/kr/site/login/findIdFinish.do");
				$("#loginForm").attr("target", "_self");
				$("#loginForm").submit();
			}
		}});
	}

	function getFindIdBizForm(){
		location.href = "findIdBizForm.html";
	}

	function getFindIdBiz(){
		if (!Common.isValue($("#cust_name").val())){
			alert("기업/회사명을 입력해 주십시오.");
			$("#cust_name").focus();
			return;
		}

		if (!Common.isValue($("#business_no1").val())){
			alert("사업자등록번호를 입력해 주십시오.");
			$("#business_no1").focus();
			return;
		}

		if (isNaN($("#business_no1").val())){
			alert("사업자등록번호는 숫자로만 입력해 주십시오.");
			$("#business_no1").focus();
			return;
		}

		if($("#business_no1").val().length != 3){
			alert('올바른 사업자등록번호를 입력해 주십시오.');
			$("#business_no1").focus();
			return;
		}

		if (!Common.isValue($("#business_no2").val())){
			alert("사업자등록번호를 입력해 주십시오.");
			$("#business_no2").focus();
			return;
		}

		if (isNaN($("#business_no2").val())){
			alert("사업자등록번호는 숫자로만 입력해 주십시오.");
			$("#business_no2").focus();
			return;
		}

		if($("#business_no2").val().length != 2){
			alert('올바른 사업자등록번호를 입력해 주십시오.');
			$("#business_no2").focus();
			return;
		}

		if (!Common.isValue($("#business_no3").val())){
			alert("사업자등록번호를 입력해 주십시오.");
			$("#business_no3").focus();
			return;
		}

		if (isNaN($("#business_no3").val())){
			alert("사업자등록번호는 숫자로만 입력해 주십시오.");
			$("#business_no3").focus();
			return;
		}

		if($("#business_no3").val().length != 5){
			alert('올바른 사업자등록번호를 입력해 주십시오.');
			$("#business_no3").focus();
			return;
		}

		var business_no = $("#business_no1").val() +"-"+ $("#business_no2").val() +"-"+ $("#business_no3").val();

		if(!Check.business_id(business_no)){
			alert ("잘못된 사업자등록번호입니다.\n사업자등록번호를 다시 입력하세요.");
			$("#business_no1").focus();
			return;
		}

		$("#business_no").val(business_no);

		$("#loginForm").attr("action", "/kr/site/login/findIdBiz.do");
		$("#loginForm").attr("target", "_self");

		$("#loginForm").ajaxSubmit({success: function(json) {
			if(json['cust_id'] == ""){
				alert("입력한 내용과 일치하는 정보가 없습니다.\n아이디/비밀번호를 찾지 못한 경우, \n고객만족센터 [전화 : 1588-3096, 이메일 : customer@ahnlab.com]를 \n통해 문의해 주시기 바랍니다.");
			}else{
				$("#cust_id").val(json['cust_id']);
				var cust_info = "";
				cust_info = json['mstCustUnionVo'].dept_name + " " + json['mstCustUnionVo'].charger_name;
				$("#cust_info").val(cust_info);

				$("#loginForm").attr("action", "/kr/site/login/findIdBizFinish.do");
				$("#loginForm").attr("target", "_self");
				$("#loginForm").submit();
			}
		}});
	}

	function getFindPwForm(){
		location.href = "findPwForm.html";
	}

	function getFindPw(){
		if(!Common.isValue($("#cust_name").val())){
			alert('이름을 입력해 주세요.');
			$("#cust_name").focus();
			return;
		}

		if(!Common.isValue($("#cust_id").val())){
			alert('ID를 입력해 주세요.');
			$("#cust_id").focus();
			return;
		}

		if($("#birthday_year option:selected").val() == ""){
			alert('생년월일 년도를 선택해 주세요.');
			$("#birthday_year").focus();
			return;
		}

		if(!Common.isValue($("#email1").val())){
			alert('이메일을 입력하세요.');
			$("#email1").focus();
			return;
		}

		if(!Common.isValue($("#email2").val())){
			alert('이메일을 입력하세요.');
			$("#email2").focus();
			return;
		}

		var email = $("#email1").val() +"@"+ $("#email2").val();

		if(!Check.email(email)){
			alert('올바른 이메일을 입력하세요.');
			$("#email2").focus();
			return;
		}

		var birthday = $("#birthday_year").val() + "-" + $("#birthday_month").val() + "-" + $("#birthday_day").val();

		$("#birthday").val(birthday);
		$("#email").val(email);

		$("#loginForm").attr("action", "/kr/site/login/findPw.do");
		$("#loginForm").attr("target", "_self");

		$("#loginForm").ajaxSubmit({success: function(json) {
			if(json['total_cnt'] == "0"){
				alert("입력한 내용과 일치하는 정보가 없습니다.\n아이디/비밀번호를 찾지 못한 경우, \n고객만족센터 [전화 : 1588-3096, 이메일 : customer@ahnlab.com]를 \n통해 문의해 주시기 바랍니다.");
			}else{
				$("#change_email").val(json['email']);
				$("#hint_quest").val(json['hint_quest']);
				$("#hint_type").val(json['hint_type']);

				$("#loginForm").attr("action", "/kr/site/login/findPwFinish.do");
				$("#loginForm").attr("target", "_self");
				$("#loginForm").submit();
			}
		}});
	}

	function popPwQa(){
		if(!Common.isValue($("#hint_answer").val())){
			alert('답을 입력하십시오.');
			$("#hint_answer").focus();
			return;
		}

		POPUP.open('', 'popPwQa', {width: 420, height: 280});

		$("#loginForm").attr("action", "/kr/site/login/popPwQa.do");
		$("#loginForm").attr("target", "popPwQa");

		$("#loginForm").submit();
	}

	function popPwEmail(){
		if($("#send_yn").val() == "Y"){
			alert("임시비밀번호를 E-mail로 발송했습니다!");
			return;
		}else{
			if(confirm("임시비밀번호를 E-mail로 받으시겠습니까?")){
				$("#send_yn").val("Y");

				POPUP.open('', 'popPwEmail', {width: 420, height: 260});

				$("#loginForm").attr("action", "/kr/site/login/popPwEmail.do");
				$("#loginForm").attr("target", "popPwEmail");

				$("#loginForm").submit();

			}else{
				return;
			}
		}
	}

	function getFindPwBizForm(){
		location.href = "findPwBizForm.html";
	}

	function getFindPwBiz(){
		if (!Common.isValue($("#cust_name").val())){
			alert("기업/회사명을 입력해 주십시오.");
			$("#cust_name").focus();
			return;
		}

		if (!Common.isValue($("#cust_id").val())){
			alert("ID를 입력해 주십시오.");
			$("#cust_id").focus();
			return;
		}

		if (!Common.isValue($("#business_no1").val())){
			alert("사업자등록번호를 입력해 주십시오.");
			$("#business_no1").focus();
			return;
		}

		if (isNaN($("#business_no1").val())){
			alert("사업자등록번호는 숫자로만 입력해 주십시오.");
			$("#business_no1").focus();
			return;
		}

		if($("#business_no1").val().length != 3){
			alert('올바른 사업자등록번호를 입력해 주십시오.');
			$("#business_no1").focus();
			return;
		}

		if (!Common.isValue($("#business_no2").val())){
			alert("사업자등록번호를 입력해 주십시오.");
			$("#business_no2").focus();
			return;
		}

		if (isNaN($("#business_no2").val())){
			alert("사업자등록번호는 숫자로만 입력해 주십시오.");
			$("#business_no2").focus();
			return;
		}

		if($("#business_no2").val().length != 2){
			alert('올바른 사업자등록번호를 입력해 주십시오.');
			$("#business_no2").focus();
			return;
		}

		if (!Common.isValue($("#business_no3").val())){
			alert("사업자등록번호를 입력해 주십시오.");
			$("#business_no3").focus();
			return;
		}

		if (isNaN($("#business_no3").val())){
			alert("사업자등록번호는 숫자로만 입력해 주십시오.");
			$("#business_no3").focus();
			return;
		}

		if($("#business_no3").val().length != 5){
			alert('올바른 사업자등록번호를 입력해 주십시오.');
			$("#business_no3").focus();
			return;
		}

		var business_no = $("#business_no1").val() +"-"+ $("#business_no2").val() +"-"+ $("#business_no3").val();

		if(!Check.business_id(business_no)){
			alert ("잘못된 사업자등록번호입니다.\n사업자등록번호를 다시 입력하세요.");
			$("#business_no1").focus();
			return;
		}

		if(!Common.isValue($("#email1").val())){
			alert('이메일을 입력하세요.');
			$("#email1").focus();
			return;
		}

		if(!Common.isValue($("#email2").val())){
			alert('이메일을 입력하세요.');
			$("#email2").focus();
			return;
		}

		var email = $("#email1").val() +"@"+ $("#email2").val();

		if(!Check.email(email)){
			alert('올바른 이메일을 입력하세요.');
			$("#email2").focus();
			return;
		}

		$("#business_no").val(business_no);
		$("#email").val(email);

		$("#loginForm").attr("action", "/kr/site/login/findPwBiz.do");
		$("#loginForm").attr("target", "_self");

		$("#loginForm").ajaxSubmit({success: function(json) {
			if(json['total_cnt'] == "0"){
				alert("입력한 내용과 일치하는 정보가 없습니다.\n아이디/비밀번호를 찾지 못한 경우, \n고객만족센터 [전화 : 1588-3096, 이메일 : customer@ahnlab.com]를 \n통해 문의해 주시기 바랍니다.");
			}else{
				$("#change_email").val(json['email']);
				$("#hint_quest").val(json['hint_quest']);
				$("#hint_type").val(json['hint_type']);
				$("#cust_id").val(json['cust_id']);

				$("#loginForm").attr("action", "/kr/site/login/findPwBizFinish.do");
				$("#loginForm").attr("target", "_self");
				$("#loginForm").submit();
			}
		}});
	}

	function popPwBizQa(){
		if(!Common.isValue($("#hint_answer").val())){
			alert('답을 입력하십시오.');
			$("#hint_answer").focus();
			return;
		}

		POPUP.open('', 'popPwBizQa', {width: 420, height: 280});

		$("#loginForm").attr("action", "/kr/site/login/popPwBizQa.do");
		$("#loginForm").attr("target", "popPwBizQa");

		$("#loginForm").submit();
	}

	function popPwBizEmail(){
		if($("#send_yn").val() == "Y"){
			alert("임시비밀번호를 E-mail로 발송했습니다!");
			return;
		}else{
			if(confirm("임시비밀번호를 E-mail로 받으시겠습니까?")){
				$("#send_yn").val("Y");

				POPUP.open('', 'popPwBizEmail', {width: 420, height: 260});

				$("#loginForm").attr("action", "/kr/site/login/popPwBizEmail.do");
				$("#loginForm").attr("target", "popPwBizEmail");

				$("#loginForm").submit();

			}else{
				return;
			}
		}
	}
	
	function popPwHpAuth(){
		
		if (isNaN($("#auth_no").val())){
			alert("인증번호를 숫자로만 입력해 주십시오.");
			$("#auth_no").focus();
			return;
		}
		
		if($("#auth_no").val().length <= 0){
			alert('인증번호를 입력해주세요.');
			$("#auth_no").focus();
			return;
		}		
		
		$("#loginForm").attr("action", "/kr/site/login/popPwHpAuth.do");
		$("#loginForm").attr("target", "_self");

		$("#loginForm").submit();
	}
	
	function chkSocialId1(){
		if($("#social_id1").val().length == 6){
			$("#social_id2").focus();
		}
	}
	
	function chkSocialId2(){
		if($("#social_id2").val().length == 7){
			$("#telecom_code").focus();
		}
	}	
	
	function telno2(){
		if($("#tel_no_2").val().length == 4){
			$("#tel_no_3").focus();
		}
	}	

	function popPwHpForm(){
		
		if (isNaN($("#tel_no_1").val())){
			alert("휴대폰 번호는 숫자로만 입력해 주십시오.");
			$("#tel_no_1").focus();
			return;
		}

		if (isNaN($("#tel_no_2").val())){
			alert("휴대폰 번호는 숫자로만 입력해 주십시오.");
			$("#tel_no_2").focus();
			return;
		}
	
		if (isNaN($("#tel_no_3").val())){
			alert("휴대폰 번호는 숫자로만 입력해 주십시오.");
			$("#tel_no_3").focus();
			return;
		}		
		
		if (isNaN($("#social_id1").val())){
			alert("주민등록번호는 숫자로만 입력해주세요.");
			$("#social_id1").focus();
			return;
		}

		if($("#social_id1").val().length != 6){
			alert('주민등록번호를 입력해 주십시오.');
			$("#social_id1").focus();
			return;
		}	
		
		if (isNaN($("#social_id2").val())){
			alert("주민등록번호는 숫자로만 입력해 주십시오.");
			$("#social_id2").focus();
			return;
		}

		if($("#social_id2").val().length != 7){
			alert('주민등록번호를 입력해 주십시오.');
			$("#social_id2").focus();
			return;
		}	
		
		var social_id = $("#social_id1").val() + $("#social_id2").val();
		var tel_no = $("#tel_no_1").val() + $("#tel_no_2").val() + $("#tel_no_3").val();
		
		$("#social_id").val(social_id);
		$("#tel_no").val(tel_no);
		
		POPUP_CHECK.open('', 'popPwHpForm', {width: 420, height: 280});
		
		$("#loginForm").attr("action", "/kr/site/login/popPwHp.do");
		$("#loginForm").attr("target", "popPwHpForm");
		
		$("#loginForm").submit();

	}	
