const ms = require('ms');
module.exports = {
    name: 'mute',
    permissions: ["ADMINISTRATOR"],
    description: "This command mutes people.",
    execute(message, args, Discord) {
        const target = message.mentions.users.first();
        if(target) {

            let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
            
        } else {
            message.channel.reply('<@${memberTarget.user.id}> could not be muted.');
        }
    }
}
