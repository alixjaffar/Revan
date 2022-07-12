module.exports = {
    name: 'setup',
    description: "This command setsup a discord channel and categories and just basically sets up discord your discord server",
    execute(message, args, Discord) {
        message.guild.channels.create("Medioa", { type: "GUILD_CHANNEL" });
message.guild.channels.create(channelName, {
        permissionOverwrites: [ {
             id: message.guild.roles.everyone, 
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], 
             deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], 
		   }
        ],
      });
    }
}