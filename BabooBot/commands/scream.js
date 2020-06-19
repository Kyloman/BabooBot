
module.exports = {
    name: 'scream',
    description: 'plays a youtube video (!babooscream url)',

    execute(message) {
        var ffmpeg = require('ffmpeg');
        const ytdl = require('ytdl-core');
        const args = message.content.split(' ');
        let voicechan = message.member.voiceChannel; 
        if (!voicechan){
            mesage.channel.send("You aren't in a voice channel.");
        }
        else {
           try {
               var connection = voicechan.join();
               //const dispatcher = message.member.voiceChannel.connection.playStream(ytdl(args[1]))
                const dispatcher = connection.playStream(ytdl(args[1]))
                .on('end', () => {
                    console.log('song ended');
                    voicechan.leave();
                })
                .on('error', error => {
                    console.error(error);
                    voicechan.leave();
                });
            
                dispatcher.setVolumeLogarithmic(5 / 5);
            }  
         catch {
            console.error('${error}');
             return undefined;
            }
        }
    },


    
};