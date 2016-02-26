	var imgserver = "https://image.ahnlab.com/ahnlab/ahnAdmin";

	function getUserEntry(){
		location.href = "userEntry.html";
	}

	function getUserEntryCertify(){
		if($("#check1").is(':checked') == false){
			alert("이용약관에 동의해 주세요.");
			$("#check1").focus();
			return;
		} 

		if($("#check2").is(':checked') == false){
			alert("서비스 제공을 위한 개인정보 수집 및 이용 안내에 동의해 주세요.");
			$("#check2").focus();
			return;
		} else {
			$("#check").val("YY");
		}

		$("#customerForm").attr("action", "/site/customer/userEntryCertify.do");
		$("#customerForm").attr("target", "_self");

		$("#customerForm").submit();
	}

	function chkRealName(){



		if (!Common.isValue($("#cust_name").val())){
			alert("이름을 입력해 주십시오.");
			$("#cust_name").focus();
			return;
		}

		if(Check.korea($("#cust_name").val()) == false){
			alert("이름을 한글로 입력해 주십시오.");
			$("#cust_name").focus();
			return;
		}

		if (!Common.isValue($("#social_id1").val())){
			alert("주민번호를 입력해 주십시오.");
			$("#social_id1").focus();
			return;
		}

		if (isNaN($("#social_id1").val())){
			alert("주민번호는 숫자로만 입력해 주십시오.");
			$("#social_id1").focus();
			return;
		}

		if($("#social_id1").val().length != 6){
			alert('올바른 주민번호를 입력해 주십시오.');
			$("#social_id1").focus();
			return;
		}

		if (!Common.isValue($("#social_id2").val())){
			alert("주민번호를 입력해 주십시오.");
			$("#social_id2").focus();
			return;
		}

		if (isNaN($("#social_id2").val())){
			alert("주민번호는 숫자로만 입력해 주십시오.");
			$("#social_id2").focus();
			return;
		}

		if($("#social_id2").val().length != 7){
			alert('올바른 주민번호를 입력해 주십시오.');
			$("#social_id2").focus();
			return;
		}

		var social_id = $("#social_id1").val() + $("#social_id2").val();

		if (!Check.jumin($("#social_id1").val(), $("#social_id2").val())) {
			alert("주민번호가 올바르지 않습니다.");
			$("#social_id1").focus();
			return;
		}

		if(!$('#agree').attr('checked')){
			alert("주민등록번호 처리에 동의해 주십시오.");
			return;
		}
		var now = new Date();
		var year = now.getFullYear();

		var ssn1 = $("#social_id1").val();
		var birthYear = eval(ssn1.substring(0,2));

		if(Number(birthYear) <= Number(year.toString().substring(2,4))) birthYear = 2000 + Number(birthYear)
		else birthYear = 1900 + Number(birthYear);

		if( (year - Number(birthYear))<14){
			alert("14세 미만의 경우 성명인증을 진행하지 않고 부모님(법적대리인)의 확인 절차를 통해 가입이 가능합니다.");
		}

		$("#social_id").val(social_id);

		$("#customerForm").attr("action", "/kr/site/customer/chkRealName.do");
		$("#customerForm").attr("target", "_self");

		$("#customerForm").ajaxSubmit({success: function(json) {
			if(json['childYN'] == 'Y'){
				getEntryRegiForm('Y');
			}else{
				if(json['resultValue'] == 'result=1'){
					now;
					getEntryRegiForm('N');
				}else if(json['resultValue'] == 'result=2' || json['resultValue'] == 'result=3'){
					//alert('성명인증오류\n입력하신 성함과 주민번호가 일치하지 않거나 자료가 없습니다.');
					location.href = "chkRealNameErr4292.do?err_code=9001";
				}else if(json['resultValue'] == 'result=50'){
					//alert('성명인증오류\n귀하가 입력하신 주민등록번호는 정보도용차단이 신청되어 있는 주민등록번호입니다. ');
					//location.href = "/kr/site/customer/chkRealNameErr.do?err_code=9002";
					var URL ="https://www.creditbank.co.kr/FC.fc?CMD=CMD_SEQ_105103697291280647757083";
					var status = "toolbar=no,directories=no,scrollbars=no,resizable=no,status=no,menubar=no, width= 640, height= 480, top=0,left=20";
					window.open(URL,"",status);

				}else{
					//alert('성명인증오류\n한국신용평가정보(주)의 \'성명 인증 시스템\' 의 일시적인 장애가 발생했습니다.');
					location.href = "chkRealNameErrf2a4.html?err_code=9003";
				}
			}
	    }});
	}

	function chkSocialId1(){
		if($("#social_id1").val().length == 6){
			$("#social_id2").focus();
		}
	}

	function chkBusiNo1(){
		if($("#businessNo1").val().length == 3){
			$("#businessNo2").focus();
		}
	}

	function chkBusiNo2(){
		if($("#businessNo2").val().length == 2){
			$("#businessNo3").focus();
		}
	}

	function getEntryRegiForm(childYN){
		$("#childYN").val(childYN);

		$("#customerForm").attr("action", "/kr/site/customer/userEntryRegiForm.do");
		$("#customerForm").attr("target", "_self");

		$("#customerForm").submit();
	}

	function chkUserEntryYN(){
		var email = $("#email1").val() + "@" + $("#email2").val();

		if($("#chkMemberYn").val() == 'N' || $("#email").val() != email){
			alert("가입 할 E-mail 주소의 중복여부를 확인해 주세요.");
			$("#email1").focus();
			return;
		}
	}
	
	function chkUserEntryForm(){
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
	}

	function chkUserEntry(){
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

		$("#email").val(email);
		$.ajax({
            url: $("#projPath").val() + "/site/customer/chkUserEntry.do",
            dataType: 'json',
            method: 'POST',
            data: $("#customerForm").serialize(),
            success: function(json) {
                if (json.isSuccess){
                	var data = json.resultData;
                	if(data['entry_confirm_value'] == "NM"){
        				$("#chkMemberYn").val("Y");
        				$(".entryConfirmValueNM").show();
        				$(".entryConfirmValueVIT").hide();
        			}else if(data['entry_confirm_value'] == "VIT"){
        				$("#email").val("");
        				$("#chkMemberYn").val("N");
        				$(".entryConfirmValueNM").hide();
        				$(".entryConfirmValueVIT").show();
        			}else{
        				$("#email").val("");
        				$("#chkMemberYn").val("N");
        				$(".entryConfirmValueNM").hide();
        				$(".entryConfirmValueVIT").show();
        			}
                	
                }else{
                    alert("이메일 체크를 실패했습니다.");                      
                }
            },
            error: function(x, o, e){
                alert("Network Error!");
            }
        });
	}

	function chkUserId(){
		if(!Check.engandnumber($("#custId").val())){
			$(".chk_id_div").html("ID는 영문소문자 또는 숫자만 입력하십시오.");
			return;
		}

		if($("#custId").val().length < 4 || $("#custId").val().length > 16){
			$(".chk_id_div").html("ID는 4자리이상 16자리 미만으로 입력해야 합니다.");
			return;
		}

		$.ajax({
            url: $("#projPath").val() + "/site/customer/chkUserId.do",
            dataType: 'json',
            method: 'POST',
            data: $("#customerForm").serialize(),
            success: function(json) {
                if (json.isSuccess){
                	var data = json.resultData;
                	if(data == "N"){
        				$(".chk_id_div").html("사용 가능한 ID 입니다.");
        				$("#hiddenId").val($("#custId").val());
        			}else{
        				$(".chk_id_div").html("이미 사용중인 ID 입니다.");
        				$("#hiddenId").val("");
        			}
                	
                }else{
                    alert("아이디 중복 체크를 실패했습니다.");                      
                }
            },
            error: function(x, o, e){
                alert("Network Error!");
            }
        });
	}

	function chkPasswd(){

		if($("#password").val().length < 8 || $("#password").val().length > 16){
			$("#chk_password_div").html("<font color='red'>[사용불가] 안전한 비밀번호 기준에 맞지 않습니다.</font>");
			$("#chk_password_div").addClass("guard4");
			return;
		}

		if(!chkPasswd2()){
			$("#chk_password_div").html("<font color='red'>[사용불가] 비밀번호는 ID 또는 전화번호등 단순번호를 사용할 수 없습니다.</font>");
			$("#chk_password_div").addClass("guard4");
			return;
		}

		if(!chkPasswdContinue($("#password").val())){
			$("#chk_password_div").html("<font color='red'>[위험] 보안상의 이유로 한 문자로 연속된 비밀번호는 허용하지 않습니다.</font>");
			$("#chk_password_div").addClass("guard3");
			return;
		}

		var checkMix2Result = checkMix2($("#password").val());

		if(checkMix2Result != 0){
			$("#chk_password_div").html("<font color='red'>[사용불가] " + checkMix2Result +"</font>");
			$("#chk_password_div").addClass("guard4");
			return;
		}

		if(!checkMix($("#password").val())){
			$("#chk_password_div").html("<font color='red'>[사용불가] 안전한 비밀번호 기준에 맞지 않습니다.</font>");
			$("#chk_password_div").addClass("guard4");
			return;
		}

		if(!chkPasswdDanger($("#password").val())){
			$("#chk_password_div").html("<font color='red'>[사용불가] 안전한 비밀번호 기준에 맞지 않습니다.</font>");
			$("#chk_password_div").addClass("guard4");
			return;
		}


		if(!chkPasswdNormal($("#password").val())){
			$("#chk_password_div").html("[보통] 적정수준의 안전한 비밀번호입니다.");
			$("#chk_password_div").addClass("guard2");
			return;
		}

		if(!chkPasswdBest($("#password").val())){
			$("#chk_password_div").html("<font color='blue'>[안전] 안전한 비밀번호입니다.</font>");
			$("#chk_password_div").addClass("guard1");
			return;
		}

		$("#chk_password_div").html("<font color='blue'>사용가능한 비밀번호입니다.</font>");
		$("#chk_password_div").addClass("guard1");
		return;

	}

	function chkPasswdRe(){
		if($("#password2").val().length > 0){
			if ($("#password").val() != $("#password2").val()){
				$("#chk_password2_div").html("비밀번호가 일치하지 않습니다.");
				$("#chk_password2_div").addClass("fcRed");
				
				return;
			}else{
				$("#chk_password2_div").html("입력한 비밀번호가 일치합니다.");
				$("#chk_password2_div").removeClass("fcRed");
				return;
			}
		}
	}

	function insUserEntry(){
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

		if ($("#email2").val().indexOf("netsgo.com")>-1){
			if (confirm("네츠고(netsgo.com)의 이메일계정을 사용하실 경우 바이러스 긴급 경보 등의 정보를 수신하실 수 없습니다.\n 이메일 계정을 변경하시겠습니까?")){
				$("#email2").focus();
				return;
			}
		}

		var email = $("#email1").val() +"@"+ $("#email2").val();

		if($("#chk_member_yn").val() == 'N' || $("#email").val() != email){
			alert("가입 할 E-mail 주소의 중복여부를 확인해 주세요.");
			$("#email1").focus();
			return;
		}

		if(!Common.isValue($("#cust_id").val())){
			alert('ID를 입력하세요.');
			$("#cust_id").focus();
			return;
		}

		if(!Check.engandnumber($("#cust_id").val())){
			alert('ID는 영문소문자 또는 숫자만 입력하십시오.');
			$("#cust_id").focus();
			return;
		}

		if($("#cust_id").val().length < 4 || $("#cust_id").val().length > 16){
			alert('ID는 4자리이상 16자리 미만으로 입력해야 합니다.');
			$("#cust_id").focus();
			return;
		}

		if($("#hiddenId").val() == ""){
			alert('사용가능한 ID를 입력하세요.');
			$("#cust_id").focus();
			return;
		}

		if(!Common.isValue($("#password").val())){
			alert('비밀번호를 입력하세요.');
			$("#password").focus();
			return;
		}

		if($("#password").val().length < 8 || $("#password").val().length > 16){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.');
			$("#password").focus();
			return;
		}

		if(!chkPasswd2()){
			alert('비밀번호는 전화번호등 단순번호를 사용할 수 없습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!chkPasswdContinue($("#password").val())){
			alert('보안상의 이유로 한 문자로 연속된 비밀번호는 허용하지 않습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!chkPasswdDanger($("#password").val())){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		var checkMix2Result = checkMix2($("#password").val());

		if(checkMix2Result != 0){
			alert(checkMix2Result);
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!checkMix($("#password").val())){
			alert("안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.");
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if($("#password").val() != $("#password2").val()){
			alert('두 번 입력받은 비밀번호가 동일하지 않습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if($("#hint_type option:selected").val() == "000"){
			alert('비밀번호 힌트를 선택하십시오.');
			$("#hint_type").focus();
			return;
		}

		if($("#hint_type").val() == "014"){
			if(!Common.isValue($("#hint_quest_etc").val())){
				alert('비밀번호 힌트를 등록하십시오.');
				$("#hint_quest_etc").focus();
				return;
			}
		}

		if(!Common.isValue($("#hint_answer").val())){
			alert('비밀번호 힌트에 대한 답변을 입력하십시오.');
			$("#hint_answer").focus();
			return;
		}

		if (!Common.isValue($("#tel_no_cell_2").val())){
			alert("휴대전화번호 중간번호를 입력해 주십시오.");
			$("#tel_no_cell_2").focus();
			return;
		}

		if (isNaN($("#tel_no_cell_2").val())){
			alert("휴대전화번호 중간번호는 숫자로만 입력해 주십시오.");
			$("#tel_no_cell_2").focus();
			return;
		}

		if (!Common.isValue($("#tel_no_cell_3").val())){
			alert("휴대전화번호 뒷번호를 입력해 주십시오.");
			$("#tel_no_cell_3").focus();
			return;
		}

		if (isNaN($("#tel_no_cell_3").val())){
			alert("휴대전화번호 뒷번호는 숫자로만 입력해 주십시오.");
			$("#tel_no_cell_3").focus();
			return;
		}

		if (Common.isValue($("#tel_no_2").val())){
			if (isNaN($("#tel_no_2").val())){
				alert("일반전화번호 중간번호는 숫자로만 입력해 주십시오.");
				$("#tel_no_2").focus();
				return;
			}
		}

		if (Common.isValue($("#tel_no_3").val())){
			if (isNaN($("#tel_no_3").val())){
				alert("일반전화번호 뒷번호는 숫자로만 입력해 주십시오.");
				$("#tel_no_3").focus();
				return;
			}
		}

		$("#customerForm").attr("action", "/kr/site/customer/insUserEntry.do");
		$("#customerForm").attr("target", "_self");

		$("#customerForm").ajaxSubmit({success: function(json) {
			if(json['err_code'] == "9000"){
				alert('실명인증 후 다시 가입을 하십시오.');
				window.location.href = "userEntry.html";
			}else if(json['err_code'] == "9002"){
				// id가 존재할 경우  // 보유제품이 존재할 경우
				alert('이미 등록된 주민등록번호입니다\n입력하신 주민등록번호는 유료제품회원으로 등록되어 있습니다.');
			}else if(json['err_code'] == "9003"){
				// id가 존재할 경우  // 보유제품이 존재하지 않을 경우
				alert('이미 등록된 회원입니다.\n입력하신 이름과 이메일은 무료 웹회원으로 등록되어 있습니다.');
			}else if(json['err_code'] == "9004"){
				// id가 존재하지 않을 경우 // 보유제품이 존재할 경우 (기업회원만 존재)
				//alert('');
			}else if(json['err_code'] == "9005"){
				// id가 중복 존재할 경우
				alert('이미 등록된 ID(중복)입니다.\n다른 아이디로 신청을 부탁드립니다. ');
			}else{
				if($("#mailsvn1").is(':checked')){
					if($("#today").val() >= '20091217' && $("#today").val() <= '20100118'){
						alert('신규가입 이벤트에 자동응모 되었습니다.');
					}
				}
				$("#reg_date").attr("value",json['reg_date']);
				$("#customerForm").attr("action", "/kr/site/customer/userEntryFinish.do");
				$("#customerForm").attr("target", "_self");
				$("#customerForm").submit();
				//location.href = "/kr/site/customer/userEntryFinish.do";
			}
		}});

	}

	function openCert(){
		if (!Common.isValue($("#p_name").val())){
			alert("부모님 성함을 입력해 주십시오.");
			$("#p_name").focus();
			return;
		}

		if (!Common.isValue($("#p_ssn1").val())){
			alert("주민번호를 입력해 주십시오.");
			$("#p_ssn1").focus();
			return;
		}

		if (isNaN($("#p_ssn1").val())){
			alert("주민번호는 숫자로만 입력해 주십시오.");
			$("#p_ssn1").focus();
			return;
		}

		if($("#p_ssn1").val().length != 6){
			alert('올바른 주민번호를 입력해 주십시오.');
			$("#p_ssn1").focus();
			return;
		}

		if (!Common.isValue($("#p_ssn2").val())){
			alert("주민번호를 입력해 주십시오.");
			$("#p_ssn2").focus();
			return;
		}

		if (isNaN($("#p_ssn2").val())){
			alert("주민번호는 숫자로만 입력해 주십시오.");
			$("#p_ssn2").focus();
			return;
		}

		if($("#p_ssn2").val().length != 7){
			alert('올바른 주민번호를 입력해 주십시오.');
			$("#p_ssn2").focus();
			return;
		}

		var p_ssn = $("#p_ssn1").val() + $("#p_ssn2").val();
		$("#p_ssn").val(p_ssn);

		if (!Common.isValue($("#p_cell_no_2").val())){
			alert("휴대전화번호 중간번호를 입력해 주십시오.");
			$("#p_cell_no_2").focus();
			return;
		}

		if (isNaN($("#p_cell_no_2").val())){
			alert("휴대전화번호 중간번호는 숫자로만 입력해 주십시오.");
			$("#p_cell_no_2").focus();
			return;
		}

		if (!Common.isValue($("#p_cell_no_3").val())){
			alert("휴대전화번호 뒷번호를 입력해 주십시오.");
			$("#p_cell_no_3").focus();
			return;
		}

		if (isNaN($("#p_cell_no_3").val())){
			alert("휴대전화번호 뒷번호는 숫자로만 입력해 주십시오.");
			$("#p_cell_no_3").focus();
			return;
		}

		POPUP.open('', 'openCert', {width: 420, height: 260});

		$("#customerForm").attr("action", "/kr/site/customer/chkChildCert.do");
		$("#customerForm").attr("target", "openCert");

		$("#customerForm").submit();
	}

	function insUserEntryChild(){
		/*if (!Common.isValue($("#p_name").val())){
			alert("부모님 성함을 입력해 주십시오.");
			$("#p_name").focus();
			return;
		}

		if (!Common.isValue($("#p_ssn1").val())){
			alert("주민번호를 입력해 주십시오.");
			$("#p_ssn1").focus();
			return;
		}

		if (isNaN($("#p_ssn1").val())){
			alert("주민번호는 숫자로만 입력해 주십시오.");
			$("#p_ssn1").focus();
			return;
		}

		if($("#p_ssn1").val().length != 6){
			alert('올바른 주민번호를 입력해 주십시오.');
			$("#p_ssn1").focus();
			return;
		}

		if (!Common.isValue($("#p_ssn2").val())){
			alert("주민번호를 입력해 주십시오.");
			$("#p_ssn2").focus();
			return;
		}

		if (isNaN($("#p_ssn2").val())){
			alert("주민번호는 숫자로만 입력해 주십시오.");
			$("#p_ssn2").focus();
			return;
		}

		if($("#p_ssn2").val().length != 7){
			alert('올바른 주민번호를 입력해 주십시오.');
			$("#p_ssn2").focus();
			return;
		}

		if(!$('#childagree').attr('checked')){
			alert("주민등록번호 처리에 동의해 주십시오.");
			return;
		}

		if (!Common.isValue($("#p_cell_no_2").val())){
			alert("휴대전화번호 중간번호를 입력해 주십시오.");
			$("#p_cell_no_2").focus();
			return;
		}

		if (isNaN($("#p_cell_no_2").val())){
			alert("휴대전화번호 중간번호는 숫자로만 입력해 주십시오.");
			$("#p_cell_no_2").focus();
			return;
		}

		if (!Common.isValue($("#p_cell_no_3").val())){
			alert("휴대전화번호 뒷번호를 입력해 주십시오.");
			$("#tel_no_cell_3").focus();
			return;
		}

		if (isNaN($("#p_cell_no_3").val())){
			alert("휴대전화번호 뒷번호는 숫자로만 입력해 주십시오.");
			$("#tel_no_cell_3").focus();
			return;
		}

		if (Common.isValue($("#tel_no_2").val())){
			if (isNaN($("#tel_no_2").val())){
				alert("일반전화번호 중간번호는 숫자로만 입력해 주십시오.");
				$("#tel_no_2").focus();
				return;
			}
		}

		if (Common.isValue($("#tel_no_3").val())){
			if (isNaN($("#tel_no_3").val())){
				alert("일반전화번호 뒷번호는 숫자로만 입력해 주십시오.");
				$("#tel_no_3").focus();
				return;
			}
		}

		if (!Common.isValue($("#res_seq").val())){
			alert("부모님 핸드폰 인증이 필요합니다.");
			$("#p_ssn2").focus();
			return;
		}
*/
		if(!Common.isValue($("#parents_auth").val())){
			alert('보호자 동의 인증완료 후 회원 가입이 가능합니다.');
			$("#parents_auth").focus();
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

		if ($("#email2").val().indexOf("netsgo.com")>-1){
			if (confirm("네츠고(netsgo.com)의 이메일계정을 사용하실 경우 바이러스 긴급 경보 등의 정보를 수신하실 수 없습니다.\n 이메일 계정을 변경하시겠습니까?")){
				$("#email2").focus();
				return;
			}
		}

		var email = $("#email1").val() +"@"+ $("#email2").val();

		if($("#chk_member_yn").val() == 'N' || $("#email").val() != email){
			alert("가입 할 E-mail 주소의 중복여부를 확인해 주세요.");
			$("#email1").focus();
			return;
		}

		if(!Common.isValue($("#cust_id").val())){
			alert('ID를 입력하세요.');
			$("#cust_id").focus();
			return;
		}

		if(!Check.engandnumber($("#cust_id").val())){
			alert('ID는 영문소문자 또는 숫자만 입력하십시오.');
			$("#cust_id").focus();
			return;
		}

		if($("#cust_id").val().length < 4 || $("#cust_id").val().length > 16){
			alert('ID는 4자리이상 16자리 미만으로 입력해야 합니다.');
			$("#cust_id").focus();
			return;
		}

		if($("#hiddenId").val() == ""){
			alert('사용가능한 ID를 입력하세요.');
			$("#cust_id").focus();
			return;
		}

		if(!Common.isValue($("#password").val())){
			alert('비밀번호를 입력하세요.');
			$("#password").focus();
			return;
		}


		if($("#password").val().length < 8 || $("#password").val().length > 16){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.');
			$("#password").focus();
			return;
		}

		if(!chkPasswd2()){
			alert('비밀번호는 전화번호등 단순번호를 사용할 수 없습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!chkPasswdContinue($("#password").val())){
			alert('보안상의 이유로 한 문자로 연속된 비밀번호는 허용하지 않습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!chkPasswdDanger($("#password").val())){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		var checkMix2Result = checkMix2($("#password").val());

		if(checkMix2Result != 0){
			alert(checkMix2Result);
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!checkMix($("#password").val())){
			alert("안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.");
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if($("#password").val() != $("#password2").val()){
			alert('두 번 입력받은 비밀번호가 동일하지 않습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if($("#hint_type option:selected").val() == "000"){
			alert('비밀번호 힌트를 선택하십시오.');
			$("#hint_type").focus();
			return;
		}

		if($("#hint_type").val() == "014"){
			if(!Common.isValue($("#hint_quest_etc").val())){
				alert('비밀번호 힌트를 등록하십시오.');
				$("#hint_quest_etc").focus();
				return;
			}
		}

		if(!Common.isValue($("#hint_answer").val())){
			alert('비밀번호 힌트에 대한 답변을 입력하십시오.');
			$("#hint_answer").focus();
			return;
		}

		if (!Common.isValue($("#tel_no_cell_2").val())){
			alert("휴대전화번호 중간번호를 입력해 주십시오.");
			$("#tel_no_cell_2").focus();
			return;
		}

		if (isNaN($("#tel_no_cell_2").val())){
			alert("휴대전화번호 중간번호는 숫자로만 입력해 주십시오.");
			$("#tel_no_cell_2").focus();
			return;
		}

		if (!Common.isValue($("#tel_no_cell_3").val())){
			alert("휴대전화번호 뒷번호를 입력해 주십시오.");
			$("#tel_no_cell_3").focus();
			return;
		}

		if (isNaN($("#tel_no_cell_3").val())){
			alert("휴대전화번호 뒷번호는 숫자로만 입력해 주십시오.");
			$("#tel_no_cell_3").focus();
			return;
		}

		$("#telecom_dist").attr("disabled", false);
		$("#p_cell_no_1").attr("disabled", false);

		$("#customerForm").attr("action", "/kr/site/customer/insUserEntryChild.do");
		$("#customerForm").attr("target", "_self");

		$("#customerForm").ajaxSubmit({success: function(json) {
			if(json['err_code'] == "8999"){
				alert('보호자 동의 인증완료 후 회원 가입이 가능합니다.');
			}			
			else if(json['err_code'] == "9000"){
				alert('실명인증 후 다시 가입을 하십시오.');
				window.location.href = "userEntry.html";
			}else if(json['err_code'] == "9002"){
				// id가 존재할 경우  // 보유제품이 존재할 경우
				alert('이미 등록된 주민등록번호입니다\n입력하신 주민등록번호는 유료제품회원으로 등록되어 있습니다.');
			}else if(json['err_code'] == "9003"){
				// id가 존재할 경우  // 보유제품이 존재하지 않을 경우
				alert('이미 등록된 회원입니다.\n입력하신 이름과 이메일은 무료 웹회원으로 등록되어 있습니다.');
			}else if(json['err_code'] == "9004"){
				// id가 존재하지 않을 경우 // 보유제품이 존재할 경우 (기업회원만 존재)
				//alert('');
			}else if(json['err_code'] == "9005"){
				// id가 중복 존재할 경우
				alert('이미 등록된 ID(중복)입니다.\n다른 아이디로 신청을 부탁드립니다. ');
			}else{
				if($("#mailsvn1").is(':checked')){
					if($("#today").val() >= '20091217' && $("#today").val() <= '20100118'){
						alert('신규가입 이벤트에 자동응모 되었습니다.');
					}
				}
				location.href = "userEntryFinish.html";
			}
		}});
	}

	function getUserEntryBiz(){
		if($("#check1").is(':checked') == false){
			alert("이용약관에 동의해 주세요.");
			$("#check1").focus();
			return;
		}

		if($("#check2").is(':checked') == false){
			alert("서비스 제공을 위한 개인정보 수집 및 이용 안내에 동의해 주세요.");
			$("#check2").focus();
			return;
		} else {
			$("#check").val("YY");
		}

		$("#customerForm").attr("action", "/kr/site/customer/userEntryBizCertify.do");
		$("#customerForm").attr("target", "_self");

		$("#customerForm").submit();
	}

	// 회원가입여부(사업자번호).
	function chkBusinessNo(){

		var business_no = $("#businessNo1").val() +"-"+ $("#businessNo2").val() +"-"+ $("#businessNo3").val();
		
		if (!Common.isValue($("#businessNo1").val())){
			alert("사업자등록번호를 입력해 주십시오.");
			$("#businessNo1").focus();
			return;
		}

		if (isNaN($("#businessNo1").val())){
			alert("사업자등록번호는 숫자로만 입력해 주십시오.");
			$("#businessNo1").focus();
			return;
		}

		if($("#businessNo1").val().length != 3){
			alert('올바른 사업자등록번호를 입력해 주십시오.');
			$("#businessNo1").focus();
			return;
		}

		if (!Common.isValue($("#businessNo2").val())){
			alert("사업자등록번호를 입력해 주십시오.");
			$("#businessNo2").focus();
			return;
		}

		if (isNaN($("#businessNo2").val())){
			alert("사업자등록번호는 숫자로만 입력해 주십시오.");
			$("#businessNo2").focus();
			return;
		}

		if($("#businessNo2").val().length != 2){
			alert('올바른 사업자등록번호를 입력해 주십시오.');
			$("#businessNo2").focus();
			return;
		}

		if (!Common.isValue($("#businessNo3").val())){
			alert("사업자등록번호를 입력해 주십시오.");
			$("#businessNo3").focus();
			return;
		}

		if (isNaN($("#businessNo3").val())){
			alert("사업자등록번호는 숫자로만 입력해 주십시오.");
			$("#businessNo3").focus();
			return;
		}

		if($("#businessNo3").val().length != 5){
			alert('올바른 사업자등록번호를 입력해 주십시오.');
			$("#businessNo3").focus();
			return;
		}
		
		if(!Check.business_id(business_no)){
			alert ("잘못된 사업자등록번호입니다.\n사업자등록번호를 다시 입력하세요.");
			$("#businessNo1").focus();
			return;
		}

		$("#businessNo").val(business_no);
	/*	$("#customerForm").attr("action", "/kr/site/customer/chkBusinessNo.do");
		$("#customerForm").attr("target", "_self");*/
		
		$.ajax({
            url: $("#projPath").val() + "/site/customer/chkBusinessNo.do",
            dataType: 'json',
            data: $("#customerForm").serialize,
            success: function(json) {
                if (json.isSuccess && json.resultData == "NM") {
                	//if(json['entry_confirm_value'] == "NM"){
    				$("#customerForm").attr("action", "<c:out value='${projPath_s}'/>/site/customer/userEntryBizRegiForm.do");
    				$("#customerForm").attr("target", "_self");
    				$("#customerForm").submit();
    			}else{
    				//alert('사업자등록번호가 올바르지 않습니다.\n사업자등록번호를 다시 입력하세요.');
    				alert('중복된사업자번호입니다.');
    				return;
    			}
                
/*                if(json['entry_confirm_value'] == "NM"){
    				$("#customerForm").attr("action", "/kr/site/customer/userEntryBizRegiForm.do");
    				$("#customerForm").attr("target", "_self");

    				$("#customerForm").submit();
    			}else{
    				//alert('사업자등록번호가 올바르지 않습니다.\n사업자등록번호를 다시 입력하세요.');
    				alert('중복된사업자번호입니다.');
    				return;
    			}*/
            },
            error: function(x, o, e){
                alert("Network Error!");
            }
        });
	}

	function insUserEntryBiz(){
		if(!Common.isValue($("#businessNo").val())){
			alert('사업자등록번호를 입력하세요.');
			$("#businessNo").focus();
			return;
		}

	//	if(!Check.business_id(business_no)){
		if(!Check.business_id($("#businessNo").val())){
			alert ("잘못된 사업자등록번호입니다.\n사업자등록번호를 다시 입력하세요.");
			$("#businessNo1").focus();
			return;
		}

		if(!Common.isValue($("#custId").val())){
			alert('ID를 입력하세요.');
			$("#custId").focus();
			return;
		}

		if(!Check.engandnumber($("#custId").val())){
			alert('ID는 영문소문자 또는 숫자만 입력하십시오.');
			$("#custId").focus();
			return;
		}

		if($("#custId").val().length < 4 || $("#custId").val().length > 16){
			alert('ID는 4자리이상 16자리 미만으로 입력해야 합니다.');
			$("custId").focus();
			return;
		}

		if($("#hiddenId").val() == ""){
			alert('사용가능한 ID를 입력하세요.');
			$("#custId").focus();
			return;
		}

		if(!Common.isValue($("#password").val())){
			alert('비밀번호를 입력하세요.');
			$("#password").focus();
			return;
		}


		if($("#password").val().length < 8 || $("#password").val().length > 16){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.');
			$("#password").focus();
			return;
		}

		if(!chkPasswd2()){
			alert('비밀번호는 전화번호등 단순번호를 사용할 수 없습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!chkPasswdContinue($("#password").val())){
			alert('보안상의 이유로 한 문자로 연속된 비밀번호는 허용하지 않습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!chkPasswdDanger($("#password").val())){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		var checkMix2Result = checkMix2($("#password").val());

		if(checkMix2Result != 0){
			alert(checkMix2Result);
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!checkMix($("#password").val())){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 비밀번호는 숫자+영문+특수문자의 조합으로 8자리 이상으로 입력해 주세요.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if($("#password").val() != $("#password2").val()){
			alert('두 번 입력받은 비밀번호가 동일하지 않습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if($("#hintType option:selected").val() == "000"){
			alert('비밀번호 힌트를 선택하십시오.');
			$("#hintType").focus();
			return;
		}

		if($("#hintType").val() == "014"){
			if(!Common.isValue($("#hintQuestEtc").val())){
				alert('비밀번호 힌트를 등록하십시오.');
				$("#hintQuestEtc").focus();
				return;
			}
		}

		if(!Common.isValue($("#hintAnswer").val())){
			alert('비밀번호 힌트에 대한 답변을 입력하십시오.');
			$("#hintAnswer").focus();
			return;
		}

		if (!Common.isValue($("#comName").val())){
			alert("회사명을 입력해 주십시오.");
			$("#comName").focus();
			return;
		}

		if (!Common.isValue($("#zip1").val())){
			alert("회사 우편번호를 입력해 주십시오.");
			$("#zip1").focus();
			return;
		}

		if (!Common.isValue($("#zip2").val())){
			alert("회사 우편번호를 입력해 주십시오.");
			$("#zip2").focus();
			return;
		}

		if (!Common.isValue($("#zipCodeAddress").val())){
			alert("회사 주소를 입력해 주십시오.");
			$("#zipCodeAddress").focus();
			return;
		}

		if (!Common.isValue($("#address").val())){
			alert("세부 주소를 입력해 주십시오.");
			$("#address").focus();
			return;
		}

		if (!Common.isValue($("#chargerName").val())){
			alert("담당자명을 입력해 주십시오.");
			$("#chargerName").focus();
			return;
		}

		if (!Common.isValue($("#deptName").val())){
			alert("담당부서를 입력해 주십시오.");
			$("#deptName").focus();
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

		if ($("#email2").val().indexOf("netsgo.com") >- 1){
			if (confirm("네츠고(netsgo.com)의 이메일계정을 사용하실 경우 바이러스 긴급 경보 등의 정보를 수신하실 수 없습니다.\n 이메일 계정을 변경하시겠습니까?")){
				$("#email2").focus();
				return;
			}
		}

		if (!Common.isValue($("#telNoCell2").val())){
			alert("휴대전화번호 중간번호를 입력해 주십시오.");
			$("#telNoCell2").focus();
			return;
		}

		if (isNaN($("#telNoCell2").val())){
			alert("휴대전화번호 중간번호는 숫자로만 입력해 주십시오.");
			$("#telNoCell2").focus();
			return;
		}

		if (!Common.isValue($("#tel_no_cell_3").val())){
			alert("휴대전화번호 뒷번호를 입력해 주십시오.");
			$("#tel_no_cell_3").focus();
			return;
		}

		if (isNaN($("#telNoCell3").val())){
			alert("휴대전화번호 뒷번호는 숫자로만 입력해 주십시오.");
			$("#telNoCell3").focus();
			return;
		}

		if (Common.isValue($("#telNo2").val())){
			if (isNaN($("#telNo2").val())){
				alert("일반전화번호 중간번호는 숫자로만 입력해 주십시오.");
				$("#telNo2").focus();
				return;
			}
		}

		if (Common.isValue($("#telNo3").val())){
			if (isNaN($("#telNo3").val())){
				alert("일반전화번호 뒷번호는 숫자로만 입력해 주십시오.");
				$("#telNo3").focus();
				return;
			}
		}

		var email = $("#email1").val() +"@"+ $("#email2").val();
	//	var email = $("#email1").val() + $("#email2").val();
		$("#email").val(email);

		var zip_code = $("#zip1").val() + $("#zip2").val();
		$("#zip_code").val(zip_code);

		$("#customerForm").attr("action", "<c:out value='${projPath_s}'/>/site/customer/insUserEntryBiz.do");
		$("#customerForm").attr("target", "_self");
		

		$("#customerForm").ajaxSubmit({success: function(json) {
			if(json['err_code'] == "9002"){
				// 사업자번호 중복  존재여부
				alert('사업자등록번호가 이미 등록되어있습니다.\n고객만족센터로 문의하시기 바랍니다.');
			}else if(json['err_code'] == "9003"){
				// id가 중복 존재할 경우
				alert('이미 등록된 ID(중복)입니다.\n다른 아이디로 신청을 부탁드립니다. ');
			}else{
				if($("#mailsvn1").is(':checked')){
					if($("#today").val() >= '20091217' && $("#today").val() <= '20100118'){
						alert('신규가입 이벤트에 자동응모 되었습니다.');
					}
				}
				$("#reg_date").attr("value",json['reg_date']);
				$("#customerForm").attr("action", "/kr/site/customer/userEntryBizFinish.do");
				$("#customerForm").attr("target", "_self");
				$("#customerForm").submit();
				//location.href = "/kr/site/customer/userEntryBizFinish.do";
			}
		}});
	}

	function getUserEntryForeign(){
		if($("#check1").is(':checked') == false){
			alert("이용약관에 동의해 주세요.");
			$("#check1").focus();
			return;
		}

		if($("#check2").is(':checked') == false){
			alert("서비스 제공을 위한 개인정보 수집 및 이용 안내에 동의해 주세요.");
			$("#check2").focus();
			return;
		} else {
			$("#check").val("YY");
		}

		$("#customerForm").attr("action", "/kr/site/customer/userEntryForeignRegiForm.do");
		$("#customerForm").attr("target", "_self");

		$("#customerForm").submit();
	}

	function insUserEntryForeign(){
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

		if ($("#email2").val().indexOf("netsgo.com")>-1){
			if (confirm("네츠고(netsgo.com)의 이메일계정을 사용하실 경우 바이러스 긴급 경보 등의 정보를 수신하실 수 없습니다.\n 이메일 계정을 변경하시겠습니까?")){
				$("#email2").focus();
				return;
			}
		}

		var email = $("#email1").val() +"@"+ $("#email2").val();

		if($("#chk_member_yn").val() == 'N' || $("#email").val() != email){
			alert("가입 할 E-mail 주소의 중복여부를 확인해 주세요.");
			$("#email1").focus();
			return;
		}

		if(!Common.isValue($("#cust_name").val())){
			alert('이름을 입력하세요.');
			$("#cust_name").focus();
			return;
		}

		if(!Common.isValue($("#cust_id").val())){
			alert('ID를 입력하세요.');
			$("#cust_id").focus();
			return;
		}

		if(!Check.engandnumber($("#cust_id").val())){
			alert('ID는 영문소문자 또는 숫자만 입력하십시오.');
			$("#cust_id").focus();
			return;
		}

		if($("#cust_id").val().length < 4 || $("#cust_id").val().length > 16){
			alert('ID는 4자리이상 16자리 미만으로 입력해야 합니다.');
			$("#cust_id").focus();
			return;
		}

		if($("#hiddenId").val() == ""){
			alert('사용가능한 ID를 입력하세요.');
			$("#cust_id").focus();
			return;
		}

		if($("#birthday_year option:selected").val() == ""){
			alert('생년월일을 선택하십시오.');
			$("#birthday_year").focus();
			return;
		}

		if($("#birthday_month option:selected").val() == ""){
			alert('생년월일을 선택하십시오.');
			$("#birthday_month").focus();
			return;
		}

		if($("#birthday_day option:selected").val() == ""){
			alert('생년월일을 선택하십시오.');
			$("#birthday_day").focus();
			return;
		}

		if($("#sexM").is(':checked') == false && $("#sexF").is(':checked') == false){
			alert('성별을 선택하십시오.');
			$("#sexM").focus();
			return;
		}

		if(!Common.isValue($("#password").val())){
			alert('비밀번호를 입력하세요.');
			$("#password").focus();
			return;
		}


		if($("#password").val().length < 8 || $("#password").val().length > 16){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.');
			$("#password").focus();
			return;
		}

		if(!chkPasswd2()){
			alert('비밀번호는 전화번호등 단순번호를 사용할 수 없습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!chkPasswdContinue($("#password").val())){
			alert('보안상의 이유로 한 문자로 연속된 비밀번호는 허용하지 않습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!chkPasswdDanger($("#password").val())){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		var checkMix2Result = checkMix2($("#password").val());

		if(checkMix2Result != 0){
			alert(checkMix2Result);
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!checkMix($("#password").val())){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 비밀번호는 숫자+영문+특수문자의 조합으로 8자리 이상으로 입력해 주세요.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if($("#password").val() != $("#password2").val()){
			alert('두 번 입력받은 비밀번호가 동일하지 않습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if($("#hint_type option:selected").val() == "000"){
			alert('비밀번호 힌트를 선택하십시오.');
			$("#hint_type").focus();
			return;
		}

		if($("#hint_type").val() == "014"){
			if(!Common.isValue($("#hint_quest_etc").val())){
				alert('비밀번호 힌트를 등록하십시오.');
				$("#hint_quest_etc").focus();
				return;
			}
		}

		if(!Common.isValue($("#hint_answer").val())){
			alert('비밀번호 힌트에 대한 답변을 입력하십시오.');
			$("#hint_answer").focus();
			return;
		}

		if (!Common.isValue($("#tel_no_cell_2").val())){
			alert("휴대전화번호 중간번호를 입력해 주십시오.");
			$("#tel_no_cell_2").focus();
			return;
		}

		if (isNaN($("#tel_no_cell_2").val())){
			alert("휴대전화번호 중간번호는 숫자로만 입력해 주십시오.");
			$("#tel_no_cell_2").focus();
			return;
		}

		if (!Common.isValue($("#tel_no_cell_3").val())){
			alert("휴대전화번호 뒷번호를 입력해 주십시오.");
			$("#tel_no_cell_3").focus();
			return;
		}

		if (isNaN($("#tel_no_cell_3").val())){
			alert("휴대전화번호 뒷번호는 숫자로만 입력해 주십시오.");
			$("#tel_no_cell_3").focus();
			return;
		}

		if (Common.isValue($("#tel_no_2").val())){
			if (isNaN($("#tel_no_2").val())){
				alert("일반전화번호 중간번호는 숫자로만 입력해 주십시오.");
				$("#tel_no_2").focus();
				return;
			}
		}

		if (Common.isValue($("#tel_no_3").val())){
			if (isNaN($("#tel_no_3").val())){
				alert("일반전화번호 뒷번호는 숫자로만 입력해 주십시오.");
				$("#tel_no_3").focus();
				return;
			}
		}

		$("#customerForm").attr("action", "/kr/site/customer/insUserEntryForeign.do");
		$("#customerForm").attr("target", "_self");

		var birthday = $("#birthday_year").val() + "-" + $("#birthday_month").val() + "-" + $("#birthday_day").val();
		$("#birthday").val(birthday);

		$("#customerForm").ajaxSubmit({success: function(json) {
			if(json['err_code'] == "9002"){
				// id가 존재할 경우  // 보유제품이 존재할 경우
				alert('이미 등록된 주민등록번호입니다\n입력하신 주민등록번호는 유료제품회원으로 등록되어 있습니다.');
			}else if(json['err_code'] == "9003"){
				// id가 존재할 경우  // 보유제품이 존재하지 않을 경우
				alert('이미 등록된 회원입니다.\n입력하신 이름과 이메일은 무료 웹회원으로 등록되어 있습니다.');
			}else if(json['err_code'] == "9004"){
				// id가 존재하지 않을 경우 // 보유제품이 존재할 경우 (기업회원만 존재)
				//alert('');
			}else if(json['err_code'] == "9005"){
				// id가 중복 존재할 경우
				alert('이미 등록된 ID(중복)입니다.\n다른 아이디로 신청을 부탁드립니다. ');
			}else{
				if($("#mailsvn1").is(':checked')){
					if($("#today").val() >= '20091217' && $("#today").val() <= '20100118'){
						alert('신규가입 이벤트에 자동응모 되었습니다.');
					}
				}
				//location.href = "/kr/site/customer/userEntryFinish.do";
				$("#reg_date").attr("value",json['reg_date']);
				$("#customerForm").attr("action", "/kr/site/customer/userEntryFinish.do");
				$("#customerForm").attr("target", "_self");
				$("#customerForm").submit();				
			}
		}});
	}

	function getUserEntryOversea(){
		if($("#check1").is(':checked') == false){
			alert("이용약관에 동의해 주세요.");
			$("#check1").focus();
			return;
		}

		if($("#check2").is(':checked') == false){
			alert("서비스 제공을 위한 개인정보 수집 및 이용 안내에 동의해 주세요.");
			$("#check2").focus();
			return;
		} else {
			$("#check").val("YY");
		}

		$("#customerForm").attr("action", "/kr/site/customer/userEntryOverseaRegiForm.do");
		$("#customerForm").attr("target", "_self");

		$("#customerForm").submit();
	}

	function insUserEntryOversea(){
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

		if ($("#email2").val().indexOf("netsgo.com")>-1){
			if (confirm("네츠고(netsgo.com)의 이메일계정을 사용하실 경우 바이러스 긴급 경보 등의 정보를 수신하실 수 없습니다.\n 이메일 계정을 변경하시겠습니까?")){
				$("#email2").focus();
				return;
			}
		}

		var email = $("#email1").val() +"@"+ $("#email2").val();

		if($("#chk_member_yn").val() == 'N' || $("#email").val() != email){
			alert("가입 할 E-mail 주소의 중복여부를 확인해 주세요.");
			$("#email1").focus();
			return;
		}

		if(!Common.isValue($("#cust_name").val())){
			alert('이름을 입력하세요.');
			$("#cust_name").focus();
			return;
		}

		if(!Common.isValue($("#cust_id").val())){
			alert('ID를 입력하세요.');
			$("#cust_id").focus();
			return;
		}

		if(!Check.engandnumber($("#cust_id").val())){
			alert('ID는 영문소문자 또는 숫자만 입력하십시오.');
			$("#cust_id").focus();
			return;
		}

		if($("#cust_id").val().length < 4 || $("#cust_id").val().length > 16){
			alert('ID는 4자리이상 16자리 미만으로 입력해야 합니다.');
			$("#cust_id").focus();
			return;
		}

		if($("#hiddenId").val() == ""){
			alert('사용가능한 ID를 입력하세요.');
			$("#cust_id").focus();
			return;
		}

		if($("#birthday_year option:selected").val() == ""){
			alert('생년월일을 선택하십시오.');
			$("#birthday_year").focus();
			return;
		}

		if($("#birthday_month option:selected").val() == ""){
			alert('생년월일을 선택하십시오.');
			$("#birthday_month").focus();
			return;
		}

		if($("#birthday_day option:selected").val() == ""){
			alert('생년월일을 선택하십시오.');
			$("#birthday_day").focus();
			return;
		}

		if($("#sexM").is(':checked') == false && $("#sexF").is(':checked') == false){
			alert('성별을 선택하십시오.');
			$("#sexM").focus();
			return;
		}

		if($("#nation_code option:selected").val() == ""){
			alert('거주나라를 선택하십시오.');
			$("#nation_code").focus();
			return;
		}

		if(!Common.isValue($("#password").val())){
			alert('비밀번호를 입력하세요.');
			$("#password").focus();
			return;
		}


		if($("#password").val().length < 8 || $("#password").val().length > 16){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.');
			$("#password").focus();
			return;
		}

		if(!chkPasswd2()){
			alert('비밀번호는 전화번호등 단순번호를 사용할 수 없습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!chkPasswdContinue($("#password").val())){
			alert('보안상의 이유로 한 문자로 연속된 비밀번호는 허용하지 않습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!chkPasswdDanger($("#password").val())){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 영문+숫자+특수문자의 조합으로 8~16자로 입력해 주세요.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		var checkMix2Result = checkMix2($("#password").val());

		if(checkMix2Result != 0){
			alert(checkMix2Result);
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if(!checkMix($("#password").val())){
			alert('안전한 비밀번호 기준에 맞지 않습니다. 비밀번호는 숫자+영문+특수문자의 조합으로 8자리 이상으로 입력해 주세요.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if($("#password").val() != $("#password2").val()){
			alert('두 번 입력받은 비밀번호가 동일하지 않습니다.');
			$("#password").val("");
			$("#password2").val("");
			$("#password").focus();
			return;
		}

		if($("#hint_type option:selected").val() == "000"){
			alert('비밀번호 힌트를 선택하십시오.');
			$("#hint_type").focus();
			return;
		}

		if($("#hint_type").val() == "014"){
			if(!Common.isValue($("#hint_quest_etc").val())){
				alert('비밀번호 힌트를 등록하십시오.');
				$("#hint_quest_etc").focus();
				return;
			}
		}

		if(!Common.isValue($("#hint_answer").val())){
			alert('비밀번호 힌트에 대한 답변을 입력하십시오.');
			$("#hint_answer").focus();
			return;
		}

		$("#customerForm").attr("action", "/kr/site/customer/insUserEntryOversea.do");
		$("#customerForm").attr("target", "_self");

		var birthday = $("#birthday_year").val() + "-" + $("#birthday_month").val() + "-" + $("#birthday_day").val();
		$("#birthday").val(birthday);

		$("#customerForm").ajaxSubmit({success: function(json) {
			if(json['err_code'] == "9002"){
				// id가 존재할 경우  // 보유제품이 존재할 경우
				alert('이미 등록된 주민등록번호입니다\n입력하신 주민등록번호는 유료제품회원으로 등록되어 있습니다.');
			}else if(json['err_code'] == "9003"){
				// id가 존재할 경우  // 보유제품이 존재하지 않을 경우
				alert('이미 등록된 회원입니다.\n입력하신 이름과 이메일은 무료 웹회원으로 등록되어 있습니다.');
			}else if(json['err_code'] == "9004"){
				// id가 존재하지 않을 경우 // 보유제품이 존재할 경우 (기업회원만 존재)
				//alert('');
			}else if(json['err_code'] == "9005"){
				// id가 중복 존재할 경우
				alert('이미 등록된 ID(중복)입니다.\n다른 아이디로 신청을 부탁드립니다. ');
			}else{
				if($("#mailsvn1").is(':checked')){
					if($("#today").val() >= '20091217' && $("#today").val() <= '20100118'){
						alert('신규가입 이벤트에 자동응모 되었습니다.');
					}
				}
				//location.href = "/kr/site/customer/userEntryFinish.do";
				//location.href = "/kr/site/customer/userEntryFinish.do";
				$("#reg_date").attr("value",json['reg_date']);
				$("#customerForm").attr("action", "/kr/site/customer/userEntryFinish.do");
				$("#customerForm").attr("target", "_self");
				$("#customerForm").submit();					
			}
		}});
	}

	function chkPasswd2(){
		var chkArray = new Array();
		chkArray[0] = $("#cust_id").val();
		chkArray[1] = $("#tel_no_1").val() == undefined ? "0000" : $("#tel_no_1").val();
		chkArray[2] = $("#tel_no_2").val() == undefined ? "0000" : $("#tel_no_2").val();
		chkArray[3] = $("#tel_no_3").val() == undefined ? "0000" : $("#tel_no_3").val();
		chkArray[4] = $("#tel_no_cell_1").val() == undefined ? "0000" : $("#tel_no_cell_1").val();
		chkArray[5] = $("#tel_no_cell_2").val() == undefined ? "0000" : $("#tel_no_cell_2").val();
		chkArray[6] = $("#tel_no_cell_3").val() == undefined ? "0000" : $("#tel_no_cell_3").val();
		chkArray[7] = "0000";
		chkArray[8] = "1111";
		chkArray[9] = "2222";
		chkArray[10] = "3333";
		chkArray[11] = "4444";
		chkArray[12] = "5555";
		chkArray[13] = "6666";
		chkArray[14] = "7777";
		chkArray[15] = "8888";
		chkArray[16] = "9999";
		chkArray[17] = "00000";
		chkArray[18] = "11111";
		chkArray[19] = "22222";
		chkArray[20] = "33333";
		chkArray[21] = "44444";
		chkArray[22] = "55555";
		chkArray[23] = "66666";
		chkArray[24] = "77777";
		chkArray[25] = "88888";
		chkArray[26] = "99999";
		chkArray[27] = "1234";
		chkArray[28] = "12345";
		chkArray[29] = "123456";

		for(i = 0;i<chkArray.length;i++){
			if($("#password").val() == chkArray[i]) return false;
		}

		return true;
	}

	function chkPasswdContinue(String){
		var cnt = 0;
		for( var i=0; i < String.length; ++i)
		{
			if( String.charAt(0) == String.substring( i, i+1 ) ) ++cnt;
		}
		if( cnt != String.length ) {
			return true;
		}else{
			return false;
		}
	}

	function chkPasswdDanger(String){
		if(String.length > 16 && String.length < 8){
			return false;
		}else if(IsAlphabet(String)){
			return false;
		}else if(IsNumber(String)){
			return false;
		}else{
			return true;
		}
	}

	function chkPasswdNormal(String){
		if(String.length > 6 && String.length < 10){
			return false;
		}else if(IsAlphaNumeric2(String)){
			return false;
		}else{
			return true;
		}
	}

	function chkPasswdBest(String){
		if(String.length > 8 && String.length < 17){
			return false;
		}else if(IsAlphaNumeric(String)){
			return false;
		}else{
			return true;
		}
	}

	/*----------------------------------------------------------------------------*/
	function IsNumber(String) {

	   if (IsEmpty(String))
	      return false;

	   for (var i=0; i < String.length; i++) {
	      if ( (String.charAt(i) < "0") || (String.charAt(i) > "9") )
	         return false;
	   }

	   return true;
	}

	function IsAlphabet(String) {

	   if (IsEmpty(String))
	      return false;

	   for (var i=0; i < String.length; i++) {
	      if ( ( (String.charAt(i) < "A") || (String.charAt(i) > "Z") ) &&
	           ( (String.charAt(i) < "a") || (String.charAt(i) > "z") ) )
	         return false;
	   }

	   return true;
	}

	function IsAlphaNumeric(String) {

	   if (IsEmpty(String))
	      return false;

	   for (var i=0; i < String.length; i++) {
	      if ( ( (String.charAt(i) < "0") || (String.charAt(i) > "9") ) &&
	           ( ( (String.charAt(i) < "A") || (String.charAt(i) > "Z") ) &&
	             ( (String.charAt(i) < "a") || (String.charAt(i) > "z") ) ) )
	         return false;
	   }

	   return true;
	}

	function IsAlphaNumeric2(String) {

	   if (IsEmpty(String))
	      return false;

	   for (var i=0; i < String.length; i++) {
	      if ( ( (String.charAt(i) < "0") || (String.charAt(i) > "9") ) &&
	           ( (String.charAt(i) < "a") || (String.charAt(i) > "z") ) )
	         return false;
	   }

	   return true;
	}

	function IsEmpty(String) {

	   return !CheckValid(String, false);
	}

	function CheckValid(String, SpaceCheck) {

	   var retvalue = false;

	   for (var i=0; i<String.length; i++) {

	      if (SpaceCheck == true) {
	         if (String.charAt(i) == ' ') {
	            retvalue = true;
	            break;
	         }
	      } else {
	         if (String.charAt(i) != ' ') {
	            retvalue = true;
	            break;
	         }
	      }
	   }

	   return retvalue;
	}

	function winPopupOpen(sURL, sWindowName, w, h, sScroll) {
		  var x = (screen.width - w) / 2;
		  var y = (screen.height - h) / 2;

		  if (sScroll==null) sScroll = "no";

		  var sOption = "";
		  sOption = sOption + "toolbar=no, channelmode=no, location=no, directories=no, resizable=no, menubar=no";
		  sOption = sOption + ", scrollbars=" + sScroll + ", left=" + x + ", top=" + y + ", width=" + w + ", height=" + h;

		  var win = window.open(sURL, sWindowName, sOption);
		  return win;
	}

	/*특수문자 조합 추가. 11.10.06*/
	function checkMix(String) {

		var valid1 = true;
		var valid2 = true;
		var valid3 = true;
		var as="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var bs="0123456789";
		var cs="~!@$%^&*/?#+_-";
		var count=0;

		   if (IsEmpty(String))
		      return false;

		   for (var i=0; i < String.length; i++) {
			   if(as.indexOf(String.charAt(i)) > -1 ){
					valid1 = false;
				}
				if(bs.indexOf(String.charAt(i)) > -1){
					valid2 = false;
				}
				if(cs.indexOf(String.charAt(i)) > -1){
					valid3 = false;
				}
		   }

		  if(valid1) count++;
		  if(valid2) count++;
		  if(valid3) count++;

		  if(count > 0){
			  return false;
		  }

		  return true;

	}

	/* 비밀번호입력시 -- , ; , ' 들어올경우 등록불가 */
	function checkMix2(String) {
		var valid = true;
		var chkArray = new Array("--",";","'");
		var resultArray = new Array(chkArray.length);
		var result;
		var count = 0;

		if (IsEmpty(String)) return false;

		for(var i=0;i<chkArray.length; i++){
			result = String.search(chkArray[i]);
			if(i == 0 && result != -1) {
				resultArray[i] = "보안상의 이유로 입력하신 -(하이픈)은 연속하여 사용하실 수 없습니다.";
				count++;
			}else if(i == 1 && result != -1){
				resultArray[i] = "보안상의 이유로 입력하신 ;(세미콜론)은 사용하실 수 없습니다.";
				count++;
			}else if(i == 2 && result != -1){
				resultArray[i] = "보안상의 이유로 입력하신 '(작은따옴표)은 사용하실 수 없습니다.";
				count++;
			}
		}

		if(count > 0) return resultArray;

		return 0;
	}

