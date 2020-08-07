define([], function () {
    class Render {
        constructor() {
            this.name = 'xiaoming';
        }
        getIndexData(callback) {
            $.ajax({
                url: 'http://10.31.163.73/gog/php/result.php',
                data: {
                    getlist: '3'
                },
                dataType: 'json',
                method: 'post',
            }).done(data => {
                callback(data);
            });
        }
        getDetailData(sid,callback){
            $.ajax({
                url: 'http://10.31.163.73/gog/php/result.php',
                data: {
                    getdetail: '1',
                    sid,
                },
                dataType: 'json',
                method: 'post',
            }).done(data => {
                callback(data);
            });
        }
        getUsername(user,callback){
            $.ajax({
                url: 'http://10.31.163.73/gog/php/reg.php',
                data: {
                    user
                },
                dataType: 'json',
                method: 'post',
            }).done(data => {
                callback(data);
            });
        }
        getLogininfo(userr,pass,callback){
            $.ajax({
                url: 'http://10.31.163.73/gog/php/reg.php',
                data: {
                    userr,
                    pass,
                },
                dataType: 'json',
                method: 'post',
            }).done(data => {
                callback(data);
            });
        }
    }


    
    let ren = new Render();
    














    return {
        ren
    };

});