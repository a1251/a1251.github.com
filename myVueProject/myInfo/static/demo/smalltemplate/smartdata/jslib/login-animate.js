/**
 * Created by Xiao on 2016/12/18.
 */
var Interval;
$(document).ready(function () {
    //console.log(clientY);
    var change = $(".change");
    var random = 0;
    Interval = setInterval(function(){
        random = Math.floor(Math.random()*10);
        var thiscard = $(".change").eq(random);
        //alert(random);
        cardChange(thiscard);
    },3000);
    change.click(function () {
        //alert("test");
        var thiscard = $(this);
        cardChange(thiscard);
    });
});
function cardChange(thiscard){
    clearInterval(Interval);
    thiscard.siblings().fadeOut("fast");
    thiscard.parent().siblings().find(".card3").removeClass("card3-long");
    thiscard.parent().siblings().find(".card4").removeClass("card3-long");
    thiscard.parent().siblings().children().fadeIn("fast").removeClass("opaci");
    thiscard.parent().siblings().children().addClass("opaci");
    //thiscard.parent().siblings().find(".card3").fadeIn().addClass("opaci");
    setTimeout(function(){
        thiscard.addClass("card3-long").removeClass("opaci");
    },600);
    Interval = setInterval(function(){
        random = Math.floor(Math.random()*10);
        var thiscard = $(".change").eq(random);
        //alert(random);
        cardChange(thiscard);
    },3000);
}
