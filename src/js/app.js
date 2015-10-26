let d = require('debug')('app')
global.localStorage.debug = '*'

d('load')

let MainView = require('./view/main'),
    Todos = require('./collection/todos')

/* eslint no-new: 0 */
new MainView({collection: new Todos()})
