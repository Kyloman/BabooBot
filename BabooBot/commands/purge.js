module.exports = {
    name: 'purge',
    description: 'removes the x most recent messages (!baboopurge #)',
    
    execute(message) {
        const modrole = require("./moderator.js");
        const author = message.member;
        let args = message.content.split(" ").slice(1);
        let role = message.guild.roles.find('name', modrole)
        //try{
            if (author.roles.has(role.id)){
                console.log("Moderator role does actually exist");
                if(!args[0]){
                    message.delete();
                    author.send("No arguments given");
                }
                else if (args[0] > 100){
                    message.delete();
                    author.send("Too many arguments given (max 100)");  
                }
                else {
                    console.log("We got to the right section");
                    message.delete();
                    message.channel.bulkDelete(args[0]);
                    author.send("Deleted " + args[0] + " messages."); 
                    message.channel.send({embed:{
                        color: 0x28d62b,
                        description: "Ook ook! (Cleaned up the trash)"
                    }});
                }
            }
            else{
                console.log(author.nickname +  " just tried to do a moderator command: " + message.content);
            }

    },


    
};