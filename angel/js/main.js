$(document).ready(function(){
//     $("div").css( {'opacity': 0, 'bottom': '-100px' } )
// .animate( { 'opacity': '', 'bottom' : 0 }, 2000);

    $(".ani").each(function (i) {
        $(this).hide().fadeIn(1000 + i*1000);
    })
    $("#li1").on("click",function(){
        $(".tree").hide()
        $("h2").hide()
        $("p1").hide()
        $("h2").html("Angel_Studio");
        $("img").hide()
        $("img").attr("src","img/logo.png")
        $("img").fadeIn('slow')
        $("h2").fadeIn('slow')
        $("p1").fadeIn('slow')
        $("p1").html("天降工作室成立于2021年2月14日<br>前主要服务为QQ机器人，现不知道在干嘛（bushi<br>工作室成员如下：<br>室长：CaCO₃碳酸钙 QQ:2939496524<br>副室：Starry_Pig星空猪扒 QQ:1341149373<br>成员：EMeng依梦 QQ:2070123958<br>摸鱼：Shirosaki_TagDL白咲テグドラ QQ:1700290750<br>划水：Hoshino_Leaving星野リーレン QQ:3382104130");
    });
    $("#li2").on("click",function(){
        $(".tree").hide()
        $("h2").hide()
        $("p1").hide()
        $("h2").html("Star_Region");
        $("img").hide()
        $("img").attr("src","img/logo2.jpg")
        $("img").fadeIn('slow')
        $("h2").fadeIn('slow')
        $("p1").fadeIn('slow')
        $("p1").html("主服务器名：星瀚之域Star_Region<br>服务器版本：Minecraft Bedrock Edition1.19.1<br>服务器类型：插件模组生存<br>服务器地址：mc.angelcloud.top<br>服务器端口：19132");
    });
    $("#li3").on("click",function(){
        $(".tree").hide()
        $("h2").hide()
        $("p1").html("");
        $("h2").html("赞赏语不要当真（？）");
        $("img").hide()
        $("img").attr("src","img/money.JPG")
        $("img").fadeIn('slow')
        $("h2").fadeIn('slow')
    });
    $("h2").on("click", function () {
        $(".tree").hide()
        $("h2").hide()
        $("p1").hide()
        $("h2").html("ようこそ　AngelStudio！");
        $("img").hide()
        $("img").attr("src","img/logo.png")
        $("img").fadeIn('slow')
        $("h2").fadeIn('slow')
        $(".tree").fadeIn('slow')
    })
    $("#bra1").on("click", function () {
        window.open("https://wp.angelcloud.top");
    })
    $("#bra2").on("click", function () {
        window.open("https://wp.angelcloud.top");
    })
    $("#bra3").on("click", function () {
        window.open("https://wp.angelcloud.top");
    })
    //穷举大法好（）
    $("#li1").hover(function(){
        $("#underline").css("opacity","1")
        $("#underline").animate( {"left":"12px"}, 200);
    },
    function(){
        $("#underline").css("opacity","0")
    });
    $("#li2").hover(function(){
        $("#underline").css("opacity","1")
        $("#underline").animate( {"left":"114px"}, 200);
    },
    function(){
        $("#underline").css("opacity","0")
    });
    $("#li3").hover(function(){
        $("#underline").css("opacity","1")
        $("#underline").animate( {"left":"217px"}, 200);
    },
    function(){
        $("#underline").css("opacity","0")
    });
});