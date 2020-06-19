module.exports = {
    name: 'michael',
    description: 'detects if anyone says michael',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE
            myid = '<@!98469674202730496>'
            message.channel.send(myid + "gtg my child got a bucket stuck on their head"); //Sends a regular text message in the channel
        }
    },


    
};