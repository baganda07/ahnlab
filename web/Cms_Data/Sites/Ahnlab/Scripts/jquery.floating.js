/**
 * Floating jQuery Plugin
 * - USAGE: $(selector).floating();
 */
(function($, undefined) {
    "use strict";
    var $localWindow = $(window),
        localNamespace = 'namespace.floating',
        localScroll = {},
        localStorage = [];

    /**
     * 객체 초기화
     * @private
     * @function
     * @param {jQuery} $this 대상 객체
     * @param {String} [options.limitTargetSelector] 제한 타겟 객체 셀렉터
     * @param {String} [options.limitSourceSelector] 제한 소스 객체 셀렉터
     */
    function init($this, options) {
        var opts = $.extend({}, options);

        // 기초 데이터 설정
        $this.data(localNamespace, {
            options: opts,
            style: $this[0].style.cssText,
            offset: $this.offset(),
            position: {},
            $limitTarget: $(opts.limitTargetSelector),
            $limitSource: $(opts.limitSourceSelector)
        });

        // 위치 고정
        //$this.css({ position:'fixed', top:'auto', left:'auto', bottom:'auto', right:'auto' });
        update($this);

        // 저장소에 추가
        localStorage.push($this);
    }

    /**
     * 객체 기초 갱신
     */
    function refresh($this) {
        var data = $this.data(localNamespace);

        // 위치 초기화
        $this[0].style.cssText = data.style;
        data.offset = $this.offset();
        data.position = {};

        // 위치 고정
        //$this.css({ position:'fixed', top:'auto', left:'auto', bottom:'auto', right:'auto' });
        update($this);
    }

    /**
     * 객체 위치 갱신
     * @private
     * @function
     * @param {jQuery} $this 대상 객체
     */
    function update($this) {
        var data = $this.data(localNamespace),
            offset = data.offset,
            position = data.position,
            current = { top:Math.max(0, offset.top - localScroll.top), left:Math.max(0, offset.left - localScroll.left) };

        // 좌표 조정
        if (data.$limitTarget[0] && data.$limitSource[0]) {
            current.top = Math.min(current.top, data.$limitTarget.offset().top - data.$limitSource.height() - localScroll.top);
        }

        // 좌표 갱신
        if (current.top !== position.top || current.left !== position.left) {
            //$this.css(data.position = current);
            data.position = current;

            if (current.top <= 0) {
                $this[0].style.cssText = 'position:fixed; top:' + current.top + 'px; left:' + current.left + 'px; bottom:auto; right:auto;';
            } else {
                $this[0].style.cssText = data.style;
            }
        }
    }

    /**
     * Window Scroll 이벤트
     * - 최초 트리거 실행
     * @event
     */
    $localWindow.on('scroll.' + localNamespace, function() {
        // 스크롤 변수 갱신
        localScroll.top = $localWindow.scrollTop();
        localScroll.left = $localWindow.scrollLeft();

        // 객체 위치 갱신
        $.each(localStorage, function() {
            update(this);
        });
    }).trigger('scroll.' + localNamespace);

    /**
     * Windows Resize 이벤트
     * @event
     */
    $localWindow.on('resize.' + localNamespace, function() {
        $.each(localStorage, function() {
            refresh(this);
        });
    });

    /**
     * jQuery 플러그인 등록
     */
    $.fn.floating = function(options) {
        return this.each(function() {
            var $this = $(this);

            if (!$this.data(localNamespace)) {
                init($this, options);
            }
        });
    };
})(jQuery);
