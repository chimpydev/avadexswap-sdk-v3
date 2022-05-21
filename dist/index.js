
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdk-v3.cjs.production.min.js')
} else {
  module.exports = require('./sdk-v3.cjs.development.js')
}
