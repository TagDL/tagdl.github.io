var p2 ="在经历了一个月对html和css不连续学习后，<br>总算有能力（也敢写下）自己的第二个网站，<br>这个站以后可能会被我用来记录一些我平日生活遇到的有意思的事，<br>或者发布一些公告或者资源（？）<br>这个站或许不是很好看，所以请各位大佬不要吐槽awa"
var bool = true;
function button2(){
    if(bool){
        document.getElementById("p2").innerHTML=p2;
        bool = false;
    }else{
        document.getElementById("p2").innerHTML="论萌新的卑微发言（？）";
        bool = true;
    }
}