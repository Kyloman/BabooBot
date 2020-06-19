module.exports = {
    name: 'leaguechamp',
    description: 'returns information about a league champion',

    execute(message) {
        const args = message.content.split(' ');
        var champName = args[1];
        //check for champ nicknames
        if(args[1] == "aurelion" || args[1] == "sol" || args[1] == "as"){
            champName = "aurelionsol";
        }
        else if (args[1] == "jarvan" || args[1] == "iv"){
            champName = "jarvaniv";
        }
        else if (args[1] == "cass" || args[1] == "cas"){
            champName = "cassiopeia";
        }
        else if (args[1] == "ali" || args[1] == "cow"){
            champName = "alistar";
        }
        else if (args[1] == "blitz" || args[1] == "blit"){
            champName = "blitzcrank";
        }
        else if (args[1] == "cho" || args[1] == "chog"){
            champName = "chogath";
        }
        else if (args[1] == "dr" || args[1] == "mundo"){
            champName = "drmundo";
        }
        else if (args[1] == "eve" || args[1] == "evelyn"){
            champName = "eveleynn";
        }
        else if (args[1] == "fid" || args[1] == "fiddle"){
            champName = "fiddlesticks";
        }
        else if (args[1] == "gp" || args[1] == "gang"){
            champName = "gangplank";
        }
        else if (args[1] == "heim" || args[1] == "heimer"){
            champName = "heimerdinger";
        }
        else if (args[1] == "hec" || args[1] == "horse"){
            champName = "hecarim";
        }
        else if (args[1] == "kass" || args[1] == "kas"){
            champName = "kassadin";
        }
        else if (args[1] == "kat" || args[1] == "kata"){
            champName = "katarina";
        }
        else if (args[1] == "ken" || args[1] == "kenen"){
            champName = "kennen";
        }
        else if (args[1] == "kha" || args[1] == "bug"){
            champName = "khazix";
        }
        else if (args[1] == "lee" || args[1] == "sin"){
            champName = "leesin";
        }
        else if (args[1] == "mal" || args[1] == "malph"){
            champName = "malphite";
        }
        else if (args[1] == "malz" || args[1] == "malza"){
            champName = "malzahar";
        }
        else if (args[1] == "mao" || args[1] == "meowkai"){
            champName = "maokai";
        }
        else if (args[1] == "master" || args[1] == "yi"){
            champName = "masteryi";
        }
        else if (args[1] == "mf" || args[1] == "miss"){
            champName = "missfortune";
        }
        else if (args[1] == "willump" || args[1] == "nunuandwillump"){
            champName = "nunu";
        }
        else if (args[1] == "naut" || args[1] == "nautiles"){
            champName = "nautilus";
        }
        else if (args[1] == "nid" || args[1] == "cat"){
            champName = "nidalee";
        }
        else if (args[1] == "ori" || args[1] == "oriana"){
            champName = "orianna";
        }
        else if (args[1] == "pan" || args[1] == "panth"){
            champName = "pantheon";
        }
        else if (args[1] == "noc" || args[1] == "noct"){
            champName = "nocturne";
        }
        else if (args[1] == "ram" || args[1] == "ramus"){
            champName = "rammus";
        }
        else if (args[1] == "ren" || args[1] == "renek"){
            champName = "renekton";
        }
        else if (args[1] == "sej" || args[1] == "sejani"){
            champName = "sejuani";
        }
        else if (args[1] == "shy" || args[1] == "shyv"){
            champName = "shyvana";
        }
        else if (args[1] == "skar" || args[1] == "skarn"){
            champName = "skarner";
        }
        else if (args[1] == "tahm" || args[1] == "frog" || args[1] == "tk"){
            champName = "tahmkench";
        }
        else if (args[1] == "tal" || args[1] == "tali"){
            champName = "taliyah";
        }
        else if (args[1] == "tris" || args[1] == "trist"){
            champName = "tristana";
        }
        else if (args[1] == "tryn" || args[1] == "trynd"){
            champName = "tryndamere";
        }
        else if (args[1] == "tf" || args[1] == "twisted"){
            champName = "twistedfate";
        }
        else if (args[1] == "vel" || args[1] == "velk"){
            champName = "velkoz";
        }
        else if (args[1] == "xin" || args[1] == "zhao" || args[1] == "xz"){
            champName = "xinzhao";
        }
        else if (args[1] == "wuk" || args[1] == "baboobot" || args[1] == "baboo" || args[1] == "monkey"){
            champName = "wukong";
        }
        else if (args[1] == "zil" || args[1] == "zile"){
            champName = "zilean";
        }
        else if (args[1] == "vlad" || args[1] == "blood"){
            champName = "vladimir";
        }
        else if (args[1] == "voli" || args[1] == "bear"){
            champName = "volbear";
        }
        else if (args[1] == "ww" || args[1] == "war"){
            champName = "warwick";
        }
        else if (args[1] == "vik" || args[1] == "vikt"){
            champName = "viktor";
        }

        if (args[0] == "!baboopro"){
        message.reply("https://u.gg/lol/champions/" + champName + "/pro-build/");
        }
        else if (args[0] == "!baboocounter"){
            message.reply("https://u.gg/lol/champions/" + champName + "/counters/?rank=diamond_plus");
        }
        else if (args[0] == "!baboobuild"){
            message.reply("https://u.gg/lol/champions/" + champName + "/build/?rank=challenger");
        }
    }    
};