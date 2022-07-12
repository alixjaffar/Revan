const { MessageFlags } = require("discord.js");

module.exports = {
    name: "say",
    desciption: "say command",

    async execute(message, args, Discord, client) {
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}