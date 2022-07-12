const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
const { execute } = require('./purge');

module.exports = {
    name: "meme",
    description: "Gives you a meme",
    async execute (message, args, Discord, client ) { 
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Your meme. From r/${random}`)            
        .setURL(`https://reddit.com/r/${random}`)
  
        message.channel.send({embeds:[memeEmbed]})
    }
}