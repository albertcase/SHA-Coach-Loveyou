//redpacket
;(function(){
    'use strict';
    var controller = function(){
        this.curPage = 0;
        this.selectedColor = '';
    };
    controller.prototype = {
        init:function(){
            //loading all the resourse, such as css,js,image
            var self = this;
            //    loading first
            $('.loading-wrap').addClass('show');
            var baseurl = '';
            var imagesArray = [
                baseurl + '/images/logo.png',
                baseurl + '/images/bg-1.png',
                baseurl + '/images/btn-get.png',
                baseurl + '/images/btn-getkeycode.png',
                baseurl + '/images/btn-open.png',
                baseurl + '/images/btn-share.png',
                baseurl + '/images/btn-submit2.png',
                baseurl + '/images/c-2.png',
                baseurl + '/images/c-bg2.png',
                baseurl + '/images/c-txt.png',
                baseurl + '/images/coupon-bg.png',
                baseurl + '/images/coupon-logo.png',
                baseurl + '/images/input-border.png',
                baseurl + '/images/logo.png',
                baseurl + '/images/min-30.png',
                baseurl + '/images/money-list.png',
                baseurl + '/images/p2-bg.png',
                baseurl + '/images/p2-logo.png',
                baseurl + '/images/p2-pop-text.png',
                baseurl + '/images/p2-private.png',
                baseurl + '/images/p2-search.png',
                baseurl + '/images/p3-3.png',
                baseurl + '/images/p3-bg.png',
                baseurl + '/images/p3-logo.png',
                baseurl + '/images/p3-pop-text.png',
                baseurl + '/images/qrcode.png',
                baseurl + '/images/redpacket-no.png',
                baseurl + '/images/redpacket-yes.png',
                baseurl + '/images/redpacket.png',
                baseurl + '/images/share-overlay.png',
                baseurl + '/images/t1.png',
                baseurl + '/images/tips-text.png',
                baseurl + '/images/tips.png',
            ];
            var i = 0;
            new preLoader(imagesArray, {
                onProgress: function(){

                },
                onComplete: function(){
                    //remove the loading and show the age tips
                    $('.preloading').remove(1000);
                    //init need know if user got the money

                    var LoadingStatus = $.ajax({
                        type:'POST',
                        url:'/api/status',
                        dataType:'json',
                        success:function(data){
                            console.log(data);
                            //status:1 已经领取红包
                            if(data.status==1){
                            //    直接去红包页面
                                if(data.msg==212){
                                    $('.p3-t1 .t2').addClass('money2');
                                }else if(data.msg==188){
                                    $('.p3-t1 .t2').removeClass('money2');
                                }
                                gotoPin(2);
                                self.toMoneyPage();
                            }else{
                                $('.tips-pop').removeClass('hide').addClass('fade animate');
                            }
                        }
                    });

                    //for test
                    //$('.tips-pop').removeClass('hide').addClass('fade animate');
                    //gotoPin(2);
                    //self.toMoneyPage();

                    //	if your age is above 18
                    $('.btn-tips').on('click',function(e){
                        if($(this).hasClass('btn-tips-yes')){
                            //	yes, go to page1
                            $('.tips-pop').addClass('hide');
                            gotoPin(0);
                            _hmt.push(['_trackEvent', 'page', 'load', 'pv-1']);
                        }else{
                            //no,refresh the page
                            window.location.reload();
                        }
                    });

                    //	open the redpacket
                    $('.btn-open').on('click',function(){
                        gotoPin(1);
                        _hmt.push(['_trackEvent', 'buttons', 'click', 'btn-open']);
                        _hmt.push(['_trackEvent', 'page', 'load', 'pv-2']);
                        self.formValidate();
                    });


                }
            })
        },
        formValidate:function(){
            var self = this;

            $('.btn-getkeycode').on('click',function(e){
                e.preventDefault();
                _hmt.push(['_trackEvent', 'buttons', 'click', 'sendmessage']);
                if($('.countdown').length>0) return;
                if(self.formMobile()){
                    //    start to get keycode
                    console.log('validate phone number');
                    var mobile = $('.input-phone').val();
                    self.countDown();
                    var xhr = $.ajax({
                        type:'POST',
                        url:'/api/check',
                        data:{mobile:mobile},
                        dataType:'json',
                        success:function(data){
                            console.log(data);
                            //status:1 success
                            //0,12 msg
                            if(data.status==1){
                                console.log('短信发送成功');
                            }else{
                                alert(data.msg);
                            }
                        }
                    });
                };
            });
            var enableSubmit = true;
            $('.pin-2 .btn-submit').on('click',function(){
                _hmt.push(['_trackEvent', 'buttons', 'click', 'Submit']);
                //gotoPin(2);
                if(self.formKeycode()){
                    if(!enableSubmit) return;
                    enableSubmit = false;
                    //    start to get keycode
                    var phonenumber = $('.input-phone').val();
                    var keycode = $('.input-keycode').val();
                    console.log(phonenumber+'phonenumber'+keycode);
                    Common.msgBox('loading...');
                    var xhr_submit = $.ajax({
                        type:'POST',
                        url:'/api/submit',
                        data:{mobile:phonenumber,code:keycode},
                        dataType:'json',
                        success:function(data){
                            //status:1 success,get the money
                            //2.红包领完
                            //other：其他
                            enableSubmit = true;
                            $('.ajaxpop').remove();
                            if(data.status==1){
                                _hmt.push(['_trackEvent', 'buttons', 'click', 'PV-3']);
                                //console.log('有红包,金额2.12或者1.88');
                                if(data.msg==212){
                                    $('.p3-t1 .t2').addClass('money2');
                                }else if(data.msg==188){
                                    $('.p3-t1 .t2').removeClass('money2');
                                }
                                gotoPin(2);
                            }else if(data.status==6){
                                //console.log('之前得到红包在半小时内未领取');
                                _hmt.push(['_trackEvent', 'buttons', 'click', 'PV-3']);
                                if(data.msg==212){
                                    $('.p3-t1 .t2').addClass('money2');
                                }else if(data.msg==188){
                                    $('.p3-t1 .t2').removeClass('money2');
                                }
                                gotoPin(2);
                            }else if(data.status==2){
                                //console.log('红包领完了');
                                _hmt.push(['_trackEvent', 'buttons', 'click', 'PV-3']);
                                $('.pin-3').html('');
                                $('.qrcode-pop').removeClass('hide');
                                $('.qt-no').removeClass('hide');
                                $('.qt-yes').addClass('hide');
                                gotoPin(2);
                            }else{
                                alert(data.msg);
                            }
                        }
                    });
                };
            });
            //show the privacy pop
            $('.privacy-term').on('click',function(){
                _hmt.push(['_trackEvent', 'buttons', 'click', 'Terms']);
                $('.term-pop').removeClass('hide').addClass('animate fade');
            });

        //    close the pop
            self.closePop();
            self.toMoneyPage();
        },
        countDown:function(){
            var countdownTime = 59;
            var countdownline = setInterval(function(){
                countdownTime--;
                $('.btn-getkeycode').addClass('countdown').html(countdownTime);
                if(countdownTime<=0){
                    clearInterval(countdownline);
                    $('.btn-getkeycode').removeClass('countdown').html('');
                }
            },1000);


        },
        closePop:function(){
            $('.btn-close').on('click', function(){
                $(this).parent().addClass('hide');
            })
        },
        toMoneyPage:function(){
            var self = this;
            //    close the pop
            self.closePop();
            $('.btn-get').on('click', function(){
                _hmt.push(['_trackEvent', 'buttons', 'click', 'Redeem']);
                _hmt.push(['_trackEvent', 'page', 'load', 'PV-4']);
               $('.qrcode-pop').removeClass('hide').addClass('animate fade');
            });
            $('.btn-share').on('click',function(){
                _hmt.push(['_trackEvent', 'buttons', 'click', 'Share']);
                _hmt.push(['_trackEvent', 'page', 'load', 'PV-7']);
                $('.share-pop').removeClass('hide').addClass('animate fade');
            });
        },
        formMobile:function(){
            var validate = true;
            if(!$('.input-phone').val()){
                Common.errorMsg.add($('.input-phone').parent(),'手机号码不能为空');
                validate = false;
            }else{
                var reg=/^1\d{10}$/;
                if(!(reg.test($('.input-phone').val()))){
                    validate = false;
                    Common.errorMsg.add($('.input-phone').parent(),'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove($('.input-phone').parent());
                }

            }

            if(validate){
                return true;
            }else{
                return false;
            }
        },
        formKeycode:function(){
            var validate = true;
            if(!$('.input-phone').val()){
                Common.errorMsg.add($('.input-phone').parent(),'手机号码不能为空');
                validate = false;
            }else{
                var reg=/^1\d{10}$/;
                if(!(reg.test($('.input-phone').val()))){
                    validate = false;
                    Common.errorMsg.add($('.input-phone').parent(),'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove($('.input-phone').parent());
                }
            }
            //for keycode
            if(!$('.input-keycode').val()){
                Common.errorMsg.add($('.input-keycode').parent(),'验证码不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove($('.input-keycode').parent());
            }

            if(validate){
                return true;
            }else{
                return false;
            }
        }


    };

    if (typeof define === 'function' && define.amd){
        // we have an AMD loader.
        define(function(){
            return controller;
        });
    }
    else {
        this.controller = controller;
    }


}).call(this);

$(document).ready(function($){
    //load for home page
    var redpacket = new controller();
    redpacket.init();
});