define([], function () {
    class Render {
        constructor() {
            this.name = 'xiaoming';
        }
        getIndexData(callback) {
            $.ajax({
                url: 'http://localhost/gog/php/result.php',
                data: {
                    getlist: '3'
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