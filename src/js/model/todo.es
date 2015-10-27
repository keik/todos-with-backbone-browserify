let d = require('debug')('model/todo')
d('loaded')

let Backbone = require('backbone')

module.exports = Backbone.Model.extend({

  defaults: {
    title: 'new task',
    completed: false
  },

  initialize: function() {
    d('#initialize')
  },

  toggle: function() {
    d('#toggle')

    this.save({completed: !this.get('completed')})
  }

})
