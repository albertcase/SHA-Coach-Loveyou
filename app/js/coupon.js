//just for coupon page
$(document).ready(function(){

    //load
    gotoPin(0);
    _hmt.push(['_trackEvent', 'page', 'load', 'PV-5']);

    //weixin
    $('.weixin').on('click',function(){
        _hmt.push(['_trackEvent', 'buttons', 'click', 'WMALL']);
    });

    //go to copy taobaokey page
    $('.tmall').on('click',function(){
        _hmt.push(['_trackEvent', 'buttons', 'click', 'TMALL']);
        _hmt.push(['_trackEvent', 'page', 'load', 'PV-6']);
        gotoPin(1);
    });

    $('.tao-code').on('touchstart touchend', function(e){
        this.setSelectionRange(0,$(this).text().length);
    });
});