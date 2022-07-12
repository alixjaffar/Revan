const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async execute (message, args, Discord, client ) {
        const help = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`kick`', 'Kicks a member from your server via mention or ID')
        .addField('`ban`', 'Bans a member from your server via mention or ID')
        .addField('`purge`', 'Purges messages')
        .addField('`mute`', 'This command mutes people.')
        .addField('`unmute`', 'This command unmutes people.')
        .setVolor("RANDOM")
        .setTimestamp()

        const misc = new Discord.MessageEmbed()
        .setTitle('Misc')
        .addField('`whoarewe`', 'Explains on who the creator of the bot is.')
        .addField('`weather`', 'Checks weather forecast for provided location')
        .addField('`meme`', 'Generates a random meme')
        .setColor("RANDOM")
        .setTimestamp()

        message.channel.send({embeds:[moderation]})
        message.channel.send({embeds:[misc]})

    }
}