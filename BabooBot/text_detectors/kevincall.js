module.exports = {
    name: 'kevin',
    description: 'detects if anyone says kevin',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE
            myid = '<@!183373306836156416>'
            message.channel.send(myid + " WHY WONT KEVIN REPLY"); //Sends a regular text message in the channel
            message.channel.send(myid + " REPLY :("); //Sends a regular text message in the channel
        }
    },


    
};