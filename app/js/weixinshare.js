/*
* For entire site share
* */
$(document).ready(function(){
    wx.ready(function() {
        wx.onMenuShareTimeline({
            title: '520，告白Coach即可抢现金红包',
            link: window.location.href,
            imgUrl: window.location.origin+'/app/images/wx-share.jpg',
            success: function () {
                _hmt.push(['_trackEvent', 'button', 'click', 'Share to Moments']);
            },
            cancel: function () {
            }
        });
        wx.onMenuShareAppMessage({
            title: '520，告白Coach即可抢现金红包',
            desc: '520没有被发红包？没关系，快来Coach微信告白，现金红包抢抢抢！',
            link: window.location.href,
            imgUrl: window.location.origin+'/app/images/wx-share.jpg',
            type: '',
            dataUrl: '',
            success: function () {
                _hmt.push(['_trackEvent', 'button', 'click', 'Share to friend']);
            },
            cancel: function () {
            }
        });

    });

});