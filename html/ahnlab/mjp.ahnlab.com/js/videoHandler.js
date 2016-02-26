/*
 * brightCove api 구동방식
 * 모바일 일때는 iframe을 생성하여 iframe 안에 video태그로 브라이트코브 api에서 실행
 * PC일 때는 flashPlayer 로 실행
 *
 *<object id="myExperience3029435856001" class="BrightcoveExperience">
 *	<param name="bgcolor" value="#FFFFFF" />
 *	<param name="width" value="480" />
 *	<param name="height" value="270" />
 *	<param name="playerID" value="2094656735001" />
 *	<param name="playerKey" value="AQ~~,AAABQ7vJFJE~,YUe9mtKqvkRH3arvRTDGUUVrLmzIWm8u" />
 *	<param name="isVid" value="true" />
 *	<param name="isUI" value="true" />
 *	<param name="dynamicStreaming" value="true" />
 *	<param name="@videoPlayer" value="3029435856001" /><!-- video id값 -->
 *  <param name="includeAPI" value="true" /><!-- 스마트플레이어 api 사용 -->
 *  <param name="templateLoadHandler" value="onTemplateLoaded" /><!-- brightcove 동영상 로드할때 실행 -->
 *	<param name="templateReadyHandler" value="onTemplateReady" /><!-- brightcove 동영상 로드 후 실행 -->
 *</object>
 */

var player,
	APIModules,
	videoPlayer,
	experienceModule,
	contentModule;

/*
 *	brightcove 동영상 로드할때 실행
 */
var onTemplateLoaded = function(experienceID) {
	player = brightcove.api.getExperience(experienceID);
    APIModules = brightcove.api.modules.APIModules;
};
/*
 *	brightcove 동영상 로드 후 실행
 */
var onTemplateReady = function(evt) {
	videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
    experienceModule = player.getModule(APIModules.EXPERIENCE);
    contentModule = player.getModule(APIModules.CONTENT);
    videoPlayer.getCurrentRendition(function (renditionDTO) {
    	var newPercentage = (renditionDTO.frameHeight / renditionDTO.frameWidth) * 100;
        newPercentage = newPercentage + "%";
        document.getElementById("container1").style.paddingBottom = newPercentage;
        var evt = document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, 0);
        evt.initUIEvent('orientationchange', true, false, 0);
        window.dispatchEvent(evt);
    });
};

$(function(){
	/*
	 *  objectTag 사이즈 조정
	 */
    var videoSetSize = function(){
        var resizeWidth = $(".BrightcoveExperience").width(),
        resizeHeight = $(".BrightcoveExperience").height();
        if (experienceModule.experience.type == "html") {
            experienceModule.setSize(resizeWidth, resizeHeight)
        }
    }

    $(window).bind("orientationchange, resize", function(){
	    if(mobileChange){
	        var video;
	        var videoCnt = 0;
	        video = setInterval(function(){
	            videoCnt++;
	            if(videoCnt < 50){
	                videoSetSize();
	            } else {
	                videoCnt = 0;
	                clearInterval(video);
	            }
	        },50);
	    }
    });
});