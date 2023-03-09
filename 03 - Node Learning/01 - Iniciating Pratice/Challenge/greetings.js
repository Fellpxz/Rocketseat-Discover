const getFlagValue = require('./flagging')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)