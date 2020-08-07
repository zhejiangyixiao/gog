define(['render', '../../node_modules/jquery.cookie/jquery.cookie','modindex'], function (ren) {
    let sid = location.search.substring(5);
    let arrsid = [];
    function cookietoarray() {
        if ($.cookie('cookiesid')) { //cookie存在
            arrsid = $.cookie('cookiesid').split(',');
        } else {
            arrsid = [];
        }
    }

    //数据回调函数
    ren.ren.getDetailData(sid, function (msg) {
        // 渲染主页
        $('.bg').css({
            'background': `url(${msg.url}) no-repeat center`,
            'background-size': 'cover',
        });
        $('.header img').prop('src', msg.logourl)
        if (msg.zhekou !== '0') {
            $('.card .price span').eq(0).html(`-${msg.zhekou}%`);
            $('.card .price span s').html(`¥${parseInt(msg.price / (msg.zhekou / 100))}`);
        } else {
            $('.card .price span').eq(0).hide();
            $('.card .price span s').hide();
        }

        $('.card .price span').eq(2).html(`¥${msg.price}`);
        $('.title h1').html(`${msg.title}`);
        cookietoarray();
        if ($.inArray(sid, arrsid) !== -1) {//说明已经加入购物车
            $('.card button span').html('已加入购物车');
            $('.card button span').css({
                color: 'green'
            });
        } else {//未加入购物车
            $('.card button span').html('加入购物车');
            $('.card button span').css({
                color: '#404040'
            });
        }
        // 加入购物车按钮事件
        carBtn();
        // 立即付款按钮，如果当前被加入购物车 直接跳转
        // 如果没有被加入购物车，则加入购物车，然后跳转
        payBtn();
    });

    // carbtn按钮点击，加入购物车
    function carBtn() {
        $('.card button').eq(1).on('click', function () {
            if ($.inArray(sid, arrsid) !== -1) {//说明已经加入购物车,点击取消
                $.removeCookie('cookiesid');
                arrsid.splice($.inArray(sid, arrsid), 1);
                $.cookie('cookiesid', arrsid, {
                    expires: 7,
                    path: '/'
                });
                $('.card button span').html('加入购物车');
                $('.card button span').css({
                    color: '#404040'
                });
            } else {//未加入购物车,点击加入
                arrsid.push(sid);
                $.cookie('cookiesid', arrsid, {
                    expires: 7,
                    path: '/'
                });
                $('.card button span').html('已加入购物车');
                $('.card button span').css({
                    color: 'green'
                });

            }
              // 购物车图标
              if(arrsid.length>0){
                $('.nav_right').find('li').eq(2).find('span').html(arrsid.length);
            }else{
                $('.nav_right').find('li').eq(2).find('span').html(0);
            }
        });
    }
    // 立即付款按钮
    function payBtn() {
        $('.card button').eq(0).on('click', function () {
            if ($.inArray(sid, arrsid) === -1) {//未加入购物车,点击加入
                arrsid.push(sid);
                $.cookie('cookiesid', arrsid, {
                    expires: 7,
                    path: '/'
                });
                $('.card button span').html('已加入购物车');
                $('.card button span').css('color', 'green');
            }
            location.href = `http://10.31.163.73/gog/src/shoppingcart.html`;

        });
    }



    return {
        init() {

        }
    }

});









