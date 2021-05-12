$(document).ready(function() {

    // 执行代码
    $(".gris_nav_close").on('click', function() {
        $(".gris_sidemenu_wrapper").toggleClass('open_menu');
        $('body').toggleClass('slide_menu');

    });
    $(".gris_mobile_nav_close").on('click', function() {
        $(".gris_sidemenu_wrapper").toggleClass('open_menu');
        $('body').toggleClass('slide_menu');
    });

    // Show the navbar when the page is scrolled up
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();
        var scrollYY = 0;
        if (scrollY > 30) {
            $(".gris_header").addClass('is-scroll');
            $(".gris_mobile_nav_close").addClass('is-scroll');
            //     $(".whiteTop").css("top", "0");
            //     $(".whiteTop").css("z-index", "1");
        } else {
            $(".gris_header").removeClass('is-scroll');
            $(".gris_mobile_nav_close").removeClass('is-scroll');
        }


    });
    $.fn.postLike = function() {
        if ($(this).hasClass('done')) {
            return false;
        } else {
            $(this).addClass('done');
            var id = $(this).data("id"),
                action = $(this).data('action'),
                rateHolder = $(this).children('.count');
            var ajax_data = {
                action: "bigfa_like",
                um_id: id,
                um_action: action
            };
            $.post(PIXARTUI.www + "/wp-admin/admin-ajax.php", ajax_data, function(data) {
                $(rateHolder).html(data);
            });
            return false;
        }
    };
    $(document).on("click", ".favorite", function() {
        $(this).postLike();
    });
});

// var clipboard = new ClipboardJS('#copycode');
// clipboard.on('success', function(e) {
//     e.clearSelection();
//     // toastr.info('你有新消息了！');
//     layer.msg('复制成功！');
// });
// clipboard.on('error', function(e) {
//     e.clearSelection();
//     layer.msg('复制失败！');
// });