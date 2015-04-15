var app = {};

app.Question = Backbone.Model.extend({
  defaults: {
    question: "",
    answer: "",
    answernote: ""
  }
});

app.Questions = Backbone.Collection.extend({
  model: app.Question
});

var question1 = new app.Question({question:data[0].question});
