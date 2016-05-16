/*
* For entire site share
* */
$(document).ready(function(){
    wx.ready(function() {
        wx.onMenuShareTimeline({
            title: '520，告白Coach即可抢现金红包',
            link: window.location.href,
            imgUrl: window.location.origin+'/app/images/wx-share.png',
            success: function () {
                //_hmt.push(['_trackEvent', 'buttons', 'click', 'ShareToMoments']);
            },
            cancel: function () {
            }
        });
        wx.onMenuShareAppMessage({
            title: '520，告白Coach即可抢现金红包',
            desc: '520没有被发红包？没关系，快来Coach微信告白，现金红包抢抢抢！',
            link: window.location.href,
            imgUrl: window.location.origin+'/app/images/wx-share.png',
            type: '',
            dataUrl: '',
            success: function () {
                //_hmt.push(['_trackEvent', 'buttons', 'click', 'ShareToFriend']);
            },
            cancel: function () {
            }
        });

    });

});