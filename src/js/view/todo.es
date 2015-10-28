let d = require('debug')('view/todo')
d('loaded')

let Backbone = require('backbone')

module.exports = Backbone.View.extend({

  tagName: 'li',

  template: require('../templates/todo.html'),

  events: {
    'click .complete': 'onClickComplete',
    'click .destroy': 'onClickDestroy'
  },

  initialize: function() {
    d('#initialize')

    this.model.on('change', this.render, this)
    this.model.on('destroy', this.remove, this)
  },

  render: function() {
    d('#render')

    this.$el.html(this.template(this.model.toJSON()))
    this.$el.toggleClass('completed', this.model.get('completed'))
    return this
  },

  onClickComplete: function() {
    this.model.toggle()
  },

  onClickDestroy: function() {
    this.model.destroy()
  }

})
