let d = require('debug')('collection/todos')
d('loaded')

let Backbone = require('backbone'),
    Todo = require('../model/todo')

module.exports = Backbone.Collection.extend({
  initialize: function() {
    d('#initialize')

    this.add(new Todo({title: 'a', completed: true}))
    this.add(new Todo({title: 'b', completed: false}))
    this.add(new Todo({title: 'c', completed: false}))
  }
})
