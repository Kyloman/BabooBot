module.exports = {
    name: 'bucket',
    description: 'detects if anyone says bucket',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE
            message.channel.send("https://thedorkydaddy.files.wordpress.com/2014/01/img_5647.jpg"); //Sends a regular text message in the channel
        }
    },


    
};