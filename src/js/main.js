//配置模块
//第三方文件

require.config({
    paths: {
        'jquery': '../../node_modules/jquery/dist/jquery.min',
        'cookie':'../../node_modules/jquery.cookie/jquery.cookie',
        'lazyload':'../../node_modules/jquery-lazyload/jquery.lazyload',
        'iconfont':'../font/iconfont'
    }
});

//加载模块
require(['jquery','iconfont','cookie','lazyload'], function($) {
    let mod = $('#currentpage').attr('currentmod'); //获取script标签下面的属性值
    if (mod) {
        //如果mod存在，加载对应的模块
        require([mod], function(modlist) {
            modlist.init();
        });
    }
});



