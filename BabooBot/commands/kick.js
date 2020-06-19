module.exports = {
    name: 'kick',
    description: 'kicks a user from the channel',

    execute(message) {
        try{
            const modrole = require("./moderator.js");
            let author = message.member; //the member of the server baboobot is in
            let role = message.guild.roles.find('name', modrole); //role now targets the Moderator role
            if (author.roles.has(role.id)){ //if the member is a moderator 
                let kickReason = message.content.split(" ").slice(1);
                let memberToKick = message.mentions.members.first();
                if (!kickReason[1]){
                    message.reply("No reason for the kick stated.")
                }
                else if (!memberToKick){
                    message.reply("No mention to kick.")
                }
                else if (message.guild.members.find('id', memberToKick.id)) {
                    console.log(memberToKick + " was kicked!");
                    memberToKick.kick(kickReason);
                    message.reply("Ook kicked ook! (The average of the iq of the server increases by 14 points)");
                }
                else {
                    message.reply("Error!");
                }

            }
            else {
                console.log(author.nickname +  " just tried to do a moderator command: " + message.content);
            }
        }
    catch {
        console.log("Moderator role does not exist");
        }
    },


    
};