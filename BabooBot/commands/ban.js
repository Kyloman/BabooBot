module.exports = {
    name: 'ban',
    description: 'bans a user from the channel',

    execute(message) {
        try{
            const modrole = require("./moderator.js");
            let author = message.member; //the member of the server baboobot is in
            let role = message.guild.roles.find('name', modrole); //role now targets the Moderator role
            if (author.roles.has(role.id)){ //if the member is a moderator 
                let banReason = message.content.split(" ").slice(1);
                let memberToBan = message.mentions.members.first();
                if (!banReason[1]){
                    message.reply("No reason for the ban stated.")
                }
                else if (!memberToBan){
                    message.reply("No mention to ban.")
                }
                else if (message.guild.members.find('id', memberToBan.id)) {
                    console.log(memberToBan + " was banned!");
                    memberToBan.ban(banReason);
                    message.reply("Ook banned ook! (The average of the iq of the server increases by 14 points)");
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