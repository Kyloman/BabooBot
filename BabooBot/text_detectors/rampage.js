module.exports = {
    name: 'rampage',
    description: 'detects if anyone says if baboobot is on a rampage',

    execute(message) {
        if (message.author.username != "Baboobot"){ //NON REPEATER MESSAGE
            message.reply("Ominous ook... (Show some respect if you don't want to be next...)");
        }
    },


    
};