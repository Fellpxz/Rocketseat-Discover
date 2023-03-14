const getFlagValue = require('./flagging')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)

//command node greetings --greeting "nego ney" --name "ney nego"