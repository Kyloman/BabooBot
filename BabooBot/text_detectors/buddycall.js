module.exports = {
    name: 'buddy',
    description: 'detects if anyone says buddy',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE
            message.channel.send("hey listen buddy"); //Sends a regular text message in the channel
        }
    },


    
};