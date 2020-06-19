module.exports = {
    name: 'bash',
    description: 'checks to see if message sends are working',

    execute(message) {
        message.channel.send("OOK OOK!"); //Sends a regular text message in the channel
        message.reply("(How dare you!)") //Replies to whoever did the command with @user at the beginning
        message.channel.send("(Call peta on " + message.author + "!)") //Replies to whoever did the command with @user at the beginning
    },


    
};