module.exports = {
    name: 'aram',
    description: 'detects if anyone says aram',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE
            myid = '<@!465821051818082304>'
            message.channel.send(myid + " ARAM ALERT!!"); //Sends a regular text message in the channel
        }
    },


    
};