var mountainName = ["月世界","東眼山","金瓜石地質公園","鼓山公園","石門水庫"];
var catName = ["小灰","橘貓","玳瑁","小黑","小小黑"];
var foodName = ["肉燥飯","燒臘","雞腿便當","小火鍋","拉麵"];
var themePic = [["moonWorld","eastEye1","goldenPark","drumPark","stoneDoor"],
               ["gray","orange","daimei","black","blackjr"],
               ["porkRice","hkLa","chicken","hotpot","ramen"]];
var currentTheme;
var picFolder = ["images/eastEye/","images/cat/","images/food/"];
var currentPicFolder;
$(document).ready(function(){
   $("#climbing").click(function(){
       $("#choiceNotice").text("");
       currentPicFolder = picFolder[0];
       currentTheme = 0;
       $("#outcome").text("?");
       $("#button1").attr("value", "今天去哪玩？");
       $("#button1").attr("disabled", false);
        for(var i=0; i<5; i++){
            $("#list li").eq(i).text(mountainName[i]);
        }
   }); 
    
   $("#feedingCat").click(function(){
       $("#choiceNotice").text("");
       currentPicFolder = picFolder[1];
       currentTheme = 1;
       $("#outcome").text("?");
       $("#button1").attr("value", "今天餵哪隻貓？");
       $("#button1").attr("disabled", false);
       for(var i=0; i<5; i++){
            $("#list li").eq(i).text(catName[i]);
        }
   }); 
    
   $("#eatingStuff").click(function(){
       $("#choiceNotice").text("");
       currentPicFolder = picFolder[2];
       currentTheme = 2;
       $("#outcome").text("?");
       $("#button1").attr("value", "今天吃什麼？");
       $("#button1").attr("disabled", false);
       for(var i=0; i<5; i++){
            $("#list li").eq(i).text(foodName[i]);
        }
   }); 
    
   $("#button1").click(function(){
       var numOfList = $("#list li").length;
       var rand = Math.floor(Math.random()*numOfList);
       $("#outcome").text($("#list li").eq(rand).text());
       var img = new Image();
       img.src = currentPicFolder+themePic[currentTheme][rand]+".jpg";
       img.onload = function(){
           $("#img1").attr("src", img.src);
       }
       
   }); 
    
   
    
});

