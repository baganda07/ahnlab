/**
 *
 */



function getProdName(idx) {
    var result;

    result = "";

    if (idx=="01") result = "V3 Internet Security 9.0";
    if (idx=="02") result = "V3 Endpoint Security 9.0";
    if (idx=="03") result = "V3 MSS";
    if (idx=="04") result = "V3 Net for Windows Server 9.0";
    if (idx=="05") result = "V3 Net for Unix/Linux Server";
    if (idx=="06") result = "PrivacyCare PCscan";
    if (idx=="07") result = "TrusLine";
    if (idx=="08") result = "TrusZone";
    if (idx=="09") result = "TrusWatcher";
    if (idx=="10") result = "AhnLab Policy Center 4.6";
    if (idx=="11") result = "AhnLab Patch Management";
    if (idx=="12") result = "AhnLab Privacy Management Suite";
    if (idx=="13") result = "AhnLab Privacy Management";
    if (idx=="14") result = "내PC지키미";
    if (idx=="15") result = "EMS";
    if (idx=="16") result = "ERS";
    if (idx=="17") result = "AhnLab Policy Center 4.0";
    if (idx=="18") result = "AhnLab Policy Center Appliance";
    if (idx=="19") result = "기업용 PC주치의";
    if (idx=="20") result = "TrusGuard";
    if (idx=="21") result = "TrusGuard DPX";
    if (idx=="22") result = "TrusGuard IPX";
    if (idx=="23") result = "TSM";
    if (idx=="24") result = "TrusGuard Manager";
    if (idx=="25") result = "TrusAnalyzer";
    if (idx=="26") result = "TS Engine Suite";
    if (idx=="27") result = "HackShield For Online Game 2.0";
    if (idx=="28") result = "AhnLab Online Security 2.0";
    if (idx=="29") result = "V3 Mobile 2.0";
    if (idx=="30") result = "V3 Mobile Plus";
    if (idx=="31") result = "Mobile Enterprise";
    if (idx=="32") result = "V3 Zip 2.0";
    if (idx=="33") result = "MDS";

    return result;
}

function getGroupName(idx) {
    var result;

    result = "";

    if (idx=="01") result = "온라인서비스";
    if (idx=="02") result = "클라이언트용";
    if (idx=="03") result = "서버용";
    if (idx=="04") result = "중앙관리용";
    if (idx=="05") result = "웹보안";
    if (idx=="06") result = "유틸리티";
    if (idx=="07") result = "네트워크 보안";
    if (idx=="08") result=  "엔드 포인트 관리";
    if (idx=="09") result=  "트랜잭션 보안";
    if (idx=="10") result=  "모바일 보안";
    if (idx=="11") result=  "PC 관리";
    if (idx=="12") result=  "엔드 포인트 보안";

    return result;
}

function getTypeName(idx) {
    var result;

    result = "";

    if (idx=="01") result = "신규";
    if (idx=="02") result = "재계약";
    if (idx=="03") result = "보상";


    return result;
}

function getMethod(idx) {
    var result;

    result = "";


    if (idx == "01") result = "이메일";
    if (idx == "02") result = "팩스";


    return result;
}

function getWorkKind(idx){
	 var result;

    if (idx == "01") result = "공공";
    if (idx == "02") result = "교육";
    if (idx == "03") result = "대기업";
    if (idx == "04") result = "금융";
    if (idx == "05") result = "중소기업";

    return result;
}

function getProdListEmail(mysel) {

    var arrayOfProd = mysel.split("|");
    var arrayOfSpec;
    var group, prod, pd_cnt, type;

    document.write ("<table width='525' cellpadding='0' cellspacing='0' border='0' align='center'>");
    document.write ("<tr><td><img src='http://image.ahnlab.com/letter/b2b/purchase/estimate_title_03.gif' width='89' height='22' border='0'></td></tr>");
    document.write ("<tr bgcolor='#f1f1f1' height='30'>");
    document.write ("    <td width='110' class='line' align='center' height='30'>분류</td>");
    document.write ("  <td width='280' align='center' class='line'>제품명</td>");
    document.write ("    <td width='65' class='line' align='center' height='30'>수량</td>");
    document.write ("   <td width='60' class='line' align='center' height='30'>구매조건</td>");
    document.write ("</tr>");
    document.write ("<tr><td height='10' colspan='3'><img src='http://image.ahnlab.com/line_margin_1x1.gif' width='1' height='1'></td></tr>");

    for (var i=0;i<arrayOfProd.length;i++) {
        if (arrayOfProd[i] == "") break;
        arrayOfSpec = arrayOfProd[i].split("_");
        group = getGroupName(arrayOfSpec[0]);
        prod = getProdName(arrayOfSpec[1]);
        pd_cnt = Number(arrayOfSpec[2]);
        type = getTypeName(arrayOfSpec[3]);
        if(pd_cnt > 0) {
            document.write ("<tr height='25'>");
            document.write ("   <td align='center' rowspan='2' valign='top'><div style='margin-top:7;'>"+group+"</td>");
            document.write (" <td class='line'>"+prod+"</td>");
            document.write (" <td align='center'>"+pd_cnt+"</td>");
            document.write (" <td align='center'>"+type+"</td>");
            document.write ("</tr>");
            document.write ("<tr><td height='5'><img src='http://image.ahnlab.com/line_margin_1x1.gif' width='1' height='1'></td></tr>");
            document.write ("<tr><td height='1' bgcolor='#d1d1d1'colspan='4'><img src='http://image.ahnlab.com/line_margin_1x1.gif' width='1' height='1'></td></tr>");
            document.write ("<tr><td height='5'><img src='http://image.ahnlab.com/line_margin_1x1.gif' width='1' height='1'></td></tr>");
        }
    }

    document.write ("</table>");
}
//-->



var JMap = function (obj) {
    
	/* Map Data 저장 각체 */
	var mapData = (obj != null) ? cloneObject(obj) : new Object();
	
	/**
	 * public
	 * 지정된 key 에 해당하는 value 를 넣는다
	 * @param key 키
	 * @param value 값
	 */
	this.put = function(key, value) {
		mapData[key] = value;
	}
	
	/**
	 * public
	 * 지정된 key 에 해당하는 value 를 얻는다
	 * @param key 키값
	 * @return 키에 해당하는 값
	 */
	this.get = function(key) {
		return mapData[key];
	}
	
	/**
	 * public
	 * 지정된 key 를 삭제한다
	 * @param key 키값
	 */
	this.remove = function(key) {
		for (var tKey in mapData) {
			if (tKey == key) {
				delete mapData[tKey];
				break;
			}
		}
	}
	
	/**
	 * public
	 * 맵의 전체 Key 값들을 배열로 얻는다
	 * @return key 값들의 Array
	 */
	this.keys = function() {
		var keys = [];
		for (var key in mapData) {
			keys.push(key);
		}
		return keys;
	}
	
	/**
	 * public
	 * 맵의 전체 값들을 배열로 얻는다.
	 * @return key 값들의 Array
	 */
	this.values = function() {
		var values = [];
		for (var key in mapData) {
			values.push(mapData[key]);
		}
		return values;
	}
	
	/**
	 * public
	 * Map에 key 가 포함되어 있다면 true
	 * @param key 키값
	 * @return 키값 포함 여부
	 */
	this.containsKey = function(key) {
		for (var tKey in mapData) {
			if (tKey == key) {
				return true;
			}
		}
		return false;
	}
	
	/**
	 * public
	 * Map이 비어있다면 true
	 * @return 맵이 비었는지의 여부
	 */
	this.isEmpty = function() {
		return (this.size() == 0);
	}
	
	/**
	 * public
	 * Map을 비운다
	 */
	this.clear = function() {
		for (var key in mapData) {
			delete mapData[key];
		}
	}
	
	/**
	 * public
	 * Map을 크기를 얻는다
	 * @return 맵의 크기
	 */
	this.size = function() {
		var size = 0;
		for (var key in mapData) {
			size++;
		}
		return size;
	}
	
	/**
	 * public
	 * Object 객체를 얻는다 (JSON 과 같은 외부 작업을 위해..)
	 * @return 문자열
	 */
	this.getObject = function() {
		return cloneObject(mapData);
	}
	
	/**
	 * private
	 * Object 객체를 얻는다 (JSON 과 같은 외부 작업을 위해..)
	 * @return 문자열
	 */
	var cloneObject = function(obj) {
		var cloneObj = {};
		for (var attrName in obj) {
			cloneObj[attrName] = obj[attrName];
		}
		return cloneObj;
	}
} // End of JMap Class
