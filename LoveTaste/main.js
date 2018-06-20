$(document).ready(function(){
    var currentQuiz = null;
    $(startButton).click(function(){
        $("#startH").text("");
        if(currentQuiz == null){
            currentQuiz = 0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(var i=0; i<questions[0].answers.length; i++){
                $("#options").append("<input name='options' type='radio'>"
                                    +"<label>"+questions[0].answers[i][0]+"</label><br><br>");
            }
            $("#startButton").attr("value","next");
        }else{
            $.each($(":radio"), function(i,val){
               if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        var finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                        currentQuiz = null;
                        $("#startButton").attr("value", "Restart");
                    }else{
                        
                        currentQuiz = questions[currentQuiz].answers[i][1] - 1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        for(var j=0; j<questions[currentQuiz].answers.length; j++){
                            $("#options").append("<input name='options' type='radio'>"+
                                                 "<label>"+questions[currentQuiz].answers[j][0]+"</label><br><br>");
                        }
                    }
                   return false;
               } 
            });
        }
    });
});