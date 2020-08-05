define(['modindex', '../../node_modules/jquery-lazyload/jquery.lazyload', '../../node_modules/jquery.cookie/jquery.cookie',], function () {

    // 惰性单例
    let sortmenu = (function () {
        let $cDiv = null;
        return function () {
            if (!$cDiv) {
                $cDiv = $(`
                <div class="menu_create">
                    <div><input type="checkbox" value="3" checked="checked"><a href="javascript:;">默认排序</a></div>
                    <div><input type="checkbox" value="1" ><a href="javascript:;">价格降序</a></div>
                    <div><input type="checkbox" value="2"><a href="javascript:;">价格升序</a></div>
                </div>
                `);
                $('.menu_box_right>div').append($cDiv);
            }
            return $cDiv;
        }
    })();


    class SortBtn {
        constructor(menu) {
            this.div = $('.menu_box_right');
            this.btn = $('.menu_box_right a');
            this.menu = menu;
            this.inputcheck = '3';
        }
        init() {
            let _this = this;
            // 
            this.btn.on('click', () => {
                console.log(this.inputcheck);
                this.menu().show();
                // menu里面的按钮点击显示在页面上
                $('.menu_create').on('click', 'div', function () {
                    _this.btn.html($(this).find('a').text());

                    $(this).find('input').prop("checked", "checked");
                    $(this).siblings('div').find('input').prop("checked", "")
                    if (_this.inputcheck !== $(this).find('input').val()) {
                        _this.inputcheck = $(this).find('input').val();
                    }
                    $(this).parent().hide();

                    ren.getData(_this.inputcheck);
                });
                return false;
            });

            $(document).click(function () {
                console.log('document-click');
                $('.menu_create').hide();
            });
        }
    }

    class CarBtn {
        constructor() {
            this.lists = $('.prolist li');
            this.arrsid = [];
        }
        init() {
            let _this = this;
            this.cookietoarray();
            if (this.arrsid.length > 0) {
                $.each(this.lists, (index, value) => {
                    let sid = $(value).find('a').attr('data-flag');
                    if ($.inArray(sid, _this.arrsid) !== -1) {
                        $(value).find('span').show().siblings('.icon').hide();
                        $(value).find('a').css({ display: 'flex' });
                    }
                })
            }
            this.lists.on('mouseover', function () {

                $(this).find('a').css({ display: 'flex' });

                let sid = $(this).find('a').attr('data-flag');
                if ($.inArray(sid, _this.arrsid) !== -1) {
                    $(this).find('span').show().siblings('.icon').hide();
                }
            });
            this.lists.on('mouseout', function () {
                let sid = $(this).find('a').attr('data-flag');

                if ($.inArray(sid, _this.arrsid) === -1) {
                    $(this).find('a').css({ display: 'none' });
                }
            });

            this.lists.on('click', function () {
                location.href = `http://localhost/gog/src/detail.html?sid=${$(this).find('a').attr('data-flag')}`;
                return false;
            });
            this.lists.on('click', 'a', function () {
                let sid = $(this).attr('data-flag');

                if ($.inArray(sid, _this.arrsid) === -1) {
                    _this.arrsid.push(sid);
                    $.cookie('cookiesid', _this.arrsid, {
                        expires: 7,
                        path: '/'
                    });
                    $(this).find('span').show().siblings('.icon').hide();

                } else {
                    $.removeCookie('cookiesid');
                    _this.arrsid.splice($.inArray(sid, _this.arrsid), 1);
                    console.log(sid);
                    console.log(_this.arrsid);
                    $.cookie('cookiesid', _this.arrsid, {
                        expires: 7,
                        path: '/'
                    });
                    $(this).find('span').hide().siblings('.icon').show();
                }





                return false;
            });
        }
        cookietoarray() {
            if ($.cookie('cookiesid')) { //cookie存在
                this.arrsid = $.cookie('cookiesid').split(',');
            } else {
                this.arrsid = [];
            }
        }
    }

    class Render {
        constructor() {
            this.ul = $('.prolist');
            this.msg = null;
            this.flag = null;
        }
        init() {

            this.getData('3');

        }
        getData(inputcheck) {
            let arrsid = [];
            if ($.cookie('cookiesid')) { //cookie存在
                arrsid = $.cookie('cookiesid').split(',');
            } else {
                arrsid = [];
            }
            $.ajax({
                url: 'http://localhost/gog/php/result.php',
                dataType: 'json',
                method: 'post',
                data: {
                    getlist: inputcheck
                }
            }).done(msg => {
                const counst = 10;//一页显示的数据
                this.renderpagebtn(msg,counst);
                
                this.msg = msg;
                
                this.pagebtnclick(counst);
                
                this.renderli(msg.slice(0,counst));
                
            });
        }
        renderpagebtn(msg,counst) {
            $('.row').html('');
            let page = Math.ceil(msg.length / counst);
            let arr = [];
            arr[page-1] = '1';
            let strhtml = '<li class="first" style="display:none">&lt;</li>';
            $.each(arr,function(index,value){
                strhtml += `<li class="item">${index+1}</li>`
            });
            strhtml += '<li class="last">&gt;</li>';
            console.log(strhtml);
            $('.row').html(strhtml);
            $('.row .item').eq(0).css('background','white');
        }
        renderli(msg) {
            let strhtml = '';
            $.each(msg, function (index, value) {

                if (value.zhekou === '0') {
                    strhtml += `
                    <li>
                    <div class="pro_left">
                    <img data-original="${value.url}" alt="" class="lazy" width="136" height="76">
                        <div>
                            <div class="game_title">
                                ${value.title}
                            </div>
                            <div class="sys">${value.system}</div>
                        </div>
                    </div>
                    <div class="pro_right">
                        <div>
                            <p>¥${value.price}</p>
                        </div>
                        
                        <a href="javascript:;" data-flag="${value.sid}">
                            <span>√</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-gouwuche"></use>
                            </svg>
                        </a>
                    </div>
                </li>
                        `;
                } else {
                    strhtml += `
                    <li>
                    <div class="pro_left">
                        <img data-original="${value.url}" alt="" class="lazy" width="136" height="76">
                        <div>
                            <div class="game_title">
                                ${value.title}
                            </div>
                            <div class="sys">${value.system}</div>
                        </div>
                    </div>
                    <div class="pro_right">
                        <div>
                            <p class="zhekou">-${value.zhekou}%</p>
                            <p class="yuanjia"><s>￥${parseInt(value.price / (value.zhekou / 100))}</s></p>
                            <p>¥${value.price}</p>
                        </div>
                        
                        <a href="javascript:;" data-flag="${value.sid}">
                            <span>√</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-gouwuche"></use>
                            </svg>
                        </a>
                    </div>
                </li>
                        `;
                }
            });
            this.ul.html(strhtml);
            $(function () {
                $("img.lazy").lazyload({ effect: "fadeIn" });
            });
            new CarBtn().init();
        }
        pagebtnclick(counst) {
            let _this = this;
            $('.row .item').on('click',function(){
                let i = $(this).index()-1;
                _this.flag = i;
                if(i === 0){
                    $('.row .first').css('display','none');
                    $('.row .last').css('display','flex');
                }else if(i === ($('.row .item').length-1)){
                    $('.row .first').css('display','flex');
                    $('.row .last').css('display','none');
                }else{
                    $('.row .last').css('display','flex');
                    $('.row .first').css('display','flex');
                }
                let start = i*counst;
                let end = (i+1)*counst;
                console.log(start,end,_this.msg.slice(start,end));
                _this.renderli(_this.msg.slice(start,end));
                $(this).css({background:'white'}).siblings().css({background:'#ccc'});
                return false;
            });
            $('.row .first').on('click',function(){
                 _this.flag--;
                 if(_this.flag === 0){
                    $('.row .first').css('display','none');
                    $('.row .last').css('display','flex');
                }else if(_this.flag === ($('.row .item').length-1)){
                    $('.row .first').css('display','flex');
                    $('.row .last').css('display','none');
                }else{
                    $('.row .last').css('display','flex');
                    $('.row .first').css('display','flex');
                }
                let start =  _this.flag*counst;
                let end = ( _this.flag+1)*counst;
                _this.renderli(_this.msg.slice(start,end));
                $('.row .item').eq( _this.flag).css({background:'white'}).siblings().css({background:'#ccc'});
            });
            $('.row .last').on('click',function(){
                _this.flag++;
                if(_this.flag === 0){
                   $('.row .first').css('display','none');
                   $('.row .last').css('display','flex');
               }else if(_this.flag === ($('.row .item').length-1)){
                   $('.row .first').css('display','flex');
                   $('.row .last').css('display','none');
               }else{
                   $('.row .last').css('display','flex');
                   $('.row .first').css('display','flex');
               }
               let start =  _this.flag*counst;
               let end = ( _this.flag+1)*counst;
               _this.renderli(_this.msg.slice(start,end));
               $('.row .item').eq( _this.flag).css({background:'white'}).siblings().css({background:'#ccc'});
            });
        }
    }

    let ren = new Render();
    let sbtn = new SortBtn(sortmenu);




    ren.init();
    sbtn.init();



    return {
        init() {

        }
    }

});