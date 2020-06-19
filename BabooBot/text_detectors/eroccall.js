module.exports = {
    name: 'eroc',
    description: 'detects if anyone says eric',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE
            myid = '<@!245640457361555457>'
            message.channel.send(myid + "MY TOM RONS IT DOWN"); //Sends a regular text message in the channel
            message.channel.send(myid + "THOR BRONS ORE SMOLL TO"); //Sends a regular text message in the channel
            message.channel.send(myid + "YOU GUEOSSED IT ROGHT"); //Sends a regular text message in the channel
            message.channel.send(myid + "THOY ESCOPED FROM THE ZOO"); //Sends a regular text message in the channel
        }
    },


    
};