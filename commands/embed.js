module.exports = message => {
  const values = message.content.split(" ");
  const color = values[1];
  const body = values[2] ? message.content.substr(message.content.indexOf(' '), message.content.indexOf(' ')+1) : '';
  return message.reply({embed: {
    color: color,
    description: body
  }})
}
