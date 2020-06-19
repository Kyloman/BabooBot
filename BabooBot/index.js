const Discord = require("discord.js"); //imports 
const Client = new Discord.Client();//create a client to do actions with
const prefix = "!baboo"; //choose a prefix for our bot to trigger
const prefix2 = "!"; //choose a prefix for our bot to trigger
const fs = require('fs');


//SERVER VARIABLES

//TEXT DETECTOR SETUP
var detectText = true;
Client.textDetectors = new Discord.Collection(); //makes a collection of textDetectors
const textDetectorFiles = fs.readdirSync('./text_detectors').filter(file => file.endsWith('.js'));
for (const file of textDetectorFiles) { //instantiates the text detectors
    const textDetector = require(`./text_detectors/${file}`);
    Client.textDetectors.set(textDetector.name, textDetector);
}

//COMMAND SETUP
Client.commands = new Discord.Collection(); //makes a collection of textDetectors
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) { //instantiates the text detectors
    const command = require(`./commands/${file}`);
    Client.commands.set(command.name, command);
}

//ONLINE CHECK
Client.on('ready', ()=>{ //If the bot is available, then this stuff will happen when it goes online
    console.log("Baboobot engaged!");
})

// Create an event listener for new guild members
Client.on('guildMemberAdd', member => {
    console.log("A user has joined!");
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === generalServer);
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome, here is your additional chromosome, ${member}, although you might have too many already`);
  });

  //TESTING SQL STUFF HERE!!!!!!


Client.on('message', (message)=>{ //If the bot receives a message, this will trigger
    //IF IT IS DMED, SAID IN SERVER, ANYWHERE!!

    const strmessage = new String(message.toString().toLocaleLowerCase());
    const strsender = new String(message.author.username);
    //const args = message.content.slice(prefix.length).split(" ");
    //const args = message.content.split(" ").slice(1);
    const author = message.member;
    


    //---------------------------------Callouts---------------------------

    if (detectText == true){
        try {
            if(strmessage.includes("pog")){ 
                Client.textDetectors.get('pog').execute(message); //break;
            }
            if(strmessage.includes("buddy")){ 
                Client.textDetectors.get('buddy').execute(message);
            }   
            if(strmessage.includes("ram")){ 
                Client.textDetectors.get('aram').execute(message);
            }
            if(strmessage.includes("alex") || strmessage.includes("mcn") || strmessage.includes("romanian")){ 
                Client.textDetectors.get('alex').execute(message);
            }
            if(strmessage.includes("alex do u use your mouse on a trackpad")){ 
                Client.textDetectors.get('alextrackpad').execute(message);
            }
            if(strmessage.includes("eric") || strmessage.includes("piggy") || strmessage.includes("breed")){ 
                Client.textDetectors.get('eric').execute(message);
            }
            if(strmessage.includes("eroc") || strmessage.includes("poggy") || strmessage.includes("brod")){ 
                Client.textDetectors.get('eroc').execute(message);
            }
            if(strmessage.includes("michael") || strmessage.includes("swaggy") || strmessage.includes("baggins")){ 
                Client.textDetectors.get('michael').execute(message);
            }
            if(strmessage.includes("bucket")){ 
                Client.textDetectors.get('bucket').execute(message); //break;
            }
            if(strmessage.includes("avi") || strmessage.includes("asmodeus") || strmessage.includes("brown") || strmessage.includes("soval")){ 
                Client.textDetectors.get('avi').execute(message);
            }
            if(strmessage.includes("kyle") || strmessage.includes("kylo") || strmessage.includes("male") || strmessage.includes("alpha")){ 
                Client.textDetectors.get('kyle').execute(message);
            }
            if(strmessage.includes("baboobot is on a rampage")){ 
                Client.textDetectors.get('rampage').execute(message);
            }
            if(strmessage.includes("kev") || strmessage.includes("phan") || strmessage.includes("wake up")){ 
                Client.textDetectors.get('kevin').execute(message);
            }
            
        }
        catch (error) {
            console.error(error);
            //message.reply('there was an error trying to execute that command!');
        }
}

    //--------------------------------Commands-------------------------------------
    //if(!message.content.startsWith(prefix))
        //return;
    
    if (message.content.startsWith(prefix + "bash")){
        Client.commands.get('bash').execute(message);
    }

    if (message.content.startsWith(prefix + "rp")){
        Client.commands.get('rp').execute(message);
    }

    if (message.content.startsWith(prefix + "testmod")){
        Client.commands.get('testmod').execute(message);
    }

    if (message.content.startsWith(prefix + "leave", )){
        Client.commands.get('leave').execute(message);
    }

    if(message.content.startsWith(prefix + "scream")){
        Client.commands.get('scream').execute(message);
    }
   
    if(message.content.startsWith(prefix + "ban")){
        Client.commands.get('ban').execute(message);
    }

    if(message.content.startsWith(prefix + "kick")){
        Client.commands.get('kick').execute(message);
    }

    if (message.content.startsWith(prefix + "purge")){
        Client.commands.get('purge').execute(message);
    }

    if (message.content.startsWith(prefix + "build") || message.content.startsWith(prefix + "pro") || message.content.startsWith(prefix + "counter") ){ 
        Client.commands.get('leaguechamp').execute(message);
    }

    if (message.content.startsWith(prefix + "purge")){
        Client.commands.get('purge').execute(message);
    }

    if (message.content.startsWith(prefix + "smash")){
        message.channel.send("stop trying to do this stupid fucking command eric");
    }

    if (message.content.startsWith(prefix + "help") || message.content.startsWith(prefix + "commands") || message.content.startsWith(prefix2 + "help") ){ 
        //Client.commands.get('help').execute(message, prefix);
        message.channel.send({embed:{
            color: 0x28d62b,
            description: '!baboohelp - commands list \n !babooscream url - plays a *YOUTUBE* video in a voice channel \n !babooleave - makes baboo leave your voice channel \n !baboopro champname - see what pros build on a champ \n !baboobuild champname - see how challengers build a champ \n !baboocounter champname - see what counters a champ'
        }});
    }
})

Client.login("TOKENOBSCUREDDUETOPRIVACY"); //logs bot in