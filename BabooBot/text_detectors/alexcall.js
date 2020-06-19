module.exports = {
    name: 'alex',
    description: 'detects if anyone says alex',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE use if(!msg.author.bot)
            myid = '<@!249592851690684426>'
            message.channel.send(myid + " OOK OOK!"); //Sends a regular text message in the channel
            message.channel.send(myid + " DID YOU KNOW YOU COULD SUBSCRIBE FOR FREE WITH TWITCH PRIME"); //Sends a regular text message in the channel
            message.channel.send(myid + " https://www.twitch.tv/vlad_the_implaer"); //Sends a regular text message in the channel
            message.channel.send(myid + " OOK OOK"); //Sends a regular text message in the channel
        }
    },


    
};