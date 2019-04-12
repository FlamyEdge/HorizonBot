const kick = require('../commands/kick')
const embed = require('../commands/embed')
const ping = require('../commands/ping')
const help = require('../commands/help')
module.exports = (client, message) => {
  if (message.author.bot) return
  if (message.content.startsWith('!kick')) {
    return kick(message)
  }
  if (message.content.startsWith('!embed')) {
    return embed(message)
  }
  if (message.content.startsWith('!ping')) {
    return ping(message)
  }
  if (message.content.startsWith('!help')) {
    return help(message)
  }
}
