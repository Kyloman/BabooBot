module.exports = {
    name: 'eric',
    description: 'detects if anyone says eric',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE
            myid = '<@!245640457361555457>'
            message.channel.send(myid + "MY TEAM RUNS IT DOWN"); //Sends a regular text message in the channel
            message.channel.send(myid + "THEIR BRAINS ARE SMALL TOO"); //Sends a regular text message in the channel
            message.channel.send(myid + "YOU GUESSED IT RIGHT"); //Sends a regular text message in the channel
            message.channel.send(myid + "THEY ESCAPED FROM THE ZOO"); //Sends a regular text message in the channel
        }
    },


    
};