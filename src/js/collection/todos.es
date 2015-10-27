let d = require('debug')('collection/todos')
d('loaded')

let Backbone = require('backbone'),
    Todo = require('../model/todo.es')

require('backbone.localstorage')

module.exports = Backbone.Collection.extend({

  model: Todo,

  localStorage: new Backbone.LocalStorage('todos-backbone'),

  initialize: function() {
    d('#initialize')
  }

})
