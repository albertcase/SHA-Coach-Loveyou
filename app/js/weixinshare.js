/*
* For entire site share
* */
$(document).ready(function(){
    wx.ready(function() {
        wx.onMenuShareTimeline({
            title: '520，土豪Coach用现金红包爱你',
            link: window.location.href,
            imgUrl: window.location.origin+'/app/images/share-guide.png',
            success: function () {
                //_hmt.push(['_trackEvent', 'buttons', 'click', 'ShareToMoments']);
            },
            cancel: function () {
            }
        });
        wx.onMenuShareAppMessage({
            title: '520，土豪Coach用现金红包爱你',
            desc: '520，土豪Coach用现金红包爱你',
            link: window.location.href,
            imgUrl: window.location.origin+'/app/images/share-guide.png',
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