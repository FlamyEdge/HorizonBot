module.exports = message => {
  const values = message.content.split(" ")
  const commands = values.shift()
  const color = values.shift()
  const body = values.length ? values.join(" ") : undefined
  if (typeof color === 'undefined') return message.reply("Creation of embed failed: not a valid color")
  if (typeof body === 'undefined') return message.reply("Creation of embed failed: not a valid body")
  return message.channel.send({embed: {
    color: color,
    description: body
  }})
}
