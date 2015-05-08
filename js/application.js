var score = 0,
    counter = 1,
    ansMessage;

// this will be called in bind() and removed unbind()
var clickHandler = function () {
     if($(this).attr("data-answer") == "yes") {
      $(this).animate({ marginLeft:'0px'}, function(){
      if ( $(window).width() < 768 ) {
        $("#answer-container p").prepend("Correct! ").css({"display":"block","height":"auto","color":"black"}).fadeIn();
      }
      else {
        $(this).find("div").hide().fadeOut(3000);
        $(this).find("div").html($("#answer-container p").html()).css({"font-size":"70%", "line-height":"1.25em"}).fadeIn(1000);
       }
      score++;
    });
    }

    else if($(this).attr("data-answer") == "no") {
     $(this).css("background-color","red");
      if ( $(window).width() < 768 ) {
        $("#answer-container p").prepend("Sorry! ").css({"display":"block","height":"auto","color":"black"}).fadeIn();
      }
      else {
        $("div[data-answer='yes']").animate({marginLeft: '0px'}, function(){
          $("div[data-answer='yes']").find("div").hide().fadeOut(3000);
          $("div[data-answer='yes']").find("div").html($("#answer-container p").html()).css({ 'font-size': '70%', "line-height" : "1.25em" }).fadeIn(1000);
        });
      }

      $("div[data-answer='no']").css({ opacity: 0.5 });
    }

    $("#next").fadeTo("slow",1.0);
    $(".choice").unbind("click", clickHandler);
}

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
                                        + "'><div>"
                                        + model.attributes[x]
                                        + "</div></div>");
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

  $(".choice").bind("click", clickHandler);

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

    $("#facebook").click( function() {
          FB.ui({
              method: 'feed',
              link: 'http://perfect-wookie.com.s3-website-us-west-2.amazonaws.com/',
              name: 'I got ' + score + ' out of 11 correct',
              caption: 'Take the Medi-Cal Quiz'
              }, function(response){});
    });

// form validation workaround for Safari

  var form = document.getElementsByClassName('form-signup');
  form.noValidate = true;
  form.addEventListener('submit', function(event) { // listen for form submitting
        if (!event.target.checkValidity()) {
            event.preventDefault(); // dismiss the default functionality
            alert('Please, fill out the form'); // error message
        }
    }, false);
});



