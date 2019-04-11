const kick = require('../commands/kick')
const embed = require('../commands/embed')
module.exports = (client, message) => {
  if (message.author.bot) return
  if (message.content.startsWith('!kick')) {
    return kick(message)
  }
  if (message.content.startsWith('!embed')) {
    return embed(message)
  }
}
