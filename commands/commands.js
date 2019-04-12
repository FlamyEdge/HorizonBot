module.exports = message => {
  message.reply("Check your dm for the result...")
  .then(msg => {
    msg.delete(5000)
  })
  .catch(O_o=>{})
  return message.author.send({embed: {
    color: "16744448",
    title: "COMMAND LIST",
    fields: [
        { name: "Command", value: "`!help`\n`!ping`\n`!embed`\n`!addreaction`\n`!deletereaction`\n`!reactions`", inline: true},
        { name: "Parameter", value: "-\n-\n[color] [message]\n[#room] [message_id] [emoji] [role]\n[reaction_id]\n-", inline: true}
    ],
    footer: {
		  text: '*Tips: use ?[commands] to get the info about the usage of the passed command.*'
	  }
    }})
}
