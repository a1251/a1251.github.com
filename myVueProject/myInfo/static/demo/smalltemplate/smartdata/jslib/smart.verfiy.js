/**
 * Created by Abi on 2016/12/13.
 */
(function ($) {
    var index = 1;
    $.fn.clickImage = function(options) {
        options = $.extend({}, $.fn.clickImage.defaults, options || {});
        var event = options.event;
        var target = $(this);
        //debugger;
        //获取图片标签
        var imgElement = $(this).children("img")[0];
        var imgWidth = $(imgElement).css("width");
        var imgHeight = $(imgElement).css("height");
        var width = 0, height = 0;
        if (imgWidth && imgHeight){
            imgWidth = imgWidth.replace("px", "");
            imgHeight = imgHeight.replace("px", "");
            width = parseInt(imgWidth);
            height = parseInt(imgHeight);
        }
        var topValue = 0;
        var leftValue = 0;
        //获取元素的位置
        leftValue += target.offset().left;
        topValue += target.offset().top;

        /*var targetID = target.attr("id");
        var container = document.getElementById(targetID);
        var parentElement = container;
        while (parentElement) {
            console.log(parentElement);
            leftValue += parentElement.offsetLeft;
            topValue += parentElement.offsetTop;
            parentElement = parentElement.offsetParent;
        }*/

        /*解决firefox获取不到点击事件的问题*/
        var clickEvent = event ? event : (window.event ? window.event : null);
        var scrollTop = $(window).scrollTop();
        var scrollLeft = $(window).scrollLeft();
        //console.log("target的LEFT位置:" + leftValue);
        //console.log("target的TOP位置:" + topValue);
        //console.log("window的滚动LEFT:" + scrollLeft);
        //console.log("window的滚动TOP:" + scrollTop);
        /*获取相对的点击位置像素*/
        var clickLeft = clickEvent.clientX + scrollLeft - document.body.clientLeft - 10;
        var clickTop = clickEvent.clientY + scrollTop - document.body.clientTop;
        //console.log("clickEvent的LEFT:" + clickEvent.clientX);
        //console.log("clickEvent的TOP:" + clickEvent.clientY);
        //console.log("clientLeft的LEFT:" + document.body.clientLeft);
        //console.log("clientLeft的TOP:" + document.body.clientTop);
        //console.log("点击位置的LEFT:" + clickLeft);
        //console.log("点击位置的TOP:" + clickTop);

        var divId = "img_" + index++;
        var divElement = $("<div></div>");
        $(divElement).attr("id", divId);
        $(divElement).css("position", "relative");
        $(divElement).css("zIndex", index);
        $(divElement).css("width", options.signWidth);
        $(divElement).css("height", options.signHeight);
        $(divElement).css("display", "inline");

        //var relativeX = clickLeft - leftValue - (options.showSize / 2 * options.imageWidth);
        var relativeX = clickLeft - leftValue - width;
        var relativeY = clickTop - topValue - options.imageHeight - options.labelHeight / 2;

        //console.log(relativeX);
        //console.log(relativeY);
        $(divElement).css("top", relativeY);
        $(divElement).css("left", relativeX);

        $(divElement).click({id : divId, target : target}, function(event){
            var id = event.data.id;
            var target = event.data.target;
            target.children("#" + id).remove();
        });
        target.append(divElement);

        var imgElement = $("<img/>");
        $(imgElement).attr("src", options.signUrl);
        $(imgElement).css("width", options.signWidth + "px");
        $(imgElement).css("height", options.signHeight + "px");
        $(imgElement).css("top", "0px");
        $(imgElement).css("left", "0px");
        $(imgElement).css("position", "absolute");
        $(imgElement).css("zIndex", index);
        $(divElement).append(imgElement);

    }

    $.fn.clickImage.defaults = {
        showSize: 8,
        imageWidth: 75,
        imageHeight: 75,
        labelHeight: 25,      //标签高度
        event: null,
        signWidth: 20,      //点击的提示图片宽度
        signHeight: 20,     //点击的提示图片高度
        signUrl: 'static/images/timo.png'       //点击的提示图片URL
    };

    $.fn.clickImage.remove = function(id, target){
        //console.log(target);
        document.getElementById("picture").removeChild(document.getElementById(id));

    }
})(jQuery);


(function ($) {
    $.fn.refreshImage = function(options) {
        options = $.extend({}, $.fn.refreshImage.defaults, options || {});
        $(this).find('div[id^="img_"]').remove();
        var imgElement = $(this).children("img")[0];
        var url = options.url;
        if(!url)
            url = $(imgElement).attr("src");
        $(imgElement).attr("src", url + "?" + Math.random());
    }

    $.fn.refreshImage.defaults = {
        url: null
    };
})(jQuery);

(function ($) {
    $.fn.login = function(options) {
        options = $.extend({}, $.fn.login.defaults, options || {});
        var imgElement = $(this).children("img")[0];
        var target = $(this);
        var loginAuth = getLoginAuth(imgElement, target);
        //console.log(loginAuth);
        var username = $("#" + options.usernameID).val();
        var password = $("#" + options.passwordID).val();

        $.ajax({
            type : "post",
            url : options.loginUrl,
            dataType : "json",
            data : {
                "loginAuth": loginAuth,
                "username": username,
                "password": password
            },
            success : function(data) {
                console.log("Success!");
                console.log(data.code);
                if(data.code == 0) {
                    $(target).refreshImage();
                }
            },
            complete: function(XMLHttpRequest, textStatus){

            },
            error : function (data) {
                console.log("Error!");
            }
        });

        function getLoginAuth(imgElement, target){
            var imgWidth = $(imgElement).css("width");
            var imgHeight = $(imgElement).css("height");
            var width = 0, height = 0;
            if (imgWidth && imgHeight){
                imgWidth = imgWidth.replace("px", "");
                imgHeight = imgHeight.replace("px", "");
                width = parseInt(imgWidth);
                height = parseInt(imgHeight);
            }

            var result = "";
            var children = $(target).children("[id^=img_]");
            for(var i = 0; i < children.length; i++){
                var node = children[i];
                var top = $(node).css("top");
                var left = $(node).css("left");
                top = top.replace("px", "");
                left = left.replace("px", "");
                top = parseInt(top);
                left = parseInt(left);

                if(top < 0)
                    top = top - options.labelHeight/2 + height;
                else
                    top = height / 2 - top;
                left = left + width + 10;
                result = result + left + "," + top + ",";
            }
            result = result.substr(0, result.length - 1);
            return result;
        }
    }

    $.fn.login.defaults = {
        showSize: 8,
        imageWidth: 75,
        imageHeight: 75,
        labelHeight: 25,    //标签高度
        usernameID: 'username',
        passwordID: 'password',
        successUrl: null,
        loginUrl: 'login'
    };
})(jQuery);
