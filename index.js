const discord = require("discord.js");
const botConfig = require("./botconfig.json");


const client = new discord.Client();

client.login(botConfig.token);

client.on("ready", async () =>{

console.log(`${client.user.username} is online.`);
client.user.setActivity(`^^help`);
});

client.on("message", async message =>{

   if (message.author.bot) return;

   if (message.channel.type == "dm") return
 
   var prefix = botConfig.prefix;
   
   var messageArray = message.content.split(" ");
    
   var command = messageArray[0];


   if (command === `${prefix}Roel`){
        return message.channel.send("is kanker gay.");
       
      }
      if (command === `${prefix}Milan`){
         return message.channel.send("is de koning.");
        
       }
   if (command === `${prefix}help`){

      var botEmbed = new discord.MessageEmbed()
      .setTitle("Commands")
      .setDescription("Uitleg over de commands.")
      .setColor("#ff00ff")
      .addFields(
        {name:"Tickets", value:"!new {de reden}"}, 
        {name:"Bugs", value:"!bug {de bug}"},
        {name:"Suggesties", value:"!suggestie {de suggestie}"},
        {name:"Rank", value:"!rank"},
        {name:"Mute HR+", value:"!tempmute {mention} {tijd} {reden}"},
        {name:"Unmute HR+", value:"!unmute {mention}"},
        {name:"Ban Admin+", value:"!tempban {mention} {tijd} {reden}"},
        {name:"Warn HC+", value:"!warn {mention} {reden}"},           
        {name:"Kick Mod+", value:"!kick {mention} {reden}"},   
        {name:"Muziek", value:";help"}   
        
        )
      .addField("Bot naam", client.user.username)
      .setThumbnail("")
      .setFooter("")
      .setTimestamp("")

      return message.channel.send(botEmbed);
   }
   if (command === `${prefix}serverinfo`){
    
      var botEmbed = new discord.MessageEmbed()
         .setTitle("")
         .setDescription("")
         .setColor("#ff00ff")
         .addFields(
           
           {name:"U bent deze server gejoined op:", value: message.member.joinedAt},
           {name:"Totaal aantal mensen:", value:message.guild.memberCount},
           {name:"Naam van de bot:", value:client.user.username}
         )
        
        .setThumbnail("https://cdn.discordapp.com/attachments/730587024519725128/736390672545742938/4509ec201401d4543bd9142f2a2099f1.png")
        
         return message.channel.send(botEmbed);
 
  
  
 }});