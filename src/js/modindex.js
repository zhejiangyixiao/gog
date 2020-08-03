define([''], function() {
    class Banner {
        constructor() {
            this.banner = $('.banner');
            //运动的div 里面放的是img
            this.divscroll = $('.glide_track');
            this.imgs = $('.glide_track img');
            this.lists = $('.slider_btn ul li');
            this.scrollWidth = this.imgs.eq(0).outerWidth(true);
            this.slider_hover_left = $('.slider_hover_left');
            this.slider_hover_right = $('.slider_hover_right');
            this.banner_btn_left = $('.banner_btn_left');
            this.banner_btn_right = $('.banner_btn_right');
            this.i = 0;
            this.timer = null;
        }
        init() {
            
            // 设置div的css 第一张图出现在banner的窗口中
            this.divscroll.css({
                width: this.imgs.length * this.imgs.eq(0).outerWidth(),
                left: -this.scrollWidth*2
            });
            // 设置两块蒙版的位置 一左一右
            this.slider_hover_left.css({
                left: -this.scrollWidth
    
            });
            this.slider_hover_right.css({
                left: this.scrollWidth
            });
    
            this.sliderclick();
            this.slider_hoverClick();
            this.slider_hover();
            this.btnclick();
            this.bannerhover();
        }
        // 两块蒙版在鼠标移入移出的动作
        slider_hover(){
            this.slider_hover_left.hover(()=>{
                this.divscroll.stop().animate({
                    left: this.divscroll.position().left+10
                });
                this.slider_hover_left.stop().animate({
                    opacity:0
                });
            },()=>{
                this.divscroll.stop().animate({
                    left: this.divscroll.position().left-10
    
                });
                this.slider_hover_left.stop().animate({
                    opacity:0.5
                });
            });
            this.slider_hover_right.hover(()=>{
                this.divscroll.stop().animate({
                    left: this.divscroll.position().left-10
                });
                this.slider_hover_right.stop().animate({
                    opacity:0
                });
            },()=>{
                this.divscroll.stop().animate({
                    left: this.divscroll.position().left+10
    
                });
                this.slider_hover_right.stop().animate({
                    opacity:0.5
                });
            });
        }
        // 鼠标移入停止定时器
        bannerhover(){
    
            this.autochangeImg();
    
            this.banner.hover(()=>{
                this.lists.eq(this.i).find('span a').show().stop().animate({
                    width:0
                },0);
                clearInterval(this.timer);
            },()=>{
                this.autochangeImg();
            });
        }
        // 自动切换图片
        autochangeImg(){
            this.lists.eq(this.i).find('span a').show().stop().animate({
                width:41
            },4000,function(){
                $(this).css('width','0');
                $(this).hide();
            });
    
            this.timer = setInterval(() => {
                
                this.i++;
                let index = 0
                if(this.i === 5){
                    index = 0;
                }else{
                    index = this.i;
                }
    
                this.lists.eq(index).find('span a').show().stop().animate({
                    width:41
                },4000,function(){
                    $(this).css('width','0');
                    $(this).hide();
                });
                this.changeImge();
            }, 4000);
        }
    
        // 左右箭头
        btnclick(){
            // 左半边
            this.banner_btn_left.on('click', () => {
                this.i--;
                this.changeImge();
    
            });
            // 右半边
            this.banner_btn_right.on('click', () => {
                this.i++;
                this.changeImge();
            });
        }
        // 左右两块蒙版点击 图片运动
        slider_hoverClick() {
            // 左半边
            this.slider_hover_left.on('click', () => {
                this.i--;
                this.changeImge();
    
            });
            // 右半边
            this.slider_hover_right.on('click', () => {
                this.i++;
                this.changeImge();
            });
        }
        // 指示框点击 图片变换
        sliderclick() {
            let _this = this;
            this.lists.on('click', function () {
                _this.i = $(this).index();
                _this.changeImge();
            });
        }
        // 图片运动
        changeImge() {
            if (this.i === this.lists.length) {
                this.divscroll.css({
                    left: -this.scrollWidth
                });
                this.divscroll.stop().animate({
                    left: -this.scrollWidth*2
                });
                this.i = 0;
            } else if(this.i === -1){
                this.divscroll.css({
                    left: -this.scrollWidth *(this.lists.length + 2)
                });
                this.divscroll.stop().animate({
                    left: -this.scrollWidth*(this.lists.length+1)
                });
                this.i = this.lists.length - 1;
            }else {
                this.divscroll.stop().animate({
                    left: -this.scrollWidth * (this.i + 2)
                });
            }
            // 指示框样式随着图片运动改变 其他li中的先removeclass
            // 然后自己设置class
            this.lists.eq(this.i).siblings('li').find('span').removeClass('active');
            this.lists.eq(this.i).find('span').addClass('active');
        }
    }
    
    class Tips{
        constructor(){
            this.tips = $('.tips');
        }
        init(){
            this.tips.width($('body').width());
            this.tips.css('marginLeft',-$('.tips').offset().left)
        }
    }
    
    
    class Nav{
        constructor(){
            this.list = $('.nav_left').find('>li').not('.first_li');
            this.menulist = $('.menu_list');
            this.menu_detail = $('.menu_detail');
        }
        init(){
            this.show_menulist();
        }
        show_menulist(){
            let _this = this;
            this.list.on('mouseover',function(){
                $(this).find('.menu_list').show();
            });

            this.list.on('mouseout',function(){
                $(this).find('.menu_list').hide();
            });
            this.menulist.hover(()=>{
                this.menu_detail.show();
            },()=>{
                this.menu_detail.hide();
            })
            this.menulist.on('mouseover','li>a',function(){
                console.log($(this).text().trim());
                $(this).addClass('active').parent().siblings('li').find('a').removeClass('active');
                $(this).parent().parent().siblings('ul').find('>li a').removeClass('active');
                // 根据不同li  二级menu显示不同的内容
                _this.menu_detail.find('.menu_detail_content>p').html($(this).text().trim());
                // 在这里吧数据渲染进去



                // 点击进入列表页
                _this.menu_detail.find('.menu_detail_content>a').prop("href","./prolist.html")
            });

        }
    }
    new Nav().init();
    return {
        init() {
            new Banner().init();
            new Tips().init();
            
        },
    }
});