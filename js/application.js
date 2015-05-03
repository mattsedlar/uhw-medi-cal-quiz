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
   $("#count").html(counter + " ");

   $("#next").attr("onclick","nextQuestion(eval('question' + counter))");

   counter++;

  $(".cover").slideUp();
    $("#next").css({opacity:0.0});

  $(".choice").click(function() {
    if($(this).attr("data-answer") == "yes") {
      $(this).animate({ marginLeft:'0px'});
      if ( $(window).width() < 768 ) {
        $(this).css({ 'font-weight': 'normal','font-size': '1em' });
      }
      else { $(this).css({ 'font-size': '1.777em' }); }

      $(this).html($("#answer-container p").html());
      score++;
    }

    else if($(this).attr("data-answer") == "no") {
     $(this).css("background-color","red");
      if ( $(window).width() < 768 ) {
        $("div[data-answer='yes']").animate({marginLeft: '0px'}).css({ 'font-weight': 'normal','font-size': '1em' }).html($("#answer-container p").html());
      }
      else {
        $("div[data-answer='yes']").animate({marginLeft: '0px'}).css({ 'font-size': '1.777em' }).html($("#answer-container p").html());
      }
      $("div[data-answer='no']").css({ opacity: 0.5 });
    }

    $("#next").fadeTo("slow",1.0);

  });

  }
}

$(document).ready( function() {
    $("#twitter").click( function() {
        var twitterUrl = "http://twitter.com/share/?",
        text = "text=I got " + score + " out of 11 correct. How much do you know about Medi-Cal? Take the quiz ",
        quizUrl = "&url=http://example.com";

        var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = twitterUrl + text + quizUrl,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, 'twitter', opts);

    });
});



