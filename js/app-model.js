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

/* ASSIGN DATA OBJ ATTRIBUTES TO MODEL */

assignAttr = function(mod, obj) {
  mod.set(obj);
};


var question1 = new app.Question(),
    question2 = new app.Question();

assignAttr(question1,data.question1);
assignAttr(question2,data.question2);

var myQuestions = new app.Questions([question1,question2]);
