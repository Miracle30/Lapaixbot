const fetch = require('node-fetch')
const replies = [
    '🎯',
    '⚽️',
    '🎧',
    '🏖',
    '🍀',
]
const PREFIX = "$"

// const gif = require('./commands/gif')
// const chill = require('./commands/chill')

module.exports = async function (msg){ 
    if (msg.channel.id == '788803815499104266'){
        if (msg.content.startsWith(PREFIX)) {
            const index = Math.floor(Math.random() * replies.length)
            const [CMD_NAME, ...arg] = msg.content
                .trim()
                .substring(PREFIX.length)
                .split(/\s+/);
            console.log(arg);

            if (CMD_NAME === 'yay') {
                return msg.channel.send(`Hey homie ${msg.author}, let's chill with ${replies[index]}`)  
            }
            else if (CMD_NAME === 'gif'){
                let kw = 'food'
                if (arg.length > 1){
                    kw = arg.join("");
                }

                let url = `https://g.tenor.com/v1/search?q=${kw}&key=${process.env.TENOR_KEY}&contentfilter=high`
                let response = await fetch(url);
                let json = await response.json();
                let index_gif = Math.floor(Math.random() * json.results.length)
                msg.channel.send(json.results[index_gif].url)
                msg.channel.send("gif from tenor: "+ kw)
            }
        }
    }
}