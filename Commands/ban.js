module.exports = {
    name: 'ban',
    permissions: ["ADMINISTRATOR"],
    descriptions: "This command bans people.",
    execute(message, args, Discrd) {
        const member = message.metnions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send(`<@${member.id}> has been banned.`);
        } else {
            message.channel.reply(`<@${member.id}> could not be banned.`);
        }
    }
}
