function startQuiz(){
    var questionView = new app.QuestionView({model:question1}),
		l = 1;
    questionView.render();
		for (x in question1.attributes) {
			if(question1.attributes.hasOwnProperty(x)){
        if(x.indexOf("choice") > -1) {
          $("#choice-container").append("<div class='choice' id='choice" + l + "'>" + question1.attributes[x] + "</div>");
          l++;
  			}
			}
		}
   $("#choice" + question1.attributes.answer).attr("data-answer","yes");
   $(".cover").slideUp();
}
