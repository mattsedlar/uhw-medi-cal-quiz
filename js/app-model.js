var app = {};

app.Question = Backbone.Model.extend({
  defaults: {
    question: "",
    answer: "",
    answernote: ""
  }
});

var question = new app.Question({question:"Here is the first question"});
