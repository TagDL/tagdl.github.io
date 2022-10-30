var clickleft = true;
$(document).ready(function () {
    $(".inner,footer").each(function (i) {
        $(this).css( {'opacity': 0, 'bottom': '-100px' } )
.animate( { 'opacity': '1', 'bottom' : 0 }, 1000 + i*500);
    })
    $("#qq").on("click",function () { 
        clickleft = false;
        window.open("https://qm.qq.com/cgi-bin/qm/qr?k=pBH_B6DK3u_306s2ICvwJ6fhb3XlTCks&noverify=0");
    });
    $("#music").on("click",function () { 
        clickleft = false;
        window.open("https://y.music.163.com/m/user?id=1364401008&dlt=0846&app_version=8.8.45");
    });
    $("#bili").on("click",function () { 
        clickleft = false;
        window.open("https://b23.tv/CfKvrqs");
    });
    $(".ad").on("click",function () { 
        window.open("https://www.angelcloud.top/");
    });
    $(".so").on("click",function () { 
        window.location.href = "./some.html";
    });
    $(".left").on("click",function () { 
        if(clickleft){
            $(".left p1").hide()
            $(".left img").hide()
            $(".left h1").hide()
            show_t();
            clickleft = false;
        }else{
            $(".left p1").fadeOut(1000,show_f());
            clickleft = true;
        }
    });
});
function show_t(){
    $(".left p1").html("名前：白咲ドラ<br>英文：Shirosaki TagDL<br>曙光工坊及天降工作室成员<br>我的世界命令玩家<br>应该挨千刀的万年死鸽子（自豪）<br>事学生（？）<br>平时喜欢玩以撒，我的世界和osu（底层音游人罢了）<br>白玉老师众多犬中的一员（大雾）<br>是点兔厨！百合什么的大好き！<br>如果有性趣和咱聊天或是什么别的<br>可以来QQ群：     <a href='https://jq.qq.com/?_wv=1027&k=JLWVR3sJ' class='intf'> 星瀚之域</a>找咱！www")
    $(".left p1").fadeIn(1000)
}
function show_f(){
    $(".left p1").html("")
    $(".left img").fadeIn(1000)
    $(".left h1").fadeIn(1000)
}

