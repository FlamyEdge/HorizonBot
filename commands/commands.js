module.exports = message => {
  return message.reply({embed: {
    color: "16744448",
    title: "HorizonBot command list",
    fields: [
        { name: "Command", value: "`!help`\n`!ping`\n`!embed`\n`!addreaction`\n`!deletereaction`\n`!reactions`", inline: true},
        { name: "Parameter/s", value: "-\n-\n`[color] [message]`\n`[#room] [message_id] [emoji] [role]`\n`[reaction_id]`\n-", inline: true}
    ],
    footer: {
		  text: 'Tip: use `?[commands]` to get the info about the usage of the passed command'
	  }
    }})
}
