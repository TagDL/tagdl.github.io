te = [
    "西瓜",
    "鸡中翅",
    "站军姿15分钟",
    "语文试卷",
    "辣条",
    "辣条",
    "10元现金红包",
    "10元现金红包",
    "笔记本",
    "玉米汁",
    "玉米汁",
    "寿司（原味）",
    "寿司（芥辣）",
    "免罚金牌",
    "鸡腿",
    "苹果",
    "巧克力",
    "饺子"
    ]
yi = [
    "哈密瓜",
    "咖喱鱼蛋",
    "咖啡",
    "数学试卷",
    "作业本",
    "6.6元现金红包",
    "扣肉",
    "五谷杂粮",
    "寿司（原味）"
    ]
dan = [
    "火龙果",
    "火龙果",    
    "鸡中翅",    
    "咖啡",    
    "咖啡",    
    "语文试卷",    
    "辣条",    
    "辣条",    
    "5元现金红包",    
    "5元现金红包",    
    "玉米汁",    
    "玉米汁",    
    "玉米汁",    
    "玉米汁",    
    "寿司（原味）",    
    "寿司（芥辣）",    
    "作业本",    
    "作业本",    
    "作业本",    
    "免罚金牌",    
    "鸡腿",    
    "鸡腿",    
    "苹果",    
    "苹果",    
    "巧克力",    
    "巧克力",    
    "同学投喂：饺子",    
    "跳绳100次",    
    "跳绳100次",    
    "深蹲50个",    
    "深蹲50个",    
    "站军姿15分钟",    
    "站军姿15分钟",    
    "英语试卷",    
    "化学试卷",    
    "物理试卷",    
    "地理试卷",    
    "读一篇英语课文",    
    "读一篇英语课文",    
    "牛奶",    
    "牛奶",    
    "五谷杂粮",    
    "五谷杂粮",    
    "五谷杂粮",    
    "五谷杂粮",    
    "免罚值日",    
    "免罚值日",    
    "奖值日",    
    "奖值日",    
    "扣肉",    
    "笔2支",    
    "笔2支",    
    "笔2支",    
    "王老吉",    
    "王老吉",    
    "王老吉",    
    "王老吉",    
    "糖果",    
    "糖果",    
    "糖果",    
    "零食",    
    "零食",    
    "零食",    
    "零食",    
    "零食",    
    "零食",    
    "鸡蛋2个",    
    "鸡蛋2个",    
    "香蕉2个",    
    "香蕉2个",    
    "咖哩鱼蛋",    
    "咖哩鱼蛋"
    ]
var at
$(document).ready(function(){
    $("#te").click(function(){
        list(te)
    })
    $("#yi").click(function(){
        list(yi)
    })
    $("#dan").click(function(){
        list(dan)
    })

    $("#start").delegate("input","click",function () {
        start()
    });
})
function list(pa) {
    m = $("#main")
    at = pa
    $("p").text("奖品列表（若为空请刷新页面）")
    pa.forEach(a => {
        m.append("<p><b>" + a + "</b></p>")
    });
    m.append("<br>")
    m.append("<br>")
    m.append("<div id=\"start\" onclick=\"start()\">开始</div>")
}
function start(){
    m = $("#main")
    $("p").fadeOut(200)
    $("#start").fadeOut(200)
    setTimeout(function(){
        $("p").remove()
        $("#start").remove()
        m.prepend("<p><b>请选择</b></p>")

        switch(at.length){
            case 9: //一等奖3x3
                chuli(at,3,3)
                break;
            case 18: //特等奖6x3
                chuli(at,6,3)
                break;
            default: //单科9x8
                chuli(at,8,9)
        }
    },200)
}

function randomEx(max){ //此函数求得的随机数范围为闭区间且仅返回整数
    len = max.toString().length
    num = parseInt(Math.random()*(10**len))
    if(num <= max && num >=  0){
        // console.log(num)
        return num
    }else{
        return randomEx(max)
    }
}

function chuli(arr,ni,nj){ //别骂命名了，不会英文（悲
    var z = 0 
    for(let i = 1; i <= ni; i++){
        $("table").append("<tr id=\"tr" + i + "\">")
        for(let j = 1; j <= nj; j++){
            xuhao = randomEx(arr.length - 1)
            $("#tr" + i).append("<td id=\"td" + z.toString() + "\" onclick=\"beclick(event)\">" + arr[xuhao] + "</td>")
            z++
            arr.splice(xuhao,1)
        }
    }
    z = 0
}
function beclick(e){
    $(e.currentTarget).css("background-color","black")
    $(e.currentTarget).css("color","white")
}