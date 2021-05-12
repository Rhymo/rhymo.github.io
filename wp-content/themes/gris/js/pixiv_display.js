function timeStamp2String(time) {
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    return year + "-" + month + "-" + date;
}



function readTxt(txturl) {
    var xhr = $.ajax({
        url: txturl,
        async: false
    });
    // if (xhr.responseText) {
    //     var qwe = xhr.responseText.split('.')[0];
    //     console.log(qwe);
    // }
    return (xhr.responseText || '').split(/\n/);
    // console.log(xhr.responseText);
    // return xhr.responseText;
}

function fileExists(url) {
    var isExists;
    $.ajax({
        url: url,
        async: false,
        type: 'HEAD',
        error: function(e) {
            isExists = 0;
            XMLHttpRequest.status = '';

        },
        success: function() {
            isExists = 1;
            console.info();
        },
        statusCode: {
            404: function() {
                console.log();
            }
        },
    });
    if (isExists == 1) {
        return true;
    } else {
        return false;
    }
}
$(function() {
    var currentDate = new Date();
    currentDate = timeStamp2String(currentDate);
    var now = new Date();
    yestaday = new Date(now.getTime() - 86400000);
    var yyyy = yestaday.getFullYear(),
        mm = (yestaday.getMonth() + 1).toString(),
        dd = yestaday.getDate().toString();
    if (mm.length == 1) {
        mm = '0' + mm;
    }
    if (dd.length == 1) {
        dd = '0' + dd;
    }

    pixiv_url = "//www.artcg.design/api/pixiv" + currentDate + ".txt";

    if (fileExists(pixiv_url)) {

        var arr = readTxt(pixiv_url);
        var contenthtml = '<div class="row">';
        for (var i = 0; i < 50; i++) {
            var hrefLink = arr[i];
            contenthtml += '<div class="col-12 col-md-2 mb-1">' + '<img src="' + hrefLink + '" width=100%></div>'
        }
        contenthtml += '</div>'

        $('#pixiv').html(contenthtml);
        var linkhtml = '';
        for (var i = 50; i < arr.length; i++) {
            var hrefLink = arr[i];
            linkhtml += hrefLink + '<br>'
        }
        $('.pixiv_link').html(linkhtml);
    } else {
        var yes = "//www.artcg.design/api/pixiv" + yyyy + "-" + mm + "-" + dd + ".txt";
        var arr = readTxt(yes);

        var contenthtml = '<div class="row">';
        for (var i = 0; i < 50; i++) {
            var hrefLink = arr[i];
            contenthtml += '<div class="col-12 col-md-2 mb-1">' + '<img src="' + hrefLink + '" width=100%></div>'
        }
        contenthtml += '</div>'

        $('#pixiv').html(contenthtml);
        var linkhtml = '';
        for (var i = 50; i < arr.length; i++) {
            var hrefLink = arr[i];
            linkhtml += hrefLink + '<br>'
        }
        $('.pixiv_link').html(linkhtml);
    }

})