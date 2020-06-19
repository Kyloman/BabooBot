module.exports = {
    name: 'testmod',
    description: 'checks to see if someone is a mod',

    execute(message) {
        const modrole = require('./moderator.js');
        try{
            let author = message.member; //the member of the server baboobot is in
            let role = message.guild.roles.find('name', modrole); //role now targets the Moderator role
            if (author.roles.has(role.id)){ //if the member is a moderator 
                message.reply("You are a " + modrole);
            }
            else {
                message.reply("You are not a " + modrole);
                console.log(author.nickname +  " just tried to do a moderator command: " + message.content);
            }
        }
    catch {
        console.log("Moderator role does not exist");
        }
    },


    
};