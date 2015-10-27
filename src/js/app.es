let d = require('debug')('app')
global.localStorage.debug = 'model/*,collection/*'

d('load')

let MainView = require('./view/main.es'),
    Todos = require('./collection/todos.es')

/* eslint no-new: 0 */
new MainView({collection: new Todos()})
