module.exports = {
    name: 'kyle',
    description: 'detects if anyone says kyle',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE
            myid = '<@!465821051818082304>'
            message.channel.send(myid + " https://na.whatismymmr.com/kyloman"); //Sends a regular text message in the channel
            message.channel.send(myid + " PEAK ARAM MMR: 2850 (master). PENIS SIZE: NEEDS YARDSTICK"); //Sends a regular text message in the channel
        }
    },


    
};