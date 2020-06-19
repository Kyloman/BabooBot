module.exports = {
    name: 'leave',
    description: 'makes baboo leave a voice channel',

    execute(message) {
        try {
            message.member.voiceChannel.leave();
            
        }
        catch(error){
            console.log(error)
        }
    },


    
};