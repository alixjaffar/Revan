module.exports = {
    name: 'kick',
    permissions: ["ADMINISTRATOR"],
    descriptions: "This command kicks other people",
    execute(message, args, Discord) {
        const member = message.mentions.users.first();
        if(member) {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send(`<@${member.id}> has been kicked.`);
        } else {
            message.channel.reply(`<@${member.id}> could not be kicked.`);
        }
    }
}
  