(function(window) {
'use strict';

	var document = window.document,
			navigator = window.navigator,
			location = window.location;

	var root = window;
	var Emf;

	Emf = root.Emf = Emf || {};

	var opts = '';

	Emf.init = function(o) {
		//initial data setting
		//ex) Emf.data = o.data
		if(o.opts) {
			opts = String(o.opts);
		}
	};

	function getParseQueryValue(q, key, delimiter) {
		
		if(q.indexOf(key) < 0) return '';

		var s_idx = q.indexOf(key+'=') + (key.length + 1);
		var value = q.substr(s_idx, q.length - s_idx);
		var e_idx = s_idx + value.indexOf(delimiter);

		if(e_idx >= s_idx) {
			value = q.substr(s_idx, e_idx - s_idx);
		}

		return value;
	}
	
	function getCookie(name) {
		var cookieValue = getParseQueryValue(document.cookie,name,';');
		
		if(cookieValue !== undefined && cookieValue !== '') {
			return getParseQueryValue(document.cookie,name,';');
		}else {
			return;
		}
	}

	function getEpochTime(days) {
		var todayDate = new Date();
			todayDate.setDate(todayDate.getDate() + days);
			return parseInt(todayDate.getTime() / 1000,10);
	}

	/* optional */
	function getValidCookie(cookieStr){
		var value = '';
		if(cookieStr !== '' && cookieStr !== undefined){
			var cookieQueue = cookieStr.split('|');
			var todayEpochtime = getEpochTime(0);
			var cookieTrackingTime=0;

			for(var i = cookieQueue.length-1; i >= 0; i--){
				var tempStr = cookieQueue[i].split('.');
				cookieTrackingTime = Number(tempStr[tempStr.length-1]);
				if((cookieTrackingTime - todayEpochtime) > 0){
					value = cookieQueue[i];
					break;
				}
			}
		}
		return value;
	}

	function makeSalesPrice(sp) {
		var result = sp + "";
		if(/[0-9,]+/.test(result)){
			result = result.split(',').join('');
		}else{
			result = "0";
		}
		return result;
	}

	//encoding utf-8
	function encodeURL(str){
		var s0, i, s, u;
		s0 = "";                // encoded str
		for (i = 0; i < str.length; i++){   // scan the source
			s = str.charAt(i);
			u = str.charCodeAt(i);          // get unicode of the char
			if (s == " "){
				s0 += "+"; // SP should be converted to "+"
			}else{
				if ( u == 0x2a || u == 0x2d || u == 0x2e || u == 0x5f || ((u >= 0x30) && (u <= 0x39)) || ((u >= 0x41) && (u <= 0x5a)) || ((u >= 0x61) && (u <= 0x7a))){       // check for escape
				s0 = s0 + s; // don't escape
				}else { // escape
					if ((u >= 0x0) && (u <= 0x7f)){     // single byte format
						s = "0"+u.toString(16);
						s0 += "%"+ s.substr(s.length-2);
					}else if (u > 0x1fffff){     // quaternary byte format (extended)
						s0 += "%" + (oxf0 + ((u & 0x1c0000) >> 18)).toString(16);
						s0 += "%" + (0x80 + ((u & 0x3f000) >> 12)).toString(16);
						s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
						s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
					}else if (u > 0x7ff){        // triple byte format
						s0 += "%" + (0xe0 + ((u & 0xf000) >> 12)).toString(16);
						s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
						s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
					}else {                      // double byte format
						s0 += "%" + (0xc0 + ((u & 0x7c0) >> 6)).toString(16);
						s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
					}
				}
			}
		}
		return s0;
	}

	Emf.convCall = function(advertiserId, roiId, salesPrice, directory, category) {
		var protocol = document.location.protocol.indexOf('https') != -1 ? 'https://' : 'http://';
		var convServerUrl = 'roi.emforce.co.kr/conv.emf';
		var ctype = 'dt';

		var ekamsCookieName = '';
		var medsCookieName = '';

		if(advertiserId) {
			ekamsCookieName = 'emf.' + advertiserId + '.ekams';
			medsCookieName = 'emf.' + advertiserId + '.meds';
		}

		var ekamsCookieValue = getCookie(ekamsCookieName);
		var medsCookieValue = getCookie(medsCookieName);

		var validCookie = getValidCookie(ekamsCookieValue); //optional

		var options = opts;
		options = options.split(',').join('.');

		var convUrl = protocol + convServerUrl +
		'?ctype=' + ctype +
		'&advertiserId=' + advertiserId +
		'&roiId=' + roiId +
		'&value=' + makeSalesPrice(salesPrice) +
		'&code1=' + encodeURL(directory) +
		'&code2=' + encodeURL(category) +
		'&ekams=' + validCookie +
		'&allekams=' + ekamsCookieValue +
		'&neo=' + medsCookieValue +
		'&localAt=' + getEpochTime(0) +
		'&options=' + options;

		var convImage = new Image();
		convImage.src = convUrl;
	};

	root.emfAsyncInit();
})(window);
