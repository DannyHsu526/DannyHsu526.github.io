$(document).ready(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    var secUnit = 1000;
    var minUnit = secUnit * 60;
    var hourUnit = minUnit * 60;
    var dayUnit = hourUnit * 24;
    
    for(var i=0; i<topicCount; i++){
        console.log(topic[i] + "<input class='explainBtn' type='button' value='點我看說明' id='button"+ i + "'>");
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>" + (i+1) + "</td>"); 
        $("#courseTable").append("<td>" + (new Date((startDate.getTime()+i*7*dayUnit))).toLocaleDateString().slice(5) + "</td>");
        $("#courseTable").append("<td>" + topic[i] + "<input class='explainBtn' type='button' value='點我看說明' id='button"+ i + "'>" + "</td>");
        $("#courseTable").append("</tr>");
    }
    $("#button0").click(function(){
       var img = new Image();
       img.src = "images/Pi/1.jpg";
       img.onload = function(){
           $("#img1").attr("src", "images/Pi/1.jpg"); 
       }
       $("#explainP").text("終於跟系辦拿到樹莓派了！");
    });
    $("#button1").click(function(){
       var img = new Image();
       img.src = "images/Pi/2.jpg";
       img.onload = function(){
           $("#img1").attr("src", "images/Pi/2.jpg"); 
       }
       $("#explainP").text("灌好Pi的作業系統Rasbian了，其實根本就是Linux。");
    });
    $("#button2").click(function(){
       var img = new Image();
       img.src = "images/Pi/3.jpg";
       img.onload = function(){
           $("#img1").attr("src", "images/Pi/3.jpg"); 
       }
       $("#explainP").text("裝個鏡頭來拍照看看，這張照片是用Pi拍的喔！");
    });
    $("#button3").click(function(){
       var img = new Image();
       img.src = "images/Pi/4.jpg";
       img.onload = function(){
           $("#img1").attr("src", "images/Pi/4.jpg"); 
       }
       $("#explainP").text("期中考試沒時間弄Pi，教授准許我們停工一週~");
    });
    $("#button4").click(function(){
       var img = new Image();
       img.src = "images/Pi/5.jpg";
       img.onload = function(){
           $("#img1").attr("src", "images/Pi/5.jpg"); 
       }
       $("#explainP").text("每次要弄Pi都要外接螢幕太麻煩了，好想直接PuTTy用SSH進去系統，用電腦當熱點，樹梅派連線，不過要先去設定跟無線網路有關的檔案，鬼才看的懂......，還好Google很方便。");
    });
    $("#button5").click(function(){
       var img = new Image();
       img.src = "images/Pi/6.jpg";
       img.onload = function(){
           $("#img1").attr("src", "images/Pi/6.jpg"); 
       }
       $("#explainP").text("FTP server架好囉！以後拍完的影片、照片檔要抓到Windows來看不用再靠USB了~");
    });
});