let d = require('debug')('view/todo')
d('loaded')

let Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery')

module.exports = Backbone.View.extend({

  tagName: 'li',

  template: _.template($('#item-template').html()),

  initialize: function() {
    d('#initialize')
  },

  render: function() {
    d('#render')

    this.$el.html(this.template(this.model.toJSON()))
    return this
  }

})
