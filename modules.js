//CommonJS, every file is a module (by default)

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
require('./mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)