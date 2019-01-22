const Discord = require('discord.js');
const Util = require('discord.js');
const Canvas = require("canvas")
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const convert = require("hh-mm-ss");
const dateFormat = require('dateformat');
const figlet = require('figlet');
const request = require('request');
const gif = require("gif-search");
const zalgo = require("zalgolize");
const moment = require('moment');
const r1 = require('snekfetch'); const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4"; 

const GOOGLE_API_KEY = 'AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8';
const youtube = new YouTube(GOOGLE_API_KEY);
const PREFIX = 'G!';

const queue = new Map();
const client = new Discord.Client({disableEveryone: true}); 

client.on('ready', () => {
    console.log('╔[════════════════════════════════════]╗'); 
    console.log('')
    console.log('            ╔[════════════]╗')
    console.log('              Bot Is Online')
    console.log('            ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
          client.user.setActivity("By:bk7-v",{type: 'STREAMING'});   
});

client.on('ready', () => {
    console.log(`~~~~~~~~~~~~~~~~~`);
    console.log(`Logging into Discord`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`on  ${client.guilds.size} Servers `);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`G!help | By:bk7-v `,"http://twitch.tv/teamcraft")
    client.user.setStatus("dnd")
 });

var prefix = "^"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

var prefix = "^"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on("message", message => {
    var prefix = "^";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "✘ 𝓖𝓡𝓐𝓧 ✘"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
})

client.on('message', async message =>{
  var prefix = "^";
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});

client.on('message' , message => {
  ;
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });               
 client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "𝐌𝐄𝐌𝐁𝐄𝐑𝐒");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})

client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**تم الأرسال في الخاص**');
            
	
		 


 message.author.sendMessage(`
 **
__~~Graxbot~~__ By: bk7-v
╔[❖════════════❖]╗
             Prefix = ' ^ '
╚[❖════════════❖]╝
╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝
❖ ^kick <mention> ➾ طرد شخص من السيرفر
❖ ^ban <mention> ➾ باند لي الشخص
❖ ^clear ➾ مسح الشات
❖ ^mute <mention> ➾ اعطاء ميوت لي الشخص
❖ ^unmute <mention> ➾ فك الميوت عن الشخص
❖ ^bc <message> ➾ لأرسال رسالة لجميع الأعضاء على الخاص
╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝
❖ ^member ➾ لمعرفة الأعضاء الموجودة في السيرفر
❖ ^id ➾ معرفة الايدي
❖ ^ping ➾ لروئية بينق البوت
❖ ^bot ➾ معلومات عن البوت
❖ ^server ➾ معلومات السيرفر 
╔[❖════════════❖]╗
            Music  Commands
╚[❖════════════❖]╝
❖^p  『تشغيل الاغاني』
❖^sk 『تخطي الاغاني』
❖^st  『إيقاف الاغاني』
❖^vol  『تحكم في درجة الصوت』
❖^que『قائمة الانتظار من الأغاني』
❖^pau  『أيقاف الاغاني』
❖^res  『تشغيل الاغاني』
==================================================================
رابط السيرفر: https://discord.gg/UHPt523
==================================================================
رابط البوت : https://discordapp.com/api/oauth2/authorize?client_id=535838909909696562&permissions=0&scope=bot
==================================================================
`);

    }
});

client.on("message", msg => {
    var prefix = "^";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField("🌪  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField("🆔  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField('🕵  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField('🛰   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField('🎖  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField('🤖  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});

client.on('message', message => {
                 var prefix = "^"
           if (message.content.startsWith(prefix + "user")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });

client.on('message', message => {
             if (!message.channel.guild) return;
     if(message.content =='G!member')
     var IzRo = new Discord.RichEmbed()
     .setThumbnail(message.author.avatarURL)
     .setFooter(message.author.username, message.author.avatarURL) 
     .setTitle('🌷| Members info')
     .addBlankField(true)
     .addField(':green_book:| Online ',
     `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
     .addField(':closed_book:| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
     .addField(':orange_book:| idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
     .addField(':notebook:| Offline ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
     .addField('Members Count',`${message.guild.memberCount}`)
     message.channel.send(IzRo);
   });

client.on("message", message => {
        var prefix = "^";// البرفكس
    if(message.content.startsWith(prefix + "setwlc")) {
        let args = message.mentions.channels.first();
            if(!args) message.channel.send("** منشن روم . :x:**").then(m => {    
m.delete(1500);
})
                if(!message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**ليس لديك صلاحيات . :x:**");
                        message.channel.send(`**${args}. لقد تم شغل الروم هذا للترحيب.**`);
                    client.on("guildMemberAdd", (member) => {
                            if(member.user.bot) return;
                         var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle('New Member')
    .setDescription('Welcome To Server')
    .addField('**ID Member:',"" +  member.user.id, true)
    .addField('**Tage Member:', member.user.discriminator, true)
    .addField('Created At Member', member.user.createdAt, true)
    .addField(' :bust_in_silhouette:  Your Number',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter(member.guild.name, member.guild.iconURL, true)
                         
   args.send({embed : embed});
                    });
    }
});

client.on("message", message => {
        var prefix = "^";//البرفكس
    if(message.content.startsWith(prefix + "setout")) {
        let args = message.mentions.channels.first();
            if(!args) message.channel.send("** منشن روم . :x:**");
                if(!message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**ليس لديك صلاحيات . :x:**");
                        message.channel.send(`**${args}. لقد تم شغل الروم هذا للترحيب.**`);
                    client.on("guildMemberRemove", (member) => {
                            if(member.user.bot) return;
                         var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('Out Member')
  .setDescription('GoodBye')
  .addField('**ID Member:',"" +  member.user.id, true)
    .addField('**Tage Member:', member.user.discriminator, true)
    .addField('Created At Member', member.user.createdAt, true)
    .addField(' :bust_in_silhouette:  Your Number',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
  .setFooter(member.guild.name, member.guild.iconURL, true)
                         
   args.send({embed : embed});
                    });
    }
});

const config = {
    prefix : "^",
    owner : ['446243110025166858'],
};
//By Request of [ function ]
var color = new Discord.RichEmbed().setColor('#000000').setColor('#36393e')
function e(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	.setFooter(`By Request of ${message.author.username}`);
	message.channel.sendEmbed(embed);
};
//Errors [ function ]
function err(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Feedbin-Icon-error.svg/1000px-Feedbin-Icon-error.svg.png")
	message.channel.sendEmbed(embed);
};
//Requested by [ function ]
function ee(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args)
	.setFooter(`Requested by ${message.author.username}`);
	message.channel.sendEmbed(embed);
};
//Left the voice channel [ function ] ,-,
function L(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	.setFooter(`By Request of ${message.author.username}`);
	message.channel.sendEmbed(embed);
}
//Current volume [ function ]
function V(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args, "https://www.iconsdb.com/icons/preview/red/volume-up-4-xxl.png")
	message.channel.sendEmbed(embed);
}
// For the skip command
function S(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	message.channel.sendEmbed(embed);
};
function VS(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	.setFooter("Requires Another Vote.")
	message.channel.sendEmbed(embed);
};
function Vs(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args, "https://www.iconsdb.com/icons/preview/red/volume-up-4-xxl.png")
	message.channel.sendEmbed(embed);
};
var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
client.on('message', async message => { 
	if (message.author.bot) return undefined;
	if (!message.content.startsWith(prefix)) return undefined;
	const args = message.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const voiceChannel = message.member.voiceChannel;
	let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)
	if (message.channel.type !== 'text') return;
	const serverQueue = queue.get(message.guild.id);
	message.guild.setRegion("eu-central")//
	if (command === 'play' || command === 'p' || command === 'search' || command === "ply") {
		if (!voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		if (message.guild.members.get(client.user.id).voiceChannel) {
			if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`);
        };
		if (!args[1]) return err(message, `You should To insert A song name or YouTube URL.`)
		const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
		const validate = await ytdl.validateURL(args[1]);
		if (regexp.test(args[1]) && !validate && !url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) return err(message, `You should insert A valid URL.`);
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, message, voiceChannel, true); 
            }
			e(message,`**${playlist.title}**, has been added to the queue`)
		}else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 31);
					if (!videos[0]) return err(message, `Cannot find Any Results.`);
					var index = 0;
					var pages = 1;
					var msgg = "";
					var takoota = new Discord.RichEmbed()
					.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
					.setColor(color.color)
					.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
					.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(0,10).join('\n')}`)
					.setFooter("Page 1 of 3");
					message.channel.send({embed : takoota}).then(async msg1 => {
						msgg=msg1.id
						await msg1.react('◀');
						await msg1.react('▶');
						let e = msg1.createReactionCollector((reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id, { time: 60000 });
						let t = msg1.createReactionCollector((reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id, { time: 60000 });
						t.on("collect",async () => { 
							if (pages == 1) {
								pages+=1
							index = 0;
							var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color) 
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(10,20).join('\n')}`)
							.setFooter("Page 2 of 3");
							msg1.edit({embed : takoota});
							} else if (pages == 2) {
								pages+=1
								var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color) 
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${index++ - 30}. **${video2.title}**\n`).slice(20,30.5).join('\n')}`)
							.setFooter("Page 3 of 3");
							msg1.edit({embed : takoota});
							};
						});
						e.on("collect", async () => {
							index = 0;
							if (pages == 2) {
								pages-=1
							var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color)
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(0,10).join('\n')}`)
							.setFooter("Page 1 of 3");
							msg1.edit({embed : takoota})
							} else if (pages == 3) {
								pages-=1
								var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color) 
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(10,20).join('\n')}`)
							.setFooter("Page 2 of 3");
							msg1.edit({embed : takoota});
							}
						})
						
					});
					try {
						var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 31 && msg2.author.id == message.author.id, {
							maxMatches: 1,
							time: 60000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return;
					}
					response.first().delete();
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
					var msg1 = message.channel.messages.get(msgg);
					if (!msg1) return;
					msg1.delete();
				} catch (err) {
					console.error(err);
					return;
				}
			}}
				const serverQueue = queue.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 100,
			playing: true,
			loop : false,
			vote : []
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0], message);
		} catch (error) {
			console.error(`${error}`);
			queue.delete(message.guild.id);
			return;
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) return;
		await e(message, `**${song.title}**, has been added to the queue`)
	};
	
	return undefined;
	async function handleVideo(video, message,voiceChannel){
						const serverQueue = queue.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 100,
			playing: true,
			loop : false
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0], message);
		} catch (error) {
			console.error(`${error}`);
			queue.delete(message.guild.id);
			return;
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) return;
		await e(message, `**${song.title}**, has been added to the queue`)
	};
	return undefined;
	}
	} else if (command === 'skip' || command === 's' || command === 'ski' || command === 'sk') {
		if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`);
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue.songs.length == 1) return err(message, "Only 1 song is Queued.")
		if (serverQueue.vote.includes(message.author.id)) return err(message, `You Already Voted To skip.`);
		serverQueue.vote.push(message.author.id)
		var allusers = message.guild.members.filter(m => m.voiceChannel).size;
		var required = allusers/2
		if (required<=serverQueue.vote.length) {
			if (serverQueue.loop == true)await serverQueue.songs.shift();
			await serverQueue.connection.dispatcher.end('Skip command has been used!');
			await S(message, `**${serverQueue.songs[0].title}**, has been skipped`);
		} else {
			VS(message, `**${message.author.username}**, has been voted to skip`)
		}
		return undefined;
	} else if (command === 'stop' || command === 'st' || command === 'sto') {
	if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);

	if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To use This Command.`);		
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		e(message, `Okey, Music has been stopped`);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === "leave" || command === 'disconnect' || command === 'l') {
		if (!message.guild.members.get(client.user.id).voiceChannel) return;
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`);
		if (serverQueue) serverQueue.songs = [];
		if (serverQueue) serverQueue.connection.dispatcher.end('leave command has been used!');
		message.member.voiceChannel.join();
		message.member.voiceChannel.leave();
		L(message, `:door: I have disconnected from ${message.guild.members.get(client.user.id).voiceChannel.name}`);

	} else if (command === 'volume' || command === 'vol' || command === 'v') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!args[1]) return V(message,`The current volume is ${serverQueue.volume}%`);
		args[1] = parseInt(args[1]);
		if (args[1] > 200 || args[1]<2) return err(message, `Only allowed from 2 - 200`)
		if (isNaN(args[1])) return err(message, `Only numbers are allowed.`)
		if (args[1] == serverQueue.volume) return err(message, `My Volume is already ${serverQueue.volume}%`)
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 250);
		return Vs(message, `Volume Successfully Changed to ${args[1]}%`);
	} else if (command === 'queue' || command === 'q' || command === "qu" || command === 'que') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		else if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		else if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		else {
		var y = 0;
		var embed = new Discord.RichEmbed()
		embed.setColor(color.color);
		embed.setAuthor(`Now playing 🎶 ${serverQueue.songs[0].title}`)
		embed.setURL(serverQueue.songs[0].url)
        if (serverQueue.songs.length <=1) return message.channel.send({embed :embed});
        var str = `${serverQueue.songs.map(song => `${y++}. [${song.title}](${song.url})\n`).slice(1,11).join("\n")}\n\n`;
        var embed = new Discord.RichEmbed()
        .setColor(color.color)
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setThumbnail("https://media.discordapp.net/attachments/492975144147615744/493028296699936777/1537617500423.png")
        .setDescription(str);
        if ((serverQueue.songs.length-10) > 0) embed.setFooter(`And ${serverQueue.songs.length-10} More..`);
        message.channel.send({embed : embed});
		}
	} else if (command === 'pause' || command === 'pa' || command === 'pau' || command === 'paus') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue && serverQueue.playing) {
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!message.member.voiceChannel) return ee(message,`You Should Be in A Voice Channel To Use This Command.`);
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			e(message, `**${serverQueue.songs[0].title}**, has been paused`);
			return;
		}
	} else if (command === 'resume' || command === 'r' || command === 'continue' || command === "res") {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue && !serverQueue.playing) {
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			e(message, `**${serverQueue.songs[0].title}**, has been resumed`);
			return;
	};
	} else if (command === 'repeat' || command === 'rpt') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue) {
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!message.member.voiceChannel) return ee(message,`You Should Be in A Voice Channel To Use This Command.`);
			serverQueue.songs.splice(1, 0, serverQueue.songs[0])
			e(message, `**${serverQueue.songs[0].title}**, Will be repeated`);
			return undefined;
		}
	} else if (command === 'loop' || command === 'lo') {
			if (!serverQueue) return err(message, `You Should Play Something To Use This Command.`);
			if (serverQueue && serverQueue.playing) {
				if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
				if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
				if (serverQueue.loop == false) {
					serverQueue.loop = true;
					e(message, `**${serverQueue.songs[0].title}**, will be looped`)
				} else if (serverQueue.loop == true) {
					serverQueue.loop = false;
					e(message, `**${serverQueue.songs[0].title}**, will not be looped again`)
				};
			}
		}
});


function play(guild, song, message) {
	setTimeout(function(){
		const serverQueue = queue.get(guild.id);
		if (!song) {
			serverQueue.voiceChannel.leave();
			serverQueue.voiceChannel.join();
			queue.delete(guild.id);
			var embed = new Discord.RichEmbed()
			embed.setColor(color.color)
			embed.setDescription(`:checkered_flag: **${message.guild.name}** Queue has been finished.`)
			serverQueue.textChannel.send(embed)
			return;
		};
		if (!serverQueue.songs[0]){
			serverQueue.voiceChannel.leave();
			serverQueue.voiceChannel.join();
			queue.delete(guild.id);
			return;
		};
		console.log(serverQueue.songs);
		serverQueue.vote = [];
		const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			if (serverQueue.loop == true) {
				play(guild, serverQueue.songs[0], message);
				return undefined;
			};
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0], message);
		})
		.on('error', error => console.error(error));
		dispatcher.setVolumeLogarithmic(serverQueue.volume / 250);
		var embed = new Discord.RichEmbed()
		embed.setColor(color.color);
		embed.setAuthor(`Now playing 🎶 ${serverQueue.songs[0].title}`)
		embed.setURL(serverQueue.songs[0].url)
		serverQueue.textChannel.send(embed)
	},10);
}

 

client.on('message', message => {
    if (message.content === '^help-music') {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('**أوامر الميوزك**')
        .setDescription('** ( G! ) برفكس البوت**')
        .addField('Play أوامر', '1.play    2.p    3.search    4.ply')
        .addField('Skip أوامر', '1.Skip    2.ski    3.s    4.sk')
        .addField('Stop أوامر', '1.Stop    2.st    3.sto')
        .addField('Leave أوامر', '1.leave    2.disconnect    3.l')
        .addField('Volume أوامر', '1.volume    2.vol    3.v')
        .addField('Queue أوامر', '1.queue    2.q    2.qu    4.que')
        .addField('Pause أوامر', '1.pause    2.pa    3.pau    4.paus')
        .addField('Resume أوامر', '1.resume    2.r    3.continue    4.res')
        .addField('Repeat أوامر', '1.repeat    2.rpt')
		.addField('Loop أوامر', '1.loop    2.lo')
      message.channel.send(helpEmbed);
    }
});

client.on('message', msg => {
  if(msg.content === 'هلا')
  msg.reply('هلا والله')
});

client.on('message', msg => {
  if(msg.content === 'الو')
  msg.reply('هلا')
});

client.on('message', msg => {
  if(msg.content === 'مرحبا')
  msg.reply('مرحبا')
});

client.on('messageDelete', message => {
 
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = message.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    let messageDelete = new Discord.RichEmbed()
    .setTitle('**[MESSAGE DELETE]**')
    .setColor('RED')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return;
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[MESSAGE EDIT]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
  
client.on('roleCreate', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[ROLE CREATE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[ROLE DELETE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'loge');
    if(!logChannel) return;
 
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[ROLE NAME UPDATE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);
        }
        if(oldRole.hexColor !== newRole.hexColor) {
            if(oldRole.hexColor === '#000000') {
                var oldColor = '`Default`';
            }else {
                var oldColor = oldRole.hexColor;
            }
            if(newRole.hexColor === '#000000') {
                var newColor = '`Default`';
            }else {
                var newColor = newRole.hexColor;
            }
            let roleUpdateColor = new Discord.RichEmbed()
            .setTitle('**[ROLE COLOR UPDATE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateColor);
        }
    })
});
 
 
client.on('channelCreate', channel => {
 
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelCreate = new Discord.RichEmbed()
        .setTitle('**[CHANNEL CREATE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
});
client.on('channelDelete', channel => {
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'loge');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[CHANNEL DELETE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete);
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'loge');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
 
    oldChannel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newName);
        }
        if(oldChannel.topic !== newChannel.topic) {
            let newTopic = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
 
client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'loge');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[BANNED]**')
        .setThumbnail(userAvatar)
        .setColor('DARK_RED')
        .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    })
});
client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'loge');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[UNBANNED]**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildUpdate', (oldGuild, newGuild) => {
 
    if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldGuild.channels.find(c => c.name === 'loge');
    if(!logChannel) return;
 
    oldGuild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldGuild.name !== newGuild.name) {
            let guildName = new Discord.RichEmbed()
            .setTitle('**[CHANGE GUILD NAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild name.\n\n**Old Name:** \`\`${oldGuild.name}\`\`\n**New Name:** \`\`${newGuild.name}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(newGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildName)
        }
        if(oldGuild.region !== newGuild.region) {
            let guildRegion = new Discord.RichEmbed()
            .setTitle('**[CHANGE GUILD REGION]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildRegion);
        }
        if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
            if(oldGuild.verificationLevel === 0) {
                var oldVerLvl = 'Very Easy';
            }else
            if(oldGuild.verificationLevel === 1) {
                var oldVerLvl = 'Easy';
            }else
            if(oldGuild.verificationLevel === 2) {
                var oldVerLvl = 'Medium';
            }else
            if(oldGuild.verificationLevel === 3) {
                var oldVerLvl = 'Hard';
            }else
            if(oldGuild.verificationLevel === 4) {
                var oldVerLvl = 'Very Hard';
            }
 
            if(newGuild.verificationLevel === 0) {
                var newVerLvl = 'Very Easy';
            }else
            if(newGuild.verificationLevel === 1) {
                var newVerLvl = 'Easy';
            }else
            if(newGuild.verificationLevel === 2) {
                var newVerLvl = 'Medium';
            }else
            if(newGuild.verificationLevel === 3) {
                var newVerLvl = 'Hard';
            }else
            if(newGuild.verificationLevel === 4) {
                var newVerLvl = 'Very Hard';
            }
 
            let verLog = new Discord.RichEmbed()
            .setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild Verification level.\n\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(verLog);
        }
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
    if(!oldMember.guild) return;
 
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '`اسمه الاصلي`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '`اسمه الاصلي`';
            }else {
                var newNM = newMember.nickname;
            }
 
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[UPDATE MEMBER NICKNAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
 
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[REMOVED ROLE FROM MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.id !== newMember.guild.owner.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
 
 
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[VOICE MUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[VOICE UNMUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE DEAF]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE UNDEAF]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv);
        }
    })
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('**[JOIN VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[LEAVE VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
});

    client.on('message', message => {
        var prefix = "G!";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);


      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }


      }); 
  

  const fs = require('fs'); // npm i fs
const ms = require('ms'); // npm i ms
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;

  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

  
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;

  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;

    var number = `${one}${two}${three}${four}`;
    
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
  } 
  
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
  
      var number = `${one}${two}${three}${four}`;

      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

          message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
    }
    cool.unshift(message.author.id);

    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
    }, ms("1d"));
  }
});

client.on("message", msg => {
var prefix = "^";// البرفكس
 if(msg.content.startsWith(prefix +  "bot")) {
let embed24 = new Discord.RichEmbed()   
   .setThumbnail(client.user.avatarURL)
   .setColor("RANDOM")  
   .setTitle(`🤖**Information about**🤖 || ${client.user.tag}`, true)
   .addField("📜**Name + Tag**📜", client.user.tag, true)
   .addField("🤖**Bot Join Servers**🤖", client.guilds.size, true)
   .addField("👥**Sender**👥", msg.author.tag, true)
   .addField("🤖🆔 *Bot ID** 🆔🤖 ", client.user.id, true)
   .addField("📆**Bot Created At**📆", `${moment(client.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(client.user.createdAt).fromNow()}\``, true)
   .addField("🤖**User**🤖", client.users.size, true)
   .setFooter(`${msg.author.tag}`, `${msg.author.avatarURL}`, true)
msg.channel.sendEmbed(embed24)
}
 });





  



client.on('message', msg => {
  if(msg.content === '^رابط')
  msg.reply('https://discord.gg/UHPt523')
});

const adminprefix = "^";
const devs = ['533243231509544960','446243110025166858'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
  message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
      } else     
if (message.content.startsWith(adminprefix + 'sett')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");//
 message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
}
});
           
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
     var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

var prefix = "^"



//bc

client.on("message", message => {
    if (message.content.startsWith(prefix + "bcall")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "^";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });






client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("^avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});


client.on('ready',  () => {
    console.log('تم تشغيل :Grax-Music|^  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });





client.on('message', message => {
  if (true) {
if (message.content === '^invite') {
      message.author.send(' رابط البوت |  https://discordapp.com/api/oauth2/authorize?client_id=535580841380937729&permissions=0&scope=bot ').catch(e => console.log(e.stack));
 
    }
   }
  });
 



client.on('message', message => {
     if (message.content === "^invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

   



client.login(process.env.BOT_TOKEN);
