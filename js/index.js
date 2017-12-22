$('#video1').on('loadstart', function (event) {
    $(this).addClass('bkg');
    $(this).attr("poster", "http://iphonewrd.com/img/loading.gif");
});
$('#video1').on('canplay', function (event) {
    $(this).removeClass('bkg');
    $(this).removeAttr("poster");
});