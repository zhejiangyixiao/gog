define(['render','modindex'], function (ren) {
    const $regbtn = $('#submit');
    const $user = $('#username');
    const $pass = $('#password');
    const $repd = $('#repd');
    const $email = $('#email');
    let $spans = $('p span');
    let userflag = false;
    let passrflag = false;
    let emailflag = false;
    let repdflag = false;
    checkflag();
    $user.on('change', function () {
        let val = $(this).val();
        if (val !== '') {
            ren.ren.getUsername(val, function (data) {
                if (data === 0) {//未重名 可用
                    userflag = true;
                    $($spans[0]).html('√');
                    $($spans[0]).css('color', 'green');
                } else {//重名不可用
                    userflag = false;
                    $($spans[0]).html('重名，请重新输入');
                    $($spans[0]).css('color', 'red');
                }
            });
        } else {
            console.log('内容为空了');
            userflag = false;
            $($spans[0]).html('请重新输入');
            $($spans[0]).css('color', 'red');
        }
        checkflag();
    });


    $pass.on('blur', function () {
        let val = $(this).val();
        if (val !== '') {
            passrflag = true;
            $($spans[1]).html('√');
            $($spans[1]).css('color', 'green');
            
        } else {
            passrflag = false;
            $($spans[1]).html('请重新输入');
            $($spans[1]).css('color', 'red');
        }
        checkflag();
    });

    $repd.on('blur', function () {
        let val = $(this).val();

        if (val !== '' && val === $pass.val()) {
            repdflag = true;
            $($spans[2]).html('√');
            $($spans[2]).css('color', 'green');
        } else {
            repdflag = false;
            $($spans[2]).html('请重新输入');
            $($spans[2]).css('color', 'red');
        }
        checkflag();
    });

    $email.on('blur', function () {
        let val = $(this).val();
        if (val !== '') {
            emailflag = true;
            $($spans[3]).html('√');
            $($spans[3]).css('color', 'green');
        } else {
            emailflag = false;
            $($spans[3]).html('请重新输入');
            $($spans[3]).css('color', 'red');
        }
        checkflag();
    });

function checkflag(){
    if (userflag && passrflag && repdflag && emailflag) {
        console.log(1111);
        $regbtn.removeAttr('disabled');
        $regbtn.css('background', '#32353C');
    } else {
        console.log('false');
        $regbtn.attr('disabled', 'disabled');
        $regbtn.css('background', 'darkgray');
    }
}
    






    return {
        init() {

        }
    }

});