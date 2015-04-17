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

var question1 = new app.Question(),
    question2 = new app.Question(),
    y = 0;

var myQuestions = new app.Questions([question1,question2]);

/* ASSIGN DATA OBJ PROPERTIES TO MODEL */

assignAttr = function(mod, obj) {
  mod.set(obj);
};

for(x in data) {
	if(data.hasOwnProperty(x)) {
	assignAttr(myQuestions.models[y],data[x]);
	y++;
	}
}

