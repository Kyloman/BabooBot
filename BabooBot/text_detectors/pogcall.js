module.exports = {
    name: 'pog',
    description: 'detects if anyone says pog',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE
            message.channel.send("PLOGGERCHAMPERINO"); //Sends a regular text message in the channel
        }
    },


    
};