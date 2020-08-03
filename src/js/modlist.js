define(['modindex'], function () {

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

            $(document).click(function(){
                console.log('document-click');
                $('.menu_create').hide();
            });
        }
    }

    class CarBtn {
        constructor() {
            this.lists = $('.prolist li');
        }
        init() {
            let _this = this;
            this.lists.on('mouseover', function () {
                $(this).find('a').css({ display: 'flex' });
            });
            this.lists.on('mouseout', function () {
                $(this).find('a').css({ display: 'none' });
            });
            console.log('1111');
            this.lists.on('click',function(){
                location.href=`http://localhost/gog/src/detail.html?sid=${$(this).find('a').attr('data-flag')}`;
                return false;
            });
            this.lists.on('click','a',()=>{
                
                return false;
            });
        }
    }

    class Render{
        constructor(){
            this.ul = $('.prolist');
        }
        init(){
            this.getData('3');
        }
        getData(inputcheck){
            
            $.ajax({
                url: 'http://localhost/gog/php/result.php',
                dataType: 'json',
                method:'post',
                data:{
                    getlist:inputcheck
                }
            }).done(msg=>{
                let strhtml = '';
                $.each(msg, function(index, value) {

                    if(value.zhekou === '0'){
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
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gouwuche"></use>
                                </svg>
                            </a>
                        </div>
                    </li>
                            `;
                    }else{
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
                                <p class="yuanjia"><s>￥${parseInt(value.price/(value.zhekou/100))}</s></p>
                                <p>¥${value.price}</p>
                            </div>
                            
                            <a href="javascript:;" data-flag="${value.sid}">
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
                $(function() {
                    $("img.lazy").lazyload({ effect: "fadeIn" });
                });
                new CarBtn().init();
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