$(function () {
    
    
    
// header //

    
    $(".sub").hide();
    $(".sub_back").hide();
    $("nav li").click(function () {
        $(".sub").hide();
        $(".model").hide();
        $(this).children(".sub").show();
        $(".sub_back").show();
    });




    $("header").mouseleave(function () {
        $(".sub_back").hide();
        $(".sub").hide();
    });




    $(".sub li").hover(function () {
        $(".model").hide();
        $(this).children().show();

    });



    $("nav .model li").mouseover(function () {
        $(".model_s").hide();
        $(this).css("margin-top", "-5%");
        $(this).children().show();
    });



    $("nav .model li").mouseout(function () {
        $(this).css("margin-top", "0");

    });






    //slider//




    $(".s_gnb li:nth-child(1)").siblings().hide();


    $(".right").click(function () {
        $(".s_gnb li:first-child").fadeOut().next().fadeIn().end().appendTo(".s_gnb");
    });

    $(".left").click(function () {
        $(".s_gnb li:nth-child(5)").siblings().hide();

        $(".s_gnb li:last-child").fadeIn().prev().fadeIn().end().prependTo(".s_gnb");
    });


    
    
    //scrolltop


    $(window).scroll(function () {

        var sc = $(this).scrollTop();

        $(".s1_right").css("opacity", "0");
        if (sc > 800) {
            $(".s1_right").animate({
                opacity: "1"
            }, 1000);
        }



        $(".s2_left").css("opacity", "0");
        if (sc > 2500) {
            $(".s2_left").animate({
                opacity: "1"
            }, 1000);
        }
    });

    
    

    //     a-class
    
    
    $(".go").hover(function () {
        $(".s1_cover").css("left", "0");
    });


    $(".s1_cover").mouseleave(function () {
        $(this).css("left", "-100%");
    });



    // main > section2


    $(".sec2>img").mouseenter(function () {
        $(this).animate({
            opacity: 0.5
        }, "slow");
    });





    $(".s2_sub").hide();



    $(".s2_gnb>li").mouseover(function () {
        $(".s2_sub").hide();
        $(this).children().show();
    });

    $(".s2_sub").mouseout(function () {
        $(this).hide();
    });





//  서브페이지 sub page

    $(".model_list li").click(function () {
        $(".model_img").hide();
        $(this).children(".model_img").show();
        $(this).addClass("co");
        $(this).siblings().removeClass("co");
    });


    $(".safe_menu li").click(function () {
        $(".safe_img").hide();
        $(this).children(".safe_img").fadeIn(900);
        $(this).addClass("co");
        $(this).siblings().removeClass("co");
    });

    $(".com_menu li").click(function () {
        $(".com_img").hide();
        $(this).children(".com_img").fadeIn(900);
        $(this).addClass("co");
        $(this).siblings().removeClass("co");
    });



    // 서브페이지 이동


    $(".gomodel").click(function () {
        $(".sub_model").removeClass("ab");
        $(".sub_model").siblings().addClass("ab");
        $(".sub_left").addClass("bk");
    });


    $(".gosafe").click(function () {
        $(".sub_safe").siblings().addClass("ab");
        $(".sub_safe").removeClass("ab");
        $(".sub_left").removeClass("bk");
        $(".sub_right").removeClass("bk");
    });


    $(".gocom").click(function () {
        $(".sub_com").siblings().addClass("ab");
        $(".sub_com").removeClass("ab");
        $(".sub_left").removeClass("bk");
        $(".sub_right").removeClass("bk");
    });

    $(".govid").click(function () {
        $(".sub_vid").removeClass("ab");
        $(".sub_vid").siblings().addClass("ab");
        $(".sub_left").removeClass("bk");
        $(".sub_right").removeClass("bk");
    });


    $(".godesign").click(function () {
        $(".sub_dg").removeClass("ab");
        $(".sub_dg").siblings().addClass("ab");
        $(".sub_left").removeClass("bk");
        $(".sub_right").addClass("bk");
    });


    // sub design


    $(".int_menu li").click(function () {
        $("span").hide();
        $(".int_look").hide();
        $(".int_look").fadeIn();
        $("span").fadeIn();
        $(".int_img").hide();

        $(this).children(".int_img").show();
        $(this).addClass("co2");
        $(this).addClass("box");
        $(this).siblings().removeClass("co2");
        $(this).siblings().removeClass("box");


    });


// sub design slider
   
    $(".sub_ext_right i").click(function () {
 $(".sub_ext1 li:nth-child(1)").siblings().hide();
        $(".sub_ext1 li:first-child").hide().next().show().end().appendTo(".sub_ext1");
    });

$(".sub_ext_left i").click(function(){
    
    $(".sub_ext1 li:last-child").show().prev().show().end().prependTo(".sub_ext1");
});
    


    
    
    // design color


    $(".color_menu li").click(function () {
        $(".color_menu li").removeClass("co");
        $(this).addClass("co");
        $(".color_img").hide();
        $(this).children(".color_img").show();
    });



    $(".sub_d1 i:first").click(function () {
        $(".int_img li:first").hide();
    });


    //design left

    $(".int_look ").mouseover(function () {
        $(".int_img1").hide();
        $("span").hide();
        $(".int_look").hide();
        $(".int_look").fadeIn();
        $("span").fadeIn();
    });
    $(".int_look ").mouseleave(function () {
        $(".int_img1").show();
        $("span").hide();
        $(".int_look").hide();
        $(".int_look").fadeIn();
        $("span").fadeIn();
    });




});
