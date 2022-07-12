module.exports = {
    name: 'whoarewe',
    description: "This explains on who we are.",
    execute(message, args, Discord) {
        message.channel.send('Please refer to https://www.nonameis.com/public/white-paper');
        return;
    }
}
