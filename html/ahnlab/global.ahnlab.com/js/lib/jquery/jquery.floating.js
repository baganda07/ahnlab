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
     * ��ü �ʱ�ȭ
     * @private
     * @function
     * @param {jQuery} $this ��� ��ü
     * @param {String} [options.limitTargetSelector] ���� Ÿ�� ��ü ������
     * @param {String} [options.limitSourceSelector] ���� �ҽ� ��ü ������
     */
    function init($this, options) {
        var opts = $.extend({}, options);

        // ���� ������ ����
        $this.data(localNamespace, {
            options: opts,
            style: $this[0].style.cssText,
            offset: $this.offset(),
            position: {},
            $limitTarget: $(opts.limitTargetSelector),
            $limitSource: $(opts.limitSourceSelector)
        });

        // ��ġ ����
        //$this.css({ position:'fixed', top:'auto', left:'auto', bottom:'auto', right:'auto' });
        update($this);

        // ����ҿ� �߰�
        localStorage.push($this);
    }

    /**
     * ��ü ���� ����
     */
    function refresh($this) {
        var data = $this.data(localNamespace);

        // ��ġ �ʱ�ȭ
        $this[0].style.cssText = data.style;
        data.offset = $this.offset();
        data.position = {};

        // ��ġ ����
        //$this.css({ position:'fixed', top:'auto', left:'auto', bottom:'auto', right:'auto' });
        update($this);
    }

    /**
     * ��ü ��ġ ����
     * @private
     * @function
     * @param {jQuery} $this ��� ��ü
     */
    function update($this) {
        var data = $this.data(localNamespace),
            offset = data.offset,
            position = data.position,
            current = { top:Math.max(0, offset.top - localScroll.top), left:Math.max(0, offset.left - localScroll.left) };

        // ��ǥ ����
        if (data.$limitTarget[0] && data.$limitSource[0]) {
            current.top = Math.min(current.top, data.$limitTarget.offset().top - data.$limitSource.height() - localScroll.top);
        }

        // ��ǥ ����
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
     * Window Scroll �̺�Ʈ
     * - ���� Ʈ���� ����
     * @event
     */
    $localWindow.on('scroll.' + localNamespace, function() {
        // ��ũ�� ���� ����
        localScroll.top = $localWindow.scrollTop();
        localScroll.left = $localWindow.scrollLeft();

        // ��ü ��ġ ����
        $.each(localStorage, function() {
            update(this);
        });
    }).trigger('scroll.' + localNamespace);

    /**
     * Windows Resize �̺�Ʈ
     * @event
     */
    $localWindow.on('resize.' + localNamespace, function() {
        $.each(localStorage, function() {
            refresh(this);
        });
    });

    /**
     * jQuery �÷����� ���
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
