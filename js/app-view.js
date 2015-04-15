app.QuestionView = Backbone.View.extend({
  el: '#question-container',
  template: _.template( $("#question_template").html()),
  initialize: function(){
   this.render();
  },
  render: function() {
    this.$el.html( this.template(this.model.toJSON()));
    return this;
  }
});

var questionView = new app.QuestionView({model:question});
