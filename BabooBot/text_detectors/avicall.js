module.exports = {
    name: 'avi',
    description: 'detects if anyone says avi',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE
            myid = '<@!246373488007315457>'
            message.channel.send(myid + " has been permanently banned"); //Sends a regular text message in the channel
            message.channel.send(myid + " You are among 0.006% of players egregiously negative enough to be permanently banned."); //Sends a regular text message in the channel
        }
    },


    
};