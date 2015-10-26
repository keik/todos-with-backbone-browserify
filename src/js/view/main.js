let d = require('debug')('view/main')
d('loaded')

let Backbone = require('backbone'),
    TodoView = require('../view/todo')

module.exports = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    d('#initialize')
    this.addAll()
  },

  render: function() {
    d('#render')
  },

  addOne: function(todo) {
    let view = new TodoView({model: todo})

    this.$el.append(view.render().el)
  },

  addAll: function() {
    this.collection.each(this.addOne, this)
  }

})
