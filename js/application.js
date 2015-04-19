function nextQuestion(model){
  var questionView = new app.QuestionView({model:model}),
  l = 1;
    questionView.render();
		for (x in model.attributes) {
			if(model.attributes.hasOwnProperty(x)){
        if(x.indexOf("choice") > -1) {
          $("#choice-container").append("<div class='choice' id='choice" + l + "'>" + model.attributes[x] + "</div>");
          l++;
  			}
			}
		}
   $("#choice" + model.attributes.answer).attr("data-answer","yes");
   $("#next").attr("onclick","nextQuestion(question2)");
   $(".cover").slideUp();
}
