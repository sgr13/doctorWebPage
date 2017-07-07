$(document).ready(function () {

    var p1 = $("#sideMenu");
    var offset1 = p1.offset();
    console.log(offset1);

    $('#sideMenu').animate({right: "+=150"}, 1);

    var p2 = $("#sideMenu");
    var offset2 = p2.offset();


    $('#sideMenu').mouseover(function() {
        var p1 = $("#sideMenu");
        var offset2 = p1.offset();
        console.log(offset1);
        $("#sideMenu").offset({ top: offset2.top, left: offset1.left});
    })

    $('#sideMenu').mouseleave(function() {
        var p1 = $("#sideMenu");
        var offset3 = p1.offset();
        $("#sideMenu").offset({ top: offset3.top, left: offset1.left});
        $("#sideMenu").offset({ top: offset3.top, left: -151.916671752929688});
    });

    $('.nav li').click(function () {
        $('.nav li').removeClass('active');
        $(this).addClass('active');
    })

});