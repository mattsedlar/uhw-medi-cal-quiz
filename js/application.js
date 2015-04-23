var score = 0,
    counter = 1,
    ansMessage;

function nextQuestion(model){

  if(counter > 11) {

    $("#question-container").css("display","none");
    $("#score-container h2").html("You got " + score + " correct");
    $("#score-container").css("display","block");

  }


  else {

  var questionView = new app.QuestionView({model:model}),
      l = 1;
    questionView.render();
		for (x in model.attributes) {
			if(model.attributes.hasOwnProperty(x)){
        if(x.indexOf("choice") > -1) {
          $("#choice-container").append("<div class='choice' data-answer='no' id='choice"
                                        + l
                                        + "'>"
                                        + model.attributes[x]
                                        + "</div>");
          l++;
  			}
			}
		}
   $("#choice" + model.attributes.answer).attr("data-answer","yes");

   $("#next").attr("onclick","nextQuestion(eval('question' + counter))");

   counter++;

  $(".cover").slideUp();

  $(".choice").click(function() {
    if($(this).attr("data-answer") == "yes") {
      $(this).css("background-color","lightgreen");
      $("div[data-answer='no']").css({ opacity: 0.5 });
      ansMessage = "Correct! ";
      score++;
    }

    else if($(this).attr("data-answer") == "no") {
     $(this).css("background-color","red");
      $("div[data-answer='yes']").css("background-color","lightgreen");
      $("div[data-answer='no']").css({ opacity: 0.5 });
      ansMessage = "Sorry. ";
    }

    $("#answer-container p").fadeTo("slow",1.0).prepend(ansMessage);
  });

  }
}



