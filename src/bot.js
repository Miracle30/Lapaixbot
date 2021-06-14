require('dotenv').config();

const { Client } = require('discord.js')
//new obj
const client = new Client();
const PREFIX = "$"
//cmd
const commandHandler = require("./command")

client.on('ready',() =>{
    console.log(`${client.user.username} - ${client.user.tag}`);
})

client.on('message', async (message)=> {
    if (message.author.bot) return; //k để lặp
    // console.log(`[${message.author.tag}]: ${message.content}`);
    if (message.content === 'hello') {
        // message.reply(`bonjour`)
        message.channel.send(`hola ${message.author}`)
    }
    if (message.content.startsWith(PREFIX)) {
        //lấy từ tiền tố đổ về sau, bỏ qua mấy dấu cách
        const [CMD_NAME, ...arg] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        // console.log(CMD_NAME);
        if (CMD_NAME === 'gl') {
            return message.channel.send(`Gút lắc Dương`)  
        }
    }
})

//the coding train 

client.on('message', commandHandler);

client.login(process.env.DISCORD_BOT_TOKEN)

