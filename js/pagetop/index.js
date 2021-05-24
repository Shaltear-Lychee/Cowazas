$(document).ready(function(){
    $(window).on('load resize', function(){
        resize();
    });

    $(window).on('load', function(){
        resize();
    });


    $(".category-title").on("click", function (){
        $(this).toggleClass("activated-div");
        $(this).find("p").toggleClass("activated-p");
        $(this).next().slideToggle();

    });

});

function resize(){
    $bodywidth = $("body").innerWidth();
    $bodyheight = $("body").innerHeight();

    $num0 = $('#navlist').innerHeight();//親要素の幅を取得
    $num0 = $num0 / 3;//値を半分にする
    $('#navlist').find('li').css('font-size',　$num0 + 'px');

    $num1w = $("#articlezone-upper").innerWidth();
    $num1ha = $num1w * 63 / 129;
    $num1hb = $num1w * 129 / 63;
    $num2w = $("#articlezone-lower").innerWidth();
    $num2ha = $num2w * 30 / 129;
    $num2hb = $num2w;
    if($bodywidth >= 600) {
        $("#articlezone-upper").css({
            "height": $num1ha + "px",
            "gap": $num1w / 60 + "px",
        });
        $("#mid-center").css({
            "height": $("#mid-center").innerWidth() * 0.9 + "px",
            "margin-left": $num1w / 40 + "px",
            "margin-right": $num1w / 40 + "px",
            "margin-top": $num1w / 40 + "px",
            "margin-bottom": $num1w / 20 + "px"

        });
        $(".title").css({
            "width": "auto",
            "height": $num1ha / 10 + "px",
            "line-height": $num1ha / 10 + "px",
            "font-size": $num1ha / 15 + "px",
        });
        $("#articlezone-lower").css({
            "height": $num2ha + "px",
            "gap": $num1w / 60 + "px"
        });
    }else {
        $("#mid-center").css({
            "height": $("#mid-center").innerWidth() * 0.9 + "px",
            "margin-left": $num1w / 20 + "px",
            "margin-right": $num1w / 20 + "px",
            "margin-top": $num1w / 40 + "px",
            "margin-bottom": $num1w / 20 + "px"
        });
        $("#mid-center-lower").css("margin-top", $num1w / 40 +"px");
        $(".title").css({
            "width" : $num1w * 3 / 5,
            "height": $num1hb / 20 + "px",
            "line-height": $num1hb / 20 + "px",
            "max-font-size": $num1hb / 40 + "px"
        });
        $(".title").each(function (index, value){
            let length  = value.textContent.length;
            let charwidth = ($num1w * 3 / 5) / length;
            if(charwidth > ($num1hb / 30)){
                charwidth = $num1hb / 30;
            }
            $("#title" + index).css("font-size", charwidth + "px");
        });
        $("#articlezone-upper").css({
            "height": $num1hb + "px",
            "gap": $num1w / 60 + "px"
        });
        $("#articlezone-lower").css({
            "height": $num2hb + "px",
            "gap": $num1w / 60 + "px"
        });
    }


    $num3 = $("#example-subart").innerHeight();
    $(".article").find("p").css({
        "font-size": $num3 / 15 + "px",
        "margin-top": $num3 / 40 + "px",
        "margin-left": $num3 / 20 + "px",
        "margin-right": $num3 / 20 + "px",
        "margin-bottom": $num3 / 40 + "px"
    });

    $num4 = $("#mainarticle");
    $num4h = $("#mainarticle").innerHeight();
    $num4.find("p").css("font-size", $num4h / 15 + "px");
    $num4.find("p").css({
        "margin-top": $num4h / 80 + "px",
        "margin-left": $num4h / 20 + "px",
        "margin-right": $num4h / 20 + "px",
        "margin-bottom": $num4h / 80 + "px"
    });
    $(".category-title").css({
        "line-height": $(".category-title").innerHeight() + "px",
    });
    $num5 = $(".category-title").innerHeight();
    $num5 = $num5 * 0.75;
    $(".category-detail li").css({
        "height": $num5 + "px",
        "line-height": $num5 + "px",
        "font-size": $num5 * 0.4 + "px"
    });
}

