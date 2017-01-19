$(document).ready(function () {
    $("textarea").attr("disabled","disabled");
    //var mypicbox = $(".mypic-box");
    //var mypicboxback = $(".mypic-box-back");
    //mypicbox.mouseenter(function () {
    //        mypicboxback.animate({
    //            top: '-128px'
    //        });
    //}).mouseleave(function () {
    //    mypicboxback.animate({
    //        top: '-250px'
    //    });
    //});
    var sliders = $("table tr td input[type=range]");
    var shulians = $(".shulian");
    sliders.change(function () {
        var value = $(this).val();
        // alert(value);
        if (value<25){
            var val = '掌握';
        }else if (value<50){
            var val = '良好';
        }else if (value<75){
            var val = '熟练';
        }else if (value<=100){
            var val = '精通';
        }
        $(this).next().html(val);
    });
    var mydescription = $("#mydescription").children('textarea').val();
    //(console.log(mydescription);
    $("#mydescription").attr("title",mydescription);

});