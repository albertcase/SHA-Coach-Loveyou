(function(){
    $(document).ready(function(){
        _hmt.push(['_trackEvent', 'page', 'load', '页面PV - 8']);
        $('.btn-close').on('click', function(){
            $(this).parent().addClass('hide');
        })
        $('.link-terms').on('click', function(){
            _hmt.push(['_trackEvent', 'button', 'click', 'Terms2']);
            $('.details-pop').removeClass('hide');
        });
    });
})();