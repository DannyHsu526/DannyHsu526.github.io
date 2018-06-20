var mapArray, ctx, currentImgMainX, currentImageMainY;
var imgMountain, imgMain, imgEnemy;
var foodListStr = ["牛排140元","雞排130元","豬排130元"];


$(document).ready(function(){
    
   //0: empty, 1: barrier, 2: destination, 3: Enemy;
    mapArray=[1,1,1,0,0,0,0,1,3];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    //put main character on screen
    imgMain = new Image();
    imgMain.src = "images/red.png";
    currentImageMainX = 0;
    currentImageMainY = 400;
    
    imgMain.onload = function(){
        ctx.drawImage(imgMain, 8,9,42,51,currentImageMainX,currentImageMainY,200,200);
    };
    
    imgMountain = new Image();
    imgMountain.src = "images/shop.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/canvasCat.png";
    var j = 0;
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(var i in mapArray){
                if(mapArray[i] == 1){
                    if(i==0){
                        ctx.drawImage(imgMountain, 35,19,136,119,i%3*200,Math.floor(i/3)*200,200,200);
                    }else if(i == 1){
                        ctx.drawImage(imgMountain, 191,19,136,119,i%3*200,Math.floor(i/3)*200,200,200);
                    }else if(i == 2){
                        ctx.drawImage(imgMountain, 191,405,136,119,i%3*200,Math.floor(i/3)*200,200,200);
                    }else if(i == 7){
                        ctx.drawImage(imgMountain, 42,405,136,119,i%3*200,Math.floor(i/3)*200,200,200);
                    }
                    
                }else if(mapArray[i] == 3){
                    ctx.drawImage(imgEnemy, 195,55,680,826,i%3*200,Math.floor(i/3)*200,200,200);
                }
            }
        }
    }
    
});

$(document).keydown(function(event){
    var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX, cutImagePositionY;
    event.preventDefault();
    switch(event.which){
        
        case 37: //left
            targetImgMainX = currentImageMainX-200;
            targetImgMainY = currentImageMainY;
            cutImagePositionX = 12;
            cutImagePositionY = 73;
            break;
        case 38: //upward
            targetImgMainX = currentImageMainX;
            targetImgMainY = currentImageMainY-200;
            cutImagePositionX = 10;
            cutImagePositionY = 202;
            break;
        case 39: //right
            targetImgMainX = currentImageMainX+200;
            targetImgMainY = currentImageMainY;
            cutImagePositionX = 12;
            cutImagePositionY = 138;
            break;
        case 40: //downward
            targetImgMainX = currentImageMainX;
            targetImgMainY = currentImageMainY+200;
            cutImagePositionX = 8;
            cutImagePositionY = 9;
            break;
        default:
            return;
    }
    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0){
        targetBlock = targetImgMainX/200 + targetImgMainY/200*3;
        //console.log(targetBlock+"\n");
    }else{
        targetBlock = -1;
    }
    
    ctx.clearRect(currentImageMainX,currentImageMainY,200,200);
    if(targetBlock == -1 || mapArray[targetBlock] == 1|| mapArray[targetBlock] == 3){
        //do nothing
    }else{
        $("#talkBox").text("");
        currentImageMainX = targetImgMainX;
        currentImageMainY = targetImgMainY;
    }
    ctx.drawImage(imgMain, cutImagePositionX,cutImagePositionY,42,51,currentImageMainX,currentImageMainY,200,200);
    
    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("過不去了");
            break;
        case 1:
            if(targetBlock == 7){
                $("#talkBox").text("回宿舍~");
                var imgDorm = new Image();
                imgDorm.src = "images/dorm.png";
                imgDorm.onload = function(){
                    $("#img1").attr("src", imgDorm.src);
                }
            }else if(targetBlock == 0){
                $("#talkBox").text("牛排耶~");
                var imgFood = new Image();
                imgFood.src = "images/food/steak.jpg";
                imgFood.onload = function(){
                    $("#img1").attr("src", imgFood.src);
                }
            }else if(targetBlock == 1){
                $("#talkBox").text("奶茶耶~");
                var imgFood = new Image();
                imgFood.src = "images/food/milkTea.jpg";
                imgFood.onload = function(){
                    $("#img1").attr("src", imgFood.src);
                }
            }else if(targetBlock == 2){
                $("#talkBox").text("壽司耶~");
                var imgFood = new Image();
                imgFood.src = "images/food/sushi.jpg";
                imgFood.onload = function(){
                    $("#img1").attr("src", imgFood.src);
                }
            }
            break;
        case 2:
            $("#talkBox").text("Goal!");
            break;
        case 3:
            $("#talkBox").text("小灰睡著了~");
            var imgCat = new Image();
            imgCat.src = "images/cat/catSleep.jpg";
            imgCat.onload = function(){
                $("#img1").attr("src", imgCat.src);
            }
            break;
            
    }
});


