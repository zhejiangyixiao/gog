define(['render', '../../node_modules/jquery.cookie/jquery.cookie','sha1'], function(ren) {
    const $loginbtn = $('.btn');
    const $user = $('#username');
    const $pass = $('#password');
    const $error_info = $('.checkout_error');
    
    $loginbtn.on('click',function(){
        console.log(hex_sha1($pass.val())); 
        ren.ren.getLogininfo($user.val(),hex_sha1($pass.val()),function(data){
            console.log(data);
            if(data === 1){//登陆成功
                $.cookie('cookiesid', $user.val(), {
                    expires: 7,
                    path: '/'
                });
                location.href = `http://localhost/gog/src/index1.html`;
            }else{//登录失败
                $error_info.show();
                $pass.val('');
            }
        });
    });








    return {
        init(){

        }
    }
    
});