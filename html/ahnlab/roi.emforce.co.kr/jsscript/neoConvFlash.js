function callbackFlashAction(_ekamsAdvertiserID,_ekamsTrackingID,_salesPrice,_directory,_category) {
	var flashAction = new Image();
	var _protocol = document.location.protocol.indexOf("https") != -1 ? "https://" : "http://";
	var _trackingURL = "roi.emforce.co.kr/";
	var _requestURL = self.document.location.href;
	flashAction.src = _protocol + _trackingURL + "gr.emf?advertiserId="+_ekamsAdvertiserID+"&roiId=" + _ekamsTrackingID + "&value=" + _salesPrice + "&code1="+_directory+"&code2="+_category;
}
