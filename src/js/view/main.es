let d = require('debug')('view/main')
d('loaded')

let Backbone = require('backbone'),
    TodoView = require('../view/todo.es')

module.exports = Backbone.View.extend({

  el: '#app',

  events: {
    'submit #todo-form': function(e) {
      e.preventDefault()
      this.collection.create({title: this.todoTitleEl.value})
    }
  },

  initialize: function() {
    d('#initialize')

    this.todoTitleEl = this.$('#todo-title')[0]

    this.collection.fetch()
    this.addAll()

    this.collection.on('add', this.addOne, this)
  },

  render: function() {
    d('#render')
  },

  addOne: function(todo) {
    var view = new TodoView({model: todo})

    this.$('#todos').append(view.render().el)
    this.todoTitleEl.value = ''
  },

  addAll: function() {
    this.collection.each(this.addOne, this)
  }

})
