$(document).ready(function(){
    wx.ready(function() {
        wx.onMenuShareTimeline({
            title: '来自苏格兰的慷(xian)慨(jin)问(hong)候(bao)',
            link: 'http://extra.chivas.com.cn',
            imgUrl: 'http://7vzs67.com1.z0.glb.clouddn.com/2120e9e6-5424-41c6-bdc3-7d6db4b3e6b8?imageView2/1/w/200/h/200/format/jpg/q80/interlace/1',
            success: function () {
                _hmt.push(['_trackEvent', 'buttons', 'click', 'ShareToMoments']);
            },
            cancel: function () {
            }
        });
        wx.onMenuShareAppMessage({
            title: '嘘寒问暖，不如现款',
            desc: '拆了这个芝华士红包，感受来自苏格兰的慷慨',
            link: 'http://extra.chivas.com.cn',
            imgUrl: 'http://7vzs67.com1.z0.glb.clouddn.com/21926ffe-1764-4fd1-82fd-5ddd151cf0e0?imageView2/1/w/200/h/200/format/jpg/q80/interlace/1',
            type: '',
            dataUrl: '',
            success: function () {
                _hmt.push(['_trackEvent', 'buttons', 'click', 'ShareToFriend']);
            },
            cancel: function () {
            }
        });

    });

    //alert('test');

});