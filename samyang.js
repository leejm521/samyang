$(document).ready(function(){
    $(".gnb").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".gnb").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
    });


    $(".menu").click(function(){
        $(".side_menu").stop().animate({"left":"0%"});
    });
    $(".close").click(function(){
        $(".side_menu").stop().animate({"left":"-75%"});
    });
});