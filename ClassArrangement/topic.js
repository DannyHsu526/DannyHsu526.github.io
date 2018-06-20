var topic = ["買樹梅派","架Pi系統","裝鏡頭","考試沒進度","處理連接問題","架FTP"];


var startDate = new Date(); //this will set startDate as a Date Object, its value is the time at the very moment

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1); //(cuz setMonth is from 0~11)
    startDate.setDate(startDay);
    
    //later will use startDate to compute time, so set the initial value to zero
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(5,1);