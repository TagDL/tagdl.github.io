function loading() {
    songlist = [
        "FUN!FUN!",
        "お菓子な夢をおひとつどうぞ♪",
        "チェスマッチカフェチェックオレ",
        "みえるよみえる",
        "新作のしあわせはこちら!"
    ];
    songorder = 0;
    list = randlist();
    $("#aud").attr("src", "music/" + list[songorder] + ".mp3");
    $("#audioimg").attr("src", "img/music/" + list[songorder] + ".webp");
    $("#audiop").text(list[songorder])
    document.getElementById("aud").pause()
    $("#play").attr("src", "img/icon/pause.png")
}
function back() {
    if (songorder == 0) {
        songorder = list.length - 1
    } else {
        songorder = songorder - 1
    }
    $("#aud").attr("src", "music/" + list[songorder] + ".mp3");
    $("#audioimg").attr("src", "img/music/" + list[songorder] + ".webp");
    $("#audiop").text(list[songorder])
    document.getElementById("aud").play();
    $("#play").attr("src", "img/icon/play.png")
}
function start() {
    if (document.getElementById("aud").paused) {
        document.getElementById("aud").play()
        $("#play").attr("src", "img/icon/play.png")
    } else {
        document.getElementById("aud").pause()
        $("#play").attr("src", "img/icon/pause.png")
    }
}
function forward() {
    if (songorder == list.length - 1) {
        songorder = 0
    } else {
        songorder = songorder + 1
    }
    $("#aud").attr("src", "music/" + list[songorder] + ".mp3");
    $("#audioimg").attr("src", "img/music/" + list[songorder] + ".webp");
    $("#audiop").text(list[songorder])
    document.getElementById("aud").play();
    $("#play").attr("src", "img/icon/play.png")
}
document.getElementById("aud").addEventListener("ended", function () {
    if (songorder == list.length - 1) {
        songorder = 0
    } else {
        songorder = songorder + 1
    }
    $("#aud").attr("src", "music/" + list[songorder] + ".mp3");
    $("#audioimg").attr("src", "img/music/" + list[songorder] + ".webp");
    $("#audiop").text(list[songorder])
    document.getElementById("aud").play();
    $("#play").attr("src", "img/icon/play.png")
}, false)
document.getElementById("aud").addEventListener("timeupdate", function () {
    var time = document.getElementById("aud").currentTime / document.getElementById("aud").duration
    $("#progressbarouter:active #progressbarinner").css("width", time * 100 + "%")
})
function randlist() {
    let beenchange = songlist;
    let rawlength = beenchange.length;
    let finlist = new Array(rawlength);
    for (i = 0; i < rawlength; i++) {
        if (beenchange.length == 1) {
            finlist[i] = beenchange[0];
            break;
        }
        let index = Math.floor(rand(beenchange.length - 1));
        finlist[i] = beenchange[index];
        beenchange.splice(index, 1);
    }
    return finlist;
}
function rand(max) {
    let ran = Math.random() * 10;
    if (ran > max && max != 0) {
        return rand(max);
    }
    return ran;
}
// function mclick(event) { //progressbar func
//     var x = event.clientX - $('#progressbarouter').offset().left;
//     var fin = x / parseInt($("#progressbarouter").css("width"))
//     $("#progressbarinner").css("width", fin * 100 + "%")
//     document.getElementById("audio").currentTime = document.getElementById("audio").duration * fin
// }
// function move(event) { //progressbar func
//     var x = event.clientX - $('#progressbarouter').offset().left;
//     var fin = x / parseInt($("#progressbarouter").css("width"))
//     if (fin <= 1 && fin >= 0) {
//         $("#progressbarouter:active #progressbarinner").css("width", fin * 100 + "%")
//         document.getElementById("audio").currentTime = document.getElementById("audio").duration * fin
//     }
// }