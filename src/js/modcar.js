define(['render', '../../node_modules/jquery.cookie/jquery.cookie','modindex'], function (ren) {

    let arrsid = [];
    cookietoarray();
    if (arrsid.length !== 0) {


        let priceall = 0;
        let yuanjia = 0;
        $.each(arrsid, (index, value) => {

            ren.ren.getDetailData(value, (msg) => {
                priceall += +msg.price;
                let link = null;
                if (msg.zhekou !== '0') {
                    yuanjia += parseInt(msg.price / (msg.zhekou / 100));
                    link = $(`
            <li>
                <img src="${msg.url}"
                    alt="">
                <div class="li_middle">
                    <p>${msg.title}</p>
                    <a href="javascript:;">删除</a>
                </div>
                <div class="li_right">
                    <p class="p_zhekou"><s>￥${parseInt(msg.price / (msg.zhekou / 100))}</s></p>
                    <p class="p_price">￥${msg.price}</p>
                </div>
            </li>`);
                } else {
                    yuanjia += +msg.price;

                    link = $(`
            <li>
                <img src="${msg.url}"
                    alt="">
                <div class="li_middle">
                    <p>${msg.title}</p>
                    <span></span>
                    <a href="javascript:;">删除</a>
                </div>
                <div class="li_right">
                    <p class="p_price">￥${msg.price}</p>
                </div>
            </li>`);
                }
                link.insertBefore($('.shop_car .last'));
                $('.shop_car .last div span').eq(1).html('￥' + priceall);
                $('.shop_car .last div p').eq(1).html('您节约了￥' + (yuanjia - priceall) + '(' + parseInt((priceall / yuanjia) * 100) + '%)');
                $('.paymoney span').html('￥' + priceall);
                // 鼠标移入事件触发
                link.hover(function () {
                    // console.log(link.find('.li_right .p_zhekou').text());
                    $(this).find('.li_middle a').show();
                    $(this).siblings('li').find('.li_middle a').hide();
                }, function () {
                    $(this).find('.li_middle a').hide();
                });

                // 删除按钮点击事件
                link.find('.li_middle a').on('click', function () {
                    let yjg = +$(this).parent().parent().find('.li_right .p_zhekou').text().substring(1);
                    if (!$(this).parent().parent().find('.li_right .p_zhekou').text()) {
                        yjg = 0;
                    }
                    let prc = $('.shop_car .last div span').eq(1).html().substring(1);
                    let allyjg = parseInt($('.shop_car .last div p').eq(1).html().match(/\d+/g)[0]) + parseInt(prc);

                    $('.shop_car .last div span').eq(1).html('￥' + (parseInt(prc) - parseInt($(this).parent().parent().find('.li_right .p_price').text().substring(1))));

                    if (prc === $(this).parent().parent().find('.li_right .p_price').text().substring(1)) {
                        $('.shop_car .last div').hide();
                        $('.shop_car .last p').html('再逛逛，还未添加游戏呢');
                        $('.paymoney span').html('还未添加游戏');
                        $('.paymoney button').css('background', 'gray');
                        $('.shop_car .last').on('click',function(){
                            location.href = 'http://localhost/gog/src/prolist.html';
                        });
                    } else {
                        $('.shop_car .last div').show();
                        $('.shop_car .last div p').eq(1).html('您节约了￥' + ((allyjg - yjg) - (parseInt(prc) - $(this).parent().parent().find('.li_right .p_price').text().substring(1))) + '(' + parseInt(((parseInt(prc) - $(this).parent().parent().find('.li_right .p_price').text().substring(1)) / (allyjg - yjg)) * 100) + '%)');
                        $('.paymoney span').html('￥' + (parseInt(prc)-link.find('.li_right .p_price').text().substring(1)));
                    }



                    $('.paymoney span').html('￥' + (parseInt(prc)-link.find('.li_right .p_price').text().substring(1)));
                    $.removeCookie('cookiesid');
                    arrsid.splice($.inArray(value, arrsid), 1);
                    $.cookie('cookiesid', arrsid, {
                        expires: 7,
                        path: '/'
                    });
                    link.remove();
                });
            });
        });
    } else {
        $('.shop_car .last div').hide();
        $('.shop_car .last p').html('再逛逛，还未添加游戏呢');
        $('.paymoney span').html('还未添加游戏');
        $('.paymoney button').css('background', 'gray');
        $('.shop_car .last').on('click',function(){
            location.href = 'http://localhost/gog/src/prolist.html';
        });
    }



    function cookietoarray() {
        if ($.cookie('cookiesid')) { //cookie存在
            arrsid = $.cookie('cookiesid').split(',');
        } else {
            arrsid = [];
        }
    }



    return {
        init() {

        }
    }

});